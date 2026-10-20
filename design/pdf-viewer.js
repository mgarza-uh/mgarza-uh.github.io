/* PDF viewer: opens from the Contact page's resume and portfolio buttons (any button with data-pdf-open).
   Each button carries its document: data-title, data-sub, data-pages, data-src, data-pdf, data-w, data-h, data-label.
   Pages scroll vertically; the arrows and page box jump between pages; zoom scales the pages; the footer button downloads the PDF. */
(function () {
  var dlg = document.getElementById("pdf-dialog");
  var openers = document.querySelectorAll("[data-pdf-open]");
  if (!dlg || !openers.length) return;

  var total = 0, src = "", pw = 1100, ph = 1424, label = "Page", doc = null;
  var scroller = document.getElementById("pdf-scroll");
  var dl = document.getElementById("pdf-download");
  var holder = document.getElementById("pdf-pages");
  var pageBox = document.getElementById("pdf-page");
  var zoomLabel = document.getElementById("pdf-zoom-reset");
  var ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3];
  var zi = 2, current = 1, built = false;

  function build() {
    for (var i = 1; i <= total; i++) {
      var fig = document.createElement("div");
      fig.className = "pdf-page";
      fig.setAttribute("data-page", i);
      fig.style.aspectRatio = pw + " / " + ph;
      var img = document.createElement("img");
      img.src = src.replace("{n}", (i < 10 ? "0" : "") + i);
      img.alt = label + " page " + i + " of " + total;
      img.width = pw; img.height = ph;
      img.loading = i <= 2 ? "eager" : "lazy";
      img.decoding = "async";
      img.draggable = false;
      fig.appendChild(img);
      holder.appendChild(fig);
    }
    built = true;
  }

  function pages() { return holder.children; }

  function setPage(n) {
    current = n;
    pageBox.value = n;
    document.getElementById("pdf-prev").disabled = n <= 1;
    document.getElementById("pdf-next").disabled = n >= total;
  }

  function goTo(n) {
    n = Math.max(1, Math.min(total, n));
    var el = pages()[n - 1];
    scroller.scrollTo({ top: el.offsetTop - 12, behavior: "smooth" });
    setPage(n);
  }

  // The current page is the one covering the middle of the viewer
  function track() {
    var mid = scroller.scrollTop + scroller.clientHeight / 2, list = pages();
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.offsetTop <= mid && el.offsetTop + el.offsetHeight >= mid) { if (current !== i + 1) setPage(i + 1); return; }
    }
  }

  function setZoom(next) {
    var list = pages(), el = list[current - 1];
    var into = el ? (scroller.scrollTop - el.offsetTop) / el.offsetHeight : 0;
    var midX = (scroller.scrollLeft + scroller.clientWidth / 2) / Math.max(1, scroller.scrollWidth);
    zi = Math.max(0, Math.min(ZOOMS.length - 1, next));
    holder.style.setProperty("--zoom", ZOOMS[zi]);
    zoomLabel.textContent = Math.round(ZOOMS[zi] * 100) + "%";
    document.getElementById("pdf-zoom-out").disabled = zi === 0;
    document.getElementById("pdf-zoom-in").disabled = zi === ZOOMS.length - 1;
    // Keep the same spot of the same page in view after zooming
    if (el) scroller.scrollTop = el.offsetTop + into * el.offsetHeight;
    scroller.scrollLeft = midX * scroller.scrollWidth - scroller.clientWidth / 2;
  }

  // Load the chosen document into the viewer; reopening the same one keeps its page and zoom
  function load(b) {
    if (doc === b) return;
    doc = b;
    total = parseInt(b.getAttribute("data-pages"), 10);
    src = b.getAttribute("data-src");
    pw = parseInt(b.getAttribute("data-w"), 10) || 1100;
    ph = parseInt(b.getAttribute("data-h"), 10) || 1424;
    label = b.getAttribute("data-label") || "Document";
    var title = document.getElementById("pdf-title"), sub = b.getAttribute("data-sub");
    title.textContent = b.getAttribute("data-title");
    if (sub) { var sp = document.createElement("span"); sp.textContent = sub; title.appendChild(document.createTextNode(" ")); title.appendChild(sp); }
    document.getElementById("pdf-total").textContent = total;
    scroller.setAttribute("aria-label", label + " pages");
    dl.setAttribute("href", b.getAttribute("data-pdf"));
    dl.setAttribute("download", b.getAttribute("data-pdf").split("/").pop());
    holder.textContent = "";
    built = false; current = 1; zi = 2;
    scroller.scrollTop = 0;
  }

  function open() {
    load(this);
    if (!built) build();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    document.documentElement.classList.add("pdf-open");
    setPage(current);
    setZoom(zi);
    scroller.focus({ preventScroll: true });
  }

  function close() { dlg.close ? dlg.close() : dlg.removeAttribute("open"); }

  openers.forEach(function (b) { b.addEventListener("click", open); });
  document.getElementById("pdf-close").addEventListener("click", close);
  dlg.addEventListener("close", function () { document.documentElement.classList.remove("pdf-open"); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) close(); });
  document.getElementById("pdf-prev").addEventListener("click", function () { goTo(current - 1); });
  document.getElementById("pdf-next").addEventListener("click", function () { goTo(current + 1); });
  document.getElementById("pdf-zoom-in").addEventListener("click", function () { setZoom(zi + 1); });
  document.getElementById("pdf-zoom-out").addEventListener("click", function () { setZoom(zi - 1); });
  zoomLabel.addEventListener("click", function () { setZoom(2); });

  pageBox.addEventListener("focus", function () { pageBox.select(); });
  pageBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); var n = parseInt(pageBox.value, 10); if (n) goTo(n); else setPage(current); }
  });
  pageBox.addEventListener("blur", function () { setPage(current); });

  var ticking = false;
  scroller.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; track(); });
  }, { passive: true });

  dlg.addEventListener("keydown", function (e) {
    if (e.target === pageBox) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); goTo(current + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goTo(current - 1); }
    else if ((e.key === "+" || e.key === "=") && !e.metaKey && !e.ctrlKey) { e.preventDefault(); setZoom(zi + 1); }
    else if (e.key === "-" && !e.metaKey && !e.ctrlKey) { e.preventDefault(); setZoom(zi - 1); }
  });

  // Inside the claude.ai preview, plain download links are blocked, so the save goes through the viewer's downloads prompt.
  // On the real site this is skipped and the link downloads the PDF as usual.
  var saver = null;
  if (window.claude && typeof window.claude.use === "function") {
    window.claude.use("downloads").then(function (d) { saver = d; }, function () {});
  }
  dl.addEventListener("click", function (e) {
    if (!saver) return;
    e.preventDefault();
    fetch(dl.getAttribute("href")).then(function (r) { return r.blob(); }).then(function (blob) {
      return saver.save({ filename: dl.getAttribute("download"), data: blob });
    }).catch(function () {});
  });

  // Pinch or ctrl + wheel zooms the pages instead of the whole site
  scroller.addEventListener("wheel", function (e) {
    if (!e.ctrlKey) return;
    e.preventDefault();
    setZoom(zi + (e.deltaY < 0 ? 1 : -1));
  }, { passive: false });
})();
