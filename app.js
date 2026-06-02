const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

const SITE_CONFIG = {
  dataLinks: [{
    label: "Phase 1 Data",
    url: "TPC_IJCAI_2026_phase1_EN.zip"
  }, {
    label: "Phase 1 Data Index",
    url: "TPC_IJCAI_2026_phase1.txt"
  }, {
    label: "Evaluation Code",
    url: "https://github.com/LAMDASZ-ML/ChinaTravel/blob/main/eval_tpc.py"
  }, {
    label: "Phase 2 Baseline Code",
    url: "https://github.com/LAMDASZ-ML/ChinaTravel"
  }],
  evaluationCodeUrl: "https://github.com/LAMDASZ-ML/ChinaTravel/blob/main/eval_tpc.py",
  registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdobQls23x6L2APaJektE85TqCFvUgESCkg8ZcSnb3NvLyzhg/viewform?usp=dialog",
  organizers: [{
    initial: "LG",
    name: "Lan-Zhe Guo",
    photo: "figures/Lan-Zhe%20Guo.jpeg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "YL",
    name: "Yu-Feng Li",
    photo: "figures/Yu-Feng%20Li.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "JS",
    name: "Jie-Jing Shao",
    photo: "figures/Jie-Jing%20Shao.png",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "BZ",
    name: "Bo-Wen Zhang",
    photo: "figures/Bo-Wen%20Zhang.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "PH",
    name: "Peng-Yu Hua",
    photo: "figures/Peng-Yu%20Hua.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "JC",
    name: "Jia-Wei Cao",
    photo: "figures/Jia-Wei%20Cao.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "JY",
    name: "Jin Ye",
    photo: "figures/Jin%20Ye.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }, {
    initial: "SL",
    name: "Song-Lin Lv",
    photo: "figures/Song-Lin%20Lv.jpg",
    aff: "Nanjing University",
    role: "Organizer"
  }]
};

/* ────────────────────────────────────────────────────────────
   LOGO MARK — geometric seal
   Three variants the user can toggle in Tweaks.
   ──────────────────────────────────────────────────────────── */
function LogoMark({
  size = 34,
  variant = "seal"
}) {
  if (variant === "seal") {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "1.5",
      width: "37",
      height: "37",
      stroke: "currentColor",
      strokeWidth: "1.4",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5.5",
      y: "5.5",
      width: "29",
      height: "29",
      stroke: "var(--seal)",
      strokeWidth: "1",
      fill: "none",
      opacity: "0.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 14 C 12 12, 14 11, 17 11 L 20 11",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "square",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 14 L 12 26 C 12 28, 14 29, 17 29 L 20 29",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "square",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 11 L 30 11",
      stroke: "var(--seal)",
      strokeWidth: "1.6",
      strokeLinecap: "square"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 11 L 26 29",
      stroke: "var(--seal)",
      strokeWidth: "1.6",
      strokeLinecap: "square"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "20",
      r: "1.6",
      fill: "var(--seal)"
    }));
  }
  if (variant === "circle") {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 40 40",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "20",
      r: "18",
      stroke: "currentColor",
      strokeWidth: "1.3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "20",
      r: "14",
      stroke: "var(--seal)",
      strokeWidth: "1",
      opacity: "0.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 20 Q 16 12, 20 20 T 28 20",
      stroke: "currentColor",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "20",
      r: "2",
      fill: "var(--seal)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28",
      cy: "20",
      r: "2",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "20",
      r: "1.4",
      fill: "var(--seal)"
    }));
  }
  // minimal
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 30 L 14 14 L 22 24 L 34 10",
    stroke: "currentColor",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "30",
    r: "2.2",
    fill: "var(--seal)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "24",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "34",
    cy: "10",
    r: "2.2",
    fill: "var(--seal)"
  }));
}

/* ────────────────────────────────────────────────────────────
   HERO VISUAL — travel planning graph
   ──────────────────────────────────────────────────────────── */
