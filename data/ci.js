// ============================================================
// ci.js — Corporate Issuers
// ============================================================
CFA.content.ci = {
  modules: [
    {
      id: "ci-forms", lm: "CI1", title: "Organizational Forms, Features, and Ownership",
      summary: "Sole proprietorship, partnerships, corporations ; public vs private.",
      sections: [
        { title: "Les formes juridiques", html: `
<table class="t">
<tr><th>Forme</th><th>Responsabilité</th><th>Fiscalité</th></tr>
<tr><td>Sole proprietorship</td><td>Illimitée</td><td>Revenu du propriétaire</td></tr>
<tr><td>General partnership</td><td>Illimitée pour tous les associés</td><td>Pass-through</td></tr>
<tr><td>Limited partnership</td><td>Illimitée pour le GP, limitée pour les LP</td><td>Pass-through</td></tr>
<tr><td>Corporation</td><td>Limitée</td><td>Impôt sur les sociétés + impôt sur les dividendes (double taxation)</td></tr>
</table>
<p>Une <b>corporation</b> est une personne juridique distincte, propriété des actionnaires, gérée par des dirigeants supervisés par le board.</p>` },
        { title: "Public vs private", html: `
<ul>
<li><b>Public</b> : actions cotées, obligations d'information strictes, liquidité.</li>
<li><b>Private</b> : moins de contraintes de transparence, moins liquide, capital via private equity / venture capital.</li>
<li>Passer en bourse : IPO, direct listing, ou fusion avec un SPAC. Sortir de la bourse : leveraged buyout (LBO).</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "ci-stake", lm: "CI2–3", title: "Stakeholders and Corporate Governance",
      summary: "Parties prenantes, conflits d'agence, mécanismes de gouvernance, ESG.",
      sections: [
        { title: "Actionnaires vs créanciers", html: `
<ul>
<li>Actionnaires : profit illimité, perte limitée → ils aiment le <b>risque</b>.</li>
<li>Créanciers : rendement fixe, risque de perte → ils préfèrent la <b>stabilité</b>.</li>
</ul>
<p><b>Shareholder theory</b> : maximiser la valeur actionnariale. <b>Stakeholder theory</b> : prendre en compte toutes les parties (salariés, clients, fournisseurs, État, société).</p>` },
        { title: "Les conflits principal-agent", html: `
<ul>
<li>Actionnaires vs dirigeants : empire building, rémunération excessive, aversion au risque des dirigeants.</li>
<li>Actionnaires majoritaires vs minoritaires : transactions avec des parties liées, actions à droits de vote multiples.</li>
<li>Actionnaires vs créanciers : prise de risque excessive, dividendes ou rachats financés par dette.</li>
</ul>` },
        { title: "Mécanismes de gouvernance", html: `
<ul>
<li>Board indépendant, comités (audit, rémunération, nomination, risque).</li>
<li>Board <b>staggered</b> (renouvellement par tiers) : protège contre les OPA hostiles mais réduit le contrôle des actionnaires.</li>
<li>Vote : <b>straight voting</b> (1 action = 1 voix par siège) vs <b>cumulative voting</b> (on peut concentrer ses voix : favorable aux minoritaires).</li>
<li>Activisme actionnarial, proxy fights, say-on-pay.</li>
<li>Covenants pour les créanciers.</li>
</ul>
<p><b>ESG</b> : facteurs environnementaux, sociaux et de gouvernance, intégrés dans l'analyse du risque et de la valeur.</p>` }
      ],
      methods: []
    },
    {
      id: "ci-wc", lm: "CI4", title: "Working Capital and Liquidity",
      summary: "Cycle de conversion, sources de liquidité, coût du crédit fournisseur.",
      sections: [
        { title: "Le cycle de conversion de trésorerie", html: `
<p><span class="f">CCC = DOH + DSO − DPO</span></p>
<p>Plus le CCC est court, moins l'entreprise a besoin de financer son exploitation.</p>
<p>Politiques de working capital : <b>conservative</b> (beaucoup d'actifs courants, financement long terme, sûr mais coûteux) vs <b>aggressive</b> (peu d'actifs courants, financement court terme, moins cher mais risqué).</p>` },
        { title: "Liquidité", html: `
<ul>
<li>Sources primaires : cash, lignes de crédit, cash flows d'exploitation.</li>
<li>Sources secondaires (plus coûteuses, signal de difficulté) : renégocier la dette, vendre des actifs, faillite et réorganisation.</li>
<li><b>Drags</b> (ralentissent les entrées : retards de paiement clients) et <b>pulls</b> (accélèrent les sorties : fournisseurs exigeant un paiement rapide).</li>
</ul>` },
        { title: "Coût du crédit fournisseur", html: `
<p>« 2/10 net 30 » : 2 % d'escompte si payé en 10 jours, sinon 30 jours.</p>
<p><span class="f">Coût = (1 + 0,02/0,98)^(365/20) − 1 ≈ 44,6 %</span></p>
<p>Si l'entreprise peut emprunter moins cher, elle doit prendre l'escompte.</p>` }
      ],
      methods: []
    },
    {
      id: "ci-capex", lm: "CI5", title: "Capital Investments and Capital Allocation",
      summary: "Types de projets, NPV, IRR, pièges de l'allocation du capital, real options.",
      sections: [
        { title: "Types de projets et principes", html: `
<p>Projets : maintenance (going concern), extension du business existant, nouveaux business, réglementaires/obligatoires.</p>
<ul>
<li>Utiliser les <b>flux de trésorerie incrémentaux</b> après impôt.</li>
<li>Ignorer les <b>sunk costs</b> (déjà dépensés).</li>
<li>Inclure les <b>opportunity costs</b> et les <b>externalities</b> (cannibalisation).</li>
<li>Ne pas inclure les frais financiers dans les flux : ils sont dans le taux d'actualisation.</li>
</ul>` },
        { title: "NPV vs IRR", html: `
<ul>
<li>Accepter si NPV &gt; 0 ou IRR &gt; coût du capital.</li>
<li>Pour des projets <b>mutuellement exclusifs</b>, en cas de conflit, choisir la <b>NPV</b> (elle mesure la création de valeur en monnaie et suppose un réinvestissement au coût du capital).</li>
<li>Problèmes de l'IRR : plusieurs IRR si les flux changent de signe plusieurs fois, différences de taille ou de timing.</li>
</ul>
<p><b>ROIC</b> = NOPAT / capital investi. Création de valeur si ROIC &gt; coût du capital.</p>` },
        { title: "Pièges et real options", html: `
<p>Pièges : inertie (allouer comme l'an dernier), pet projects, basing decisions on EPS or ROE, ne pas tenir compte des alternatives, mauvaise estimation des flux.</p>
<p><b>Real options</b> : timing (attendre), sizing (expansion ou abandon), flexibility (prix, production), fundamental (dépend d'un prix sous-jacent). Une option augmente la valeur du projet : NPV totale = NPV sans option + valeur de l'option − coût.</p>` }
      ],
      methods: []
    },
    {
      id: "ci-struct", lm: "CI6", title: "Capital Structure",
      summary: "MM avec et sans impôt, coût du capital, facteurs, pecking order.",
      sections: [
        { title: "Modigliani-Miller", html: `
<table class="t">
<tr><th></th><th>Sans impôt</th><th>Avec impôt</th></tr>
<tr><td>Proposition I</td><td>V_L = V_U : la structure ne change rien</td><td>V_L = V_U + t × D : la dette crée de la valeur</td></tr>
<tr><td>Proposition II</td><td>r_e = r0 + (r0 − rd) D/E</td><td>r_e = r0 + (r0 − rd)(1 − t) D/E</td></tr>
<tr><td>WACC</td><td>Constant</td><td>Baisse avec la dette</td></tr>
</table>
<p>En réalité, les coûts de faillite (directs et indirects) et les coûts d'agence limitent l'endettement → structure <b>optimale</b> (static trade-off theory).</p>` },
        { title: "Facteurs et théories", html: `
<ul>
<li>Cycle de vie : start-up → peu de dette ; mature à flux stables → plus de dette.</li>
<li>Actifs tangibles, flux prévisibles → plus de dette possible.</li>
<li><b>Pecking order</b> : autofinancement d'abord, puis dette, puis actions en dernier (asymétrie d'information : émettre des actions signale une surévaluation).</li>
<li>Les agences de notation, les covenants et le profil de risque du management comptent aussi.</li>
</ul>
<div class="tip">Pecking order : « <b>R</b>éserve, <b>D</b>ette, <b>A</b>ctions » → R-D-A.</div>` }
      ],
      methods: []
    },
    {
      id: "ci-bm", lm: "CI7", title: "Business Models",
      summary: "Éléments d'un business model, stratégies de prix, types de modèles.",
      sections: [
        { title: "Décrire un business model", html: `
<ul>
<li>Qui sont les clients ? Que leur vend-on (value proposition) ? Comment (canaux) ? À quel prix ? Comment l'entreprise gagne-t-elle de l'argent ?</li>
<li>Pricing : value-based, cost-plus, freemium, bundling, dynamic pricing, razor-and-blades.</li>
<li>Modèles : marketplace / plateforme (effets de réseau), abonnement, licence, franchise, crowdsourcing.</li>
</ul>
<p>Effets de réseau : la valeur d'un service augmente avec le nombre d'utilisateurs (direct ou indirect, plateformes à deux faces).</p>` }
      ],
      methods: []
    },
    {
      id: "ci-coc", lm: "CI+", title: "Cost of Capital (rappel des méthodes)",
      summary: "WACC, coût de la dette, des préférentielles, des fonds propres, beta pure-play.",
      sections: [
        { title: "Les composantes", html: `
<p><span class="f">WACC = wd × rd × (1 − t) + wp × rp + we × re</span></p>
<ul>
<li><b>rd</b> : YTM des obligations existantes, ou rendement d'obligations comparables (même notation).</li>
<li><b>rp</b> = Dp / Pp.</li>
<li><b>re</b> : CAPM, DDM (D1/P0 + g), ou bond yield plus risk premium.</li>
<li>Poids : valeurs de <b>marché</b>, ou structure cible.</li>
</ul>` },
        { title: "Beta d'un projet : pure-play", html: `
<ol>
<li>Prendre le beta d'un comparable coté (beta equity).</li>
<li>Désendetter avec la structure du comparable : βA = βE / [1 + (1 − t) D/E].</li>
<li>Réendetter avec la structure de l'entreprise : βE = βA [1 + (1 − t) D/E].</li>
<li>Calculer re par CAPM.</li>
</ol>
<p>Pays émergents : ajouter une <b>country risk premium</b> (spread souverain × volatilité actions / volatilité obligations).</p>` }
      ],
      methods: []
    }
  ],
  questions: [
    { id: "ci-o1", m: "ci-forms", type: "open", q: "Quelle est la différence de responsabilité entre un general partner et un limited partner ?", a: "Le general partner a une responsabilité illimitée et gère l'activité. Le limited partner a une responsabilité limitée à son apport et ne gère pas." },
    { id: "ci-1", m: "ci-forms", type: "mcq", q: "Which business structure is most likely subject to double taxation?", o: ["General partnership.", "Corporation.", "Sole proprietorship."], a: 1, e: "La corporation paie l'impôt sur les sociétés, puis l'actionnaire paie l'impôt sur les dividendes." },
    { id: "ci-2", m: "ci-stake", type: "mcq", q: "Compared with creditors, shareholders most likely prefer:", o: ["lower-risk investments.", "higher-risk investments.", "the same level of risk."], a: 1, e: "Les actionnaires ont un gain illimité et une perte limitée : ils préfèrent plus de risque." },
    { id: "ci-3", m: "ci-stake", type: "mcq", q: "Cumulative voting most likely benefits:", o: ["majority shareholders.", "minority shareholders.", "management."], a: 1, e: "Les minoritaires peuvent concentrer leurs voix sur un candidat et obtenir un siège." },
    { id: "ci-4", m: "ci-stake", type: "mcq", q: "A staggered board most likely:", o: ["makes hostile takeovers more difficult.", "increases shareholders' ability to replace the board quickly.", "reduces board tenure."], a: 0, e: "Renouvellement par tiers → impossible de remplacer tout le board d'un coup." },
    { id: "ci-o2", m: "ci-wc", type: "open", q: "Écris la formule du cycle de conversion et explique pourquoi on soustrait le DPO.", a: "CCC = DOH + DSO − DPO. On soustrait le DPO car pendant ces jours, ce sont les fournisseurs qui financent l'entreprise." },
    { id: "ci-5", m: "ci-wc", type: "mcq", q: "DOH = 45, DSO = 35, DPO = 30. The cash conversion cycle is:", o: ["50 days.", "80 days.", "110 days."], a: 0, e: "45 + 35 − 30 = 50 jours." },
    { id: "ci-6", m: "ci-wc", type: "mcq", q: "Terms are 1/10 net 30. The annualized cost of not taking the discount is closest to:", o: ["12.4%.", "18.2%.", "20.1%."], a: 2, e: "(1 + 0,01/0,99)^(365/20) − 1 = 1,0101^18,25 − 1 ≈ 20,1 %." },
    { id: "ci-7", m: "ci-wc", type: "mcq", q: "Which is a secondary source of liquidity?", o: ["Bank lines of credit.", "Liquidating assets.", "Cash flow from operations."], a: 1, e: "Vendre des actifs est une source secondaire. Lignes de crédit et CFO sont primaires." },
    { id: "ci-o3", m: "ci-capex", type: "open", q: "Pour deux projets mutuellement exclusifs, NPV et IRR donnent des classements différents. Lequel suis-tu et pourquoi ?", a: "La NPV : elle mesure directement la création de valeur en monnaie et suppose un réinvestissement au coût du capital (plus réaliste que l'IRR)." },
    { id: "ci-8", m: "ci-capex", type: "mcq", q: "When evaluating a new project, a company should exclude:", o: ["opportunity costs.", "sunk costs.", "cannibalization effects."], a: 1, e: "Les sunk costs sont déjà dépensés, ils ne changent pas avec la décision." },
    { id: "ci-9", m: "ci-capex", type: "mcq", q: "A project costs 1,000 and generates 600 at the end of each of the next 2 years. At a 10% cost of capital, NPV is closest to:", o: ["41.", "200.", "91."], a: 0, e: "600/1,1 + 600/1,21 = 545,45 + 495,87 = 1 041,32 → NPV ≈ 41." },
    { id: "ci-10", m: "ci-capex", type: "mcq", q: "An option to abandon a project if demand is weak is a:", o: ["timing option.", "sizing option.", "fundamental option."], a: 1, e: "Abandon ou expansion = sizing options." },
    { id: "ci-11", m: "ci-capex", type: "mcq", q: "A company creates value when its:", o: ["ROIC exceeds its cost of capital.", "EPS grows.", "revenue grows faster than the industry."], a: 0, e: "Création de valeur = ROIC > coût du capital. La croissance de l'EPS peut détruire de la valeur." },
    { id: "ci-o4", m: "ci-struct", type: "open", q: "Selon MM avec impôts, que deviennent la valeur de l'entreprise, le coût des fonds propres et le WACC quand la dette augmente ?", a: "La valeur augmente de t × D (tax shield). Le coût des fonds propres augmente (risque financier). Le WACC baisse." },
    { id: "ci-12", m: "ci-struct", type: "mcq", q: "Under MM Proposition I without taxes, increasing leverage:", o: ["increases firm value.", "does not change firm value.", "decreases firm value."], a: 1, e: "Sans impôt ni coûts de faillite, la structure financière n'affecte pas la valeur." },
    { id: "ci-13", m: "ci-struct", type: "mcq", q: "According to the pecking order theory, managers prefer to finance first with:", o: ["new equity.", "debt.", "internal funds."], a: 2, e: "Ordre : autofinancement, dette, actions." },
    { id: "ci-14", m: "ci-struct", type: "mcq", q: "The static trade-off theory states that the optimal capital structure balances the tax benefit of debt against:", o: ["the costs of financial distress.", "the cost of equity.", "agency costs of equity only."], a: 0, e: "Gain fiscal de la dette vs coûts de faillite (financial distress)." },
    { id: "ci-15", m: "ci-bm", type: "mcq", q: "A business where the value to each user increases as more users join exhibits:", o: ["economies of scope.", "network effects.", "razor-and-blades pricing."], a: 1, e: "Effets de réseau." },
    { id: "ci-16", m: "ci-coc", type: "mcq", q: "Weights: debt 40%, equity 60%. Pretax cost of debt 5%, tax rate 25%, cost of equity 10%. WACC is:", o: ["7.5%.", "8.0%.", "7.0%."], a: 0, e: "0,4 × 5 % × 0,75 + 0,6 × 10 % = 1,5 % + 6 % = 7,5 %." },
    { id: "ci-17", m: "ci-coc", type: "mcq", q: "A comparable firm has an equity beta of 1.5, D/E of 0.5, and a tax rate of 20%. Its asset beta is closest to:", o: ["1.07.", "1.15.", "1.25."], a: 0, e: "βA = 1,5 / [1 + 0,8 × 0,5] = 1,5 / 1,4 = 1,07." },
    { id: "ci-18", m: "ci-coc", type: "mcq", q: "The before-tax cost of debt is best estimated using:", o: ["the coupon rate on existing debt.", "the yield to maturity on existing debt.", "the dividend yield."], a: 1, e: "Le YTM (taux de marché), pas le coupon (historique)." }
  ]
};
