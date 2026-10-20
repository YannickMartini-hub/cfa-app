// IIFE : tout le code est enfermé dans une fonction pour ne pas entrer
// en conflit avec d'autres scripts de la page.
(function () {
"use strict";
// Si quelque chose casse, on l'affiche au lieu d'un écran vide.
window.addEventListener("error", (e) => {
  const el = document.getElementById("app");
  if (el && !el.dataset.ok) el.innerHTML = '<div class="card" style="margin-top:20px"><b>Erreur au chargement</b><p class="small">' + String(e.message).replace(/</g, "&lt;") + '</p></div>';
});
// ============================================================
// app.js — la logique de l'app
// Organisation :
//   1. Sauvegarde de la progression (localStorage)
//   2. Petits outils (dates, HTML, touches de calculatrice)
//   3. Calculs : scores, révision espacée, XP
//   4. Les écrans (accueil, cours, formules, entraînement, examen)
//   5. Le moteur de quiz
//   6. Démarrage
// ============================================================

// ---------- 1. SAUVEGARDE ------------------------------------
// Toute ta progression tient dans un seul objet "state",
// enregistré dans le navigateur du téléphone.
const STORE_KEY = "cfa-l1-2027";
const EXAM_DATE = new Date("2027-02-22T09:00:00");
const TARGET = 0.8; // l'objectif : 80 % par topic

function freshState() {
  return {
    xp: 0,
    days: [],      // jours où tu as révisé (pour la série)
    srs: {},       // question id -> { box, due, n, ok, last }
    read: {},      // "moduleId:index" -> true quand une section est lue
    exams: []      // historique des examens blancs
  };
}
let state = load();

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? Object.assign(freshState(), JSON.parse(raw)) : freshState();
  } catch (e) {
    return freshState(); // stockage bloqué : l'app marche quand même, sans mémoire
  }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* rien à faire */ }
}

// ---------- 2. PETITS OUTILS ---------------------------------
const $ = (sel) => document.querySelector(sel);
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (iso, n) => { const d = new Date(iso); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const pct = (x) => Math.round(x * 100) + " %";
const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// "{2ND} {CLR TVM}" -> touches de calculatrice dessinées
function keys(text) {
  return String(text).replace(/\{([^}]+)\}/g, (_, k) => `<kbd class="${k === "2ND" ? "k2nd" : ""}">${k}</kbd>`);
}

// Toutes les questions, tous topics confondus, avec leur topic
function allQuestions() {
  const list = [];
  for (const t of CFA.topics) {
    const c = CFA.content[t.id];
    if (c && c.questions) c.questions.forEach((q) => list.push(Object.assign({ t: t.id }, q)));
  }
  return list;
}
const topicById = (id) => CFA.topics.find((t) => t.id === id);
const moduleById = (tid, mid) => (CFA.content[tid]?.modules || []).find((m) => m.id === mid);

// ---------- 3. CALCULS ---------------------------------------
// Révision espacée (système de Leitner) : 5 boîtes.
// Bonne réponse -> boîte suivante (revue plus tard). Erreur -> boîte 1.
const INTERVALS = [0, 1, 3, 7, 16, 35]; // jours d'attente selon la boîte

function record(q, quality) {
  // quality : 0 = raté, 1 = moyen, 2 = maîtrisé
  const r = state.srs[q.id] || { box: 0, n: 0, ok: 0 };
  r.n += 1;
  if (quality === 2) { r.box = Math.min(r.box + 1, 5); r.ok += 1; }
  else if (quality === 1) { r.box = Math.max(r.box, 1); }
  else { r.box = 1; }
  r.last = quality === 2 ? 1 : 0;
  r.due = addDays(today(), INTERVALS[r.box]);
  state.srs[q.id] = r;
  state.xp += quality === 2 ? 10 : quality === 1 ? 5 : 2;
  markDay();
  save();
}
function markDay() {
  const d = today();
  if (!state.days.includes(d)) state.days.push(d);
}
function streak() {
  let n = 0, d = today();
  if (!state.days.includes(d)) d = addDays(d, -1); // la série tient si tu as révisé hier
  while (state.days.includes(d)) { n++; d = addDays(d, -1); }
  return n;
}
function level() {
  // niveau = palier de 250 XP
  return { lvl: Math.floor(state.xp / 250) + 1, into: state.xp % 250 };
}