function PlanningGraph() {
  const nodes = [{
    id: "A",
    x: 18,
    y: 28,
    label: "Origin"
  }, {
    id: "B",
    x: 52,
    y: 18,
    label: "Attraction"
  }, {
    id: "C",
    x: 82,
    y: 34,
    label: "Hotel"
  }, {
    id: "D",
    x: 38,
    y: 58,
    label: "Restaurant"
  }, {
    id: "E",
    x: 72,
    y: 70,
    label: "Attraction"
  }, {
    id: "F",
    x: 22,
    y: 82,
    label: "Return"
  }];
  const edges = [[0, 1], [1, 2], [2, 4], [0, 3], [3, 4], [3, 5], [4, 5], [1, 3]];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "18,28 52,18 82,34 72,70 22,82 38,58",
    fill: "color-mix(in oklab, var(--seal) 8%, transparent)",
    stroke: "var(--seal)",
    strokeWidth: "0.15",
    strokeDasharray: "0.8 0.8",
    opacity: "0.6"
  }), edges.map(([a, b], i) => {
    const n1 = nodes[a],
      n2 = nodes[b];
    const isHighlight = i % 3 === 0;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: n1.x,
      y1: n1.y,
      x2: n2.x,
      y2: n2.y,
      stroke: isHighlight ? "var(--seal)" : "var(--ink)",
      strokeWidth: isHighlight ? 0.35 : 0.18,
      strokeDasharray: isHighlight ? "0" : "0.6 0.6",
      opacity: isHighlight ? 0.85 : 0.35
    });
  }), nodes.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: n.id
  }, /*#__PURE__*/React.createElement("circle", {
    cx: n.x,
    cy: n.y,
    r: 1.8,
    fill: "var(--bg)",
    stroke: "var(--ink)",
    strokeWidth: "0.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: n.x,
    cy: n.y,
    r: 0.6,
    fill: i === 0 || i === nodes.length - 1 ? "var(--seal)" : "var(--ink)"
  }), /*#__PURE__*/React.createElement("text", {
    x: n.x + 2.6,
    y: n.y + 0.8,
    fontFamily: "var(--mono)",
    fontSize: "1.6",
    fill: "var(--muted)",
    style: {
      letterSpacing: "0.05em"
    }
  }, n.id, " \xB7 ", n.label))), /*#__PURE__*/React.createElement("circle", {
    cx: nodes[1].x,
    cy: nodes[1].y,
    r: 1.8,
    fill: "none",
    stroke: "var(--seal)",
    strokeWidth: "0.2",
    opacity: "0.8"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "1.8",
    to: "5",
    dur: "2.5s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    from: "0.8",
    to: "0",
    dur: "2.5s",
    repeatCount: "indefinite"
  })));
}
function HeroGridVariant() {
  // An alternate: sparse dotted cities + ranked list of tasks
  const cities = [{
    name: "Beijing",
    x: 62,
    y: 32
  }, {
    name: "Shanghai",
    x: 78,
    y: 58
  }, {
    name: "Chengdu",
    x: 36,
    y: 56
  }, {
    name: "Guangzhou",
    x: 62,
    y: 78
  }, {
    name: "Xi'an",
    x: 48,
    y: 42
  }, {
    name: "Hangzhou",
    x: 74,
    y: 58
  }, {
    name: "Kunming",
    x: 32,
    y: 72
  }, {
    name: "Harbin",
    x: 72,
    y: 16
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, cities.map((c, i) => /*#__PURE__*/React.createElement("g", {
    key: c.name
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c.x,
    cy: c.y,
    r: 0.8,
    fill: "var(--ink)",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: c.x,
    cy: c.y,
    r: 2.4,
    fill: "none",
    stroke: "var(--seal)",
    strokeWidth: "0.18",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    x: c.x + 3.2,
    y: c.y + 0.8,
    fontFamily: "var(--mono)",
    fontSize: "1.5",
    fill: "var(--muted)"
  }, c.name))), cities.slice(0, -1).map((c, i) => {
    const n = cities[i + 1];
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: c.x,
      y1: c.y,
      x2: n.x,
      y2: n.y,
      stroke: "var(--seal)",
      strokeWidth: "0.15",
      strokeDasharray: "0.5 0.8",
      opacity: "0.6"
    });
  }));
}

/* ────────────────────────────────────────────────────────────
   COUNTDOWN — to IJCAI 2026 opening
   ──────────────────────────────────────────────────────────── */
function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const delta = Math.max(0, target - now);
  const days = Math.floor(delta / 86400000);
  const hours = Math.floor(delta % 86400000 / 3600000);
  const mins = Math.floor(delta % 3600000 / 60000);
  const secs = Math.floor(delta % 60000 / 1000);
  return {
    days,
    hours,
    mins,
    secs
  };
}

/* ────────────────────────────────────────────────────────────
   SECTIONS
   ──────────────────────────────────────────────────────────── */
