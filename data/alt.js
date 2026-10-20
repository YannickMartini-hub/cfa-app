// ============================================================
// alt.js — Alternative Investments
// ============================================================
CFA.content.alt = {
  modules: [
    {
      id: "alt-feat", lm: "ALT1–2", title: "Features, Methods and Structures; Performance and Returns",
      summary: "Caractéristiques communes, façons d'investir, structures de fonds, frais et waterfalls.",
      sections: [
        { title: "Ce qui rend un actif « alternatif »", html: `
<ul>
<li>Faible liquidité, horizon long, peu de transparence, données de performance limitées.</li>
<li>Faible corrélation historique avec actions et obligations → <b>diversification</b>.</li>
<li>Frais élevés, besoin de due diligence approfondie, levier fréquent.</li>
<li>Catégories : private capital (equity et debt), real estate, infrastructure, natural resources (commodities, farmland, timberland), hedge funds.</li>
</ul>` },
        { title: "Méthodes d'investissement", html: `
<table class="t">
<tr><th>Méthode</th><th>Avantages</th><th>Inconvénients</th></tr>
<tr><td>Fund investing (via un fonds)</td><td>Expertise du gérant, diversification</td><td>Frais élevés, pas de contrôle</td></tr>
<tr><td>Co-investing (à côté du fonds)</td><td>Frais réduits, plus de contrôle</td><td>Risque de sélection adverse</td></tr>
<tr><td>Direct investing</td><td>Contrôle total, pas de frais de gérant</td><td>Besoin d'une grosse équipe, concentration</td></tr>
</table>` },
        { title: "Structures et frais", html: `
<ul>
<li>Limited partnership : GP (gérant, responsabilité illimitée) et LP (investisseurs).</li>
<li><b>Management fee</b> (% des actifs ou du capital engagé) + <b>incentive fee / carried interest</b> (% des profits).</li>
<li><b>Hurdle rate</b> : rendement minimum avant le carry. <b>Hard hurdle</b> : carry seulement sur l'excédent ; <b>soft hurdle</b> : carry sur tout le profit une fois le seuil franchi (catch-up).</li>
<li><b>High-water mark</b> : pas de carry tant que la valeur n'a pas dépassé son plus haut historique.</li>
<li><b>Clawback</b> : le GP rend du carry si la performance finale ne le justifie pas.</li>
<li>Waterfall <b>European</b> (whole-of-fund, favorable aux LP) vs <b>American</b> (deal-by-deal, favorable au GP).</li>
</ul>` },
        { title: "Mesurer la performance", html: `
<ul>
<li>IRR et <b>MOIC</b> (multiple on invested capital).</li>
<li>Les rendements reportés sont souvent <b>lissés</b> (valorisations par modèle) → volatilité et corrélation sous-estimées.</li>
<li>Biais : survivorship et <b>backfill bias</b> (un fonds n'entre dans une base qu'après de bons résultats).</li>
</ul>` }
      ],
      methods: [
        { title: "Calculer les frais d'un hedge fund", steps: [
          "Valeur fin d'année avant frais.",
          "Management fee = % × actifs (début ou fin, selon l'énoncé).",
          "Vérifier le high-water mark : le carry ne porte que sur la partie au-dessus.",
          "Appliquer le hurdle (hard : sur l'excédent ; soft : sur tout le gain si dépassé).",
          "Incentive fee calculée nette ou brute du management fee ? Lire l'énoncé.",
          "Rendement net = (valeur fin − frais − valeur début) / valeur début."
        ] }
      ]
    },
    {
      id: "alt-pc", lm: "ALT3", title: "Private Capital: Equity and Debt",
      summary: "Venture capital, buyouts, sorties, private debt.",
      sections: [
        { title: "Private equity", html: `
<ul>
<li><b>Leveraged buyout</b> : rachat financé par beaucoup de dette, amélioration opérationnelle, revente.</li>
<li><b>Venture capital</b> : stades pre-seed, seed, early stage, later stage, mezzanine. Risque très élevé, beaucoup d'échecs, quelques gros succès.</li>
<li><b>Growth equity</b> : participation minoritaire dans une entreprise mature en croissance.</li>
<li>Sorties : trade sale, IPO, recapitalization, secondary sale, write-off.</li>
</ul>` },
        { title: "Private debt", html: `
<ul>
<li>Direct lending, <b>mezzanine debt</b> (subordonnée, souvent avec warrants), venture debt, distressed debt, unitranche.</li>
<li>Rendement plus élevé que la dette publique en échange d'illiquidité et de risque de crédit.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "alt-real", lm: "ALT4", title: "Real Estate and Infrastructure",
      summary: "Formes d'investissement, valorisation, cap rate, REITs, infrastructures.",
      sections: [
        { title: "Formes", html: `
<table class="t">
<tr><th></th><th>Public</th><th>Private</th></tr>
<tr><td>Equity</td><td>REITs, actions d'entreprises immobilières</td><td>Détention directe, fonds privés</td></tr>
<tr><td>Debt</td><td>MBS</td><td>Prêts hypothécaires directs</td></tr>
</table>
<p>Les REITs offrent liquidité et dividendes élevés (obligation de distribuer la majorité des revenus), mais sont plus corrélés aux actions.</p>` },
        { title: "Valorisation", html: `
<ul>
<li><b>Income approach</b> : valeur = NOI / cap rate (direct capitalization) ou DCF.</li>
<li><b>Cost approach</b> : coût de remplacement.</li>
<li><b>Sales comparison</b> : prix de transactions comparables.</li>
</ul>
<p>NOI = revenus locatifs − charges d'exploitation (avant intérêts, amortissements et impôts).</p>` },
        { title: "Infrastructure", html: `
<ul>
<li>Économique (transport, énergie, télécoms) ou sociale (écoles, hôpitaux).</li>
<li><b>Brownfield</b> : actifs existants, flux stables. <b>Greenfield</b> : à construire, plus risqué.</li>
<li>Flux longs, souvent régulés ou indexés à l'inflation, monopoles naturels.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "alt-nr", lm: "ALT5", title: "Natural Resources and Commodities",
      summary: "Commodities, farmland, timberland, rendement des futures.",
      sections: [
        { title: "Commodities", html: `
<p>On investit le plus souvent via des <b>futures</b>.</p>
<p><span class="f">Total return = spot return + roll return + collateral return</span></p>
<ul>
<li><b>Backwardation</b> (futures &lt; spot) : roll return <b>positif</b> (on rachète moins cher en roulant).</li>
<li><b>Contango</b> (futures &gt; spot) : roll return <b>négatif</b>.</li>
<li>Collateral return : intérêt sur la marge placée en titres sans risque.</li>
</ul>
<p>Commodities = bonne couverture contre l'inflation.</p>` },
        { title: "Terres", html: `
<ul>
<li><b>Farmland</b> : revenus des récoltes ; production annuelle obligatoire.</li>
<li><b>Timberland</b> : les arbres continuent de pousser → flexibilité sur le moment de la coupe (attendre si les prix sont bas).</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "alt-hf", lm: "ALT6", title: "Hedge Funds",
      summary: "Stratégies, structures (master-feeder, fund of funds), risques.",
      sections: [
        { title: "Grandes familles de stratégies", html: `
<ul>
<li><b>Equity</b> : long/short, market neutral, short bias.</li>
<li><b>Event-driven</b> : merger arbitrage, distressed, activist.</li>
<li><b>Relative value</b> : convertible arbitrage, fixed income arbitrage.</li>
<li><b>Opportunistic</b> : global macro, managed futures (CTA).</li>
<li><b>Multi-manager</b> : multi-strategy, fund of funds.</li>
</ul>` },
        { title: "Structures et conditions", html: `
<ul>
<li><b>Master-feeder</b> : fonds nourriciers (onshore, offshore) qui investissent dans un fonds maître.</li>
<li><b>Fund of funds</b> : diversification et due diligence, mais double couche de frais.</li>
<li>Liquidité : lockup period, notice period, redemption fees, <b>gates</b> (limite des rachats).</li>
<li>Side-pocket : actifs illiquides isolés.</li>
</ul>` }
      ],
      methods: []
    }
  ],
  questions: [
    { id: "alt-o1", m: "alt-feat", type: "open", q: "Différence entre un hard hurdle et un soft hurdle ?", a: "Hard hurdle : le carry n'est calculé que sur le rendement au-dessus du seuil. Soft hurdle : une fois le seuil dépassé, le carry s'applique à tout le profit (avec un mécanisme de catch-up pour le GP)." },
    { id: "alt-o2", m: "alt-feat", type: "open", q: "Pourquoi les rendements reportés des actifs illiquides sous-estiment-ils souvent le risque ?", a: "Les valorisations sont faites par modèle ou par expertise et changent peu : les rendements sont lissés. La volatilité et la corrélation avec les marchés apparaissent plus faibles qu'en réalité." },
    { id: "alt-1", m: "alt-feat", type: "mcq", q: "A fund starts the year at 100M and ends at 120M before fees. Management fee is 2% of end-of-year assets; incentive fee is 20% of gains net of the management fee, no hurdle. Total fees are closest to:", o: ["5.92M.", "6.40M.", "4.00M."], a: 0, e: "Management fee = 2 % × 120 = 2,40. Gain net du management fee = 120 − 2,40 − 100 = 17,60. Incentive = 20 % × 17,60 = 3,52. Total = 2,40 + 3,52 = 5,92M. Le 6,40 calcule l'incentive sur le gain brut de 20." },
    { id: "alt-2", m: "alt-feat", type: "mcq", q: "A European (whole-of-fund) waterfall most likely favors:", o: ["the GP.", "the LPs.", "neither."], a: 1, e: "Le carry n'est versé qu'après le retour de tout le capital (et du hurdle) : favorable aux LP." },
    { id: "alt-3", m: "alt-feat", type: "mcq", q: "A high-water mark ensures that:", o: ["management fees are capped.", "incentive fees are paid only on new gains above the previous peak value.", "investors can redeem at any time."], a: 1, e: "Pas de carry pour simplement regagner des pertes passées." },
    { id: "alt-4", m: "alt-feat", type: "mcq", q: "Co-investing alongside a private equity fund most likely offers:", o: ["higher fees than fund investing.", "lower fees but risk of adverse selection.", "no exposure to the GP's expertise."], a: 1, e: "Frais réduits, mais le GP peut proposer les deals les moins attractifs." },
    { id: "alt-5", m: "alt-pc", type: "mcq", q: "Subordinated debt that often includes equity warrants is best described as:", o: ["direct lending.", "mezzanine debt.", "senior secured debt."], a: 1, e: "Mezzanine : subordonnée, souvent avec warrants." },
    { id: "alt-6", m: "alt-pc", type: "mcq", q: "A private equity exit through sale to a strategic buyer is a:", o: ["trade sale.", "recapitalization.", "secondary sale."], a: 0, e: "Vente à un industriel = trade sale." },
    { id: "alt-o3", m: "alt-real", type: "open", q: "Comment valorise-t-on un immeuble par l'approche revenus en un calcul ?", a: "Valeur = NOI / cap rate. Le NOI est le revenu net d'exploitation, avant intérêts et impôts." },
    { id: "alt-7", m: "alt-real", type: "mcq", q: "A property generates NOI of 800,000. The market cap rate is 8%. Its estimated value is:", o: ["6.4M.", "10M.", "64M."], a: 1, e: "800 000 / 0,08 = 10 000 000." },
    { id: "alt-8", m: "alt-real", type: "mcq", q: "Compared with private real estate, REITs most likely offer:", o: ["lower liquidity.", "higher liquidity and higher correlation with equities.", "lower correlation with equities."], a: 1, e: "Cotés en bourse : plus liquides, plus corrélés aux actions." },
    { id: "alt-9", m: "alt-real", type: "mcq", q: "An infrastructure project to build a new toll road is:", o: ["brownfield.", "greenfield.", "social infrastructure."], a: 1, e: "À construire = greenfield." },
    { id: "alt-10", m: "alt-nr", type: "mcq", q: "When a commodity futures market is in backwardation, the roll return for a long position is most likely:", o: ["positive.", "negative.", "zero."], a: 0, e: "On revend le contrat proche plus cher et on rachète le suivant moins cher → roll positif." },
    { id: "alt-11", m: "alt-nr", type: "mcq", q: "Compared with farmland, timberland most likely offers greater:", o: ["flexibility in the timing of harvest.", "annual crop income.", "liquidity."], a: 0, e: "Les arbres continuent de pousser : on peut attendre de meilleurs prix." },
    { id: "alt-12", m: "alt-hf", type: "mcq", q: "Merger arbitrage is an example of which hedge fund strategy category?", o: ["Relative value.", "Event-driven.", "Opportunistic."], a: 1, e: "Merger arbitrage = event-driven." },
    { id: "alt-13", m: "alt-hf", type: "mcq", q: "A limit on the amount investors can redeem in a given period is called a:", o: ["lockup.", "gate.", "side-pocket."], a: 1, e: "Gate = plafond de rachat." },
    { id: "alt-14", m: "alt-hf", type: "mcq", q: "A key disadvantage of a fund of hedge funds is:", o: ["lack of diversification.", "an additional layer of fees.", "no due diligence."], a: 1, e: "Double couche de frais (FoF + fonds sous-jacents)." }
  ]
};
