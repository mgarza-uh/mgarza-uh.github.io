
(function () {
  /* ---------- Awards, from content/awards-list.md and the match list ---------- */
  var SHELVES = [
    [
      { type: "plaque", size: "L", plate: "Texas\u00a0Student of\u00a0the\u00a0Year", name: "3rd Place, Texas Student of the Year Award", kind: "Honor", date: "Apr 2025", by: "Texas Junior College Student Government Association", desc: "Awarded 3rd out of 4,500+ students for exemplifying the best attributes of a college student, including academic excellence and community involvement at their college and the state level." },
      { type: "medal",  size: "L", plate: "Ted Bauer Scholarship", name: "Ted Bauer Undergraduate Business Scholarship", kind: "Scholarship", date: "Jul 2026", by: "C.T. Bauer College of Business Foundation", desc: "One of 65 scholars to win Bauer's most prestigious scholarship, for representing academic excellence and the mission of Ted Bauer." },
      { type: "globe",  size: "L", plate: "ELC Scholarship", name: "Marvin R. Ellison Emerging Leaders Scholarship", kind: "Scholarship", date: "Jun 2026", by: "The Executive Leadership Council and Lowe's Foundation", desc: "For innovation, resilience, and commitment to excellence. Came from a case proposal on the US Women's National Team equal pay battle, chosen from 10,000+ applicants." },
      { type: "cup",    size: "L", plate: "Battle of the Brains", photo: "battle-of-the-brains-team.webp", photoAlt: "Mario and the UH team in front of the HSI Battle of the Brains sign", name: "2nd Place Nationally, Business Component", kind: "Competition", date: "Oct 2026", by: "HSI Battle of the Brains", desc: "Trained from September and placed in the national finals in October. My team designed an AI shopping browser extension." },
      { type: "star",   size: "L", plate: "Houston\u00a0Student of\u00a0the\u00a0Year", name: "1st Place, Houston Student of the Year Award", kind: "Honor", date: "Mar 2025", by: "Texas Junior College Student Government Association, Region V", desc: "Awarded 1st out of 500 students for exemplifying the best attributes of a college student, including academic excellence and community involvement at their college and the regional level." }
    ],
    [
      { type: "cup",   size: "M", plate: "Phillips 66 Case Competition", photo: "phillips-66-check.webp", photoAlt: "Mario and teammates holding the $2,500 second place check", name: "2nd Place, Global Case Competition", kind: "Competition", date: "Nov 2025", by: "University of Houston x Phillips 66", desc: "Led a team of three to 2nd place out of 20 teams by analyzing how a sneaker startup could adapt to tariff shock." },
      { type: "medal", size: "M", plate: "Sanchez Scholarship", name: "A.R. \"Tony\" and Maria J. Sanchez Program for Excellence in Selling Scholarship", kind: "Scholarship", date: "Aug 2026", by: "A.R. \"Tony\" and Maria J. Sanchez Family Foundation", desc: "One of 5 scholars out of 135 students, for sales excellence, ethics, and integrity." },
      { type: "star",  size: "M", plate: "Aramco MVP", photo: "aramco-nextgen-mvp.webp", photoAlt: "Mario and the NextGen Leaders award winners in front of the Aramco backdrop", name: "NextGen Leaders MVP Award", kind: "Internship award", date: "Aug 2026", by: "Aramco Americas", desc: "For leading an internal audit of Public Affairs' impact and proposing a company-wide chargeback model during my summer internship." },
      { type: "cup",   size: "M", plate: "Fastenal Top Performer", name: "National Sales Invitational Top Performer", kind: "Competition", date: "Oct 2026", by: "Fastenal", desc: "Placed first in the first round of a university-wide sales competition." },
      { type: "star",   size: "M", plate: "President's Club", name: "President's Club", kind: "Sales award", date: "May 2026", by: "Program for Excellence in Selling, Stagner Sales Excellence Institute", desc: "Earned President's Club by reaching 200% of my sales quota." },
      { type: "cup",   size: "M", plate: "Rotaract Club of the Year", name: "Rotaract Club of the Year", kind: "Leadership award", date: "May 2025", by: "College of the Mainland Student Life", desc: "Awarded for leadership, volunteer impact, and fundraising as President and Founder of the Rotaract Club of College of the Mainland." },
      { type: "star",  size: "M", plate: "Drum Major Award", photo: "drum-major-award.webp", photoAlt: "Mario holding flowers between two College of the Mainland staff members", name: "The Drum Major Award", kind: "Service award", date: "Feb 2025", by: "College of the Mainland", desc: "For exceptional service to the community through volunteering, mentorship, and fundraising." }
    ],
    [
      { type: "plaque", size: "M", plate: "Above and Beyond", photo: "above-and-beyond-award.webp", photoAlt: "Mario holding the Above and Beyond Award certificate", name: "Above and Beyond Award", kind: "Honor", date: "Apr 2026", by: "Ted Bauer Leadership Certificate Program", desc: "One of 10 scholars recognized for representing the mission of Ted Bauer and showing holistic leadership in a project setting." },
      { type: "medal",  size: "M", plate: "ELASP Scholarship", photo: "elasp-celebration.webp", photoAlt: "Mario with the ELASP class at the end of year celebration", name: "ELASP Scholarship", kind: "Scholarship", date: "Jul 2026", by: "Emerging Leaders Academic Success Program", desc: "One of 5 scholars selected for the ELASP Scholarship for representing the qualities of Success, Mentorship, and Community." },
      { type: "plaque", size: "M", plate: "All-Texas Academic Team", photo: "all-texas-ceremony.webp", photoAlt: "Mario holding the All-Texas Academic Team medal at the award ceremony", name: "All-Texas Academic Team", kind: "Honor", date: "2025", by: "Phi Theta Kappa, the Texas Association of Community Colleges, and the University of Texas System", desc: "Named one of the top community college students in Texas for academic excellence and intellectual rigor, paired with leadership and service that carry my education beyond the classroom to benefit others." },
      { type: "plaque", size: "M", plate: "Dean's List", name: "Dean's List", kind: "Honor", date: "Every semester", by: "University of Houston", desc: "On the Dean's List every semester while keeping a 4.0 GPA." },
      { type: "medal",  size: "M", plate: "Coca-Cola Bronze Scholar", name: "Coca-Cola Academic Team, Bronze Scholar", kind: "Scholarship", date: "Feb 2025", by: "Coca-Cola and Phi Theta Kappa", desc: "Recognized as a high-achieving college student for academic excellence and intellectual rigor, combined with leadership and service that extend my education beyond the classroom to benefit society." },
      { type: "medal", size: "M", plate: "Home Depot Scholarship", photo: "orange-hearted-scholarship.webp", photoAlt: "Mario holding the Orange Hearted Scholarship certificate", name: "Orange Hearted Scholarship", kind: "Scholarship", date: "Oct 2026", by: "The Home Depot", desc: "One of 2 scholars out of 122 competitors at HSI Battle of the Brains, for showing Home Depot's core values and leadership." },
      { type: "plaque", size: "M", plate: "Cum Laude", photo: "cum-laude-graduation.webp", photoAlt: "Mario in a cap and gown at the College of the Mainland graduation", name: "Cum Laude", kind: "Honor", date: "May 2025", by: "College of the Mainland", desc: "Graduated with honors with an Associate of Arts in Business." },
      { type: "star",   size: "M", plate: "TRIO Super Star", name: "TRIO Student Support Services Super Star Student Award", kind: "Honor", date: "Nov 2024", by: "TRIO Student Support Services, College of the Mainland", desc: "Awarded for exceptional contributions in academic achievement, character, leadership, and community involvement, and for showing the dedication, integrity, and positive attitude that made a lasting impact on the TRIO program at College of the Mainland." }
    ],
    [
      { type: "plaque", size: "S", plate: "Phi Theta Kappa", name: "Phi Theta Kappa Honor Society", kind: "Honor", date: "Aug 2024", by: "College of the Mainland", desc: "Inducted into the honor society." },
      { type: "cup",    size: "S", plate: "Salesforce Report Contest", name: "2nd Place, Salesforce Report Contest", kind: "Competition", date: "Mar 2026", by: "Program for Excellence in Selling", desc: "2nd in a class of 67, for technical problem-solving in Salesforce." },
      { type: "medal",  size: "S", plate: "eBay Finalist", name: "eBay Scholarship Finalist", kind: "Scholarship", date: "Oct 2026", by: "eBay", desc: "One of 12 finalists out of 122 competitors, invited to the finalist scholarship dinner for academic and professional excellence." },
      { type: "medal",  size: "S", plate: "Coca-Cola Scholarship", name: "Coca-Cola First Generation Scholarship", kind: "Scholarship", date: "Oct 2024", by: "Coca-Cola, with HACU", desc: "Awarded to high-achieving first-generation undergraduates in sciences, technology, engineering, math, or business administration." },
      { type: "medal",  size: "S", plate: "MGM Resorts Scholarship", name: "MGM Resorts International Scholarship", kind: "Scholarship", date: "Aug 2024", by: "MGM Resorts International, with HACU", desc: "Awarded to high-achieving students in international business, marketing, and business administration." },
      { type: "medal",  size: "S", plate: "LULAC Mainland", photo: "lulac-mainland-scholarship.webp", photoAlt: "Mario receiving the LULAC Mainland Student Scholarship Award at the podium", name: "LULAC Mainland Student Scholarship Award", kind: "Scholarship", date: "Apr 2024", by: "LULAC", desc: "Awarded for student excellence across academics, community involvement, and leadership." },
      { type: "medal",  size: "S", plate: "DECA Whataburger", name: "DECA Whataburger Scholarship", kind: "Scholarship", date: "May 2023", by: "Whataburger and DECA", desc: "Awarded for excellence in business and leadership as a high school DECA member." },
      { type: "plaque", size: "S", plate: "DECA Emerging Leader", name: "Emerging Leader Honor Award", kind: "Honor", date: "2023", by: "DECA", desc: "Awarded for demonstrating the exemplary attributes of an academically prepared, community-oriented, professionally responsible, and experienced leader." }
    ]
  ];

  /* ---------- Drawings (toy-like 3D: rounded, soft gradients, one highlight) ---------- */
  function starPts(cx, cy, R, r) {
    var p = [];
    for (var i = 0; i < 10; i++) {
      var a = (-90 + i * 36) * Math.PI / 180, rad = i % 2 ? r : R;
      p.push((cx + rad * Math.cos(a)).toFixed(1) + "," + (cy + rad * Math.sin(a)).toFixed(1));
    }
    return p.join(" ");
  }
  var PLINTH = '<rect x="16" y="146" width="88" height="12" rx="5" fill="url(#grey)"/><rect x="18" y="146" width="84" height="3" rx="1.5" fill="#fff" opacity=".45"/>';
  /* Each shape: h = viewBox height, back = drawn under the gold, gold = gold parts (GOLD is swapped for the paint or the shine mask), front = highlights on top */
  var SHAPES = {
    cup: {
      h: 160,
      back: PLINTH + '<rect x="28" y="112" width="64" height="36" rx="7" fill="url(#dark)"/><rect x="30" y="113" width="60" height="3" rx="1.5" fill="#fff" opacity=".12"/><rect x="40" y="124" width="40" height="12" rx="3" fill="url(#goldV)"/>',
      gold: '<path d="M33 30 C12 30 10 62 40 66" fill="none" stroke="GOLD" stroke-width="8" stroke-linecap="round"/><path d="M87 30 C108 30 110 62 80 66" fill="none" stroke="GOLD" stroke-width="8" stroke-linecap="round"/><rect x="40" y="103" width="40" height="11" rx="5.5" fill="GOLD"/><path d="M53 105 C55 96 56 90 54 84 H66 C64 90 65 96 67 105 Z" fill="GOLD"/><ellipse cx="60" cy="86" rx="11" ry="5" fill="GOLD"/><path d="M28 20 H92 C92 58 80 82 60 84 C40 82 28 58 28 20 Z" fill="GOLD"/>',
      front: '<ellipse cx="60" cy="20" rx="32" ry="6" fill="url(#goldRim)"/><ellipse cx="60" cy="20.5" rx="26" ry="3.4" fill="#A8731C" opacity=".55"/><path d="M40 30 C40 52 45 66 52 74" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>'
    },
    star: {
      h: 160,
      back: PLINTH + '<path d="M40 148 L48 86 Q49 80 55 80 H67 Q73 80 74 86 L82 148 Z" fill="url(#dark)"/><path d="M40 148 L48 86 Q49 80 55 80 H58 L53 148 Z" fill="#fff" opacity=".1"/><rect x="47" y="118" width="28" height="11" rx="3" fill="url(#goldV)"/>',
      gold: '<rect x="51" y="70" width="20" height="12" rx="5" fill="GOLD"/><rect x="57" y="54" width="8" height="20" rx="3" fill="GOLD"/><polygon points="' + starPts(61, 32, 30, 13) + '" fill="GOLD" stroke="GOLD" stroke-width="7" stroke-linejoin="round"/>',
      front: '<polygon points="' + starPts(61, 32, 15, 6.5) + '" fill="#FFF0BE" opacity=".35" stroke="#FFF0BE" stroke-opacity=".35" stroke-width="3" stroke-linejoin="round"/><path d="M45 22 L53 21" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>'
    },
    globe: {
      h: 190,
      back: '<path d="M30 186 L36 146 H84 L90 186 Z" fill="url(#dark)"/><path d="M36 146 L44 140 H76 L84 146 Z" fill="#525963"/><path d="M30 186 L36 146 H48 L44 186 Z" fill="#fff" opacity=".1"/><path d="M90 186 L84 146 H72 L76 186 Z" fill="#000" opacity=".25"/><rect x="47" y="163" width="26" height="10" rx="3" fill="url(#goldV)"/>',
      gold: '<path d="M70 142 C88 118 32 104 46 78 C52 66 76 66 82 50" fill="none" stroke="GOLD" stroke-width="13" stroke-linecap="round"/><path d="M50 142 C32 118 88 104 74 78 C68 66 44 66 38 50" fill="none" stroke="GOLD" stroke-width="13" stroke-linecap="round"/><path d="M52 144 Q60 128 68 144 Z" fill="GOLD"/><circle cx="60" cy="40" r="24" fill="GOLD"/>',
      front: '<path d="M48 142 C30 118 86 104 72 78" fill="none" stroke="#FFF3C8" stroke-width="3" stroke-linecap="round" opacity=".6"/><circle cx="60" cy="40" r="24" fill="url(#sphere)"/><ellipse cx="51" cy="30" rx="8" ry="5" transform="rotate(-30 51 30)" fill="#fff" opacity=".35"/>'
    },
    medal: {
      h: 160,
      back: '<ellipse cx="60" cy="152" rx="34" ry="7" fill="#15181C"/><rect x="26" y="142" width="68" height="10" rx="5" fill="url(#dark)"/><rect x="56" y="22" width="8" height="122" rx="4" fill="url(#darkSide)"/><rect x="30" y="15" width="60" height="10" rx="5" fill="url(#dark)"/><rect x="32" y="16" width="56" height="2.5" rx="1.25" fill="#fff" opacity=".18"/>' +
            '<path d="M82 24 H68 L54 86 H66 Z" fill="url(#creamR)"/><path d="M76 24 H73 L59 86 H62 Z" fill="#3E7BA3"/><path d="M38 24 H52 L66 86 H54 Z" fill="url(#blueR)"/><path d="M44 24 H47 L61 86 H58 Z" fill="#FDF0D5" opacity=".9"/>',
      gold: '<rect x="52" y="80" width="16" height="9" rx="3.5" fill="GOLD"/><circle cx="60" cy="110" r="27" fill="GOLD"/>',
      front: '<circle cx="60" cy="110" r="20.5" fill="url(#medalFace)"/><circle cx="60" cy="110" r="20.5" fill="none" stroke="#A8731C" stroke-opacity=".35" stroke-width="1.5"/><polygon points="' + starPts(60, 111, 11, 4.8) + '" fill="#C68C27" stroke="#C68C27" stroke-width="2" stroke-linejoin="round"/><polygon points="' + starPts(59, 110, 11, 4.8) + '" fill="#FFE596" opacity=".55"/><path d="M41 101 A21 21 0 0 1 55 88.5" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".55"/>'
    },
    plaque: {
      h: 160,
      back: '<path d="M64 44 L90 150" stroke="#1B1E23" stroke-width="7" stroke-linecap="round"/><rect x="18" y="142" width="84" height="11" rx="5" fill="url(#grey)"/><rect x="20" y="142" width="80" height="3" rx="1.5" fill="#fff" opacity=".45"/>' +
            '<rect x="22" y="24" width="76" height="120" rx="11" fill="url(#dark)"/><rect x="26" y="28" width="68" height="112" rx="8" fill="none" stroke="#fff" stroke-opacity=".1" stroke-width="2"/>' +
            '<circle cx="31" cy="34" r="2.4" fill="#D9A33C"/><circle cx="89" cy="34" r="2.4" fill="#D9A33C"/><circle cx="31" cy="134" r="2.4" fill="#D9A33C"/><circle cx="89" cy="134" r="2.4" fill="#D9A33C"/>',
      gold: '<rect x="32" y="52" width="56" height="74" rx="6" fill="GOLD"/><circle cx="60" cy="47" r="13" fill="GOLD"/>',
      front: '<circle cx="60" cy="47" r="8.5" fill="#3E7BA3"/><polygon points="' + starPts(60, 47.5, 5.6, 2.4) + '" fill="#FDF0D5"/>' +
             '<rect x="42" y="68" width="36" height="4.5" rx="2.25" fill="#A8731C" opacity=".55"/><rect x="38" y="78" width="44" height="3" rx="1.5" fill="#A8731C" opacity=".45"/><rect x="40" y="86" width="40" height="3" rx="1.5" fill="#A8731C" opacity=".45"/><rect x="44" y="94" width="32" height="3" rx="1.5" fill="#A8731C" opacity=".45"/><rect x="46" y="108" width="28" height="6" rx="3" fill="#A8731C" opacity=".5"/>' +
             '<path d="M37 60 V116" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>'
    }
  };
  var uid = 0;
  function drawSvg(type, label) {
    var s = SHAPES[type], id = "m" + (++uid);
    return '<svg viewBox="0 0 120 ' + s.h + '" role="img" aria-label="' + label + '">' +
      '<defs><mask id="' + id + '" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="' + s.h + '">' + s.gold.replace(/GOLD/g, "#fff") + '</mask></defs>' +
      s.back + s.gold.replace(/GOLD/g, "url(#gold)") + s.front +
      '<g mask="url(#' + id + ')"><g transform="skewX(-18)"><rect class="tc-sweep" x="0" y="-10" width="34" height="' + (s.h + 20) + '" fill="url(#sweepGrad)"/></g></g>' +
      '</svg>';
  }

  /* ---------- Legend ---------- */
  document.getElementById("tc-legend").innerHTML =
    '<li>' + drawSvg("cup", "Trophy") + 'Trophies for competitions</li>' +
    '<li>' + drawSvg("medal", "Medal") + 'Medals for scholarships</li>' +
    '<li>' + drawSvg("plaque", "Plaque") + 'Plaques for honors</li>' +
    '<li>' + drawSvg("star", "Star") + 'Stars for top honors</li>';

  /* ---------- Cabinet layout ---------- */
  var cabinet = document.getElementById("tc-cabinet");
  var SIZES = { wide: { L: 140, M: 100, S: 74, gap: 22, plate: 94 }, narrow: { L: 90, M: 70, S: 62, gap: 10, plate: 72 } };
  var lastKey = "";
  function render() {
    var narrow = window.innerWidth <= 640, sz = SIZES[narrow ? "narrow" : "wide"];
    // The Recognition page may be hidden when this runs, so fall back to the page width
    var avail = (cabinet.clientWidth || Math.min(window.innerWidth - 32, 1088) - 24) - (narrow ? 12 : 40);
    var html = "", key = narrow + ":";
    SHELVES.forEach(function (items, si) {
      var w = sz[items[0].size], slot = Math.max(w, sz.plate) + sz.gap;
      var perRow = Math.max(1, Math.floor((avail + sz.gap) / slot));
      var rows = Math.ceil(items.length / perRow), per = Math.ceil(items.length / rows);
      key += per + ",";
      for (var r = 0; r < rows; r++) {
        html += '<div class="tc-shelf' + (si === 0 && r === 0 ? " top" : "") + '"><div class="tc-row' + (narrow && per <= 3 ? " roomy" : "") + '">';
        items.slice(r * per, r * per + per).forEach(function (a) {
          var aw = a.type === "globe" ? Math.round(w * 1.08) : w;
          var i = SHELVES[si].indexOf(a);
          html += '<button type="button" class="tc-award" style="--w:' + aw + 'px" data-s="' + si + '" data-i="' + i + '" aria-label="' + a.plate + ', ' + a.date + '. Open details" aria-haspopup="dialog">' +
            '<span class="tc-halo"></span><span class="tc-spark s1"></span><span class="tc-spark s2"></span><span class="tc-spark s3"></span>' +
            drawSvg(a.type, "") + '<span class="tc-plate">' + a.plate + '</span></button>';
        });
        html += '</div><div class="tc-board"></div></div>';
      }
    });
    if (key === lastKey) return;
    lastKey = key;
    cabinet.innerHTML = html;
  }
  render();
  var rt;
  window.addEventListener("hashchange", function () { setTimeout(function () { lastKey = ""; render(); }, 0); });
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { if (!stageOpen) render(); }, 120); });

  /* ---------- Selected award: fly to the middle, description beside it ---------- */
  var stage = document.getElementById("tc-stage"), spot = document.getElementById("tc-stage-spot"), trophy = document.getElementById("tc-stage-trophy");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var stageOpen = false, current = null;

  function flipFrom(el) {
    var from = el.querySelector("svg").getBoundingClientRect(), to = trophy.getBoundingClientRect();
    var s = from.width / to.width;
    return "translate(" + (from.left - to.left) + "px," + (from.top - to.top) + "px) scale(" + s + ")";
  }
  function open(btn) {
    var a = SHELVES[btn.dataset.s][btn.dataset.i];
    current = btn; stageOpen = true;
    document.getElementById("tc-stage-kind").textContent = a.kind;
    document.getElementById("tc-stage-title").textContent = a.name;
    document.getElementById("tc-stage-meta").innerHTML = "<li><b>" + a.date + "</b></li><li>" + a.by + "</li>";
    document.getElementById("tc-stage-desc").textContent = a.desc;
    var photo = document.getElementById("tc-stage-photo");
    photo.hidden = !a.photo;
    if (a.photo) { photo.src = "design/images/photos/" + a.photo; photo.alt = a.photoAlt || ""; }
    trophy.innerHTML = drawSvg(a.type, a.plate);
    spot.style.maxWidth = a.type === "globe" ? "none" : "";
    stage.hidden = false;
    trophy.style.transition = "none";
    trophy.style.transform = reduce ? "none" : flipFrom(btn);
    btn.classList.add("is-out");
    trophy.getBoundingClientRect();
    stage.classList.add("flying");
    trophy.style.transition = "";
    requestAnimationFrame(function () {
      stage.classList.add("open");
      trophy.style.transform = "none";
    });
    setTimeout(function () { stage.classList.remove("flying"); }, reduce ? 0 : 620);
    document.getElementById("tc-stage-close").focus({ preventScroll: true });
  }
  function close() {
    if (!stageOpen) return;
    stageOpen = false;
    var btn = current;
    stage.classList.add("flying", "closing");
    stage.classList.remove("open");
    trophy.style.transform = reduce ? "none" : flipFrom(btn);
    setTimeout(function () {
      btn.classList.remove("is-out");
      stage.hidden = true;
      stage.classList.remove("flying", "closing");
      trophy.style.transform = "";
      btn.focus({ preventScroll: true });
      render();
    }, reduce ? 0 : 600);
  }
  cabinet.addEventListener("click", function (e) {
    var btn = e.target.closest(".tc-award");
    if (btn && !stageOpen) open(btn);
  });
  document.getElementById("tc-stage-close").addEventListener("click", close);
  document.getElementById("tc-stage-backdrop").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (!stageOpen) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") { e.preventDefault(); document.getElementById("tc-stage-close").focus(); }
  });

})();
