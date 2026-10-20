// ============================================================
// sw.js — le "service worker" : il garde une copie de l'app
// sur le téléphone pour qu'elle marche sans réseau.
// À CHAQUE MISE À JOUR du contenu : augmente le numéro de VERSION,
// sinon le téléphone garde l'ancienne copie.
// ============================================================
const VERSION = "cfa-v4";
const FILES = [
  "./", "index.html", "styles.css", "app.js", "manifest.json",
  "data/topics.js", "data/eth.js", "data/qm.js", "data/eco.js", "data/ci.js", "data/fsa.js", "data/eq.js", "data/fi.js", "data/der.js", "data/alt.js", "data/pm.js", "data/formulas.js",
  "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"
];

// Installation : on télécharge tous les fichiers une fois
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

// Activation : on supprime les anciennes versions
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Chaque requête : réseau d'abord (pour avoir la dernière version), copie locale si hors ligne
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request))
  );
});
