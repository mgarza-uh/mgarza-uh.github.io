// Mario Garza site analytics. Loaded on every page; see README.md in this folder.
// The IDs stay empty until Mario's Clarity and Google Analytics accounts exist, so nothing is sent from the preview.
(function () {
  var CLARITY_ID = "";
  var GA_ID = "";

  function track(name, params) {
    if (window.gtag && GA_ID) window.gtag("event", name, params || {});
  }

  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }

  if (GA_ID) {
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  // Which page is open
  function currentPage() { return (location.hash || "#home").slice(1); }
  window.addEventListener("hashchange", function () { track("page_view_section", { page: currentPage() }); scrollMarks = {}; });

  // Button clicks
  document.addEventListener("click", function (e) {
    var el = e.target.closest("a, button");
    if (!el) return;
    var label = el.textContent.trim();
    if (/schedule a meeting|book 15 minutes/i.test(label)) track("book_meeting_click", { page: currentPage(), label: label });
    else if (el.id === "resume-btn") track("resume_download", {});
    else if (/open full letter/i.test(label)) track("letter_open", { label: el.closest(".card") ? el.closest(".card").querySelector("strong").textContent : "" });
    else if (el.classList.contains("tc-award")) track("award_open", { label: el.querySelector(".tc-plate").textContent });
    else if (el.id === "theme-btn") track("theme_toggle", { to: document.documentElement.getAttribute("data-theme") });
  });

  var form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", function () { if (form.checkValidity()) track("contact_submit", {}); });

  // Scroll depth per page
  var scrollMarks = {};
  window.addEventListener("scroll", function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (h <= 0) return;
    var pct = Math.round((window.scrollY / h) * 100);
    [25, 50, 75, 100].forEach(function (m) {
      if (pct >= m && !scrollMarks[m]) { scrollMarks[m] = true; track("scroll_depth", { page: currentPage(), percent: m }); }
    });
  }, { passive: true });
})();
