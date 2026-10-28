// Cloudflare Web Analytics, with a way to keep your own visits out of your
// own numbers. Load any page with ?optout=1 once and this browser stops
// reporting; ?optin=1 puts it back. The choice is per browser, and it does
// not survive clearing site data.
(function () {
  var KEY = 'kb-no-analytics';
  var TOKEN = '1872be4a3ed44b52af52c6db269d5676';

  try {
    var q = window.location.search;
    if (q.indexOf('optout=1') > -1) localStorage.setItem(KEY, '1');
    else if (q.indexOf('optin=1') > -1) localStorage.removeItem(KEY);
    if (localStorage.getItem(KEY)) return;
  } catch (e) {
    // Private windows can throw on localStorage. Count the visit rather
    // than lose it.
  }

  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', '{"token": "' + TOKEN + '"}');
  document.head.appendChild(s);
})();
