#!/bin/sh
# Pre-push guard for the public portfolio.
#
# This exists because agent-coach.html sat edited-but-uncommitted for weeks.
# The stylesheet shipped without the rules its stale markup depended on, and
# the live page lost its header entirely. Nobody noticed until Kate opened it.
#
# Pure ASCII on purpose, so it can never be broken by the kind of character
# damage tools/check-encoding.sh exists to catch.

root=$(git rev-parse --show-toplevel) || exit 0
cd "$root" || exit 0

fail=0
warn=0

# Pages that are not meant to carry the site header.
#   pay/, dashboard/  - redirect stubs, no chrome by design
#   kate-the-game-show.html - Kate asked for the bar to be removed
no_header="pay/index.html dashboard/index.html kate-the-game-show.html kate-bernola-resume.html kate-bernola-ux-design-manager-resume.html"

is_exempt() {
  for e in $no_header; do
    [ "$1" = "$e" ] && return 0
  done
  return 1
}

# ---------------------------------------------------------------- 1. retired
# Markup classes whose CSS has been deleted. A page still using one of these
# renders unstyled, which is exactly the failure this hook is named after.
retired='site-bar|site-brand|site-nav|tab-nav|class="masthead"'

for f in $(git ls-files '*.html'); do
  hit=$(git show ":$f" 2>/dev/null | grep -nE "$retired" | head -3)
  if [ -n "$hit" ]; then
    echo "BLOCKED  $f uses retired header markup with no CSS behind it:"
    echo "$hit" | sed 's/^/           /'
    fail=1
  fi
done

# ------------------------------------------------------------- 2. the header
# Every content page carries exactly one global header, with the same four
# links in the same order. A header that drifts between pages is the thing
# Kate notices first and trusts least.
want='Case studies|My playbook|Leadership|About'

for f in $(git ls-files '*.html'); do
  is_exempt "$f" && continue
  body=$(git show ":$f" 2>/dev/null)

  n=$(printf '%s' "$body" | grep -c 'class="global-header"')
  if [ "$n" -ne 1 ]; then
    echo "BLOCKED  $f has $n global-header blocks, expected 1"
    fail=1
    continue
  fi

  got=$(printf '%s' "$body" \
    | sed -n '/<header class="global-header"/,/<\/header>/p' \
    | grep -o '<a [^>]*href="[^"]*"[^>]*>[^<]*</a>' \
    | sed 's/^<a[^>]*>//;s|</a>||' \
    | grep -v '^Kate Bernola$' \
    | paste -sd'|' -)

  if [ "$got" != "$want" ]; then
    echo "BLOCKED  $f nav is   $got"
    echo "           expected  $want"
    fail=1
  fi
done

# ------------------------------------------------------- 3. unpushed local
# The actual root cause: local and live drifting apart silently.
dirty=$(git diff --name-only --diff-filter=M HEAD -- '*.html' '*.css' | tr '\n' ' ')
if [ -n "$dirty" ]; then
  echo "WARNING  these are modified locally and are NOT in this push:"
  for d in $dirty; do echo "           $d"; done
  echo "           If a style change in this push depends on them, live will break."
  warn=1
fi

if [ "$fail" -ne 0 ]; then
  echo ""
  echo "Push stopped. Fix the above, or bypass once with: git push --no-verify"
  exit 1
fi

[ "$warn" -ne 0 ] && echo ""
exit 0