// Score d'un topic : % de bonnes réponses à la dernière tentative de chaque QCM,
// et couverture : part des QCM du topic déjà tentés.
function topicScore(tid) {
  const qs = (CFA.content[tid]?.questions || []).filter((q) => q.type === "mcq");
  const done = qs.filter((q) => state.srs[q.id]);
  const ok = done.filter((q) => state.srs[q.id].last === 1).length;
  return { total: qs.length, done: done.length, score: done.length ? ok / done.length : null };
}
function dueQuestions() {
  const d = today();
  return allQuestions().filter((q) => state.srs[q.id] && state.srs[q.id].due <= d);
}
function daysLeft() {
  return Math.max(0, Math.ceil((EXAM_DATE - new Date()) / 86400000));
}

// ---------- 4. LES ÉCRANS ------------------------------------
// Navigation simple : on garde une pile d'écrans pour le bouton retour.
let stack = [];
let tab = "home";

function go(view, params = {}, push = true) {
  if (push) stack.push({ view, params });
  render();
  window.scrollTo(0, 0);
}
function back() {
  stack.pop();
  if (!stack.length) stack = [{ view: tab, params: {} }];
  render();
}
function setTab(t) {
  stopTimer();
  tab = t;
  stack = [{ view: t, params: {} }];
  render();
  window.scrollTo(0, 0);
}