function SectionHead({
  num,
  title,
  kicker,
  soon
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-num"
  }, "\xA7 ", num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), kicker && /*#__PURE__*/React.createElement("div", {
    className: "sec-kicker"
  }, kicker), soon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "soon-pill"
  }, "Coming Soon"))));
}
function Home({
  heroVariant
}) {
  const target = new Date("2026-08-15T09:00:00+02:00").getTime();
  const {
    days,
    hours,
    mins,
    secs
  } = useCountdown(target);
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ping"
  }), " IJCAI 2026 \xB7 Bremen"), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", null, "Competition Track"), /*#__PURE__*/React.createElement("span", {
    className: "line lg-only"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-only"
  }, "v2026.1")), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "The 2nd", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Travel Planning"), /*#__PURE__*/React.createElement("br", null), "Challenge with", /*#__PURE__*/React.createElement("br", null), "Agentic\xA0AI"), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "TPC returns to IJCAI 2026. A global challenge for language agents that must turn open\u2011ended traveler intent into feasible, preference\u2011aligned, multi\u2011day itineraries across China."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.registrationFormUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-primary"
  }, "Register Now ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197")), /*#__PURE__*/React.createElement("a", {
    href: "#dates",
    className: "btn btn-ghost"
  }, "View Timeline ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2193"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta",
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Conference"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "IJCAI-ECAI 2026", /*#__PURE__*/React.createElement("small", null, "15 \u2013 21 August"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Venue"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Bremen", /*#__PURE__*/React.createElement("small", null, "Germany"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Opens in"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, days, "d ", hours, "h ", String(mins).padStart(2, "0"), "m ", String(secs).padStart(2, "0"), "s", /*#__PURE__*/React.createElement("small", null, "until the main conference"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual"
  }, /*#__PURE__*/React.createElement("span", {
    className: "corner tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner tr"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner bl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner br"
  }), /*#__PURE__*/React.createElement("span", {
    className: "label-top"
  }, heroVariant === "graph" ? "Fig. 01 · Planning Graph" : "Fig. 01 · Destination Atlas"), /*#__PURE__*/React.createElement("span", {
    className: "label-coord"
  }, "39.9\xB0N \xB7 116.4\xB0E"), /*#__PURE__*/React.createElement("span", {
    className: "label-bot"
  }, heroVariant === "graph" ? "Constraint-satisfied tour" : "Sample itinerary · 7 days"), heroVariant === "graph" ? /*#__PURE__*/React.createElement(PlanningGraph, null) : /*#__PURE__*/React.createElement(HeroGridVariant, null)))));
}
function Ticker() {
  const items = ["TPC 2026", "·", "2nd Edition", "·", "Agentic AI · Travel Planning", "·", "IJCAI 2026 Competition", "·", "Bremen · Germany", "·", "15–21 August 2026"];
  const row = /*#__PURE__*/React.createElement("span", null, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: it === "·" ? "dot" : ""
  }, it)));
  return /*#__PURE__*/React.createElement("div", {
    className: "ticker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track"
  }, row, row, row, row));
}
function Overview() {
  const pillars = [{
    n: "01",
    t: "Real‑World Grounding",
    d: "Queries and constraints are based on authentic Chinese travel scenarios. Transport networks, points of interest (POIs), hotels, and opening hours are faithfully modeled. Every itinerary is checked against real conditions on the ground."
  }, {
    n: "02",
    t: "Preference Alignment",
    d: "Beyond feasibility: agents must surface and negotiate user preferences through natural language and strategic tool use. The challenge rewards systems that listen closely and adapt plans to what travellers actually want."
  }, {
    n: "03",
    t: "Verifiable Plans",
    d: "Generated itineraries are checked using automated verifiers to ensure correctness, constraint satisfaction, and executability. Hard environmental and logical constraints are evaluated with explicit pass/fail criteria."
  }, {
    n: "04",
    t: "Open Participation",
    d: /*#__PURE__*/React.createElement(React.Fragment, null, "Phase 1: open to all teams. Phase 2: the top 5 Phase 1 teams submit harness code for final evaluation on ", /*#__PURE__*/React.createElement("a", {href: "https://huggingface.co/Qwen/Qwen3.6-27B", target: "_blank", rel: "noreferrer", style: {color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px"}}, "Qwen3.6‑27B"), ". Final ranking determines 1st, 2nd, and 3rd place.")
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "overview",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01 \xB7 Overview",
    title: "A challenge for <em>real-world</em> travel planning.",
    kicker: "TPC asks teams to build language agents that convert open\u2011ended traveler intent into concrete, multi\u2011day itineraries that survive real\u2011world constraints: transport, cost, time windows, preferences, and common sense."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1px",
      background: "var(--rule)",
      border: "1px solid var(--rule)"
    },
    className: "pillars"
  }, pillars.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      background: "var(--bg)",
      padding: "28px 24px",
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--seal)"
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      lineHeight: 1.1
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.55,
      whiteSpace: "pre-line"
    }
  }, p.d)))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 900px) { .pillars { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 520px) { .pillars { grid-template-columns: 1fr !important; } }
        `)));
}
function Dates() {
  const milestones = [{
    phase: "Milestone 01",
    label: "Data Release and Submission Opens",
    time: "June 1, 2026",
    active: true
  }, {
    phase: "Milestone 02",
    label: "Stage 1 Submission Deadline",
    time: "August 1, 2026"
  }, {
    phase: "Milestone 03",
    label: "Stage 2 Evaluation",
    time: "August 1-7, 2026"
  }, {
    phase: "Milestone 04",
    label: "Technical Report Deadline",
    time: "August 7, 2026"
  }, {
    phase: "Milestone 05",
    label: "Final Results Announced",
    time: "August 10, 2026"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "dates",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "03 \xB7 Important Dates",
    title: "Timeline to <em>Bremen</em>.",
    kicker: "Key dates for data release, submissions, evaluation, technical reports, and final results."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dates"
  }, milestones.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "date-cell" + (m.active ? " active" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "phase"
  }, m.phase), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, m.label), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, m.time)))))));
}
function Tracks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "tracks",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "04 \xB7 Track",
    title: "One track. Two <em>phases</em>.",
    kicker: "The 2026 edition runs a single Agentic AI track. In Phase 1, teams submit predictions to the public leaderboard. In Phase 2, teams submit a self‑contained harness evaluated on a unified closed‑source model.",
    soon: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 1,
      background: "var(--rule)",
      border: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "track",
    style: {
      minHeight: "auto",
      padding: "44px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "track-idx"
  }, "Agentic AI Track"), /*#__PURE__*/React.createElement("div", {
    className: "track-name"
  }, "Travel Planning with ", /*#__PURE__*/React.createElement("em", null, "Agentic AI")), /*#__PURE__*/React.createElement("div", {
    className: "track-desc",
    style: {
      maxWidth: "60ch"
    }
  }, "Build a language agent that takes an open\u2011ended traveler request and returns a concrete, multi\u2011day itinerary across Chinese cities. Your agent is free to interleave tool calls, reasoning, and re\u2011planning. We only score the final plan against the reference verifier."), /*#__PURE__*/React.createElement("div", {
    className: "track-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Input"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Natural-language query")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Output"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Structured itinerary")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Environment"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Tool sandbox \xB7 POI, transit, hotels")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Scoring"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Reference verifier"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)",
      marginBottom: 18,
      paddingBottom: 10,
      borderBottom: "1px solid var(--fg)"
    }
  }, "Evaluation unfolds in two phases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--rule)",
      border: "1px solid var(--rule)"
    },
    className: "phase-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg)",
      padding: "36px 32px",
      minHeight: 320,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--seal)"
    }
  }, "Phase 1 \xB7 Public Leaderboard"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.05,
      letterSpacing: "-0.015em"
    }
  }, "Run ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "locally"), ", submit predictions."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, "Teams may use any method to generate predictions — any LLM, prompting strategy, toolchain, or local system. Generate predictions on the official data released by the organizers and submit the prediction file to the public leaderboard, where the organizers score each submission."), /*#__PURE__*/React.createElement("div", {
    className: "track-meta",
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Compute"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Your machines")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "LLM"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Participant's choice")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Submits"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Prediction files")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg)",
      padding: "36px 32px",
      minHeight: 320,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--seal)"
    }
  }, "Phase 2 \xB7 Final Test"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.05,
      letterSpacing: "-0.015em"
    }
  }, "Submit a ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "harness"), ". We run it."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, "The top 5 teams from Phase 1 submit a self\u2011contained harness \u2014 agent code, prompts, scaffolding, and the files needed to run it. Organizers evaluate every harness on a unified closed\u2011source model, ", /*#__PURE__*/React.createElement("a", {href: "https://huggingface.co/Qwen/Qwen3.6-27B", target: "_blank", rel: "noreferrer", style: {color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px"}}, "Qwen3.6\u201127B"), ", deployed via SGLang on 2\xD7 A800 80G GPUs (no NVLink). All harnesses run on a held\u2011out test set, and final results determine the 1st, 2nd, and 3rd place winners.")), /*#__PURE__*/React.createElement("div", {
    className: "track-meta",
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Compute"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "2\xD7 A800 80G \xB7 SGLang")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "LLM"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, /*#__PURE__*/React.createElement("a", {href: "https://huggingface.co/Qwen/Qwen3.6-27B", target: "_blank", rel: "noreferrer", style: {color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px"}}, "Qwen3.6-27B"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Submits"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Runnable harness"))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 820px) { .phase-grid { grid-template-columns: 1fr !important; } }`))));
}
function Data() {
  const phase1Links = SITE_CONFIG.dataLinks.slice(0, 3);
  const phase2Links = SITE_CONFIG.dataLinks.slice(3);
  const renderLink = link => link.url ? /*#__PURE__*/React.createElement("a", {
    className: "soon-pill",
    href: link.url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      textDecoration: "none"
    },
    key: link.label
  }, link.label, " \xB7 Open") : /*#__PURE__*/React.createElement("span", {
    className: "soon-pill",
    key: link.label,
    style: {
      opacity: 0.65,
      cursor: "default"
    }
  }, link.label, " \xB7 Link Pending");
  return /*#__PURE__*/React.createElement("section", {
    id: "data",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "05 \xB7 Data",
    title: "An <em>open</em> atlas of travel scenarios.",
    kicker: "The challenge ships with curated traveler queries and a tool environment that models transportation, POIs, hotels, restaurants, and opening hours across dozens of Chinese cities."
  }), /*#__PURE__*/React.createElement("div", {
    className: "placeholder-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)",
      marginBottom: 8
    }
  }, "Phase 1"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      marginBottom: 14
    }
  }, "Dataset and submission index."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.55
    }
  }, "The Phase 1 release will include public task data, the submission index, and the official evaluation code for leaderboard submission."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 10
    }
  }, phase1Links.map(renderLink))), /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      marginLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)",
      marginBottom: 8
    }
  }, "Phase 2"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      marginBottom: 14
    }
  }, "Baseline code for final evaluation."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.55
    }
  }, "The Phase 2 release will include the baseline code and runnable scaffold used for final evaluation."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 10
    }
  }, phase2Links.map(renderLink))), /*#__PURE__*/React.createElement("style", null, `
          #data .placeholder-panel {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          @media (max-width: 820px) {
            #data .placeholder-panel { grid-template-columns: 1fr; }
            #data .placeholder-panel .inner { margin-left: 0 !important; }
            #data .placeholder-panel .inner > div:last-child { grid-template-columns: 1fr !important; }
          }
        `))));
}
function Rules() {
  const rules = [{
    k: "Eligibility",
    v: "Open to teams from universities, research institutions, and companies worldwide. At least one member of each team must register for IJCAI-ECAI 2026.",
    m: "Policy"
  }, {
    k: "Team Size",
    v: "No fixed limit on the number of participants per team. Each participant may join at most one team per track.",
    m: "Policy"
  }, {
    k: "Track 1 · Prediction",
    v: "Teams may use any method — any LLM, prompting strategy, toolchain, or local system — to generate predictions on the official dataset. Only prediction results are submitted, not code or models. Package submissions as a .zip named {TeamName}_v{x}.zip.",
    m: "Tracks"
  }, {
    k: "Track 2 · Harness",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "The top 5 Phase 1 teams submit a self‑contained harness (agent code, prompts, scaffolding). Teams may develop and debug against the ", /*#__PURE__*/React.createElement("a", {
      href: "https://huggingface.co/datasets/LAMDA-NeSy/ChinaTravel",
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: "var(--accent)",
        textDecoration: "underline",
        textUnderlineOffset: "3px"
      }
    }, "ChinaTravel dataset"), ". All harnesses run on a held‑out test set. The final evaluation uses ", /*#__PURE__*/React.createElement("a", {
      href: "https://huggingface.co/Qwen/Qwen3.6-27B",
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: "var(--accent)",
        textDecoration: "underline",
        textUnderlineOffset: "3px"
      }
    }, "Qwen3.6‑27B"), ", deployed via SGLang on 2× A800 80G GPUs (no NVLink)."),
    m: "Tracks"
  }, {
    k: "Evaluation",
    v: "Phase 1: instant scoring on the public leaderboard with unlimited iteration (daily submission cap applies); the top 5 teams advance to Phase 2. Phase 2: each harness is run five times on the held‑out test set and scores are averaged. Final rankings determine 1st, 2nd, and 3rd place, published by the organizers.",
    m: "Evaluation"
  }, {
    k: "Code of Conduct",
    v: "Participants must follow the IJCAI 2026 code of conduct and the competition's full terms. Cheating, plagiarism, attacks on the evaluation system, and sharing non-public answers are strictly prohibited and may result in disqualification.",
    m: "Conduct"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "rules",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "06 \xB7 Rules",
    title: "The <em>rules</em> of the road.",
    kicker: "Eligibility, team size, and the two competition tracks at a glance. The full rulebook will be published with the task specification."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rows"
  }, rules.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-k"
  }, r.k), /*#__PURE__*/React.createElement("div", {
    className: "r-v"
  }, r.v), /*#__PURE__*/React.createElement("div", {
    className: "r-m"
  }, r.m))))));
}
function Evaluation() {
  const metrics = [{
    k: "EPR‑micro",
    v: "Environmental Pass Ratio (micro)",
    w: "10%"
  }, {
    k: "EPR‑macro",
    v: "Environmental Pass Ratio (macro)",
    w: "10%"
  }, {
    k: "C‑LPR",
    v: "Conditional Logical Pass Rate",
    w: "25%"
  }, {
    k: "FPR",
    v: "Final Pass Ratio",
    w: "40%"
  }, {
    k: "DAV",
    v: "Daily Avg. Attractions Visited",
    w: "5%"
  }, {
    k: "ATT",
    v: "Averaged Transportation Time",
    w: "5%"
  }, {
    k: "DDR",
    v: "Daily Dining Recommendations",
    w: "5%"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "evaluation",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "06 \xB7 Evaluation & Leaderboard",
    title: "How the <em>final score</em> is calculated.",
    kicker: "Each submitted itinerary is evaluated by the official verifier. The final score is a weighted sum of hard-constraint metrics and soft-preference metrics; hard constraints account for 85% of the score."
  }), /*#__PURE__*/React.createElement("div", {
    className: "placeholder-panel",
    style: {
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)",
      marginBottom: 8
    }
  }, "Official scoring"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {style: {fontSize: 15}}, "$$\\displaystyle\\text{Overall Score} = 10\\% \\cdot \\text{EPR-micro} + 10\\% \\cdot \\text{EPR-macro} + 25\\% \\cdot \\text{C-LPR} + 40\\% \\cdot \\text{FPR} + 5\\% \\cdot \\text{DAV-Score} + 5\\% \\cdot \\text{ATT-Score} + 5\\% \\cdot \\text{DDR-Score}$$")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.6,
      marginBottom: 24
    }
  }, "Hard constraints — EPR‑micro, EPR‑macro (environment feasibility), C‑LPR (conditional logic satisfaction), and FPR (final pass rate) — account for 85% of the score. Soft preferences — DAV (attractions visited), ATT (transportation time), DDR (dining recommendations) — account for 15%."), /*#__PURE__*/React.createElement("div", {
    className: "rows",
    style: {
      marginBottom: 24
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: m.k
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-k"
  }, m.k), /*#__PURE__*/React.createElement("div", {
    className: "r-v"
  }, m.v), /*#__PURE__*/React.createElement("div", {
    className: "r-m"
  }, m.w)))), /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.evaluationCodeUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-primary"
  }, "View Evaluation Code ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197"))))));
}

