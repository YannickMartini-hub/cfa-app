// ============================================================
// der.js — Derivatives
// ============================================================
CFA.content.der = {
  modules: [
    {
      id: "der-intro", lm: "DER1–2", title: "Derivative Instruments and Markets",
      summary: "Firm commitments vs contingent claims, OTC vs exchange, usages, risques.",
      sections: [
        { title: "Les deux familles", html: `
<table class="t">
<tr><th>Famille</th><th>Instruments</th><th>Payoff</th></tr>
<tr><td>Firm commitments</td><td>Forwards, futures, swaps</td><td>Linéaire, les deux parties sont engagées</td></tr>
<tr><td>Contingent claims</td><td>Options, credit default swaps</td><td>Non linéaire, l'acheteur a un droit</td></tr>
</table>` },
        { title: "OTC vs exchange-traded", html: `
<ul>
<li><b>Exchange-traded</b> : standardisés, chambre de compensation (CCP), marges quotidiennes, faible risque de contrepartie, transparents.</li>
<li><b>OTC</b> : sur mesure, risque de contrepartie (réduit par la compensation centrale et les collatéraux), moins transparents.</li>
</ul>` },
        { title: "Futures vs forwards", html: `
<ul>
<li>Futures : <b>mark-to-market quotidien</b>, marge initiale et marge de maintenance ; si le compte passe sous la maintenance, appel de marge pour revenir à la marge <b>initiale</b>.</li>
<li>Forwards : règlement à l'échéance, risque de contrepartie.</li>
<li>Si les taux sont corrélés positivement avec le sous-jacent, les futures valent plus que les forwards (on réinvestit les gains à des taux plus élevés).</li>
</ul>
<div class="trap">Appel de marge sur un future : on remet le compte au niveau de la marge <b>initiale</b>, pas de la maintenance.</div>` },
        { title: "Usages et risques", html: `
<p>Avantages : transfert du risque, découverte des prix, faibles coûts, levier, possibilité de vendre à découvert facilement.</p>
<p>Risques : levier excessif, risque de base (le sous-jacent du hedge ≠ exposition), risque de liquidité, risque de contrepartie, risque systémique.</p>
<p>Arbitrage : deux positions aux mêmes flux doivent avoir le même prix (loi du prix unique).</p>` }
      ],
      methods: []
    },
    {
      id: "der-fwd", lm: "DER3–5", title: "Pricing and Valuing Forwards, Futures and Swaps",
      summary: "Cost of carry, valeur d'un forward en cours, FRA, swaps comme série de forwards.",
      sections: [
        { title: "Prix vs valeur", html: `
<p>Le <b>prix forward</b> F0 est fixé à l'initiation pour que la valeur soit nulle. La <b>valeur</b> change ensuite avec le sous-jacent.</p>
<p><span class="f">F0 = S0 × (1 + r)^T</span> (sans revenus ni coûts)</p>
<p>Avec carry : F0 = (S0 − PV(revenus) + PV(coûts)) × (1 + r)^T. Continu : F0 = S0 × e^((r + c − i)T).</p>
<p>Valeur d'un long forward en t : <span class="f">Vt = St − F0 / (1 + r)^(T − t)</span>.</p>
<div class="tip">Un revenu (dividende, coupon, convenience yield) <b>baisse</b> le forward. Un coût (stockage, assurance) le <b>monte</b>.</div>` },
        { title: "Contango, backwardation, FRA", html: `
<ul>
<li><b>Contango</b> : futures &gt; spot (coûts de stockage élevés). <b>Backwardation</b> : futures &lt; spot (convenience yield élevé).</li>
<li><b>FRA</b> : forward sur taux d'intérêt. Le long FRA gagne si le taux de référence monte au-dessus du taux du FRA. Payoff actualisé sur la période du prêt.</li>
</ul>` },
        { title: "Swaps", html: `
<p>Un swap = une <b>série de forwards</b>. Le taux fixe d'un swap à l'initiation est choisi pour que la valeur soit 0 (c'est une moyenne des taux forward implicites).</p>
<p>Payeur fixe (receveur variable) : gagne si les taux montent. Valeur = PV(jambe variable) − PV(jambe fixe).</p>` }
      ],
      methods: [
        { title: "Valoriser un forward en cours", steps: [
          "Identifier le spot actuel St et le temps restant T − t.",
          "Actualiser le prix forward initial : F0 / (1 + r)^(T − t).",
          "Long : Vt = St − PV(F0). Short : l'opposé.",
          "Si l'actif verse des revenus, retirer PV(revenus restants) de St."
        ] }
      ]
    },
    {
      id: "der-opt", lm: "DER6–8", title: "Options: Payoffs, Parity and Binomial Valuation",
      summary: "Payoffs, moneyness, facteurs de valeur, put-call parity, modèle binomial.",
      sections: [
        { title: "Payoffs et profits", html: `
<table class="t">
<tr><th></th><th>Payoff à l'échéance</th><th>Breakeven</th><th>Gain max</th><th>Perte max</th></tr>
<tr><td>Long call</td><td>max(0, S − X)</td><td>X + c</td><td>Illimité</td><td>c</td></tr>
<tr><td>Short call</td><td>−max(0, S − X)</td><td>X + c</td><td>c</td><td>Illimitée</td></tr>
<tr><td>Long put</td><td>max(0, X − S)</td><td>X − p</td><td>X − p</td><td>p</td></tr>
<tr><td>Short put</td><td>−max(0, X − S)</td><td>X − p</td><td>p</td><td>X − p</td></tr>
</table>
<p>Moneyness : un call est <b>in the money</b> si S &gt; X ; un put si S &lt; X.</p>` },
        { title: "Ce qui fait bouger la valeur d'une option", html: `
<table class="t">
<tr><th>Hausse de…</th><th>Call</th><th>Put</th></tr>
<tr><td>Prix du sous-jacent</td><td>↑</td><td>↓</td></tr>
<tr><td>Strike</td><td>↓</td><td>↑</td></tr>
<tr><td>Volatilité</td><td>↑</td><td>↑</td></tr>
<tr><td>Durée</td><td>↑</td><td>↑ (presque toujours)</td></tr>
<tr><td>Taux sans risque</td><td>↑</td><td>↓</td></tr>
<tr><td>Revenus du sous-jacent</td><td>↓</td><td>↑</td></tr>
</table>
<p>Valeur = valeur intrinsèque + valeur temps. Un call américain sur un actif sans revenu ne s'exerce pas avant l'échéance (il vaut autant que l'européen).</p>` },
        { title: "Put-call parity", html: `
<p><span class="f">S0 + p0 = c0 + PV(X)</span></p>
<p>Protective put (action + put) = fiduciary call (call + zéro-coupon de valeur X).</p>
<ul>
<li>Synthetic call = S + p − PV(X).</li>
<li>Synthetic put = c − S + PV(X).</li>
<li>Put-call-forward parity : PV(F0) + p0 = c0 + PV(X).</li>
</ul>
<div class="tip">Pour retrouver une forme, pars de l'égalité et isole le terme voulu. Le signe « − » veut dire « vendre » (short).</div>` },
        { title: "Modèle binomial à une période", html: `
<p>Probabilité risque-neutre : <span class="f">π = (1 + r − d) / (u − d)</span></p>
<p>Valeur : c0 = [π c+ + (1 − π) c−] / (1 + r).</p>
<p>Hedge ratio : h = (c+ − c−) / (S+ − S−). Un portefeuille long h actions et short 1 call est sans risque.</p>
<div class="trap">π n'est pas la vraie probabilité de hausse. On n'a jamais besoin de la vraie probabilité pour valoriser une option.</div>` }
      ],
      methods: [
        { title: "Binomial en 4 lignes", steps: [
          "Calculer S+ = S × u et S− = S × d.",
          "Payoffs : c+ = max(0, S+ − X), c− = max(0, S− − X).",
          "π = (1 + r − d) / (u − d).",
          "c0 = [π c+ + (1 − π) c−] / (1 + r)."
        ] }
      ]
    },
    {
      id: "der-rm", lm: "DER+ 2027", title: "Usages en gestion des risques",
      summary: "Couvertures, stratégies simples (covered call, protective put), CDS. En 2027 le topic s'appelle Derivatives and Risk Management selon certaines sources.",
      sections: [
        { title: "Stratégies de base", html: `
<ul>
<li><b>Covered call</b> : action + short call. Encaisse la prime, plafonne le gain. Breakeven = S0 − c.</li>
<li><b>Protective put</b> : action + long put. Assurance contre la baisse. Breakeven = S0 + p.</li>
<li>Couvrir une exposition : vendre des futures pour se protéger contre une baisse ; acheter des futures pour fixer le prix d'un achat futur.</li>
</ul>` },
        { title: "Credit default swaps", html: `
<p>L'acheteur de protection paie une prime périodique ; le vendeur indemnise en cas d'événement de crédit. Acheter un CDS = être <b>short</b> le risque de crédit.</p>` }
      ],
      methods: []
    }
  ],
  questions: [
    { id: "der-o1", m: "der-intro", type: "open", q: "Différence entre firm commitment et contingent claim ?", a: "Firm commitment (forward, future, swap) : les deux parties doivent exécuter, payoff linéaire. Contingent claim (option, CDS) : l'acheteur a un droit, le payoff dépend d'un événement, non linéaire." },
    { id: "der-1", m: "der-intro", type: "mcq", q: "Which is a contingent claim?", o: ["Interest rate swap.", "Futures contract.", "Put option."], a: 2, e: "L'option est un droit, donc une contingent claim." },
    { id: "der-2", m: "der-intro", type: "mcq", q: "A futures account falls below the maintenance margin. The investor must deposit enough to bring the account back to the:", o: ["maintenance margin.", "initial margin.", "settlement price."], a: 1, e: "Appel de marge → retour au niveau de la marge initiale." },
    { id: "der-3", m: "der-intro", type: "mcq", q: "Compared with OTC derivatives, exchange-traded derivatives most likely have:", o: ["greater counterparty risk.", "greater customization.", "greater standardization."], a: 2, e: "Standardisés et compensés par une CCP." },
    { id: "der-o2", m: "der-fwd", type: "open", q: "Pourquoi un dividende versé par le sous-jacent réduit-il le prix forward ?", a: "Le détenteur du forward ne reçoit pas le dividende alors que celui qui détient l'actif le reçoit. Pour qu'il n'y ait pas d'arbitrage, on retire la valeur actuelle des dividendes du spot avant de capitaliser." },
    { id: "der-4", m: "der-fwd", type: "mcq", q: "Spot is 100, the risk-free rate is 5%, and there are no costs or benefits. The 1-year forward price is:", o: ["95.00.", "100.00.", "105.00."], a: 2, e: "100 × 1,05 = 105." },
    { id: "der-5", m: "der-fwd", type: "mcq", q: "A long forward was agreed at 105 with 6 months remaining. Spot is now 108 and r = 4%. The value of the long position is closest to:", o: ["3.00.", "5.04.", "−0.95."], a: 1, e: "Vt = 108 − 105/1,04^0,5 = 108 − 102,96 = 5,04. Le 3,00 oublie d'actualiser le prix forward." },
    { id: "der-6", m: "der-fwd", type: "mcq", q: "A market where futures prices are below spot prices, typically due to a high convenience yield, is in:", o: ["contango.", "backwardation.", "normal carry."], a: 1, e: "Futures < spot = backwardation." },
    { id: "der-7", m: "der-fwd", type: "mcq", q: "An interest rate swap is best viewed as:", o: ["a single forward contract.", "a series of forward contracts.", "a portfolio of options."], a: 1, e: "Un swap = une série de FRA/forwards." },
    { id: "der-o3", m: "der-opt", type: "open", q: "Écris la put-call parity et déduis-en un put synthétique.", a: "S0 + p0 = c0 + PV(X). Donc p0 = c0 − S0 + PV(X) : acheter un call, vendre l'action, acheter un zéro-coupon de valeur X." },
    { id: "der-8", m: "der-opt", type: "mcq", q: "A call with a strike of 50 costs 4. At expiration the stock is 57. The buyer's profit is:", o: ["3.", "7.", "11."], a: 0, e: "Payoff = 57 − 50 = 7 ; profit = 7 − 4 = 3." },
    { id: "der-9", m: "der-opt", type: "mcq", q: "The breakeven price for the buyer of a put with strike 40 and premium 3 is:", o: ["37.", "40.", "43."], a: 0, e: "Put : X − p = 37." },
    { id: "der-10", m: "der-opt", type: "mcq", q: "An increase in volatility of the underlying will most likely:", o: ["increase call values and decrease put values.", "increase both call and put values.", "decrease both."], a: 1, e: "Plus de volatilité = plus de chances de finir dans la monnaie pour les deux." },
    { id: "der-11", m: "der-opt", type: "mcq", q: "Stock = 50, put = 4, PV(X) = 48. According to put-call parity, the call value is:", o: ["2.", "6.", "10."], a: 1, e: "c = S + p − PV(X) = 50 + 4 − 48 = 6." },
    { id: "der-12", m: "der-opt", type: "mcq", q: "S = 100, u = 1.2, d = 0.9, r = 5%. The risk-neutral probability of an up move is closest to:", o: ["0.50.", "0.33.", "0.67."], a: 0, e: "π = (1,05 − 0,9) / (1,2 − 0,9) = 0,15 / 0,30 = 0,50." },
    { id: "der-13", m: "der-opt", type: "mcq", q: "Using the data above (S = 100, u = 1.2, d = 0.9, r = 5%), a call with X = 100 is worth closest to:", o: ["9.52.", "10.00.", "20.00."], a: 0, e: "c+ = 20, c− = 0. c0 = (0,5 × 20 + 0,5 × 0) / 1,05 = 9,52." },
    { id: "der-14", m: "der-opt", type: "mcq", q: "An American call on a non-dividend-paying stock should:", o: ["always be exercised early.", "never be exercised early.", "be exercised when deep in the money."], a: 1, e: "Exercer tôt fait perdre la valeur temps : un call américain sans dividende vaut l'européen." },
    { id: "der-15", m: "der-rm", type: "mcq", q: "An investor owns a stock bought at 60 and writes a call with strike 65 for a premium of 2. The maximum profit is:", o: ["2.", "5.", "7."], a: 2, e: "Covered call : (65 − 60) + 2 = 7." },
    { id: "der-16", m: "der-rm", type: "mcq", q: "The buyer of a credit default swap is:", o: ["long credit risk.", "short credit risk.", "neutral to credit risk."], a: 1, e: "Acheter une protection = être short le risque de crédit (gagne si le crédit se dégrade)." }
  ]
};
