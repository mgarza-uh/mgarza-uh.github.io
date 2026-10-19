// Meeting and contact buttons: a glow follows the cursor and the button leans toward it (magnet).
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var RANGE = 60, PULL_X = 0.3, PULL_Y = 0.4, MAX = 10;
  var buttons = [].slice.call(document.querySelectorAll(".cta"));
  if (!buttons.length) return;

  function reset(b) { b.classList.remove("is-magnet"); b.style.setProperty("--tx", "0px"); b.style.setProperty("--ty", "0px"); }

  document.addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    buttons.forEach(function (b) {
      if (!b.offsetParent) return;
      var r = b.getBoundingClientRect();
      b.style.setProperty("--mx", (e.clientX - r.left) + "px");
      b.style.setProperty("--my", (e.clientY - r.top) + "px");
      if (reduce) return;
      var near = e.clientX > r.left - RANGE && e.clientX < r.right + RANGE && e.clientY > r.top - RANGE && e.clientY < r.bottom + RANGE;
      if (!near) { if (b.classList.contains("is-magnet")) reset(b); return; }
      var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      var tx = Math.max(-MAX, Math.min(MAX, dx * PULL_X)), ty = Math.max(-MAX, Math.min(MAX, dy * PULL_Y));
      b.classList.add("is-magnet");
      b.style.setProperty("--tx", tx.toFixed(1) + "px");
      b.style.setProperty("--ty", ty.toFixed(1) + "px");
    });
  }, { passive: true });

  document.addEventListener("pointerleave", function () { buttons.forEach(reset); });
  window.addEventListener("hashchange", function () { buttons.forEach(reset); });
})();
