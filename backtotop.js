// A floating back-to-top for the long pages. Every page already has one in
// the footer, which is no use to someone eleven screens down.
//
// The button is hidden by default in CSS, so a reader with JS off is never
// shown a control that cannot work.
(function () {
  var link = document.querySelector('.to-top');
  if (!link) return;

  var shown = false;

  var update = function () {
    // One screen down is roughly where the footer link stops being reachable.
    var past = window.scrollY > window.innerHeight;
    if (past === shown) return;
    shown = past;
    link.classList.toggle('is-shown', past);
    // Keep it out of the tab order while it is invisible.
    link.setAttribute('tabindex', past ? '0' : '-1');
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
