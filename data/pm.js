// ============================================================
// pm.js — Portfolio Management (« Portfolio Construction » en 2027
// selon certaines sources : vérifie avec Kaplan 2027)
// ============================================================
CFA.content.pm = {
  modules: [
    {
      id: "pm-over", lm: "PM1", title: "Portfolio Management: An Overview",
      summary: "Approche portefeuille, processus en 3 étapes, types d'investisseurs, fonds.",
      sections: [
        { title: "Pourquoi un portefeuille", html: `
<p>La diversification réduit le risque sans réduire autant le rendement espéré. <b>Diversification ratio</b> = risque du portefeuille équipondéré / risque moyen d'un titre.</p>
<p>Limite : en crise, les corrélations montent et la diversification protège moins.</p>` },
        { title: "Le processus", html: `
<ol>
<li><b>Planning</b> : comprendre le client, rédiger l'IPS.</li>
<li><b>Execution</b> : allocation d'actifs, sélection des titres, construction.</li>
<li><b>Feedback</b> : suivi, rééquilibrage, mesure de performance.</li>
</ol>
<div class="tip">P-E-F : « <b>P</b>lanifier, <b>E</b>xécuter, <b>F</b>aire le point ».</div>` },
        { title: "Types d'investisseurs", html: `
<table class="t">
<tr><th>Investisseur</th><th>Horizon</th><th>Tolérance au risque</th><th>Liquidité</th></tr>
<tr><td>Individu</td><td>Variable</td><td>Variable</td><td>Variable</td></tr>
<tr><td>Fonds de pension DB</td><td>Long</td><td>Élevée (selon le funded status)</td><td>Faible</td></tr>
<tr><td>Endowment / fondation</td><td>Très long</td><td>Élevée</td><td>Faible</td></tr>
<tr><td>Banque</td><td>Court</td><td>Faible</td><td>Élevée</td></tr>
<tr><td>Assureur vie</td><td>Long</td><td>Faible</td><td>Élevée</td></tr>
<tr><td>Assureur non-vie</td><td>Court</td><td>Faible</td><td>Élevée</td></tr>
<tr><td>Sovereign wealth fund</td><td>Long</td><td>Élevée</td><td>Faible</td></tr>
</table>
<p>DB vs DC : en DB, l'employeur porte le risque ; en DC, le salarié.</p>` },
        { title: "Véhicules collectifs", html: `
<ul>
<li>Open-end funds (rachats à la NAV), closed-end funds (cotés, peuvent coter avec décote ou prime), ETFs (cotés, mécanisme de création/rachat qui maintient le prix proche de la NAV).</li>
<li>Gestion passive (indicielle) vs active.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "pm-rr", lm: "PM2–3", title: "Portfolio Risk and Return I & II",
      summary: "Aversion au risque, frontière efficiente, CML, CAPM, SML, mesures de performance.",
      sections: [
        { title: "Utilité et aversion au risque", html: `
<p><span class="f">U = E(R) − ½ × A × σ²</span></p>
<p>A &gt; 0 : averse ; A = 0 : neutre ; A &lt; 0 : amateur de risque. Plus A est grand, plus les courbes d'indifférence sont pentues.</p>
<p>Le portefeuille optimal est au point de tangence entre la courbe d'indifférence la plus haute et la frontière efficiente (ou la CAL).</p>` },
        { title: "Frontière efficiente et CML", html: `
<ul>
<li>Minimum-variance frontier ; la partie au-dessus du portefeuille de variance minimale est la <b>frontière efficiente</b>.</li>
<li>Avec un actif sans risque, la meilleure droite (CAL) est tangente à la frontière au <b>portefeuille de marché</b> : c'est la <b>CML</b>.</li>
<li>Séparation : tous les investisseurs détiennent le même portefeuille risqué ; seule la part d'actif sans risque change selon leur aversion.</li>
</ul>
<p>Prêter (lending portfolio) : à gauche du marché sur la CML. Emprunter (borrowing portfolio) : à droite.</p>` },
        { title: "Risque systématique et CAPM", html: `
<p>Risque total = systématique (non diversifiable, mesuré par β) + spécifique (diversifiable).</p>
<p>Seul le risque systématique est <b>rémunéré</b>.</p>
<p><span class="f">E(Ri) = Rf + βi [E(Rm) − Rf]</span> : c'est la <b>SML</b>.</p>
<p>β = Cov(i, m) / Var(m) = ρ × σi / σm. Le marché a β = 1.</p>
<table class="t"><tr><th></th><th>CML</th><th>SML</th></tr>
<tr><td>Axe X</td><td>σ (risque total)</td><td>β (risque systématique)</td></tr>
<tr><td>S'applique à</td><td>Portefeuilles efficients</td><td>Tout titre ou portefeuille</td></tr></table>
<p>Hypothèses du CAPM : investisseurs averses au risque et rationnels, horizon d'une période, anticipations homogènes, marchés sans frictions, actifs divisibles, prêt et emprunt au taux sans risque.</p>
<div class="tip">Titre au-dessus de la SML : rendement espéré &gt; rendement exigé → <b>sous-évalué</b> → acheter.</div>` },
        { title: "Mesures de performance", html: `
<table class="t">
<tr><th>Mesure</th><th>Formule</th><th>Risque utilisé</th></tr>
<tr><td>Sharpe</td><td>(Rp − Rf) / σp</td><td>Total</td></tr>
<tr><td>M²</td><td>(Rp − Rf) σm/σp − (Rm − Rf)</td><td>Total (en %)</td></tr>
<tr><td>Treynor</td><td>(Rp − Rf) / βp</td><td>Systématique</td></tr>
<tr><td>Jensen's alpha</td><td>Rp − [Rf + βp (Rm − Rf)]</td><td>Systématique (en %)</td></tr>
</table>
<div class="tip">Portefeuille peu diversifié (c'est tout l'argent du client) → Sharpe ou M². Portefeuille bien diversifié (une partie d'un ensemble) → Treynor ou alpha.</div>` }
      ],
      methods: [
        { title: "Choisir le portefeuille optimal pour un client", steps: [
          "Calculer U = E(R) − 0,5 × A × σ² pour chaque portefeuille (en décimales).",
          "Choisir l'utilité la plus élevée.",
          "Vérifier : un client plus averse (A plus grand) préfère un portefeuille moins risqué."
        ] }
      ]
    },
    {
      id: "pm-plan", lm: "PM4", title: "Basics of Portfolio Planning and Construction",
      summary: "IPS, objectifs, contraintes, allocation stratégique, ESG.",
      sections: [
        { title: "L'IPS", html: `
<p>Contenu : description du client, objectif de l'IPS, rôles, <b>objectifs</b> et <b>contraintes</b>, guidelines, procédures de reporting et de révision, benchmark, règles de rééquilibrage.</p>
<p>Objectifs : <b>Return</b> et <b>Risk</b>.</p>
<p>Contraintes : <b>Liquidity, Time horizon, Taxes, Legal and regulatory, Unique circumstances</b>.</p>
<div class="tip">Mnémotechnique : <b>RR TTLLU</b> → Risk, Return, Time, Taxes, Liquidity, Legal, Unique.</div>` },
        { title: "Tolérance au risque", html: `
<ul>
<li><b>Ability</b> to take risk : horizon, patrimoine, revenus stables, besoins.</li>
<li><b>Willingness</b> : psychologie, attitude déclarée.</li>
<li>En cas de conflit, on retient généralement le niveau le plus <b>bas</b> (et on éduque le client si la volonté est trop faible).</li>
</ul>` },
        { title: "Allocation", html: `
<ul>
<li><b>Strategic asset allocation</b> : allocation de long terme cohérente avec l'IPS.</li>
<li><b>Tactical asset allocation</b> : écarts de court terme pour exploiter des opportunités.</li>
<li>Classes d'actifs : corrélations faibles entre classes, homogènes à l'intérieur.</li>
<li>Rebalancing : calendrier ou corridors.</li>
<li>ESG : negative screening (exclusion), positive screening (best-in-class), thematic investing, impact investing, engagement / active ownership.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "pm-bias", lm: "PM5", title: "Behavioral Biases of Individuals",
      summary: "Biais cognitifs (belief perseverance, processing errors) et émotionnels.",
      sections: [
        { title: "Biais cognitifs", html: `
<p><b>Belief perseverance</b> (s'accrocher à ses croyances) :</p>
<ul>
<li><b>Conservatism</b> : réviser trop peu face à une nouvelle info.</li>
<li><b>Confirmation</b> : chercher ce qui confirme.</li>
<li><b>Representativeness</b> : juger par ressemblance, extrapoler.</li>
<li><b>Illusion of control</b>.</li>
<li><b>Hindsight</b> : « je le savais ».</li>
</ul>
<p><b>Information-processing errors</b> :</p>
<ul>
<li><b>Anchoring and adjustment</b> : rester collé à un chiffre initial.</li>
<li><b>Mental accounting</b> : traiter l'argent par « poches » séparées.</li>
<li><b>Framing</b> : la décision dépend de la présentation.</li>
<li><b>Availability</b> : surpondérer ce qui vient facilement à l'esprit.</li>
</ul>` },
        { title: "Biais émotionnels", html: `
<ul>
<li><b>Loss aversion</b> : garder les perdants trop longtemps, vendre les gagnants trop tôt (disposition effect).</li>
<li><b>Overconfidence</b> : trop de trading, sous-diversification.</li>
<li><b>Self-control</b> : préférer la consommation immédiate.</li>
<li><b>Status quo</b> : ne rien changer.</li>
<li><b>Endowment</b> : valoriser plus ce qu'on possède.</li>
<li><b>Regret aversion</b> : éviter d'agir par peur de regretter.</li>
</ul>
<div class="tip">Biais cognitifs → on les <b>corrige</b> par l'information et l'éducation. Biais émotionnels → plus durs à corriger, on s'y <b>adapte</b>.</div>
<div class="trap">Overconfidence est classé en biais <b>émotionnel</b> dans le curriculum actuel.</div>` }
      ],
      methods: []
    },
    {
      id: "pm-risk", lm: "PM6", title: "Introduction to Risk Management",
      summary: "Cadre de gestion des risques, risk budgeting, risques financiers et non financiers, modification du risque.",
      sections: [
        { title: "Le cadre", html: `
<ul>
<li><b>Risk governance</b> : le board définit la tolérance au risque, au sommet.</li>
<li><b>Risk tolerance</b> : combien de risque l'organisation est prête à prendre.</li>
<li><b>Risk budgeting</b> : allouer le risque total entre activités ou classes d'actifs.</li>
<li>Identifier, mesurer, surveiller, reporter.</li>
</ul>` },
        { title: "Types de risques", html: `
<ul>
<li>Financiers : marché, crédit, liquidité.</li>
<li>Non financiers : opérationnel, juridique, réglementaire, modèle, fiscal, settlement, solvency (manque de financement).</li>
<li>Individuels : mortalité, longévité.</li>
</ul>
<p>Mesures : standard deviation, beta, duration, delta / gamma / vega, VaR (perte minimale avec une probabilité donnée), CVaR (perte moyenne au-delà de la VaR), stress tests et scénarios.</p>` },
        { title: "Modifier le risque", html: `
<ul>
<li><b>Prevention / avoidance</b> : ne pas faire l'activité.</li>
<li><b>Acceptance</b> : self-insurance, diversification.</li>
<li><b>Risk transfer</b> : assurance.</li>
<li><b>Risk shifting</b> : dérivés (forwards, options, swaps).</li>
</ul>
<div class="trap">VaR ne dit pas la perte maximale : c'est une perte <b>minimale</b> attendue dans x % des cas.</div>` }
      ],
      methods: []
    }
  ],
  questions: [
    { id: "pm-o1", m: "pm-over", type: "open", q: "Cite les 3 étapes du processus de gestion de portefeuille.", a: "Planning (comprendre le client, IPS), Execution (allocation, sélection, construction), Feedback (suivi, rééquilibrage, mesure de performance)." },
    { id: "pm-1", m: "pm-over", type: "mcq", q: "Which investor most likely has the highest liquidity needs and lowest risk tolerance?", o: ["Endowment.", "Bank.", "Sovereign wealth fund."], a: 1, e: "Les banques ont des passifs à court terme et une faible tolérance au risque." },
    { id: "pm-2", m: "pm-over", type: "mcq", q: "In a defined contribution plan, investment risk is borne by:", o: ["the employer.", "the employee.", "the plan sponsor's shareholders."], a: 1, e: "DC : le salarié porte le risque de placement." },
    { id: "pm-3", m: "pm-over", type: "mcq", q: "Which fund type can trade at a significant premium or discount to NAV?", o: ["Open-end fund.", "Closed-end fund.", "Money market fund."], a: 1, e: "Nombre de parts fixe, cotées : le prix peut s'écarter de la NAV." },
    { id: "pm-o2", m: "pm-rr", type: "open", q: "Quelle différence entre la CML et la SML ?", a: "La CML relie rendement et risque total (σ) pour les portefeuilles efficients (actif sans risque + marché). La SML relie rendement et risque systématique (β) pour n'importe quel titre ou portefeuille : c'est la représentation du CAPM." },
    { id: "pm-4", m: "pm-rr", type: "mcq", q: "An investor with A = 4 chooses between Portfolio 1 (E(R) 10%, σ 20%) and Portfolio 2 (E(R) 7%, σ 10%). Utility is higher for:", o: ["Portfolio 1.", "Portfolio 2.", "both equally."], a: 1, e: "U1 = 0,10 − 0,5 × 4 × 0,04 = 0,02. U2 = 0,07 − 0,5 × 4 × 0,01 = 0,05. Portefeuille 2." },
    { id: "pm-5", m: "pm-rr", type: "mcq", q: "Rf = 2%, E(Rm) = 8%, β = 1.5. The required return under CAPM is:", o: ["9%.", "11%.", "12%."], a: 1, e: "2 % + 1,5 × 6 % = 11 %." },
    { id: "pm-6", m: "pm-rr", type: "mcq", q: "A stock's expected return plots above the SML. The stock is most likely:", o: ["overvalued.", "undervalued.", "fairly valued."], a: 1, e: "Rendement espéré > exigé → sous-évalué." },
    { id: "pm-7", m: "pm-rr", type: "mcq", q: "Which risk is rewarded with a higher expected return under the CAPM?", o: ["Total risk.", "Systematic risk.", "Unsystematic risk."], a: 1, e: "Seul le risque systématique (non diversifiable) est rémunéré." },
    { id: "pm-8", m: "pm-rr", type: "mcq", q: "Portfolio return 12%, Rf 3%, σ 18%, β 1.2. The Sharpe ratio is:", o: ["0.50.", "0.67.", "7.50."], a: 0, e: "(12 − 3) / 18 = 0,50. Treynor serait 9 / 1,2 = 7,5." },
    { id: "pm-9", m: "pm-rr", type: "mcq", q: "Rp = 11%, Rf = 3%, Rm = 9%, βp = 1.2. Jensen's alpha is:", o: ["0.8%.", "2.0%.", "−0.2%."], a: 0, e: "Exigé = 3 % + 1,2 × 6 % = 10,2 %. Alpha = 11 % − 10,2 % = 0,8 %." },
    { id: "pm-10", m: "pm-rr", type: "mcq", q: "For an investor's entire wealth in a single, poorly diversified portfolio, the most appropriate performance measure is:", o: ["Treynor ratio.", "Sharpe ratio.", "Jensen's alpha."], a: 1, e: "Portefeuille peu diversifié → risque total → Sharpe (ou M²)." },
    { id: "pm-11", m: "pm-rr", type: "mcq", q: "A stock has a correlation of 0.6 with the market, a standard deviation of 30%, and the market's standard deviation is 15%. Its beta is:", o: ["0.6.", "1.2.", "2.0."], a: 1, e: "β = 0,6 × 30/15 = 1,2." },
    { id: "pm-o3", m: "pm-plan", type: "open", q: "Cite les objectifs et les 5 contraintes d'un IPS.", a: "Objectifs : rendement et risque. Contraintes : liquidité, horizon, fiscalité, cadre légal et réglementaire, circonstances particulières." },
    { id: "pm-12", m: "pm-plan", type: "mcq", q: "A client has high ability but low willingness to take risk. The adviser should most likely:", o: ["use the higher ability level.", "use the lower willingness level and possibly educate the client.", "ignore willingness."], a: 1, e: "On retient le niveau le plus bas, avec de la pédagogie si la volonté paraît irrationnelle." },
    { id: "pm-13", m: "pm-plan", type: "mcq", q: "Excluding tobacco companies from a portfolio is an example of:", o: ["positive screening.", "negative screening.", "impact investing."], a: 1, e: "Exclusion = negative screening." },
    { id: "pm-14", m: "pm-plan", type: "mcq", q: "Short-term deviations from the long-term target allocation to exploit market opportunities are called:", o: ["strategic asset allocation.", "tactical asset allocation.", "rebalancing."], a: 1, e: "Tactical asset allocation." },
    { id: "pm-o4", m: "pm-bias", type: "open", q: "Comment traite-t-on un biais cognitif vs un biais émotionnel chez un client ?", a: "Un biais cognitif se corrige par l'information et l'éducation (moderate). Un biais émotionnel est plus difficile à corriger : on s'y adapte (adapt) dans la construction du portefeuille." },
    { id: "pm-15", m: "pm-bias", type: "mcq", q: "An investor holds losing stocks too long hoping to break even. This is most likely:", o: ["loss aversion.", "anchoring.", "availability bias."], a: 0, e: "Loss aversion / disposition effect." },
    { id: "pm-16", m: "pm-bias", type: "mcq", q: "An investor keeps a 'safe money' account and a 'fun money' account and takes very different risks in each. This is:", o: ["mental accounting.", "framing.", "conservatism."], a: 0, e: "Traiter l'argent par poches séparées = mental accounting." },
    { id: "pm-17", m: "pm-bias", type: "mcq", q: "An analyst continues to rely on an initial earnings estimate despite new information. This is most likely:", o: ["anchoring and adjustment.", "overconfidence.", "regret aversion."], a: 0, e: "Rester collé à un chiffre initial = anchoring." },
    { id: "pm-18", m: "pm-risk", type: "mcq", q: "Purchasing insurance is an example of:", o: ["risk shifting.", "risk transfer.", "risk avoidance."], a: 1, e: "Assurance = risk transfer. Les dérivés = risk shifting." },
    { id: "pm-19", m: "pm-risk", type: "mcq", q: "A 1-day 5% VaR of 1M means:", o: ["the maximum loss is 1M.", "there is a 5% chance of losing at least 1M in a day.", "the expected loss is 1M."], a: 1, e: "VaR = perte minimale dans 5 % des cas. Pas la perte maximale." },
    { id: "pm-20", m: "pm-risk", type: "mcq", q: "Setting the organization's overall risk tolerance is primarily the responsibility of:", o: ["the risk governance function at the board level.", "individual traders.", "the compliance department only."], a: 0, e: "La gouvernance du risque, au niveau du board." }
  ]
};
