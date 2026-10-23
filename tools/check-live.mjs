// Fetches the LIVE site and checks what a recruiter would actually hit.
// Checking the working copy is what let a broken header ship on 2026-10-22,
// so this deliberately talks to the deployed origin and nothing else.
//
//   node tools/check-live.mjs [baseUrl]
const BASE = (process.argv[2] || 'https://katebernola.github.io').replace(/\/$/, '');

const PAGES = [
  'index.html', 'case-studies.html', 'playbook.html', 'team.html', 'me.html',
  'perks.html', 'agent-coach.html', 'kate-the-game-show.html',
  'pay/', 'dashboard/',
];
const NO_HEADER = new Set(['kate-the-game-show.html', 'pay/', 'dashboard/']);
const WANT_NAV = 'Case studies|My playbook|Leadership|About';
const RETIRED = /class="(site-bar|site-brand|site-nav|tab-nav|masthead)\b/;
const MOJIBAKE = /Ã[\u0080-¿]|Â[\u0080-¿]|â\u0080|�/;

// An href assembled inside an inline script is a template fragment, not a link.
const JUNK = ['+', "'", '"', '$', '{', '}', String.fromCharCode(92)];
const isRealHref = h =>
  !!h &&
  !/^(#|mailto:|tel:|data:|javascript:)/.test(h) &&
  !/\s/.test(h) &&
  !JUNK.some(c => h.includes(c));

const problems = [];
const seen = new Map();

async function check(url) {
  if (seen.has(url)) return seen.get(url);
  let code;
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (r.status === 405 || r.status === 501) r = await fetch(url, { redirect: 'follow' });
    code = r.status;
  } catch (e) { code = 'ERR ' + e.message; }
  seen.set(url, code);
  return code;
}

const abs = (href, page) => {
  try { return new URL(href, `${BASE}/${page}`).toString(); } catch { return null; }
};

for (const page of PAGES) {
  let res, html;
  try { res = await fetch(`${BASE}/${page}`); html = await res.text(); }
  catch (e) { problems.push(`${page}: FETCH FAILED ${e.message}`); continue; }
  if (res.status !== 200) { problems.push(`${page}: HTTP ${res.status}`); continue; }

  if (MOJIBAKE.test(html)) problems.push(`${page}: mangled characters in source`);
  const retired = html.match(RETIRED);
  if (retired) problems.push(`${page}: retired header markup (${retired[1]})`);

  const hdr = html.match(/<header class="global-header"[\s\S]*?<\/header>/);
  if (!NO_HEADER.has(page)) {
    if (!hdr) problems.push(`${page}: no global-header`);
    else {
      const nav = [...hdr[0].matchAll(/<a [^>]*>([^<]*)<\/a>/g)]
        .map(m => m[1].trim()).filter(t => t && t !== 'Kate Bernola');
      if (nav.join('|') !== WANT_NAV) problems.push(`${page}: nav is "${nav.join('|')}"`);
    }
  }

  const refs = [
    ...[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map(m => m[1]),
    ...[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]),
    ...[...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map(m => m[1]),
  ].filter(isRealHref);

  for (const ref of refs) {
    const u = abs(ref, page);
    if (!u || !u.startsWith(BASE)) continue;   // external links are not ours to fix
    const code = await check(u);
    if (code !== 200) problems.push(`${page}: broken ref -> ${ref} (${code})`);
  }
}

console.log(`checked ${PAGES.length} pages and ${seen.size} refs on ${BASE}`);
if (!problems.length) { console.log('ALL CLEAR'); process.exit(0); }
console.log(`\n${problems.length} PROBLEM(S):`);
for (const p of problems) console.log('  ' + p);
process.exit(1);