function Registration() {
  return /*#__PURE__*/React.createElement("section", {
    id: "registration",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "07 \xB7 Registration",
    title: "Register for the <em>challenge</em>.",
    kicker: "Complete the Google Form to submit your team information and receive follow-up competition updates."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--rule)",
      background: "var(--paper)",
      padding: "44px 40px",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--seal)",
      marginBottom: 10
    }
  }, "Registration form"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 30,
      lineHeight: 1.05,
      marginBottom: 18
    }
  }, "Team registration is now open via Google Forms."), /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.registrationFormUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-primary",
    style: {
      display: "inline-flex"
    }
  }, "Register Now ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    },
    className: "lg-only"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)"
    }
  }, "Est. Participants"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 64,
      lineHeight: 1
    }
  }, "100+"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)"
    }
  }, "Across 20+ countries")))));
}
function Submission() {
  const hardMetrics = [{
    k: "EPR‑micro",
    v: "Environmental Pass Ratio (micro)",
    w: "10%",
    d: "Fraction of all environment constraints passed across plans.  \\(P\\) is the set of output plans, \\(1_{passed(c,p)}\\) indicates whether constraint \\(c\\) is satisfied in plan \\(p\\).",
    f: "\\(\\displaystyle\\text{EPR-micro} = \\frac{\\sum_{p\\in P}\\sum_{c\\in Env} 1_{passed(c,p)}}{|P| \\cdot |Env|}\\)"
  }, {
    k: "EPR‑macro",
    v: "Environmental Pass Ratio (macro)",
    w: "10%",
    d: "Fraction of plans where every environment constraint is satisfied.  \\(P\\) is the set of output plans, \\(1_{passed(c,p)}\\) indicates whether constraint \\(c\\) is satisfied in plan \\(p\\).",
    f: "\\(\\displaystyle\\text{EPR-macro} = \\frac{\\sum_{p\\in P}\\prod_{c\\in Env} 1_{passed(c,p)}}{|P|}\\)"
  }, {
    k: "C‑LPR",
    v: "Conditional Logical Pass Rate",
    w: "25%",
    d: "How well plans satisfy personalised conditional constraints, weighted by environment pass.  \\(P\\) is the set of output plans, \\(C_p\\) is the set of constraint requirements in the query corresponding to plan \\(p\\), \\(1_{passed(c,p)}\\) indicates whether constraint \\(c\\) is satisfied in plan \\(p\\).",
    f: "\\(\\displaystyle\\text{C-LPR} = \\frac{\\sum_{p\\in P} 1_{passed(Env,p)} \\cdot \\sum_{c\\in C_p} 1_{passed(c,p)}}{|P|}\\)"
  }, {
    k: "FPR",
    v: "Final Pass Ratio",
    w: "40%",
    d: "Fraction of plans that pass all environment and logical constraints — the hard-constraint pass rate.  \\(P\\) is the set of output plans, \\(C_p\\) is the set of constraint requirements in the query corresponding to plan \\(p\\), \\(1_{passed(c,p)}\\) indicates whether constraint \\(c\\) is satisfied in plan \\(p\\).",
    f: "\\(\\displaystyle\\text{FPR} = \\frac{\\sum_{p\\in P} 1_{passed(Env,p)} \\cdot \\prod_{c\\in C_p} 1_{passed(c,p)}}{|P|}\\)"
  }];
  const softMetrics = [{
    k: "DAV",
    v: "Daily Avg. Attractions Visited",
    w: "5%",
    d: "More is better; normalised to [0, 4].",
    f: "\\(\\text{DAV-score} = (\\textit{DAV} - 0) / 4\\)"
  }, {
    k: "ATT",
    v: "Averaged Transportation Time",
    w: "5%",
    d: "Less is better; clamped to [15, 120] min.",
    f: "\\(\\text{ATT-score} = \\max(\\min((120-\\textit{ATT}) / (120-15), 1), 0)\\)"
  }, {
    k: "DDR",
    v: "Daily Dining Recommendations",
    w: "5%",
    d: "More is better; normalised to [0, 3].",
    f: "\\(\\text{DDR-score} = \\min((\\textit{DDR} - 0) / (3-0), 1)\\)"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "submission",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "08 \xB7 Submission",
    title: "How <em>submissions</em> will work.",
    kicker: "Two rounds: prediction results in Round 1, harness code in Round 2."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 1,
      background: "var(--rule)",
      border: "1px solid var(--rule)"
    },
    className: "sub-grid"
  }, [{
    n: "1",
    t: "Round 1 · Prediction",
    d: "Teams may use any method to generate predictions — any LLM, prompting strategy, toolchain, or local system. Generate predictions on the official data released by the organizers and submit the prediction file via the Round 1 submission link. The organizers will score each submission.",
    note: "Package submissions as a .zip named \n{TeamName}_v{x}.zip\n — for example, NJUTravel_v1.zip.",
    lk: "Submit (Round 1)",
    lu: "https://box.nju.edu.cn/u/d/998d62d9bd8747ea8659/"
  }, {
    n: "2",
    t: "Round 2 · Harness",
    d: /*#__PURE__*/React.createElement(React.Fragment, null, "The top 5 Phase 1 teams submit a self‑contained harness — agent code, prompts, scaffolding, and the files needed to run it. Organizers evaluate every harness on a unified closed‑source model, ", /*#__PURE__*/React.createElement("a", {href: "https://huggingface.co/Qwen/Qwen3.6-27B", target: "_blank", rel: "noreferrer", style: {color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px"}}, "Qwen3.6‑27B"), ", deployed via SGLang on 2× A800 80G GPUs (no NVLink). All harnesses run on a held‑out test set. The Round 2 submission portal and format will be announced later.")
  }, {
    n: "3",
    t: "Final Ranking",
    d: "Phase 2 results determine the 1st, 2nd, and 3rd place winners. Top‑ranked teams are also invited to submit a short system description paper for the competition proceedings."
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--bg)",
      padding: "32px 28px",
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--seal)",
      fontSize: 22,
      letterSpacing: "0.05em"
    }
  }, s.n.padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.05
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.55
    }
  }, s.d), s.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55,
      fontFamily: "var(--mono)",
      marginTop: 8,
      paddingLeft: 10,
      borderLeft: "2px solid var(--seal)",
      whiteSpace: "pre-line"
    }
  }, s.note), s.lk && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: s.lu,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "var(--accent)",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      fontSize: 13,
      fontFamily: "var(--mono)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, s.lk, " ↗"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      border: "1px solid var(--rule)",
      background: "var(--paper)",
      padding: "36px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--muted)",
      marginBottom: 8
    }
  }, "Phase 1 Evaluation Metrics"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      lineHeight: 1.15,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {style: {fontSize: 15}}, "$$\\displaystyle\\text{Score} = 10\\% \\cdot \\text{EPR-micro} + 10\\% \\cdot \\text{EPR-macro} + 25\\% \\cdot \\text{C-LPR} + 40\\% \\cdot \\text{FPR} + 5\\% \\cdot \\text{DAV-Score} + 5\\% \\cdot \\text{ATT-Score} + 5\\% \\cdot \\text{DDR-Score}$$")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 14,
      lineHeight: 1.6,
      marginBottom: 18
    }
  }, "Hard-constraint metrics (EPR‑micro, EPR‑macro, C‑LPR, FPR) account for 85% of the total score. Soft-preference metrics (DAV, ATT, DDR) account for 15%. The official evaluation script runs five times and averages the results for the final score."), /*#__PURE__*/React.createElement("div", {
    className: "rows",
    style: {
      marginBottom: 22
    }
  }, [...hardMetrics, ...softMetrics].map(m => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: m.k,
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-k"
  }, m.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "r-v",
    style: {
      fontSize: 18,
      lineHeight: 1.25
    }
  }, m.v), m.d && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      lineHeight: 1.4,
      marginTop: 4,
      fontFamily: "var(--mono)"
    }
  }, m.d), m.f && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      lineHeight: 1.4,
      marginTop: 6,
      fontFamily: "var(--mono)"
    }
  }, m.f)), /*#__PURE__*/React.createElement("div", {
    className: "r-m"
  }, m.w)))), /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.evaluationCodeUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-primary"
  }, "View Evaluation Code ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 820px) { .sub-grid { grid-template-columns: 1fr !important; } }`)));
}
function Organizers() {
  return /*#__PURE__*/React.createElement("section", {
    id: "organizers",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "09 \xB7 Organizers",
    title: "The <em>people</em> behind it.",
    kicker: "Full organizer list and biographies will be published shortly."
  }), /*#__PURE__*/React.createElement("div", {
    className: "org-grid"
  }, SITE_CONFIG.organizers.map((o, i) => /*#__PURE__*/React.createElement("div", {
    className: "org-cell",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "org-avatar"
  }, o.photo ? /*#__PURE__*/React.createElement("img", {
    src: o.photo,
    alt: o.name
  }) : o.initial), /*#__PURE__*/React.createElement("div", {
    className: "org-name"
  }, o.name), /*#__PURE__*/React.createElement("div", {
    className: "org-aff"
  }, o.aff)), /*#__PURE__*/React.createElement("div", {
    className: "org-role"
  }, o.role))))));
}
function News() {
  const items = [{
    d: "Now Open",
    t: "Registration interest form is live — sign up to receive task specification, dataset announcements, and deadline reminders.",
    tag: "Announcement"
  }, {
    d: "1 Jun 2026",
    t: "Phase 1 data released. Public training set, submission index, and evaluation code available for download in the Data section.",
    tag: "Release"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "news",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02 \xB7 News & Updates",
    title: "Latest from the <em>organizers</em>.",
    kicker: "Follow along as deadlines, resources, and winners are announced."
  }), /*#__PURE__*/React.createElement("div", {
    className: "news-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "news-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "news-date"
  }, it.d), /*#__PURE__*/React.createElement("div", {
    className: "news-title"
  }, it.t), /*#__PURE__*/React.createElement("span", {
    className: "news-tag"
  }, it.tag))))));
}
function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [{
    q: "What is TPC?",
    a: "TPC (Travel Planning Challenge) is an open competition for evaluating language agents on real‑world travel planning in China. The 2026 edition, co‑located with IJCAI‑ECAI 2026 in Bremen, is the second iteration. Top 5 Phase 1 teams advance to Phase 2; final results determine the 1st, 2nd, and 3rd place winners."
  }, {
    q: "Who can participate?",
    a: "Open to teams from universities, research institutions, and companies worldwide. At least one member per team must register for IJCAI‑ECAI 2026. No fixed team‑size limit; each participant may join at most one team per track."
  }, {
    q: "How many teams advance to Phase 2?",
    a: "The top 5 teams from Phase 1 advance to Phase 2, subject to eligibility verification and compliance with the competition rules. After Phase 2 evaluation, the 1st, 2nd, and 3rd place winners are determined directly by the Phase 2 results."
  }, {
    q: "Is there a prize?",
    a: "Awards will be presented to the 1st, 2nd, and 3rd place teams. Top‑ranked Phase 2 teams are also invited to submit a system description paper for the competition proceedings."
  }, {
    q: "Which languages / frameworks are allowed?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Phase 1 (Prediction): any method is allowed — any LLM, prompting strategy, toolchain, or local system. Phase 2 (Harness): teams submit a self‑contained harness; the organizers run it on a unified closed‑source model (", /*#__PURE__*/React.createElement("a", {href: "https://huggingface.co/Qwen/Qwen3.6-27B", target: "_blank", rel: "noreferrer", style: {color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px"}}, "Qwen3.6‑27B"), "). Reproducibility is expected for top‑ranked teams.")
  }, {
    q: "Is this a continuation of the 2025 edition?",
    a: "Yes. This is the second edition. The task has been substantially expanded in scope, difficulty, and evaluation rigor based on feedback from the 2025 edition."
  }, {
    q: "How do I get notified?",
    a: "Join the mailing list in the Registration section, or follow the organizers on the contact channels listed below."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "10 \xB7 FAQ",
    title: "Questions, <em>answered</em>."
  }), /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq-item" + (open === i ? " open" : ""),
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q"
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "toggle"
  }, open === i ? "– Close" : "+ Open")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, f.a))))));
}
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "cta-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", null, "See you in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Bremen"), ", August 2026."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.registrationFormUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "btn",
    style: {
      background: "var(--seal)",
      color: "#fff"
    }
  }, "Register Now ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197")), /*#__PURE__*/React.createElement("a", {
    href: "https://2026.ijcai.org",
    target: "_blank",
    rel: "noreferrer",
    className: "btn",
    style: {
      background: "transparent",
      color: "inherit",
      border: "1px solid currentColor"
    }
  }, "IJCAI 2026 Site ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2197"))), /*#__PURE__*/React.createElement("div", {
    className: "row-contact"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:shaojj@lamda.nju.edu.cn",
    style: {
      color: "inherit",
      textDecoration: "none",
      borderBottom: "1px solid currentColor"
    }
  }, "shaojj", /*#__PURE__*/React.createElement("br", null), "@lamda.nju.edu.cn"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "GitHub"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/LAMDA-NeSy/ChinaTravel",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "inherit",
      textDecoration: "none",
      borderBottom: "1px solid currentColor"
    }
  }, "LAMDA-NeSy", /*#__PURE__*/React.createElement("br", null), "/ChinaTravel \u2197"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Conference"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "IJCAI-ECAI 2026", /*#__PURE__*/React.createElement("br", null), "Bremen \xB7 15\u201321 Aug")))));
}

