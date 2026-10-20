// ============================================================
// fi.js — Fixed Income
// ============================================================
CFA.content.fi = {
  modules: [
    {
      id: "fi-feat", lm: "FI1–2", title: "Features and Cash Flows of Fixed-Income Instruments",
      summary: "Indenture, covenants, structures de remboursement, options intégrées.",
      sections: [
        { title: "Les caractéristiques de base", html: `
<ul>
<li>Émetteur, maturité, valeur nominale (par), coupon, devise, seniority.</li>
<li><b>Indenture</b> (bond indenture / trust deed) : le contrat. <b>Covenants</b> : affirmatifs (ce que l'émetteur doit faire : payer, assurer) et négatifs (ce qu'il ne peut pas faire : nouvelles dettes, nantissements, ventes d'actifs).</li>
<li><b>Secured</b> (garantie par des actifs) vs <b>unsecured</b> (debentures). Credit enhancements : internes (subordination, overcollateralization, excess spread) et externes (garantie bancaire, lettre de crédit).</li>
</ul>` },
        { title: "Structures de flux", html: `
<ul>
<li><b>Bullet</b> : tout le principal à la fin.</li>
<li><b>Fully amortizing</b> : principal remboursé progressivement jusqu'à zéro.</li>
<li><b>Partially amortizing</b> : une partie à la fin (balloon).</li>
<li><b>Sinking fund</b> : rachats réguliers d'une partie de l'émission (réduit le risque de crédit, mais risque de réinvestissement).</li>
<li>Coupons : fixe, <b>floating rate note</b> (référence + spread), step-up, deferred, PIK (payé en titres), index-linked (inflation).</li>
</ul>` },
        { title: "Options intégrées", html: `
<table class="t">
<tr><th>Option</th><th>Détenteur</th><th>Effet sur le prix / rendement</th></tr>
<tr><td>Callable</td><td>Émetteur</td><td>Prix ↓, rendement ↑ (l'investisseur est compensé)</td></tr>
<tr><td>Putable</td><td>Investisseur</td><td>Prix ↑, rendement ↓</td></tr>
<tr><td>Convertible</td><td>Investisseur</td><td>Prix ↑, rendement ↓</td></tr>
</table>
<p>Callable bond = straight bond − call. Putable bond = straight bond + put.</p>
<p>Styles d'exercice : American (à tout moment), European (une date), Bermudan (plusieurs dates). Make-whole call : prix de rachat = PV des flux restants au taux du Trésor + spread.</p>` }
      ],
      methods: []
    },
    {
      id: "fi-mkt", lm: "FI3–4", title: "Issuance, Trading and Markets",
      summary: "Classification des marchés, émissions, marché monétaire, repo, émetteurs souverains.",
      sections: [
        { title: "Classer les marchés", html: `
<ul>
<li>Par émetteur : souverain, non souverain (collectivités), quasi-gouvernemental (agences), supranational, corporate.</li>
<li>Par qualité : investment grade (BBB−/Baa3 et au-dessus) vs high yield.</li>
<li>Par maturité : money market (≤ 1 an) vs capital market.</li>
<li>Domestic, foreign, <b>Eurobond</b> (émise hors du pays de la devise), global bond.</li>
</ul>` },
        { title: "Émissions et trading", html: `
<ul>
<li><b>Underwritten offering</b> (la banque achète tout et revend), <b>best efforts</b>, auction (souverains), shelf registration, private placement.</li>
<li>Le marché secondaire obligataire est essentiellement <b>OTC</b> (dealers).</li>
<li>Financement court terme des entreprises : commercial paper (souvent adossé à une ligne de crédit de backup), lignes bancaires.</li>
</ul>` },
        { title: "Repo", html: `
<p>Repurchase agreement : vendre un titre et s'engager à le racheter plus cher. C'est un <b>prêt garanti</b>. L'écart = repo rate.</p>
<ul>
<li><b>Haircut</b> (repo margin) : le prêt est inférieur à la valeur du collatéral.</li>
<li>Repo rate plus bas si : collatéral de qualité, durée courte, livraison du collatéral au prêteur, collatéral rare (special).</li>
<li>Côté prêteur : reverse repo.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "fi-val", lm: "FI5–7", title: "Bond Valuation, Yields and Spreads",
      summary: "Prix vs rendement, full/flat price, matrix pricing, mesures de rendement et de spread.",
      sections: [
        { title: "La relation prix-rendement", html: `
<ul>
<li>Prix et rendement évoluent en sens <b>inverse</b>.</li>
<li>Coupon &gt; rendement → prime ; coupon &lt; rendement → décote ; coupon = rendement → pair.</li>
<li>Pull to par : en approchant de la maturité, le prix converge vers le pair.</li>
<li><b>Convexité</b> : pour une même variation de taux, la hausse de prix (taux ↓) est plus forte que la baisse (taux ↑).</li>
<li>Une obligation plus longue ou à plus faible coupon est plus sensible aux taux.</li>
</ul>` },
        { title: "Full price, flat price, accrued interest", html: `
<p>Full (dirty) price = flat (clean) price + accrued interest.</p>
<p>PV full = PV au dernier coupon × (1 + r)^(t/T). AI = coupon × t/T.</p>
<p>Conventions : actual/actual (souverains), 30/360 (corporate).</p>
<p><b>Matrix pricing</b> : pour une obligation peu liquide, interpoler le rendement d'obligations comparables (même notation, maturités voisines).</p>` },
        { title: "Mesures de rendement", html: `
<ul>
<li><b>YTM</b> : IRR des flux si détenue jusqu'à maturité, sans défaut, coupons réinvestis au YTM.</li>
<li><b>Current yield</b> = coupon / prix.</li>
<li><b>Yield-to-call</b>, <b>yield-to-worst</b> (le plus faible de tous les rendements possibles).</li>
<li>FRN : <b>quoted margin</b> (spread fixé au contrat) vs <b>discount margin</b> (spread exigé par le marché). Si DM &gt; QM, la FRN cote sous le pair.</li>
<li>Money market : discount rate (T-bills) vs add-on rate. Bond equivalent yield.</li>
</ul>` },
        { title: "Spreads", html: `
<ul>
<li><b>G-spread</b> : vs obligation d'État. <b>I-spread</b> : vs taux swap.</li>
<li><b>Z-spread</b> : spread constant ajouté à chaque taux spot de la courbe.</li>
<li><b>OAS</b> = Z-spread − coût de l'option. Callable : OAS &lt; Z-spread.</li>
</ul>` }
      ],
      methods: [
        { title: "Prix entre deux coupons", steps: [
          "Calculer le PV au dernier coupon (TVM : N restants, I/Y par période, PMT, FV).",
          "Full price = PV × (1 + r)^(jours écoulés / jours de la période).",
          "Accrued interest = coupon × jours écoulés / jours de la période.",
          "Flat price = full − AI."
        ] }
      ]
    },
    {
      id: "fi-ts", lm: "FI8", title: "Yield Curves and Term Structure",
      summary: "Spot, par et forward curves ; théories de la structure par terme.",
      sections: [
        { title: "Les trois courbes", html: `
<ul>
<li><b>Spot curve</b> : rendements de zéro-coupons. Une obligation se valorise en actualisant chaque flux au taux spot de sa date.</li>
<li><b>Par curve</b> : coupon qui fait coter chaque maturité au pair.</li>
<li><b>Forward curve</b> : taux futurs implicites.</li>
</ul>
<p>Courbe croissante : forward &gt; spot &gt; par. Courbe décroissante : l'inverse.</p>
<p>Bootstrapping : on extrait les taux spot à partir des taux par.</p>` },
        { title: "Théories", html: `
<ul>
<li><b>Unbiased expectations</b> : les forwards sont l'espérance des taux futurs.</li>
<li><b>Liquidity preference</b> : prime de liquidité croissante avec la maturité → courbe plutôt croissante.</li>
<li><b>Segmented markets</b> : chaque maturité a sa propre offre et demande.</li>
<li><b>Preferred habitat</b> : les investisseurs sortent de leur maturité préférée contre une prime.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "fi-dur", lm: "FI9–12", title: "Interest Rate Risk: Duration and Convexity",
      summary: "Macaulay, modified, effective, key rate duration, convexité, horizon d'investissement.",
      sections: [
        { title: "Sources de rendement et horizon", html: `
<p>Trois sources : coupons, réinvestissement des coupons, gain ou perte en capital à la vente.</p>
<ul>
<li>Horizon <b>court</b> : le risque de <b>prix</b> domine (une hausse de taux fait perdre).</li>
<li>Horizon <b>long</b> : le risque de <b>réinvestissement</b> domine (une hausse de taux fait gagner).</li>
<li>Horizon = <b>Macaulay duration</b> : les deux effets s'annulent (immunisation).</li>
</ul>
<p>Duration gap = MacDur − horizon. Gap positif → exposé à une hausse des taux.</p>` },
        { title: "Les durations", html: `
<table class="t">
<tr><th>Mesure</th><th>Sens</th></tr>
<tr><td>Macaulay</td><td>Moyenne pondérée du temps de réception des flux</td></tr>
<tr><td>Modified = MacDur / (1 + r)</td><td>%ΔP pour une variation de 1 % du rendement</td></tr>
<tr><td>Approximate modified</td><td>(PV− − PV+) / (2 × Δy × PV0)</td></tr>
<tr><td>Effective</td><td>Même formule, mais choc de la <b>courbe de référence</b> : obligatoire pour les obligations à options</td></tr>
<tr><td>Key rate</td><td>Sensibilité à un point précis de la courbe (risque de forme)</td></tr>
<tr><td>Money duration / PVBP</td><td>Variation en monnaie</td></tr>
</table>
<div class="tip">Duration ↑ avec la maturité ; duration ↓ quand le coupon ou le rendement ↑. Zéro-coupon : MacDur = maturité.</div>` },
        { title: "Convexité", html: `
<p><span class="f">%ΔP ≈ −ModDur × Δy + ½ × Convexity × (Δy)²</span></p>
<ul>
<li>Obligation sans option : convexité positive (avantage pour l'investisseur).</li>
<li>Callable : <b>negative convexity</b> quand les taux baissent (le prix plafonne près du prix de call).</li>
<li>Putable : convexité plus forte quand les taux montent (plancher au prix du put).</li>
</ul>
<p>Liquidité : en période de stress, le bid-ask s'écarte, et la sensibilité empirique peut différer de la théorique (corrélation entre taux sans risque et spreads).</p>` }
      ],
      methods: [
        { title: "Estimer une variation de prix", steps: [
          "Convertir la variation de taux en décimal (50 bp = 0,005).",
          "Effet duration : −ModDur × Δy.",
          "Effet convexité : + ½ × convexité × Δy² (convexité en unités cohérentes : si elle vaut 80, garder 80).",
          "Additionner. Puis multiplier par le full price pour obtenir un montant."
        ] }
      ]
    },
    {
      id: "fi-credit", lm: "FI13–15", title: "Credit Risk and Credit Analysis",
      summary: "Probabilité de défaut, LGD, notations, les 4 C, analyse souveraine et corporate.",
      sections: [
        { title: "Mesurer le risque de crédit", html: `
<p><span class="f">Expected loss = PD × LGD</span>, avec LGD = exposition × (1 − recovery rate).</p>
<ul>
<li>Credit spread ≈ PD × LGD.</li>
<li>Risques : default risk, <b>spread risk</b> (downgrade risk et market liquidity risk).</li>
<li>Priorité de remboursement : first lien senior secured → senior secured → senior unsecured → senior subordinated → subordinated → junior subordinated. <b>Pari passu</b> : même rang = même traitement.</li>
</ul>` },
        { title: "Notations", html: `
<p>Investment grade : AAA à BBB− (S&amp;P/Fitch), Aaa à Baa3 (Moody's). En dessous : high yield.</p>
<p><b>Notching</b> : les émissions subordonnées d'un émetteur sont notées en dessous de la note de l'émetteur.</p>
<p>Limites des notations : elles changent lentement, ne captent pas bien les risques d'événement, peuvent être en retard sur les spreads du marché.</p>` },
        { title: "Les 4 C (corporate)", html: `
<ul>
<li><b>Capacity</b> : capacité à rembourser (flux, ratios de couverture, levier).</li>
<li><b>Collateral</b> : valeur des actifs en garantie.</li>
<li><b>Covenants</b> : protections contractuelles.</li>
<li><b>Character</b> : qualité et intégrité du management.</li>
</ul>
<p>Ratios clés : EBITDA / interest, FFO / debt, debt / EBITDA, debt / capital.</p>
<p>High yield : analyser la liquidité, la structure de la dette, les covenants et la valeur de l'equity (« equity-like approach »).</p>` },
        { title: "Souverains", html: `
<p>Capacité <b>et volonté</b> de payer. Facteurs : institutionnels (gouvernance, stabilité), économiques (croissance, diversification), externes (réserves, devise de réserve), fiscaux (dette/PIB), monétaires (indépendance de la banque centrale).</p>
<p>La dette en monnaie locale est généralement mieux notée que la dette en devises (l'État peut créer sa monnaie).</p>` }
      ],
      methods: []
    },
    {
      id: "fi-sec", lm: "FI16–19", title: "Securitization, ABS and MBS",
      summary: "Structure d'une titrisation, tranches, prépaiement, CMO.",
      sections: [
        { title: "La titrisation", html: `
<p>Le <b>sponsor</b> (originateur) vend un portefeuille de créances à un <b>SPE</b> (special purpose entity, bankruptcy remote) qui émet des titres adossés.</p>
<ul>
<li>Avantages : liquidité pour les banques, transfert du risque, accès des investisseurs à de nouveaux actifs.</li>
<li><b>Credit tranching</b> (waterfall) : les tranches subordonnées absorbent les pertes en premier.</li>
<li><b>Time tranching</b> : répartition du risque de prépaiement entre tranches.</li>
</ul>` },
        { title: "Le risque de prépaiement", html: `
<ul>
<li><b>Contraction risk</b> : les taux baissent → les emprunteurs remboursent plus vite → l'investisseur récupère son argent quand les taux sont bas.</li>
<li><b>Extension risk</b> : les taux montent → prépaiements ralentissent → durée plus longue.</li>
<li>Mesures : SMM (mensuel), CPR (annualisé), PSA benchmark.</li>
<li>Prepayment risk = negative convexity.</li>
</ul>` },
        { title: "MBS et CMO", html: `
<ul>
<li><b>Pass-through</b> : les flux du pool passent aux investisseurs moins les frais.</li>
<li><b>CMO sequential</b> : tranches remboursées l'une après l'autre (la première protège les suivantes contre l'extension).</li>
<li><b>PAC / support</b> : la tranche PAC a un échéancier prévisible ; la tranche support absorbe la variabilité du prépaiement.</li>
<li>Commercial MBS : protection contre le prépaiement (lockouts, defeasance, yield maintenance) ; risque de <b>balloon</b> à l'échéance.</li>
<li>ABS : auto loans, cartes de crédit (structure revolving : pas de remboursement du principal pendant la lockout period).</li>
</ul>
<div class="tip">Dans un PAC/support, si le prépaiement est imprévisible, c'est la tranche <b>support</b> qui « encaisse ».</div>` }
      ],
      methods: []
    }
  ],
  questions: [
    { id: "fi-o1", m: "fi-feat", type: "open", q: "Donne un exemple de covenant affirmatif et de covenant négatif.", a: "Affirmatif : payer à temps, maintenir les actifs en état, fournir des états financiers. Négatif : ne pas émettre de dette supplémentaire au-delà d'un seuil, ne pas nantir les actifs (negative pledge), ne pas vendre d'actifs importants." },
    { id: "fi-1", m: "fi-feat", type: "mcq", q: "Relative to an otherwise identical option-free bond, a callable bond will most likely have a:", o: ["higher price and lower yield.", "lower price and higher yield.", "same price and yield."], a: 1, e: "L'option appartient à l'émetteur : l'investisseur exige plus de rendement, donc un prix plus bas." },
    { id: "fi-2", m: "fi-feat", type: "mcq", q: "A sinking fund provision most likely:", o: ["increases credit risk.", "reduces credit risk but creates reinvestment risk.", "has no effect on credit risk."], a: 1, e: "Rachats réguliers → moins de risque au remboursement final, mais il faut réinvestir le principal plus tôt." },
    { id: "fi-3", m: "fi-feat", type: "mcq", q: "Overcollateralization is an example of a(n):", o: ["internal credit enhancement.", "external credit enhancement.", "affirmative covenant."], a: 0, e: "Surdimensionnement du collatéral = enhancement interne." },
    { id: "fi-4", m: "fi-mkt", type: "mcq", q: "A bond issued by a Japanese company, denominated in US dollars, and sold outside the US and Japan is a:", o: ["foreign bond.", "Eurobond.", "domestic bond."], a: 1, e: "Émise hors du pays de sa devise → Eurobond." },
    { id: "fi-5", m: "fi-mkt", type: "mcq", q: "Which factor most likely results in a lower repo rate?", o: ["Lower quality collateral.", "Longer repo term.", "Collateral in high demand (special)."], a: 2, e: "Collatéral recherché → le prêteur accepte un taux plus bas." },
    { id: "fi-o2", m: "fi-val", type: "open", q: "Une obligation a un coupon de 6 % et le marché exige 5 %. Cote-t-elle au-dessus ou en dessous du pair ? Que se passe-t-il à l'approche de la maturité ?", a: "Au-dessus du pair (coupon > rendement). En approchant de la maturité, le prix descend vers le pair (pull to par)." },
    { id: "fi-6", m: "fi-val", type: "mcq", q: "A 3-year annual-pay bond has a 5% coupon. If the YTM is 6%, its price per 100 of par is closest to:", o: ["97.33.", "100.00.", "102.72."], a: 0, e: "5/1,06 + 5/1,06² + 105/1,06³ = 4,717 + 4,450 + 88,160 = 97,33." },
    { id: "fi-7", m: "fi-val", type: "mcq", q: "Full price minus accrued interest equals the:", o: ["dirty price.", "flat price.", "invoice price."], a: 1, e: "Flat (clean) price = full − AI. Le full price est aussi appelé dirty ou invoice price." },
    { id: "fi-8", m: "fi-val", type: "mcq", q: "For a floating-rate note, if the discount margin exceeds the quoted margin, the FRN will trade:", o: ["at a premium.", "at par.", "at a discount."], a: 2, e: "Le marché exige plus que le spread contractuel → prix sous le pair." },
    { id: "fi-9", m: "fi-val", type: "mcq", q: "For a callable bond, the option-adjusted spread is:", o: ["greater than the Z-spread.", "less than the Z-spread.", "equal to the Z-spread."], a: 1, e: "OAS = Z-spread − valeur du call (en bp) → OAS < Z-spread." },
    { id: "fi-10", m: "fi-ts", type: "mcq", q: "The theory stating that forward rates are unbiased predictors of future spot rates is the:", o: ["liquidity preference theory.", "unbiased expectations theory.", "segmented markets theory."], a: 1, e: "Unbiased (pure) expectations theory." },
    { id: "fi-11", m: "fi-ts", type: "mcq", q: "When the spot curve is upward sloping, the forward curve most likely lies:", o: ["above the spot curve.", "below the spot curve.", "on the spot curve."], a: 0, e: "Courbe croissante → forward > spot > par." },
    { id: "fi-o3", m: "fi-dur", type: "open", q: "Pourquoi un investisseur dont l'horizon égale la Macaulay duration est-il immunisé contre un choc parallèle des taux ?", a: "Parce que l'effet prix (perte si les taux montent) et l'effet réinvestissement (gain sur les coupons réinvestis) se compensent exactement à cet horizon." },
    { id: "fi-12", m: "fi-dur", type: "mcq", q: "A bond has a Macaulay duration of 8.0 and a YTM of 5% (annual). Its modified duration is closest to:", o: ["7.62.", "8.00.", "8.40."], a: 0, e: "8 / 1,05 = 7,62." },
    { id: "fi-13", m: "fi-dur", type: "mcq", q: "Modified duration 6, convexity 50. Yields rise 100 bp. The estimated percentage price change is closest to:", o: ["−6.00%.", "−5.75%.", "−6.25%."], a: 1, e: "−6 × 0,01 + 0,5 × 50 × 0,0001 = −0,06 + 0,0025 = −5,75 %." },
    { id: "fi-14", m: "fi-dur", type: "mcq", q: "Which bond has the highest duration, all else equal?", o: ["A 10-year 2% coupon bond.", "A 10-year 6% coupon bond.", "A 5-year 2% coupon bond."], a: 0, e: "Maturité longue et coupon faible → duration la plus élevée." },
    { id: "fi-15", m: "fi-dur", type: "mcq", q: "The appropriate duration measure for a callable bond is:", o: ["Macaulay duration.", "modified duration.", "effective duration."], a: 2, e: "Les flux changent avec les taux → effective duration (choc de la courbe de référence)." },
    { id: "fi-16", m: "fi-dur", type: "mcq", q: "An investor with a short investment horizon relative to the bond's Macaulay duration is most exposed to:", o: ["reinvestment risk.", "market price risk.", "credit risk only."], a: 1, e: "Horizon court → le risque de prix domine." },
    { id: "fi-17", m: "fi-dur", type: "mcq", q: "Callable bonds exhibit negative convexity most likely when:", o: ["interest rates rise sharply.", "interest rates fall toward levels where the call is likely to be exercised.", "the bond is newly issued."], a: 1, e: "Quand les taux baissent, le prix plafonne près du prix de call." },
    { id: "fi-o4", m: "fi-credit", type: "open", q: "Cite les 4 C de l'analyse crédit.", a: "Capacity (capacité à rembourser), Collateral (garanties), Covenants (protections contractuelles), Character (qualité du management)." },
    { id: "fi-18", m: "fi-credit", type: "mcq", q: "Probability of default is 2% and the recovery rate is 40%. For a 1,000 exposure, the expected loss is:", o: ["8.", "12.", "20."], a: 1, e: "LGD = 1 000 × 60 % = 600. EL = 2 % × 600 = 12." },
    { id: "fi-19", m: "fi-credit", type: "mcq", q: "Which is the lowest investment-grade rating on the S&P scale?", o: ["BBB−.", "BB+.", "A−."], a: 0, e: "BBB− est le dernier cran investment grade. BB+ = high yield." },
    { id: "fi-20", m: "fi-credit", type: "mcq", q: "Senior unsecured debt ranks:", o: ["ahead of senior secured debt.", "behind senior secured debt and ahead of subordinated debt.", "behind subordinated debt."], a: 1, e: "Ordre : secured → senior unsecured → subordinated." },
    { id: "fi-21", m: "fi-credit", type: "mcq", q: "Sovereign debt issued in the local currency is generally rated:", o: ["lower than foreign-currency debt.", "higher than foreign-currency debt.", "the same as foreign-currency debt."], a: 1, e: "L'État peut créer sa propre monnaie : la dette locale est généralement mieux notée." },
    { id: "fi-o5", m: "fi-sec", type: "open", q: "Différence entre contraction risk et extension risk pour un MBS ?", a: "Contraction : les taux baissent, les prépaiements accélèrent, l'investisseur est remboursé tôt et réinvestit à taux bas. Extension : les taux montent, les prépaiements ralentissent, la durée s'allonge alors que l'investisseur aimerait réinvestir à taux plus hauts." },
    { id: "fi-22", m: "fi-sec", type: "mcq", q: "The main purpose of making the SPE bankruptcy remote is to:", o: ["increase the sponsor's credit rating.", "separate the securitized assets from the sponsor's credit risk.", "reduce prepayment risk."], a: 1, e: "Si le sponsor fait faillite, ses créanciers ne peuvent pas saisir les actifs du SPE." },
    { id: "fi-23", m: "fi-sec", type: "mcq", q: "In a PAC/support CMO structure, the tranche that absorbs most of the prepayment uncertainty is the:", o: ["PAC tranche.", "support tranche.", "senior tranche."], a: 1, e: "La tranche support absorbe la variabilité du prépaiement pour protéger la PAC." },
    { id: "fi-24", m: "fi-sec", type: "mcq", q: "When interest rates decline, mortgage-backed securities are most exposed to:", o: ["extension risk.", "contraction risk.", "balloon risk."], a: 1, e: "Taux en baisse → refinancements → prépaiements accélérés = contraction risk." }
  ]
};
