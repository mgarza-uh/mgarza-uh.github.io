/* Leadership role pop-ups: clicking a role card opens a detail view with the story, numbers, skills, and a photo gallery.
   Each card on the Leadership page carries data-role matching a key below. Text source: content/leadership.md ("Role pop-ups"). */
(function () {
  var P = "design/images/photos/";
  var ROLES = {
    "advisory-board": {
      intro: [
        "The C.T. Bauer College Advisory Board brings business leaders together to help guide the direction of the college. A faculty panel nominated and selected me as its Undergraduate Student Representative, the only undergraduate seat on the board.",
        "My job is to bring the student perspective into the room: what undergraduates need from their classes, programs, and career support, and how the board's decisions land with the students they're made for."
      ],
      stats: [["Faculty", "Nominated and selected"]],
      did: [
        "Represent Bauer's undergraduate students at board meetings",
        "Share feedback from fellow students with board members and college leadership",
        "Connect what I hear in class and student organizations to the board's priorities"
      ],
      skills: ["Governance", "Student advocacy", "Executive communication"],
      photos: []
    },
    "battle-of-the-brains": {
      intro: [
        "HSI Battle of the Brains is a national case competition for students at Hispanic-Serving Institutions. I was selected as one of UH's Case Competition Fellows and trained with the team from September through the national finals in October.",
        "Our team designed an AI shopping browser extension and built the business case behind it, placing 2nd nationally in the business component. The Home Depot also named me one of 2 Orange Hearted Scholars out of 122 competitors, for showing its core values and leadership."
      ],
      stats: [["60+", "Hours of case training"], ["2nd", "In the nation, business component"], ["1 of 2", "Orange Hearted Scholars"], ["122", "Competitors"]],
      did: [
        "Trained for 60+ hours on case analysis, strategy, and pitching",
        "Helped design an AI shopping browser extension and its go-to-market plan",
        "Presented our solution to judges at the national finals",
        "Earned the $1,500 Home Depot Orange Hearted Scholarship"
      ],
      skills: ["Case analysis", "Product strategy", "Pitching", "Teamwork"],
      photos: [
        ["battle-of-the-brains-uh-flag", 1400, 787, "The UH team with the University of Houston flag", "Mario and the UH Battle of the Brains team holding a University of Houston flag"],
        ["battle-of-the-brains-team", 1100, 1375, "The UH team at HSI Battle of the Brains", "Mario and the UH team in front of the HSI Battle of the Brains sign"],
        ["battle-of-the-brains-fellows", 1400, 1050, "Group picture with the eBay Scholarship Finalists", "Mario with the eBay Scholarship Finalists in yellow event shirts"],
        ["orange-hearted-scholarship", 1100, 1375, "The Home Depot Orange Hearted Scholarship", "Mario holding the $1,500 Orange Hearted Scholarship certificate"],
        ["battle-of-the-brains-finals", 1300, 975, "Group picture with the other UH scholarship winners", "Mario holding the Orange Hearted Scholarship with the other UH scholarship winners"]
      ]
    },
    "phillips-66": {
      intro: [
        "The UH x Phillips 66 Global Case Competition gives student teams a real business problem and a short window to solve it. I led a team of 3 analyzing how a sneaker startup could adapt to a sudden tariff shock.",
        "We placed 2nd out of 20 teams and took home the $2,500 second place prize."
      ],
      stats: [["2nd", "Out of 20 teams"], ["3", "Teammates I led"], ["$2,500", "Second place prize"]],
      did: [
        "Led the team from the first read of the case to the final presentation",
        "Analyzed how the tariff shock would hit the startup and built a plan for it to adapt",
        "Presented our recommendations to the judges"
      ],
      skills: ["Team leadership", "Strategy", "Supply chain thinking", "Presenting"],
      photos: [
        ["phillips-66-team-lead", 1400, 788, "Our team with the second place check", "Mario and teammates holding the $2,500 second place check at the UH x Phillips 66 Global Case Competition"],
        ["phillips-66-check-melcher", 1400, 788, "Outside Melcher Hall after the win", "Mario holding the $2,500 second place check outside Melcher Hall"]
      ]
    },
    "ted-bauer": {
      intro: [
        "The Ted Bauer Leadership Certificate Program develops Bauer's student leaders through workshops and a team consulting project. As a Consultant Team Lead, I led a team of five on a case proposal to faculty and staff leadership on how UH can become a top 50 university.",
        "I was one of 10 scholars to receive the program's Above and Beyond Award, for representing the mission of Ted Bauer and showing holistic leadership in a project setting."
      ],
      stats: [["5", "Consultants on my team"], ["1 of 10", "Above and Beyond Award"]],
      did: [
        "Led a team of five consultants through research, planning, and the final proposal",
        "Presented our recommendations to UH faculty and staff leadership",
        "Earned the program's Above and Beyond Award"
      ],
      skills: ["Consulting", "Team leadership", "Presenting to leadership"],
      deck: { title: "R.E.D. Conference proposal", src: "content/files/tblcp-red-deck/slides/slide-{n}.webp", pages: 10, w: 1600, h: 900,
        caption: "Our team's proposal for R.E.D. (Rise, Empower, Discover), a two-day leadership conference for Bauer students at the Hilton University of Houston, built to grow UH's reputation and rankings." },
      photos: [
        ["ted-bauer-leadership-cohort", 1400, 788, "The Ted Bauer Leadership Certificate class", "The Ted Bauer Leadership Certificate class holding their certificates"],
        ["above-and-beyond-award", 1300, 975, "The Above and Beyond Award, Apr 2026", "Mario holding the Above and Beyond Award certificate"]
      ]
    },
    "hacu": {
      intro: [
        "HACU's Voces Nuevas program builds the next generation of Hispanic leaders and advocates in higher education. I was selected from a national pool as one of 75 campus ambassadors for the 8-month program.",
        "As UH's ambassador, I'm hosting webinars for Hispanic college students in Houston and sharing the opportunities that helped me get where I am."
      ],
      stats: [["1 of 75", "National ambassadors"], ["8", "Month program"]],
      did: [
        "Host webinars for Hispanic college students in Houston",
        "Take part in HACU's leadership and advocacy training",
        "Connect UH students with HACU programs and scholarships"
      ],
      skills: ["Advocacy", "Public speaking", "Outreach"],
      photos: []
    },
    "business-today": {
      intro: [
        "Business Today is a student-run organization at Princeton University that hosts the nation's top undergraduate business conference. As a Campus Ambassador, I promoted the conference at UH and encouraged Bauer students to take part."
      ],
      stats: [],
      did: [
        "Promoted the Business Today conference to UH students",
        "Represented UH at the conference"
      ],
      skills: ["Campus marketing", "Networking", "Outreach"],
      photos: [
        ["business-today-ambassador", 1400, 788, "At the Business Today conference", "Mario standing behind large BT letters at the Business Today conference"]
      ]
    },
    "ion": {
      intro: [
        "The Ion is Houston's innovation hub. As a Student Ambassador on the marketing and communications team, I organized student logistics and promotions for its events.",
        "I spearheaded a social media campaign, Meet the Ion Student Ambassadors, to introduce the new ambassador cohort on LinkedIn and Instagram. It generated over 30,000 impressions and 500+ points of engagement."
      ],
      stats: [["30,000+", "Impressions"], ["500+", "Points of engagement"], ["2", "Platforms"]],
      did: [
        "Led the Meet the Ion Student Ambassadors campaign from concept to launch",
        "Organized student logistics for events at the Ion",
        "Followed brand guidelines and best practices to create social media copy, graphics, and flyers"
      ],
      quote: ["One particular moment that stands out is when Mario took charge of a social media campaign. From concept to execution, he led the effort, creating high-performing content that not only met but exceeded expectations.", "Torey Brown, Digital Marketing and Community Manager at the Ion District"],
      skills: ["Social media marketing", "Content creation", "Event logistics"],
      photos: [
        ["ion-houston-ambassador", 1400, 788, "At the Welcome to Ion stage", "Mario at the Welcome to Ion stage in Houston"],
        ["ion-aramco-f1", 1000, 750, "With the Aramco F1 show car at the Ion", "Mario and friends with the Aramco Formula 1 show car at the Ion"]
      ],
      deck: {heading: "Campaign posts", title: "Meet the Ion Student Ambassadors campaign", src: "content/files/ion-ambassador-campaign/slides/slide-{n}.webp", pages: 3, w: 591, h: 591, caption: "A few example posts from the Meet the Ion Student Ambassadors campaign"}
    },
    "rotaract": {
      intro: [
        "I founded the Rotaract Club of College of the Mainland, Rotary's service club for young adults, and served as its first president. In our first year, members took on hurricane relief, park cleanups, service days, and a gala.",
        "Rotary named us Club of the Year in our first year running, and College of the Mainland gave me the Drum Major Award for service to the community."
      ],
      stats: [["53", "Members joined"], ["11", "Service projects"], ["150+", "Hours volunteered"], ["$10,000+", "Raised"]],
      did: [
        "Founded the club and recruited its first members",
        "Planned and led hurricane relief, cleanups, and service days",
        "Organized a gala that helped raise over $10,000"
      ],
      quote: ["He will volunteer, he will lead organizations, but most of all, he will do all this with pride and appreciation because he understands the importance of education and making those around you better.", "Earl Alexander, Recruiter and Advisor at College of the Mainland"],
      skills: ["Founding an organization", "Volunteer management", "Fundraising"],
      photos: [
        ["rotaract-service-above-self", 485, 256, "Our members in Service Above Self shirts", "Rotaract Club members holding red Service Above Self shirts"],
        ["rotaract-park-cleanup", 408, 239, "Cleanup at Paul Hopkins Park", "Rotaract volunteers in safety vests with trash bags at Paul Hopkins Park"],
        ["rotaract-service-day", 424, 246, "A service day with College of the Mainland", "Rotaract volunteers in red club shirts gathered around a mower after a yard cleanup"],
        ["drum-major-award", 408, 273, "Receiving the Drum Major Award, Feb 2025", "Mario holding flowers between two College of the Mainland staff members"]
      ]
    },
    "sga": {
      intro: [
        "I served as President and Treasurer of College of the Mainland's Student Government Association, the voice of students to the college's leadership.",
        "I managed a $25,000 student fund for 30+ clubs, won a 4% funding increase for student-led initiatives, and moderated open forums between students and the college president. I also represented COM at Texas Junior College Student Government Association events, where Region V named me Houston Top Student of the Year."
      ],
      stats: [["$25,000", "Student fund managed"], ["30+", "Clubs funded"], ["4%", "Funding increase won"]],
      did: [
        "Managed the budget for 30+ student clubs",
        "Advocated for and won more funding for student-led initiatives",
        "Moderated open forums with the college president",
        "Led COM's delegation at state student government conferences"
      ],
      skills: ["Budgeting", "Advocacy", "Public speaking"],
      photos: [
        ["sga-texas-jc-conference", 1400, 788, "With fellow student leaders at a TJCSGA event", "Mario with fellow student leaders at a Texas Junior College Student Government Association event"],
        ["tjcsga-com-delegation", 1400, 933, "COM's delegation at the TJCSGA conference", "Mario with College of the Mainland student leaders in COM shirts at a TJCSGA conference"],
        ["sga-officers-group", 535, 169, "With fellow Student Government officers", "Mario with College of the Mainland Student Government officers in SGA shirts and an advisor"],
        ["sga-info-table", 362, 241, "Tabling for Student Government", "Mario and fellow Student Government officers at an SGA information table"],
        ["com-podium", 222, 222, "Speaking at College of the Mainland", "Mario speaking at a College of the Mainland podium"]
      ]
    }
  };

  var dlg = document.getElementById("role-dialog");
  var body = document.getElementById("role-body");
  var scroller = document.getElementById("role-scroll");
  if (!dlg || !body) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-role]")).filter(function (c) { return ROLES[c.getAttribute("data-role")]; });
  var count = document.getElementById("role-count");
  var current = 0, opener = null;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function section(title) {
    var s = el("section", "role-section");
    s.appendChild(el("h3", null, title));
    return s;
  }

  // Slide deck: one slide at a time with previous and next buttons
  function deckViewer(k) {
    var s = section(k.heading || "Slide deck");
    if (k.h >= k.w) s.classList.add("role-deck-tall");
    var frame = el("div", "role-deck");
    var img = el("img");
    img.width = k.w; img.height = k.h; img.decoding = "async";
    img.style.aspectRatio = k.w + " / " + k.h;
    var bar = el("div", "role-deck-bar");
    var prev = el("button", "btn ghost"); prev.type = "button"; prev.setAttribute("aria-label", "Previous slide"); prev.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg>';
    var next = el("button", "btn ghost"); next.type = "button"; next.setAttribute("aria-label", "Next slide"); next.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
    var label = el("span", "role-deck-count");
    label.setAttribute("aria-live", "polite");
    var n = 1;
    function show(m) {
      n = Math.max(1, Math.min(k.pages, m));
      img.src = k.src.replace("{n}", (n < 10 ? "0" : "") + n);
      img.alt = k.title + ", slide " + n + " of " + k.pages;
      label.textContent = n + " / " + k.pages;
      prev.disabled = n === 1; next.disabled = n === k.pages;
    }
    prev.addEventListener("click", function () { show(n - 1); });
    next.addEventListener("click", function () { show(n + 1); });
    img.addEventListener("click", function () { show(n === k.pages ? 1 : n + 1); });
    frame.tabIndex = 0;
    frame.setAttribute("aria-label", k.title + ". Use the arrow keys to change slides.");
    frame.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); show(n + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); show(n - 1); }
    });
    frame.appendChild(img);
    bar.appendChild(prev); bar.appendChild(label); bar.appendChild(next);
    s.appendChild(frame);
    s.appendChild(bar);
    if (k.caption) s.appendChild(el("p", "role-deck-caption", k.caption));
    show(1);
    return s;
  }

  function render(i) {
    current = i;
    var card = cards[i], d = ROLES[card.getAttribute("data-role")];
    body.textContent = "";

    var head = el("header", "role-top");
    var icon = card.querySelector(".role-icon");
    if (icon) { var ic = icon.cloneNode(true); ic.classList.add("role-top-icon"); head.appendChild(ic); }
    var txt = el("div");
    var date = card.getAttribute("data-date");
    txt.appendChild(el("p", "meta", card.querySelector(".meta").textContent + (date ? " \u00B7 " + date : "")));
    var h = el("h2", null, card.querySelector("h3").textContent);
    h.id = "role-title";
    txt.appendChild(h);
    head.appendChild(txt);
    body.appendChild(head);

    d.intro.forEach(function (p) { body.appendChild(el("p", "role-intro", p)); });

    if (d.stats && d.stats.length) {
      var dl = el("dl", "edu-stats role-stats");
      dl.style.setProperty("--n", d.stats.length);
      d.stats.forEach(function (s) {
        var w = el("div");
        w.appendChild(el("dd", null, s[0]));
        w.appendChild(el("dt", null, s[1]));
        dl.appendChild(w);
      });
      body.appendChild(dl);
    }

    var did = section(/present/i.test(date || "") ? "What I am doing" : "What I did");
    var ul = el("ul", "role-list");
    d.did.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    did.appendChild(ul);
    body.appendChild(did);

    if (d.quote) {
      var q = el("blockquote", "edu-quote");
      q.appendChild(el("p", null, "“" + d.quote[0] + "”"));
      q.appendChild(el("cite", null, d.quote[1]));
      body.appendChild(q);
    }

    var sk = section("Skills I built");
    var tags = el("ul", "tags");
    d.skills.forEach(function (t) { tags.appendChild(el("li", null, t)); });
    sk.appendChild(tags);
    body.appendChild(sk);

    if (d.deck) body.appendChild(deckViewer(d.deck));

    var gal = section("Gallery");
    if (d.photos.length) {
      var g = el("div", "role-gallery" + (d.photos.length === 1 ? " one" : ""));
      d.photos.forEach(function (ph) {
        var f = el("figure");
        f.style.maxWidth = ph[1] + "px"; // never upscale a photo past its own pixels, so small ones stay sharp
        var img = el("img");
        img.src = P + ph[0] + ".webp";
        img.width = ph[1]; img.height = ph[2];
        img.alt = ph[4];
        img.decoding = "async";
        f.appendChild(img);
        f.appendChild(el("figcaption", null, ph[3]));
        g.appendChild(f);
      });
      gal.appendChild(g);
    } else {
      gal.appendChild(el("p", "role-empty", "Photos coming soon."));
    }
    body.appendChild(gal);

    if (count) count.textContent = (i + 1) + " of " + cards.length;
    if (scroller) scroller.scrollTop = 0;
  }

  function open(i, from) {
    opener = from || null;
    render(i);
    document.documentElement.classList.add("role-open");
    if (!dlg.open) dlg.showModal();
    var close = document.getElementById("role-close");
    if (close) close.focus();
  }

  function step(n) { render((current + n + cards.length) % cards.length); }

  cards.forEach(function (card, i) {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", card.querySelector("h3").textContent + ", " + card.querySelector(".meta").textContent + ". View details");
    card.addEventListener("click", function () { open(i, card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i, card); }
    });
  });

  document.getElementById("role-close").addEventListener("click", function () { dlg.close(); });
  document.getElementById("role-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("role-next").addEventListener("click", function () { step(1); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  });
  dlg.addEventListener("close", function () {
    document.documentElement.classList.remove("role-open");
    if (opener) opener.focus();
  });
})();