function render() {
  const cur = stack[stack.length - 1];
  const views = { home: viewHome, cours: viewCours, topic: viewTopic, module: viewModule, formules: viewFormules, train: viewTrain, exam: viewExam, quiz: viewQuiz, results: viewResults };
  const { title, html, after } = views[cur.view](cur.params);
  const showBack = stack.length > 1;
  $("#app").innerHTML = `
    <header class="topbar">
      ${showBack ? `<button class="back" id="back" aria-label="Retour"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg></button>` : ""}
      <h1>${title}</h1>
      <span class="pill hot" title="Série de jours">${streak()} j</span>
      <span class="pill" title="Niveau">Niv. ${level().lvl}</span>
    </header>
    <main>${html}</main>`;
  if (showBack) $("#back").onclick = () => { stopTimer(); back(); };
  document.querySelectorAll(".nav button").forEach((b) => b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false"));
  if (after) after();
}

// ----- ACCUEIL
function viewHome() {
  const due = dueQuestions().length;
  const lv = level();
  const total = allQuestions().length;
  const seen = Object.keys(state.srs).length;
  const rows = CFA.topics.map(topicRowHtml).join("");
  return {
    title: "CFA L1 · fév. 2027",
    html: `
    <section class="hero">
      <div class="lcd"><div><div class="lbl">Jours avant l'examen</div><div class="big">${daysLeft()}</div></div><div class="lbl">22.02.2027</div></div>
      <div class="hero-stats">
        <div><b>${due}</b><span>à revoir</span></div>
        <div><b>${seen}/${total}</b><span>vues</span></div>
        <div><b>${lv.into}/250</b><span>XP niveau ${lv.lvl}</span></div>
      </div>
      <button class="btn primary block" id="daily">Session du jour · 15 questions</button>
    </section>
    <h2>Objectif 80 % par topic</h2>
    <div class="stack">${rows}</div>
    <p class="small muted">Le trait vertical sur chaque jauge marque 80 %. Le score compte ta dernière réponse à chaque QCM du topic.</p>`,
    after: () => {
      $("#daily").onclick = () => startQuiz(dailySet(), "Session du jour");
      document.querySelectorAll("[data-topic]").forEach((el) => el.onclick = () => { tab = "cours"; stack = [{ view: "cours", params: {} }]; go("topic", { id: el.dataset.topic }); });
    }
  };
}
function topicRowHtml(t) {
  const s = topicScore(t.id);
  const has = !!CFA.content[t.id];
  const v = s.score;
  const cls = v === null ? "" : v >= TARGET ? "ok" : v >= 0.6 ? "mid" : "low";
  return `<div class="card tap topic-row" data-topic="${t.id}" role="button" tabindex="0">
    <div class="code ${t.priority ? "prio" : ""}">${t.code}</div>
    <div style="min-width:0">
      <div class="row" style="gap:6px"><b>${t.name}</b>${t.priority ? `<span class="tag prio">point faible</span>` : ""}${t.changed2027 ? `<span class="tag new">2027</span>` : ""}</div>
      <div class="small muted">${t.weight} · ${has ? `${s.done}/${s.total} QCM faits` : "contenu à venir"}</div>
      <div class="gauge"><i class="${cls}" style="width:${v === null ? 0 : Math.round(v * 100)}%"></i></div>
    </div>
    <div class="score">${v === null ? "–" : pct(v)}</div>
  </div>`;
}
// Session du jour : d'abord ce qui est à revoir, puis du nouveau (priorité aux points faibles)
function dailySet() {
  const due = shuffle(dueQuestions());
  const unseen = allQuestions().filter((q) => !state.srs[q.id]);
  const PRIO = ["fsa-taxes", "eth-code"]; // tes deux points faibles passent en premier
  const prio = shuffle(unseen.filter((q) => PRIO.includes(q.m)));
  const rest = shuffle(unseen.filter((q) => !PRIO.includes(q.m)));
  return due.concat(prio, rest).slice(0, 15);
}

// ----- COURS : liste des topics
function viewCours() {
  return {
    title: "Cours",
    html: `<p class="muted small">Chaque topic contient le cours 101, les méthodes de résolution, des questions de cours et des QCM.</p>
      <div class="stack">${CFA.topics.map(topicRowHtml).join("")}</div>`,
    after: () => document.querySelectorAll("[data-topic]").forEach((el) => el.onclick = () => go("topic", { id: el.dataset.topic }))
  };
}

// ----- COURS : un topic
function viewTopic({ id }) {
  const t = topicById(id);
  const c = CFA.content[id];
  if (!c) {
    const nf = CFA.formulas.filter((f) => f.t === id).length;
    return {
      title: t.code,
      html: `<div class="card stack"><h3>${t.name}</h3><p>Le cours de ce topic est en cours de rédaction et arrivera dans une prochaine mise à jour de l'app.</p>
        <p class="muted small">En attendant, ses ${nf} formules sont déjà disponibles.</p>
        <button class="btn primary" id="tof">Voir les formules ${t.code}</button></div>`,
      after: () => $("#tof").onclick = () => { setTab("formules"); formulaFilter = id; render(); }
    };
  }
  const mods = c.modules.map((m) => {
    const read = m.sections.filter((_, i) => state.read[m.id + ":" + i]).length;
    const qs = c.questions.filter((q) => q.m === m.id);
    return `<div class="card tap" data-mod="${m.id}" role="button" tabindex="0">
      <div class="row" style="justify-content:space-between"><span class="eyebrow">${m.lm}</span>${m.priority ? `<span class="tag prio">priorité</span>` : ""}</div>
      <h3 style="margin-top:4px">${m.title}</h3>
      <p class="small muted" style="margin:0 0 8px">${m.summary}</p>
      <div class="small muted">${read}/${m.sections.length} sections lues · ${qs.length} questions</div>
    </div>`;
  }).join("");
  return {
    title: t.code + " · " + t.fr,
    html: `<div class="row" style="margin-bottom:12px"><button class="btn primary" id="tq">QCM du topic</button><button class="btn" id="to">Questions de cours</button></div>
      <div class="stack">${mods}</div>`,
    after: () => {
      document.querySelectorAll("[data-mod]").forEach((el) => el.onclick = () => go("module", { tid: id, mid: el.dataset.mod }));
      $("#tq").onclick = () => startQuiz(shuffle(c.questions.filter((q) => q.type === "mcq")).map((q) => Object.assign({ t: id }, q)), t.code + " · QCM");
      $("#to").onclick = () => startQuiz(shuffle(c.questions.filter((q) => q.type === "open")).map((q) => Object.assign({ t: id }, q)), t.code + " · Cours");
    }
  };
}

// ----- COURS : un module (le 101)
function viewModule({ tid, mid }) {
  const m = moduleById(tid, mid);
  const c = CFA.content[tid];
  const qs = c.questions.filter((q) => q.m === mid).map((q) => Object.assign({ t: tid }, q));
  const secs = m.sections.map((s, i) => `
    <details class="sec" data-k="${mid}:${i}" data-read="${state.read[mid + ":" + i] ? 1 : 0}" ${i === 0 ? "open" : ""}>
      <summary><span class="dot">✓</span><span>${s.title}</span></summary>
      <div class="lesson">${s.html}<button class="btn" data-done="${mid}:${i}">J'ai compris cette section</button></div>
    </details>`).join("");
  const methods = m.methods.length ? `<h2>Méthodes de résolution</h2><div class="stack">${m.methods.map((me) => `
    <div class="card"><h3>${me.title}</h3><ol class="steps">${me.steps.map((s) => `<li><span>${s}</span></li>`).join("")}</ol></div>`).join("")}</div>` : "";
  const nOpen = qs.filter((q) => q.type === "open").length, nMcq = qs.length - nOpen;
  return {
    title: m.lm + " · " + m.title,
    html: `<p class="muted">${m.summary}</p>
      <div class="stack">${secs}</div>
      ${methods}
      <h2>Vérifie que tu as compris</h2>
      <div class="row">
        <button class="btn primary" id="mo" ${nOpen ? "" : "disabled"}>${nOpen} questions de cours</button>
        <button class="btn" id="mq" ${nMcq ? "" : "disabled"}>${nMcq} QCM</button>
      </div>`,
    after: () => {
      document.querySelectorAll("[data-done]").forEach((b) => b.onclick = () => {
        const k = b.dataset.done;
        if (!state.read[k]) { state.read[k] = true; state.xp += 5; markDay(); save(); toast("+5 XP · section lue"); }
        const d = b.closest("details"); d.dataset.read = "1"; d.open = false;
        const next = d.nextElementSibling; if (next && next.tagName === "DETAILS") { next.open = true; next.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
      $("#mo").onclick = () => startQuiz(shuffle(qs.filter((q) => q.type === "open")), m.lm + " · Cours");
      $("#mq").onclick = () => startQuiz(shuffle(qs.filter((q) => q.type === "mcq")), m.lm + " · QCM");
    }
  };
}

// ----- FORMULES
let formulaFilter = "all";
let formulaQuery = "";
function viewFormules() {
  const chips = [{ id: "all", code: "Toutes" }].concat(CFA.topics.filter((t) => CFA.formulas.some((f) => f.t === t.id)))
    .map((t) => `<button data-f="${t.id}" aria-pressed="${formulaFilter === t.id}">${t.code}</button>`).join("");
  return {
    title: "Formules",
    html: `<div class="stack">
      <input class="search" id="fq" type="search" placeholder="Chercher : duration, EPS, DTL…" value="${esc(formulaQuery)}" autocomplete="off">
      <div class="chips">${chips}</div>
      <div class="stack" id="flist"></div></div>`,
    after: () => {
      const draw = () => {
        const q = formulaQuery.toLowerCase();
        const list = CFA.formulas.filter((f) => (formulaFilter === "all" || f.t === formulaFilter) &&
          (!q || (f.n + " " + f.w + " " + f.f).toLowerCase().includes(q)));
        $("#flist").innerHTML = list.length ? list.map(formulaCard).join("") : `<p class="muted">Aucune formule ne correspond à « ${esc(formulaQuery)} ».</p>`;
      };
      $("#fq").oninput = (e) => { formulaQuery = e.target.value; draw(); };
      document.querySelectorAll("[data-f]").forEach((b) => b.onclick = () => {
        formulaFilter = b.dataset.f;
        document.querySelectorAll("[data-f]").forEach((x) => x.setAttribute("aria-pressed", x.dataset.f === formulaFilter));
        draw();
      });
      draw();
    }
  };
}
function formulaCard(f) {
  const t = topicById(f.t);
  return `<article class="card formula">
    <h3><span>${f.n}</span><span class="code" style="padding:2px 6px;font-size:.66rem">${t.code}</span></h3>
    <div class="fbox">${f.f}</div>
    <p class="when"><b>Quand :</b> ${f.w}</p>
    ${f.p || f.x || f.k ? `<div class="more">
      ${f.p ? `<div class="trap">${f.p}</div>` : ""}
      ${f.x ? `<div class="ex"><b>Exemple :</b> ${f.x}</div>` : ""}
      ${f.k ? `<div class="keys"><span class="eyebrow">BA II Plus</span><br>${keys(f.k)}</div>` : ""}
    </div>` : ""}
  </article>`;
}

// ----- ENTRAÎNEMENT
let trainTopic = "all";
let trainMode = "mix";
function viewTrain() {
  const opts = [`<option value="all">Tous les topics disponibles</option>`]
    .concat(CFA.topics.filter((t) => CFA.content[t.id]).map((t) => `<option value="${t.id}" ${trainTopic === t.id ? "selected" : ""}>${t.code} · ${t.name}</option>`)).join("");
  const due = dueQuestions().length;
  return {
    title: "Entraînement",
    html: `<div class="stack">
      <div class="card stack">
        <label class="eyebrow" for="tt">Topic</label>
        <select id="tt">${opts}</select>
        <span class="eyebrow">Type</span>
        <div class="seg">
          <button data-m="mcq" aria-pressed="${trainMode === "mcq"}">QCM</button>
          <button data-m="open" aria-pressed="${trainMode === "open"}">Cours</button>
          <button data-m="mix" aria-pressed="${trainMode === "mix"}">Mix</button>
        </div>
        <button class="btn primary block" id="go">Lancer 10 questions</button>
      </div>
      <div class="card stack">
        <h3>Révision espacée</h3>
        <p class="small muted" style="margin:0">Les questions que tu rates reviennent dès le lendemain, celles que tu maîtrises de plus en plus tard (1, 3, 7, 16 puis 35 jours).</p>
        <button class="btn block" id="due" ${due ? "" : "disabled"}>${due ? `Revoir mes ${due} questions dues` : "Rien à revoir aujourd'hui"}</button>
      </div>
      <div class="card stack">
        <h3>Mes erreurs</h3>
        <p class="small muted" style="margin:0">Uniquement les questions ratées à la dernière tentative.</p>
        <button class="btn block" id="err">Refaire mes erreurs</button>
      </div></div>`,
    after: () => {
      $("#tt").onchange = (e) => trainTopic = e.target.value;
      document.querySelectorAll("[data-m]").forEach((b) => b.onclick = () => { trainMode = b.dataset.m; document.querySelectorAll("[data-m]").forEach((x) => x.setAttribute("aria-pressed", x.dataset.m === trainMode)); });
      $("#go").onclick = () => {
        let pool = allQuestions().filter((q) => (trainTopic === "all" || q.t === trainTopic) && (trainMode === "mix" || q.type === trainMode));
        startQuiz(shuffle(pool).slice(0, 10), "Entraînement");
      };
      $("#due").onclick = () => startQuiz(shuffle(dueQuestions()), "Révision");
      $("#err").onclick = () => {
        const errs = allQuestions().filter((q) => state.srs[q.id] && state.srs[q.id].last === 0);
        if (!errs.length) return toast("Aucune erreur en mémoire. Bravo !");
        startQuiz(shuffle(errs), "Mes erreurs");
      };
    }
  };
}

// ----- EXAMEN BLANC
let examLen = 30;
function viewExam() {
  const pool = allQuestions().filter((q) => q.type === "mcq").length;
  const hist = state.exams.slice(-5).reverse().map((e) => `<div class="row" style="justify-content:space-between"><span class="small">${e.date} · ${e.n} questions</span><b class="score">${pct(e.score)}</b></div>`).join("");
  return {
    title: "Examen blanc",
    html: `<div class="stack">
      <div class="card stack">
        <p style="margin:0">Conditions réelles : <b>90 secondes par question</b> (le rythme du jour J : 180 questions en 4 h 30), pas de correction avant la fin.</p>
        <span class="eyebrow">Nombre de questions</span>
        <div class="seg">${[10, 30, 60].map((n) => `<button data-n="${n}" aria-pressed="${examLen === n}">${n}</button>`).join("")}</div>
        <p class="small muted" style="margin:0">${pool} QCM disponibles pour l'instant. Le pool grandira à chaque nouveau topic.</p>
        <button class="btn primary block" id="start">Commencer</button>
      </div>
      ${hist ? `<div class="card stack"><h3>Derniers examens</h3>${hist}</div>` : ""}</div>`,
    after: () => {
      document.querySelectorAll("[data-n]").forEach((b) => b.onclick = () => { examLen = +b.dataset.n; document.querySelectorAll("[data-n]").forEach((x) => x.setAttribute("aria-pressed", +x.dataset.n === examLen)); });
      $("#start").onclick = () => {
        const qs = shuffle(allQuestions().filter((q) => q.type === "mcq")).slice(0, examLen);
        startQuiz(qs, "Examen blanc", { exam: true });
      };
    }
  };
}

// ---------- 5. MOTEUR DE QUIZ --------------------------------
let quiz = null;     // la session en cours
let timerId = null;

function startQuiz(questions, label, opts = {}) {
  if (!questions.length) return toast("Pas encore de questions ici.");
  quiz = { qs: questions, i: 0, label, exam: !!opts.exam, answers: [], streak: 0, answered: false };
  if (quiz.exam) { quiz.end = Date.now() + questions.length * 90 * 1000; quiz.start = Date.now(); }
  go("quiz");
}
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

function viewQuiz() {
  const q = quiz.qs[quiz.i];
  const n = quiz.qs.length;
  const t = topicById(q.t);
  const m = moduleById(q.t, q.m);
  const head = `<div class="qhead"><span class="eyebrow">${quiz.label} · ${quiz.i + 1}/${n}</span>
    ${quiz.exam ? `<span class="timer" id="timer"></span>` : `<span class="tag">${t.code}${m ? " · " + m.lm : ""}</span>`}</div>
    <div class="progress"><i style="width:${(quiz.i / n) * 100}%"></i></div>`;

  if (q.type === "mcq") {
    const letters = ["A", "B", "C", "D"];
    return {
      title: quiz.label,
      html: `${head}<div class="card"><div class="question">${q.q}</div>
        <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}"><b>${letters[k]}.</b><span>${o}</span></button>`).join("")}</div>
        <div id="fb"></div></div>
        <div style="margin-top:14px"><button class="btn primary block" id="next" hidden>${quiz.i + 1 < n ? "Question suivante" : "Voir le résultat"}</button></div>`,
      after: () => {
        if (quiz.exam) runTimer();
        document.querySelectorAll(".opt").forEach((b) => b.onclick = () => answerMcq(q, +b.dataset.k));
        $("#next").onclick = nextQuestion;
      }
    };
  }
  // question de cours
  return {
    title: quiz.label,
    html: `${head}<div class="card stack"><div class="eyebrow">Question de cours</div><div class="question">${q.q}</div>
      <textarea id="mine" placeholder="Réponds avec tes mots avant de regarder (facultatif, mais c'est là que tu apprends)."></textarea>
      <button class="btn primary" id="reveal">Voir la réponse modèle</button>
      <div id="model" hidden>
        <div class="feedback ok"><strong>Réponse modèle</strong>${q.a}</div>
        <p class="small muted" style="margin:12px 0 8px">Sois honnête : ta réponse contenait-elle l'essentiel ?</p>
        <div class="grade"><button class="btn g-bad" data-g="0">Raté</button><button class="btn g-mid" data-g="1">À moitié</button><button class="btn g-ok" data-g="2">Maîtrisé</button></div>
      </div></div>`,
    after: () => {
      $("#reveal").onclick = () => { $("#model").hidden = false; $("#reveal").hidden = true; };
      document.querySelectorAll("[data-g]").forEach((b) => b.onclick = () => {
        const g = +b.dataset.g;
        record(q, g);
        quiz.answers.push({ q, ok: g === 2 });
        nextQuestion();
      });
    }
  };
}

function answerMcq(q, k) {
  if (quiz.answered) return;
  quiz.answered = true;
  const ok = k === q.a;
  quiz.answers.push({ q, ok, pick: k });
  record(q, ok ? 2 : 0);
  if (quiz.exam) return nextQuestion(); // pas de correction pendant l'examen
  const btns = document.querySelectorAll(".opt");
  btns.forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add("correct"); else if (i === k) b.classList.add("wrong"); });
  $("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}"><strong>${ok ? "Bonne réponse" : "Pas cette fois : la bonne réponse est " + "ABCD"[q.a]}</strong>${q.e}</div>`;
  $("#next").hidden = false;
  quiz.streak = ok ? quiz.streak + 1 : 0;
  if (quiz.streak > 0 && quiz.streak % 5 === 0) { burst(); toast(quiz.streak + " bonnes réponses d'affilée"); }
}

function nextQuestion() {
  quiz.answered = false;
  if (quiz.i + 1 < quiz.qs.length) { quiz.i++; stack[stack.length - 1] = { view: "quiz", params: {} }; render(); window.scrollTo(0, 0); }
  else finishQuiz();
}
function finishQuiz() {
  stopTimer();
  // Examen : une question sans réponse (temps écoulé) compte comme fausse
  if (quiz.exam) quiz.qs.slice(quiz.answers.length).forEach((q) => quiz.answers.push({ q, ok: false }));
  const ok = quiz.answers.filter((a) => a.ok).length;
  const score = quiz.answers.length ? ok / quiz.answers.length : 0;
  if (quiz.exam) {
    state.exams.push({ date: today(), n: quiz.qs.length, score, secs: Math.round((Date.now() - quiz.start) / 1000) });
    save();
  }
  if (score >= TARGET && quiz.answers.length >= 5) burst();
  stack[stack.length - 1] = { view: "results", params: {} };
  render();
  window.scrollTo(0, 0);
}
function runTimer() {
  stopTimer();
  const tick = () => {
    const left = Math.max(0, Math.round((quiz.end - Date.now()) / 1000));
    const el = $("#timer");
    if (el) { el.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); el.classList.toggle("low", left < 120); }
    if (left <= 0) finishQuiz();
  };
  tick();
  timerId = setInterval(tick, 1000);
}

function viewResults() {
  const a = quiz.answers;
  const ok = a.filter((x) => x.ok).length;
  const score = a.length ? ok / a.length : 0;
  // détail par topic
  const by = {};
  a.forEach((x) => { by[x.q.t] = by[x.q.t] || { ok: 0, n: 0 }; by[x.q.t].n++; if (x.ok) by[x.q.t].ok++; });
  const rows = Object.entries(by).map(([tid, v]) => `<div class="row" style="justify-content:space-between"><span><span class="code" style="display:inline-block;padding:2px 6px;font-size:.66rem">${topicById(tid).code}</span> ${v.ok}/${v.n}</span><b class="score">${pct(v.ok / v.n)}</b></div>`).join("");
  const wrong = a.filter((x) => !x.ok && x.q.type === "mcq");
  const review = quiz.exam && wrong.length ? `<h2>Correction de tes erreurs</h2><div class="stack">${wrong.map((x) => `
    <div class="card"><div class="question" style="font-size:.98rem">${x.q.q}</div>
    <p class="small" style="margin:8px 0 4px">Ta réponse : ${x.pick === undefined ? "aucune (temps écoulé)" : "ABCD"[x.pick] + ". " + x.q.o[x.pick]}</p>
    <div class="feedback ok"><strong>Bonne réponse : ${"ABCD"[x.q.a]}. ${x.q.o[x.q.a]}</strong>${x.q.e}</div></div>`).join("")}</div>` : "";
  const msg = score >= TARGET ? "Objectif atteint. Continue comme ça." : score >= 0.6 ? "Pas loin des 80 %. Refais tes erreurs dans l'onglet Entraînement." : "Relis les sections concernées, puis refais ces questions demain.";
  return {
    title: "Résultat",
    html: `<div class="card stack" style="text-align:center">
        <span class="eyebrow">${quiz.label}</span>
        <div class="result-big">${pct(score)}</div>
        <div class="muted">${ok} bonnes réponses sur ${a.length} · objectif 80 %</div>
        <p style="margin:0">${msg}</p>
      </div>
      ${rows ? `<h2>Par topic</h2><div class="card stack">${rows}</div>` : ""}
      ${review}
      <div class="stack" style="margin-top:16px"><button class="btn primary block" id="again">Recommencer ces questions</button><button class="btn block" id="home">Retour à l'accueil</button></div>`,
    after: () => {
      $("#again").onclick = () => startQuiz(shuffle(quiz.qs), quiz.label, { exam: quiz.exam });
      $("#home").onclick = () => setTab("home");
    }
  };
}

// ---------- petits effets --------------------------------------
function toast(text) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = text;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1900);
}
function burst() {
  const b = document.createElement("div"); b.className = "burst";
  const colors = ["var(--accent)", "var(--good)", "var(--key)", "var(--bad)"];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % 4];
    p.style.animationDelay = Math.random() * 0.4 + "s";
    b.appendChild(p);
  }
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 2000);
}

// ---------- 6. DÉMARRAGE -------------------------------------
document.querySelectorAll(".nav button").forEach((b) => b.onclick = () => setTab(b.dataset.tab));
stack = [{ view: "home", params: {} }];
render();

// Mode hors ligne : le "service worker" garde une copie de l'app sur le téléphone.
// (Ne fonctionne que quand l'app est hébergée sur ton site GitHub Pages.)
if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

document.getElementById("app").dataset.ok = "1";
})();