/* ────────────────────────────────────────────────────────────
   TWEAKS PANEL
   ──────────────────────────────────────────────────────────── */
function Tweaks({
  tweaks,
  setTweak
}) {
  return /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Palette",
    value: tweaks.palette,
    onChange: v => setTweak("palette", v),
    options: [{
      value: "teal",
      label: "Teal"
    }, {
      value: "navy",
      label: "Navy"
    }, {
      value: "mono",
      label: "Mono"
    }]
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Mode",
    value: tweaks.mode,
    onChange: v => setTweak("mode", v),
    options: [{
      value: "light",
      label: "Light"
    }, {
      value: "dark",
      label: "Dark"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero Visual",
    value: tweaks.heroVariant,
    onChange: v => setTweak("heroVariant", v),
    options: [{
      value: "graph",
      label: "Graph"
    }, {
      value: "map",
      label: "Atlas"
    }]
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Logo Mark",
    value: tweaks.logoVariant,
    onChange: v => setTweak("logoVariant", v),
    options: [{
      value: "seal",
      label: "Seal"
    }, {
      value: "circle",
      label: "Circle"
    }, {
      value: "minimal",
      label: "Path"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Sections"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Show News",
    value: tweaks.showNews,
    onChange: v => setTweak("showNews", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Show FAQ",
    value: tweaks.showFAQ,
    onChange: v => setTweak("showFAQ", v)
  })));
}

/* ────────────────────────────────────────────────────────────
   APP
   ──────────────────────────────────────────────────────────── */
function App() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  // apply palette + mode to :root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-palette", tweaks.palette);
    root.setAttribute("data-mode", tweaks.mode);
  }, [tweaks.palette, tweaks.mode]);
  const nav = [{
    id: "overview",
    label: "Overview"
  }, {
    id: "news",
    label: "News"
  }, {
    id: "dates",
    label: "Dates"
  }, {
    id: "tracks",
    label: "Tracks"
  }, {
    id: "data",
    label: "Data"
  }, {
    id: "rules",
    label: "Rules"
  }, {
    id: "submission",
    label: "Submission"
  }, {
    id: "organizers",
    label: "Organizers"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap topbar-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 34,
    variant: tweaks.logoVariant
  })), /*#__PURE__*/React.createElement("span", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("b", null, "TPC 2026"), /*#__PURE__*/React.createElement("span", null, "Travel Planning Challenge \xB7 IJCAI"))), /*#__PURE__*/React.createElement("nav", {
    className: "primary"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id
  }, n.label))), /*#__PURE__*/React.createElement("a", {
    href: SITE_CONFIG.registrationFormUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "cta-register"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " Register Now"))), /*#__PURE__*/React.createElement(Home, {
    heroVariant: tweaks.heroVariant
  }), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Overview, null), tweaks.showNews && /*#__PURE__*/React.createElement(News, null), /*#__PURE__*/React.createElement(Dates, null), /*#__PURE__*/React.createElement(Tracks, null), /*#__PURE__*/React.createElement(Data, null), /*#__PURE__*/React.createElement(Rules, null), /*#__PURE__*/React.createElement(Registration, null), /*#__PURE__*/React.createElement(Submission, null), /*#__PURE__*/React.createElement(Organizers, null), tweaks.showFAQ && /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement("footer", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 TPC \xB7 Travel Planning Challenge \xB7 IJCAI 2026 Bremen"), /*#__PURE__*/React.createElement("div", null, "Last updated \xB7 Jun 2026 \xB7 v2026.1"))), /*#__PURE__*/React.createElement(Tweaks, {
    tweaks: tweaks,
    setTweak: setTweak
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
