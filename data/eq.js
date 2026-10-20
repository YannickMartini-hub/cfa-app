// ============================================================
// eq.js — Equity Investments (« Equities » en 2027)
// Les ajouts 2027 sont signalés : vérifie le détail avec Kaplan 2027.
// ============================================================
CFA.content.eq = {
  modules: [
    {
      id: "eq-mkt", lm: "EQ1", title: "Market Organization and Structure",
      summary: "Fonctions des marchés, positions, marge, ordres, types de marchés.",
      sections: [
        { title: "Positions et marge", html: `
<ul>
<li><b>Long</b> : on possède l'actif, on gagne si le prix monte.</li>
<li><b>Short</b> : on emprunte et vend l'actif, on gagne s'il baisse. Perte potentielle illimitée. Le vendeur à découvert verse les dividendes au prêteur.</li>
</ul>
<p>Achat sur marge : levier = 1 / marge initiale.</p>
<p><span class="f">Prix d'appel de marge = P0 × (1 − IM) / (1 − MM)</span></p>
<div class="ex"><b>Exemple :</b> achat à 50, marge initiale 50 %, maintenance 25 %. Appel de marge si P &lt; 50 × 0,5 / 0,75 = 33,33.</div>` },
        { title: "Les ordres", html: `
<ul>
<li><b>Execution</b> : market order (exécution immédiate, prix incertain) ; limit order (prix maîtrisé, exécution incertaine).</li>
<li><b>Validity</b> : day order, good-till-cancelled, immediate-or-cancel (fill or kill), good-on-close.</li>
<li><b>Stop order</b> : devient actif quand le prix touche le stop. Un stop-loss sur une position longue est un ordre de <b>vente</b> placé <b>sous</b> le prix actuel.</li>
</ul>
<div class="trap">Un limit order d'achat placé <b>au-dessus</b> du meilleur ask est « marketable » : il s'exécute tout de suite.</div>` },
        { title: "Types de marchés", html: `
<ul>
<li><b>Primary market</b> : émission de nouveaux titres (IPO, seasoned offering, private placement, shelf registration, rights offering).</li>
<li><b>Secondary market</b> : échanges entre investisseurs.</li>
<li><b>Quote-driven</b> (dealers, OTC), <b>order-driven</b> (carnet d'ordres, règles de priorité : prix, puis display, puis temps), <b>brokered</b> (immobilier, blocs).</li>
<li>Un marché bien fonctionnant : liquide, informationnellement efficient, faibles coûts (operationally efficient), allocation efficiente du capital.</li>
</ul>` }
      ],
      methods: [
        { title: "Rendement d'un achat sur marge", steps: [
          "Mise initiale = prix × actions × marge initiale (+ commission).",
          "Fin : valeur des actions + dividendes − prêt remboursé − intérêts − commission.",
          "Rendement = (fin − mise initiale) / mise initiale.",
          "Contrôle : sans frais, rendement ≈ levier × rendement de l'action."
        ] }
      ]
    },
    {
      id: "eq-idx", lm: "EQ2", title: "Security Market Indexes",
      summary: "Méthodes de pondération, price vs total return, rebalancing et reconstitution.",
      sections: [
        { title: "Pondérations", html: `
<table class="t">
<tr><th>Méthode</th><th>Poids</th><th>Biais</th></tr>
<tr><td>Price-weighted</td><td>Prix / somme des prix</td><td>Les titres chers dominent ; un split modifie le divisor</td></tr>
<tr><td>Equal-weighted</td><td>1 / N</td><td>Surpondère les petites caps ; rééquilibrage fréquent</td></tr>
<tr><td>Market-cap weighted</td><td>Capitalisation / total</td><td>Les grosses caps et les titres en hausse (momentum) dominent</td></tr>
<tr><td>Float-adjusted</td><td>Capitalisation flottante</td><td>Standard de l'industrie</td></tr>
<tr><td>Fundamental</td><td>Ventes, bénéfices, dividendes…</td><td>Biais value</td></tr>
</table>` },
        { title: "Rendements et maintenance", html: `
<ul>
<li><b>Price return</b> : variation de prix seulement. <b>Total return</b> : + dividendes réinvestis. Total ≥ price.</li>
<li><b>Rebalancing</b> : ramener les poids à la cible (surtout equal-weighted).</li>
<li><b>Reconstitution</b> : changer la liste des titres.</li>
<li>Indices obligataires : univers énorme, titres peu liquides, prix difficiles à obtenir, turnover élevé.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "eq-eff", lm: "EQ3", title: "Market Efficiency",
      summary: "Formes d'efficience, anomalies, finance comportementale.",
      sections: [
        { title: "Les 3 formes", html: `
<table class="t">
<tr><th>Forme</th><th>Information dans les prix</th><th>Ce qui ne marche pas</th></tr>
<tr><td>Weak</td><td>Prix et volumes passés</td><td>Analyse technique</td></tr>
<tr><td>Semi-strong</td><td>Toute info publique</td><td>+ analyse fondamentale</td></tr>
<tr><td>Strong</td><td>Publique + privée</td><td>+ délits d'initiés</td></tr>
</table>
<div class="tip">Chaque forme inclut la précédente. Les marchés développés sont généralement considérés comme semi-strong efficient ; les tests montrent que la forme strong ne tient pas (les initiés gagnent).</div>
<p>Facteurs qui améliorent l'efficience : nombreux participants, analystes, accès à l'information, peu de limites à l'arbitrage, faibles coûts de transaction.</p>` },
        { title: "Anomalies", html: `
<ul>
<li>Time-series : <b>January effect</b>, momentum, overreaction.</li>
<li>Cross-sectional : size effect, value effect.</li>
<li>Autres : closed-end fund discount, earnings surprise (post-earnings drift), IPO underperformance à long terme.</li>
</ul>
<p>Beaucoup disparaissent une fois connues ou s'expliquent par le data mining ou une prime de risque.</p>` },
        { title: "Biais comportementaux", html: `
<p>Loss aversion, herding, overconfidence, information cascades, representativeness, mental accounting, conservatism, narrow framing.</p>` }
      ],
      methods: []
    },
    {
      id: "eq-sec", lm: "EQ4", title: "Overview of Equity Securities",
      summary: "Actions ordinaires et préférentielles, droits de vote, dépositaires, coût des fonds propres.",
      sections: [
        { title: "Types d'actions", html: `
<ul>
<li><b>Common shares</b> : droit au résidu, droit de vote, dividende variable.</li>
<li><b>Preference shares</b> : dividende fixe prioritaire, pas de vote en général. <b>Cumulative</b> : les dividendes non versés s'accumulent. <b>Participating</b> : dividende supplémentaire si les bénéfices dépassent un seuil.</li>
<li>Callable (au choix de l'émetteur, moins chères pour l'investisseur) vs putable (au choix de l'investisseur, plus chères).</li>
</ul>
<p>Du moins risqué au plus risqué : putable preferred &lt; non-callable preferred &lt; callable preferred &lt; common.</p>` },
        { title: "Investir à l'étranger", html: `
<ul>
<li><b>Direct investing</b> : acheter sur le marché étranger.</li>
<li><b>Depository receipts</b> : sponsored (l'émetteur participe, droits de vote) ou unsponsored. ADR (US), GDR (hors US).</li>
<li><b>Global registered shares</b>, <b>basket of listed DRs</b>.</li>
</ul>` },
        { title: "Valeur comptable vs valeur de marché", html: `
<p>ROE = NI / equity moyen. Une hausse du ROE peut venir de meilleurs bénéfices ou… d'une baisse des capitaux propres (rachats, pertes).</p>
<p>Le coût des fonds propres est le rendement minimum exigé ; le management doit dépasser ce coût pour créer de la valeur.</p>` }
      ],
      methods: []
    },
    {
      id: "eq-ind", lm: "EQ5–6", title: "Industry, Competitive and Company Analysis",
      summary: "Classification, cycle de vie, Porter, PESTLE, analyse de l'entreprise.",
      sections: [
        { title: "Classer les industries", html: `
<ul>
<li>Par produits (GICS, ICB), par sensibilité au cycle : <b>cyclical</b> (automobile, luxe), <b>non-cyclical</b> (défensives : alimentaire, santé).</li>
<li>Cycle de vie : embryonic → growth → shakeout → mature → decline.</li>
</ul>` },
        { title: "Porter et PESTLE", html: `
<p><b>5 forces de Porter</b> : nouveaux entrants, substituts, pouvoir des clients, pouvoir des fournisseurs, rivalité.</p>
<p><b>PESTLE</b> : Political, Economic, Social, Technological, Legal, Environmental. En 2027, ces cadres sont reliés plus directement à la valorisation.</p>
<div class="tip">Barrières élevées + peu de substituts + clients et fournisseurs faibles = marges durables.</div>
<p>Stratégies : <b>cost leadership</b> vs <b>differentiation</b> (Porter), éventuellement sur un segment (focus).</p>` },
        { title: "Analyser une entreprise", html: `
<ul>
<li>Business model, sources de revenus, structure de coûts, avantage concurrentiel.</li>
<li>Indicateurs : croissance, marges, ROIC, flux de trésorerie, unit economics.</li>
<li>Prévisions : revenus (top-down / bottom-up), marges, capex, working capital.</li>
<li>2027 : modèles <b>désagrégés</b> (par segment, volume × prix) et <b>scénarios pondérés par des probabilités</b>.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "eq-research", lm: "EQ+ 2027", title: "Le processus de recherche (nouveau 2027)",
      summary: "Initiation de couverture, sell-side vs buy-side, activist short sellers.",
      sections: [
        { title: "Sell-side et buy-side", html: `
<p class="small muted">Contenu nouveau en 2027 : vérifie les learning outcomes exacts dans Kaplan 2027.</p>
<ul>
<li><b>Sell-side</b> : analystes de brokers et banques. Publient des recommandations et objectifs de cours pour les clients et la visibilité. Risque de conflit avec l'investment banking.</li>
<li><b>Buy-side</b> : analystes chez les gérants. Leur recherche sert à prendre les décisions d'investissement internes, elle n'est pas publiée.</li>
<li><b>Initiating coverage</b> : premier rapport complet sur une entreprise (business, secteur, modèle financier, valorisation, recommandation, risques).</li>
</ul>` },
        { title: "Activist short sellers", html: `
<p>Investisseurs qui prennent une position courte puis publient une recherche négative (fraude présumée, surévaluation). Ils peuvent améliorer l'efficience en révélant des problèmes, mais posent des questions de conflit et de manipulation.</p>
<div class="tip">Lien avec l'éthique : publier des informations fausses pour faire baisser un cours = manipulation de marché (Standard II(B)).</div>` }
      ],
      methods: []
    },
    {
      id: "eq-val", lm: "EQ7", title: "Equity Valuation: Concepts and Basic Tools",
      summary: "DDM, FCFE, multiples, valeur d'entreprise, approches par les actifs.",
      sections: [
        { title: "Valeur intrinsèque vs prix", html: `
<p>Valeur intrinsèque &gt; prix → sous-évalué → acheter. Mais il faut tenir compte de la confiance dans son modèle.</p>
<p>Trois familles : <b>present value models</b> (DDM, FCFE), <b>multiplier models</b> (P/E, EV/EBITDA), <b>asset-based</b> (actifs − dettes à la juste valeur).</p>` },
        { title: "DDM", html: `
<ul>
<li>Gordon : V0 = D1 / (r − g), pour entreprises matures, r &gt; g.</li>
<li>Préférentielle : V0 = D / r.</li>
<li>Multistage : actualiser les dividendes de la phase de forte croissance, puis une terminal value en Gordon à la date n.</li>
<li>g = b × ROE (taux de rétention × ROE).</li>
</ul>
<div class="trap">Utiliser D1 = D0 × (1 + g). L'erreur la plus fréquente est de mettre D0 au numérateur.</div>` },
        { title: "Multiples", html: `
<ul>
<li>Justified forward P/E = (D1/E1) / (r − g) = payout / (r − g).</li>
<li>P/B, P/S, P/CF : utiles quand les bénéfices sont négatifs ou volatils.</li>
<li><b>EV</b> = market cap + dette + préférentielles + minoritaires − cash. EV/EBITDA compare des entreprises à leviers différents.</li>
<li>Method of comparables : appliquer le multiple de pairs → hypothèse que les pairs sont correctement valorisés.</li>
</ul>` },
        { title: "Coût des fonds propres : CAPM et multi-factor (renforcé 2027)", html: `
<p>CAPM : re = Rf + β [E(Rm) − Rf].</p>
<p>Modèles multi-facteurs : re = Rf + Σ βi × prime du facteur i (ex. Fama-French : marché, taille, value ; + momentum).</p>
<p>Ajouts possibles : prime de taille, prime pays, prime spécifique.</p>` }
      ],
      methods: [
        { title: "DDM à deux étapes", steps: [
          "Calculer les dividendes de la phase 1 : D1, D2, … Dn avec la croissance forte.",
          "Calculer Dn+1 = Dn × (1 + g stable).",
          "Terminal value en n : TVn = Dn+1 / (r − g stable).",
          "Actualiser chaque dividende et TVn à la date 0, puis additionner.",
          "Calculatrice : flux CF1…CFn avec CFn = Dn + TVn, puis NPV."
        ] }
      ]
    }
  ],
  questions: [
    { id: "eq-o1", m: "eq-mkt", type: "open", q: "Où place-t-on un stop-loss pour protéger une position longue, et quel type d'ordre est-ce ?", a: "Un ordre de vente stop placé sous le prix actuel. Si le prix tombe au stop, l'ordre devient un ordre de vente (au marché ou à cours limité)." },
    { id: "eq-1", m: "eq-mkt", type: "mcq", q: "An investor buys a stock at 40 with initial margin of 60% and maintenance margin of 30%. The price below which a margin call occurs is closest to:", o: ["22.86.", "28.00.", "34.29."], a: 0, e: "40 × (1 − 0,6) / (1 − 0,3) = 16 / 0,7 = 22,86." },
    { id: "eq-2", m: "eq-mkt", type: "mcq", q: "With an initial margin requirement of 40%, the leverage ratio is:", o: ["1.4.", "2.5.", "4.0."], a: 1, e: "1 / 0,40 = 2,5." },
    { id: "eq-3", m: "eq-mkt", type: "mcq", q: "A short seller most likely must:", o: ["receive dividends paid on the borrowed shares.", "pay dividends on the borrowed shares to the lender.", "pay no dividends."], a: 1, e: "Le vendeur à découvert doit verser les dividendes au prêteur des titres." },
    { id: "eq-4", m: "eq-mkt", type: "mcq", q: "In an order-driven market, the primary order precedence rule is:", o: ["time of arrival.", "price priority.", "display precedence."], a: 1, e: "Prix d'abord, puis display, puis temps." },
    { id: "eq-5", m: "eq-idx", type: "mcq", q: "In a price-weighted index, which stock has the greatest influence?", o: ["The stock with the largest market cap.", "The stock with the highest price.", "All stocks equally."], a: 1, e: "Price-weighted : le poids dépend du prix." },
    { id: "eq-6", m: "eq-idx", type: "mcq", q: "An equal-weighted index most likely has a bias toward:", o: ["large-cap stocks.", "small-cap stocks.", "high-priced stocks."], a: 1, e: "Chaque titre pèse pareil → les petites capitalisations sont surreprésentées par rapport au marché." },
    { id: "eq-7", m: "eq-idx", type: "mcq", q: "Changing the constituent securities of an index is called:", o: ["rebalancing.", "reconstitution.", "reweighting."], a: 1, e: "Reconstitution = changer la liste. Rebalancing = ajuster les poids." },
    { id: "eq-o2", m: "eq-eff", type: "open", q: "Si un marché est semi-strong efficient, quelles analyses ne permettent pas de surperformer ?", a: "Ni l'analyse technique (info passée) ni l'analyse fondamentale sur infos publiques. Seule une info privée pourrait aider (mais l'utiliser est souvent illégal)." },
    { id: "eq-8", m: "eq-eff", type: "mcq", q: "If markets are weak-form efficient, which strategy cannot consistently earn abnormal returns?", o: ["Technical analysis.", "Fundamental analysis.", "Trading on insider information."], a: 0, e: "Weak form : les prix passés sont déjà intégrés." },
    { id: "eq-9", m: "eq-eff", type: "mcq", q: "The tendency of stocks to continue drifting in the direction of an earnings surprise is evidence against:", o: ["weak-form efficiency.", "semi-strong form efficiency.", "strong-form efficiency only."], a: 1, e: "L'annonce de résultats est publique : une réaction lente contredit la forme semi-strong." },
    { id: "eq-10", m: "eq-sec", type: "mcq", q: "Which is least risky for an investor?", o: ["Callable preferred shares.", "Putable preferred shares.", "Common shares."], a: 1, e: "L'option de vente protège l'investisseur : putable preferred = le moins risqué." },
    { id: "eq-11", m: "eq-sec", type: "mcq", q: "Cumulative preferred shares require that:", o: ["unpaid dividends be paid before any common dividends.", "holders participate in excess profits.", "holders can convert into common shares."], a: 0, e: "Cumulative : les dividendes non versés s'accumulent et passent avant les ordinaires." },
    { id: "eq-12", m: "eq-sec", type: "mcq", q: "A depositary receipt in which the foreign company is involved and investors receive voting rights is:", o: ["unsponsored.", "sponsored.", "a global registered share."], a: 1, e: "Sponsored : l'émetteur participe, les détenteurs ont les droits de vote." },
    { id: "eq-13", m: "eq-ind", type: "mcq", q: "Which factor most likely increases industry profitability?", o: ["Low barriers to entry.", "High buyer bargaining power.", "Few substitutes."], a: 2, e: "Peu de substituts protègent les prix et les marges." },
    { id: "eq-14", m: "eq-ind", type: "mcq", q: "An industry with slowing growth, intense competition, and consolidation is most likely in the:", o: ["growth stage.", "shakeout stage.", "embryonic stage."], a: 1, e: "Shakeout : la croissance ralentit, la concurrence s'intensifie, les plus faibles disparaissent." },
    { id: "eq-15", m: "eq-ind", type: "mcq", q: "In a PESTLE analysis, new data privacy regulation would be classified as a:", o: ["social factor.", "legal factor.", "technological factor."], a: 1, e: "Réglementation = Legal." },
    { id: "eq-o3", m: "eq-research", type: "open", q: "Quelle est la différence entre la recherche sell-side et buy-side ?", a: "Sell-side : publiée par les brokers/banques pour leurs clients, avec recommandations publiques et risque de conflit avec l'investment banking. Buy-side : réalisée chez les gérants pour leurs propres décisions, non publiée." },
    { id: "eq-16", m: "eq-research", type: "mcq", q: "An investor takes a short position and then publishes a report alleging accounting fraud at the company. This investor is best described as a(n):", o: ["sell-side analyst.", "activist short seller.", "market maker."], a: 1, e: "Position courte + publication d'une recherche négative = activist short seller." },
    { id: "eq-o4", m: "eq-val", type: "open", q: "Quand un modèle de multiples comme P/B est-il plus adapté qu'un P/E ?", a: "Quand les bénéfices sont négatifs ou très volatils, ou pour des entreprises à actifs essentiellement financiers (banques). La valeur comptable est plus stable et rarement négative." },
    { id: "eq-17", m: "eq-val", type: "mcq", q: "D0 = 1.50, g = 5%, r = 10%. The value per share using the Gordon growth model is:", o: ["30.00.", "31.50.", "15.75."], a: 1, e: "D1 = 1,575. V = 1,575 / 0,05 = 31,50." },
    { id: "eq-18", m: "eq-val", type: "mcq", q: "A preferred share pays an annual dividend of 4 and the required return is 8%. Its value is:", o: ["32.", "50.", "54."], a: 1, e: "4 / 0,08 = 50." },
    { id: "eq-19", m: "eq-val", type: "mcq", q: "A company has a payout ratio of 40%, r = 9%, g = 5%. The justified forward P/E is:", o: ["8.0.", "10.0.", "4.4."], a: 1, e: "0,40 / (0,09 − 0,05) = 10." },
    { id: "eq-20", m: "eq-val", type: "mcq", q: "Market cap 500, debt 200, preferred 50, cash 100. Enterprise value is:", o: ["650.", "750.", "850."], a: 0, e: "500 + 200 + 50 − 100 = 650." },
    { id: "eq-21", m: "eq-val", type: "mcq", q: "A company has ROE of 15% and a dividend payout ratio of 60%. Its sustainable growth rate is:", o: ["6%.", "9%.", "15%."], a: 0, e: "g = b × ROE = 0,4 × 15 % = 6 %." },
    { id: "eq-22", m: "eq-val", type: "mcq", q: "Rf = 3%, beta = 1.2, expected market return = 8%. Cost of equity by CAPM is:", o: ["9.0%.", "9.6%.", "12.6%."], a: 0, e: "3 % + 1,2 × (8 % − 3 %) = 3 % + 6 % = 9 %. Le 12,6 % multiplie β par 8 % au lieu de la prime." }
  ]
};
