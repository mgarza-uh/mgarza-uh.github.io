/* Logo wheel: glides at the same pace as the old CSS loop (one track per 180s), and can be grabbed and
   dragged left or right with the mouse or a finger. Letting go throws it a little, then it eases back to cruising.
   Skipped for prefers-reduced-motion, where the CSS shows the logos as a still, wrapped grid. */
(function () {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var DURATION = 180; // seconds per loop, matches the old CSS animation
  document.querySelectorAll(".marquee").forEach(function (m) {
    var tracks = m.querySelectorAll(".marquee-track");
    if (!tracks.length) return;
    m.classList.add("is-draggable");
    m.querySelectorAll("img").forEach(function (img) { img.draggable = false; });
    var x = 0, width = 0, last = 0, dragging = false, startX = 0, startOffset = 0;
    var throwV = 0, lastMoveX = 0, lastMoveT = 0, pointerId = null;
    function measure() { width = tracks[0].getBoundingClientRect().width; }
    function wrap() { if (width > 0) { x = x % width; if (x > 0) x -= width; } }
    function paint() { for (var i = 0; i < tracks.length; i++) tracks[i].style.transform = "translate3d(" + x + "px,0,0)"; }
    function frame(t) {
      var dt = last ? Math.min((t - last) / 1000, 0.1) : 0;
      last = t;
      if (!width) measure(); // the home page may have been hidden when the script first ran
      if (!dragging && width) {
        x -= (width / DURATION) * dt;   // cruising pace
        x += throwV * dt;               // momentum from a release
        throwV *= Math.pow(0.04, dt);   // the throw fades out in about a second
        if (Math.abs(throwV) < 1) throwV = 0;
        wrap();
        paint();
      }
      requestAnimationFrame(frame);
    }
    m.addEventListener("pointerdown", function (e) {
      if (e.button !== 0) return;
      dragging = true; pointerId = e.pointerId; throwV = 0;
      startX = lastMoveX = e.clientX; startOffset = x; lastMoveT = performance.now();
      m.classList.add("is-dragging");
      try { m.setPointerCapture(e.pointerId); } catch (err) {}
    });
    m.addEventListener("pointermove", function (e) {
      if (!dragging || e.pointerId !== pointerId) return;
      var now = performance.now(), dt = (now - lastMoveT) / 1000;
      if (dt > 0) throwV = throwV * 0.6 + ((e.clientX - lastMoveX) / dt) * 0.4;
      lastMoveX = e.clientX; lastMoveT = now;
      x = startOffset + (e.clientX - startX);
      wrap(); paint();
    });
    function release(e) {
      if (!dragging || (e && e.pointerId !== pointerId)) return;
      dragging = false; pointerId = null;
      if (performance.now() - lastMoveT > 80) throwV = 0; // held still before letting go: no throw
      throwV = Math.max(-2500, Math.min(2500, throwV));
      m.classList.remove("is-dragging");
    }
    m.addEventListener("pointerup", release);
    m.addEventListener("pointercancel", release);
    m.addEventListener("lostpointercapture", release);
    measure();
    window.addEventListener("resize", function () { measure(); wrap(); paint(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    window.addEventListener("load", measure);
    requestAnimationFrame(frame);
  });
})();
