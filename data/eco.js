// ============================================================
// eco.js — Economics
// ============================================================
CFA.content.eco = {
  modules: [
    {
      id: "eco-firms", lm: "ECO1", title: "Firms and Market Structures",
      summary: "Breakeven, shutdown, économies d'échelle et les 4 structures de marché.",
      sections: [
        { title: "Coûts, profit et décisions de production", html: `
<ul>
<li>Profit maximal quand <b>MR = MC</b>.</li>
<li><b>Breakeven</b> : P = ATC (profit économique nul).</li>
<li><b>Short-run shutdown</b> : arrêter si P &lt; AVC (on ne couvre même pas les coûts variables).</li>
<li><b>Long-run exit</b> : sortir si P &lt; ATC.</li>
</ul>
<div class="tip">Court terme : on compare à l'AVC (les coûts fixes sont déjà perdus). Long terme : tout devient variable, on compare à l'ATC.</div>
<p><b>Économies d'échelle</b> : l'ATC de long terme baisse quand la production augmente. <b>Déséconomies</b> : il remonte. Le minimum de la courbe LRAC est la <b>minimum efficient scale</b>.</p>` },
        { title: "Les 4 structures de marché", html: `
<div class="scroll"><table class="t">
<tr><th></th><th>Concurrence parfaite</th><th>Concurrence monopolistique</th><th>Oligopole</th><th>Monopole</th></tr>
<tr><td>Nombre de vendeurs</td><td>Très nombreux</td><td>Nombreux</td><td>Peu</td><td>Un</td></tr>
<tr><td>Produit</td><td>Identique</td><td>Différencié</td><td>Identique ou différencié</td><td>Unique</td></tr>
<tr><td>Barrières</td><td>Aucune</td><td>Faibles</td><td>Fortes</td><td>Très fortes</td></tr>
<tr><td>Pouvoir sur le prix</td><td>Aucun (price taker)</td><td>Un peu</td><td>Significatif</td><td>Fort</td></tr>
<tr><td>Concurrence hors prix</td><td>Aucune</td><td>Publicité, marque</td><td>Oui</td><td>Publicité possible</td></tr>
<tr><td>Profit économique long terme</td><td>0</td><td>0</td><td>Possible</td><td>Possible</td></tr>
</table></div>
<p>Concurrence parfaite : P = MR = MC. Monopole : P &gt; MR = MC.</p>` },
        { title: "Oligopole : les modèles", html: `
<ul>
<li><b>Kinked demand</b> : les concurrents suivent une baisse de prix mais pas une hausse → prix rigides.</li>
<li><b>Cournot</b> : chacun choisit sa quantité en supposant celle des autres fixe.</li>
<li><b>Nash equilibrium</b> : aucun ne peut améliorer sa situation en changeant seul de stratégie.</li>
<li><b>Stackelberg</b> : un leader décide d'abord, les suiveurs réagissent.</li>
<li><b>Dominant firm</b> : une firme fixe le prix, les petites suivent.</li>
</ul>
<p>Mesures de concentration : <b>N-firm concentration ratio</b> et <b>HHI</b> (somme des parts au carré). Limite : ignorent les barrières à l'entrée.</p>` }
      ],
      methods: []
    },
    {
      id: "eco-cycle", lm: "ECO2", title: "Understanding Business Cycles",
      summary: "Phases du cycle, indicateurs, chômage, inflation.",
      sections: [
        { title: "Les phases", html: `
<table class="t">
<tr><th>Phase</th><th>Ce qui se passe</th></tr>
<tr><td>Recovery (early expansion)</td><td>PIB repart, chômage encore élevé, inflation faible</td></tr>
<tr><td>Expansion</td><td>Croissance forte, emploi en hausse, investissement</td></tr>
<tr><td>Peak (late expansion)</td><td>Capacités saturées, inflation et taux en hausse</td></tr>
<tr><td>Contraction / recession</td><td>PIB recule, chômage monte, stocks s'accumulent</td></tr>
</table>
<p>Les entreprises ajustent d'abord les heures et l'intérim avant d'embaucher ou de licencier. Le <b>ratio stock/ventes</b> monte au début d'une récession (ventes qui chutent).</p>` },
        { title: "Indicateurs", html: `
<ul>
<li><b>Leading</b> (avancés) : courbe des taux, permis de construire, nouvelles commandes, indices boursiers, confiance, demandes d'allocations chômage hebdomadaires.</li>
<li><b>Coincident</b> : production industrielle, revenus, ventes, emploi salarié.</li>
<li><b>Lagging</b> (retardés) : durée moyenne du chômage, ratio stock/ventes, taux préférentiel bancaire, coût unitaire du travail, crédit à la consommation / revenu.</li>
</ul>
<div class="tip">La courbe des taux qui s'inverse et la bourse : <b>avancés</b>. Le chômage de longue durée et les taux bancaires : <b>retardés</b>.</div>` },
        { title: "Chômage et inflation", html: `
<ul>
<li>Chômage frictionnel (changement d'emploi), structurel (inadéquation des compétences), cyclique (lié au cycle).</li>
<li><b>Discouraged workers</b> : ne cherchent plus, sortent de la population active → le taux de chômage baisse artificiellement.</li>
<li>Inflation : <b>cost-push</b> (coûts, salaires, matières premières) ou <b>demand-pull</b>.</li>
<li>Indices : Laspeyres (panier fixe de la période de base → surestime l'inflation : biais de substitution, de qualité, nouveaux produits), Paasche (panier courant), Fisher (moyenne géométrique des deux).</li>
<li>Core inflation : hors alimentation et énergie.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "eco-fiscal", lm: "ECO3", title: "Fiscal Policy",
      summary: "Outils, multiplicateur, stabilisateurs automatiques, délais.",
      sections: [
        { title: "Outils et effets", html: `
<ul>
<li>Dépenses : transferts, dépenses courantes, investissement public.</li>
<li>Recettes : impôts directs (revenus, sociétés) et indirects (TVA, accises).</li>
<li><b>Expansionniste</b> : hausse des dépenses ou baisse des impôts. <b>Restrictive</b> : l'inverse.</li>
</ul>
<p><span class="f">Fiscal multiplier = 1 / [1 − MPC × (1 − t)]</span></p>
<p><b>Balanced budget multiplier</b> : une hausse des dépenses financée par autant d'impôts augmente quand même le PIB (multiplicateur positif).</p>` },
        { title: "Stabilisateurs et limites", html: `
<ul>
<li><b>Automatic stabilizers</b> : impôts progressifs et allocations chômage agissent sans décision politique.</li>
<li>Délais : <b>recognition lag</b> (identifier le problème), <b>action lag</b> (voter), <b>impact lag</b> (effet sur l'économie).</li>
<li><b>Crowding out</b> : l'emprunt public fait monter les taux et évince l'investissement privé.</li>
<li><b>Ricardian equivalence</b> : les ménages épargnent la baisse d'impôts car ils anticipent des impôts futurs → effet nul.</li>
<li>Le solde budgétaire n'est pas un bon indicateur de l'orientation : utiliser le <b>structural (cyclically adjusted) budget deficit</b>.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "eco-mon", lm: "ECO4", title: "Monetary Policy",
      summary: "Rôles de la banque centrale, outils, transmission, limites.",
      sections: [
        { title: "Banque centrale", html: `
<p>Rôles : monopole d'émission, banquier de l'État, prêteur en dernier ressort, supervision bancaire, gestion des réserves de change, politique monétaire.</p>
<p>Qualités d'une banque centrale efficace : <b>indépendance</b> (opérationnelle et/ou de cible), <b>crédibilité</b>, <b>transparence</b>.</p>` },
        { title: "Outils", html: `
<ul>
<li><b>Policy rate</b> (taux directeur) : l'outil principal.</li>
<li><b>Open market operations</b> : acheter des titres injecte des liquidités (expansionniste).</li>
<li><b>Reserve requirements</b> : les baisser augmente la création monétaire.</li>
<li>Quantitative easing quand les taux sont proches de zéro.</li>
</ul>
<p>Money multiplier = 1 / reserve requirement. Quantity theory : MV = PY.</p>` },
        { title: "Transmission et limites", html: `
<p>Hausse du taux directeur → hausse des taux de marché → baisse des prix d'actifs, appréciation de la devise, baisse du crédit et de la demande → baisse de l'inflation.</p>
<p><span class="f">Neutral rate = trend growth + inflation target</span>. Taux directeur &gt; neutre → politique restrictive.</p>
<ul>
<li><b>Liquidity trap</b> : les gens gardent la monnaie, la politique devient inefficace.</li>
<li>Déflation : la dette réelle augmente, consommation reportée.</li>
<li>Effet des anticipations : si la banque n'est pas crédible, la politique marche mal.</li>
</ul>
<table class="t"><tr><th>Policy mix</th><th>Taux</th><th>Production</th></tr>
<tr><td>Budget expansionniste + monnaie expansionniste</td><td>?</td><td>↑</td></tr>
<tr><td>Budget expansionniste + monnaie restrictive</td><td>↑</td><td>?</td></tr>
<tr><td>Budget restrictif + monnaie expansionniste</td><td>↓</td><td>?</td></tr>
<tr><td>Budget restrictif + monnaie restrictive</td><td>?</td><td>↓</td></tr></table>` }
      ],
      methods: []
    },
    {
      id: "eco-geo", lm: "ECO5", title: "Introduction to Geopolitics",
      summary: "Acteurs, coopération vs non-coopération, outils, risque géopolitique.",
      sections: [
        { title: "Les grilles de lecture", html: `
<ul>
<li>Acteurs : États (state actors) et acteurs non étatiques (ONG, entreprises, organisations internationales).</li>
<li><b>Cooperation vs non-cooperation</b> et <b>globalization vs nationalism</b> → 4 archétypes : autarky (non-coopération + nationalisme), hegemony (nationalisme + coopération ciblée), bilateralism, multilateralism.</li>
<li>Outils : <b>national security tools</b> (militaire, espionnage), <b>economic tools</b> (accords commerciaux, sanctions, tarifs), <b>financial tools</b> (accès aux devises, contrôle des capitaux).</li>
</ul>` },
        { title: "Risque géopolitique et investissement", html: `
<p>Types : <b>event risk</b> (date connue : élection), <b>exogenous risk</b> (imprévu : invasion, coup d'État), <b>thematic risk</b> (tendance durable : cyberattaques, changement climatique).</p>
<p>À évaluer : probabilité, vitesse d'impact (velocity) et ampleur. L'analyste ajuste les scénarios, les primes de risque ou la diversification.</p>` }
      ],
      methods: []
    },
    {
      id: "eco-trade", lm: "ECO6", title: "International Trade",
      summary: "Avantage comparatif, restrictions au commerce, blocs commerciaux.",
      sections: [
        { title: "Avantages", html: `
<p><b>Avantage absolu</b> : produire avec moins de ressources. <b>Avantage comparatif</b> : produire avec un plus faible <b>coût d'opportunité</b>. C'est l'avantage comparatif qui justifie l'échange.</p>
<p>Modèles : <b>Ricardo</b> (différences de technologie / productivité), <b>Heckscher-Ohlin</b> (différences de dotations en facteurs : capital vs travail).</p>` },
        { title: "Restrictions et blocs", html: `
<ul>
<li><b>Tariff</b> (droit de douane), <b>quota</b>, <b>export subsidy</b>, <b>voluntary export restraint</b>.</li>
<li>Effets pour un petit pays importateur : prix intérieur ↑, production domestique ↑, consommation ↓, perte sèche (deadweight loss). Le tarif rapporte des recettes à l'État ; le quota rapporte des rentes aux détenteurs de licences.</li>
</ul>
<table class="t"><tr><th>Bloc</th><th>Contenu</th></tr>
<tr><td>Free trade area</td><td>Pas de barrières entre membres</td></tr>
<tr><td>Customs union</td><td>+ politique commerciale commune envers l'extérieur</td></tr>
<tr><td>Common market</td><td>+ libre circulation des facteurs (travail, capital)</td></tr>
<tr><td>Economic union</td><td>+ institutions et politiques économiques communes</td></tr>
<tr><td>Monetary union</td><td>+ monnaie commune</td></tr></table>
<div class="tip">Chaque étage ajoute une couche : <b>F-C-C-E-M</b> → « <b>F</b>aire <b>C</b>ommerce <b>C</b>ommun <b>E</b>n <b>M</b>onnaie ».</div>` }
      ],
      methods: []
    },
    {
      id: "eco-fx", lm: "ECO7–8", title: "Capital Flows, the FX Market and Exchange Rate Calculations",
      summary: "Cotations, cross rates, forwards, régimes de change, balance des paiements.",
      sections: [
        { title: "Lire une cotation", html: `
<p>Cotation <b>price/base</b> : USD/EUR = 1,10 veut dire 1 EUR = 1,10 USD (EUR = devise de base).</p>
<p>Hausse de la cotation = appréciation de la devise de <b>base</b>.</p>
<div class="trap">La convention CFA (A/B = prix de B en A) est l'inverse de l'usage de marché « EUR/USD ». Lis toujours quelle devise vaut 1.</div>
<p>Variation de la devise de cotation : inverser d'abord la cotation, puis calculer la variation.</p>` },
        { title: "Cross rates et forwards", html: `
<p>Cross rate : A/C = A/B × B/C (les B s'annulent).</p>
<p><span class="f">F(f/d) = S(f/d) × (1 + i_f × T) / (1 + i_d × T)</span></p>
<p>La devise avec le taux d'intérêt le plus élevé cote en <b>forward discount</b>. Forward points = F − S (souvent × 10 000).</p>` },
        { title: "Régimes de change et balance des paiements", html: `
<ul>
<li>Du plus rigide au plus flexible : dollarisation, union monétaire, currency board, fixed peg, target zone, crawling peg, managed float, free float.</li>
<li><b>Balance des paiements</b> : current account (biens, services, revenus, transferts) + capital account + financial account = 0.</li>
<li>Current account = épargne − investissement (+ solde budgétaire).</li>
<li>Une dépréciation améliore la balance commerciale si la <b>condition de Marshall-Lerner</b> est remplie ; à court terme, effet <b>J-curve</b>.</li>
</ul>` }
      ],
      methods: [
        { title: "Calculer un cross rate sans se tromper", steps: [
          "Écrire chaque cotation sous la forme « prix / base ».",
          "Inverser une cotation si besoin pour que la devise commune s'annule.",
          "Multiplier : (A/B) × (B/C) = A/C.",
          "Vérifier l'ordre de grandeur (ex. JPY/EUR doit être autour de 150, pas 0,006)."
        ] }
      ]
    }
  ],
  questions: [
    { id: "eco-o1", m: "eco-firms", type: "open", q: "Quand une entreprise doit-elle arrêter sa production à court terme ? Et sortir du marché à long terme ?", a: "Court terme : si le prix est inférieur au coût variable moyen (P < AVC). Long terme : si le prix est inférieur au coût total moyen (P < ATC)." },
    { id: "eco-1", m: "eco-firms", type: "mcq", q: "In the short run, a firm should shut down when price is below:", o: ["average total cost.", "average variable cost.", "marginal revenue."], a: 1, e: "Court terme : P < AVC → shutdown. P < ATC concerne la sortie à long terme." },
    { id: "eco-2", m: "eco-firms", type: "mcq", q: "Four firms have market shares of 40%, 30%, 20%, and 10%. The HHI is closest to:", o: ["1,000.", "3,000.", "10,000."], a: 1, e: "40² + 30² + 20² + 10² = 1 600 + 900 + 400 + 100 = 3 000." },
    { id: "eco-3", m: "eco-firms", type: "mcq", q: "A market with many firms selling differentiated products and low barriers to entry is best described as:", o: ["oligopoly.", "monopolistic competition.", "perfect competition."], a: 1, e: "Produits différenciés + faibles barrières + nombreux vendeurs = concurrence monopolistique." },
    { id: "eco-4", m: "eco-firms", type: "mcq", q: "The kinked demand curve model of oligopoly assumes competitors will:", o: ["match price increases but not price cuts.", "match price cuts but not price increases.", "ignore all price changes."], a: 1, e: "On suit les baisses (pour ne pas perdre de clients) mais pas les hausses → prix rigides." },
    { id: "eco-o2", m: "eco-cycle", type: "open", q: "Donne deux indicateurs avancés, deux coïncidents et deux retardés.", a: "Avancés : pente de la courbe des taux, indices boursiers, permis de construire, nouvelles commandes. Coïncidents : production industrielle, emploi salarié, revenus réels. Retardés : durée moyenne du chômage, ratio stocks/ventes, taux préférentiel." },
    { id: "eco-5", m: "eco-cycle", type: "mcq", q: "Which of the following is a lagging economic indicator?", o: ["Average duration of unemployment.", "Building permits.", "Stock market index."], a: 0, e: "La durée moyenne du chômage est retardée. Permis de construire et bourse sont avancés." },
    { id: "eco-6", m: "eco-cycle", type: "mcq", q: "A Laspeyres price index most likely overstates inflation because of:", o: ["substitution bias.", "the use of a current-period basket.", "excluding food and energy."], a: 0, e: "Panier fixe de base → ne capte pas la substitution vers les biens moins chers." },
    { id: "eco-7", m: "eco-cycle", type: "mcq", q: "An increase in discouraged workers will most likely:", o: ["increase the unemployment rate.", "decrease the measured unemployment rate.", "have no effect on the unemployment rate."], a: 1, e: "Ils sortent de la population active : ils ne comptent plus comme chômeurs." },
    { id: "eco-8", m: "eco-fiscal", type: "mcq", q: "MPC is 0.75 and the tax rate is 20%. The fiscal multiplier is closest to:", o: ["2.5.", "4.0.", "1.6."], a: 0, e: "1 / [1 − 0,75 × 0,8] = 1 / 0,4 = 2,5." },
    { id: "eco-9", m: "eco-fiscal", type: "mcq", q: "Which is an example of an automatic stabilizer?", o: ["A new infrastructure program.", "Unemployment benefits.", "A temporary tax rebate."], a: 1, e: "Les allocations chômage augmentent d'elles-mêmes en récession, sans décision politique." },
    { id: "eco-10", m: "eco-fiscal", type: "mcq", q: "Ricardian equivalence suggests that a debt-financed tax cut will:", o: ["strongly increase consumption.", "have little effect on consumption because households save for future taxes.", "reduce interest rates."], a: 1, e: "Les ménages anticipent des impôts futurs et épargnent la baisse d'impôts." },
    { id: "eco-o3", m: "eco-mon", type: "open", q: "Comment calcule-t-on le taux neutre et comment l'utilise-t-on ?", a: "Taux neutre = croissance tendancielle + cible d'inflation. Si le taux directeur est au-dessus, la politique est restrictive ; en dessous, expansionniste." },
    { id: "eco-11", m: "eco-mon", type: "mcq", q: "A central bank buying government securities in the open market is most likely:", o: ["contractionary.", "expansionary.", "neutral."], a: 1, e: "Achat de titres = injection de liquidités = expansionniste." },
    { id: "eco-12", m: "eco-mon", type: "mcq", q: "Trend growth is 2% and the inflation target is 2%. A policy rate of 3% indicates monetary policy is:", o: ["expansionary.", "neutral.", "contractionary."], a: 0, e: "Taux neutre = 4 %. Taux directeur 3 % < 4 % → expansionniste." },
    { id: "eco-13", m: "eco-mon", type: "mcq", q: "With a reserve requirement of 20%, the money multiplier is:", o: ["0.2.", "5.", "20."], a: 1, e: "1 / 0,20 = 5." },
    { id: "eco-14", m: "eco-mon", type: "mcq", q: "Expansionary fiscal policy combined with restrictive monetary policy will most likely result in:", o: ["higher interest rates.", "lower interest rates.", "lower output with certainty."], a: 0, e: "Les deux font monter les taux. L'effet sur la production est ambigu." },
    { id: "eco-15", m: "eco-geo", type: "mcq", q: "A country that pursues nationalism and non-cooperation is best described as following:", o: ["multilateralism.", "autarky.", "hegemony."], a: 1, e: "Non-coopération + nationalisme = autarky." },
    { id: "eco-16", m: "eco-geo", type: "mcq", q: "An election scheduled for a known date is an example of:", o: ["event risk.", "exogenous risk.", "thematic risk."], a: 0, e: "Date connue = event risk. Imprévu = exogenous. Tendance durable = thematic." },
    { id: "eco-17", m: "eco-trade", type: "mcq", q: "A country has a comparative advantage in a good if it:", o: ["can produce more of the good with the same resources.", "has a lower opportunity cost of producing the good.", "exports more of the good."], a: 1, e: "Avantage comparatif = plus faible coût d'opportunité. Le premier énoncé décrit l'avantage absolu." },
    { id: "eco-18", m: "eco-trade", type: "mcq", q: "A trading bloc with free trade among members, a common external trade policy, and free movement of labor and capital is a:", o: ["customs union.", "common market.", "monetary union."], a: 1, e: "Common market = customs union + libre circulation des facteurs." },
    { id: "eco-19", m: "eco-trade", type: "mcq", q: "For a small importing country, imposing a tariff most likely:", o: ["increases domestic consumption.", "increases domestic production.", "lowers the domestic price."], a: 1, e: "Le prix intérieur monte → production domestique ↑, consommation ↓." },
    { id: "eco-o4", m: "eco-fx", type: "open", q: "USD/EUR passe de 1,10 à 1,21. Quelle devise s'apprécie et de combien ?", a: "L'EUR (devise de base) s'apprécie de 1,21/1,10 − 1 = 10 %. L'USD se déprécie de 1,10/1,21 − 1 ≈ −9,1 %." },
    { id: "eco-20", m: "eco-fx", type: "mcq", q: "USD/EUR = 1.20 and JPY/USD = 150. The JPY/EUR cross rate is:", o: ["125.", "180.", "0.008."], a: 1, e: "JPY/EUR = JPY/USD × USD/EUR = 150 × 1,20 = 180." },
    { id: "eco-21", m: "eco-fx", type: "mcq", q: "Spot USD/EUR is 1.1000. One-year interest rates are 4% in USD and 2% in EUR. The one-year forward rate is closest to:", o: ["1.0784.", "1.1000.", "1.1216."], a: 2, e: "F = 1,10 × 1,04 / 1,02 = 1,1216. La devise au taux bas (EUR) cote en prime." },
    { id: "eco-22", m: "eco-fx", type: "mcq", q: "Which exchange rate regime gives a country the least monetary independence?", o: ["Managed float.", "Currency board.", "Crawling peg."], a: 1, e: "Currency board : la base monétaire est entièrement adossée aux réserves de devises. Très peu d'autonomie (seule la dollarisation fait moins)." },
    { id: "eco-23", m: "eco-fx", type: "mcq", q: "The J-curve effect describes a situation where, after a currency depreciation, the trade balance:", o: ["improves immediately.", "first worsens, then improves.", "never changes."], a: 1, e: "À court terme les volumes s'ajustent lentement : la balance se dégrade d'abord." }
  ]
};
