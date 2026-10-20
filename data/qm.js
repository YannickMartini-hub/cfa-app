// ============================================================
// qm.js — Quantitative Methods (inclut les ajouts 2027 :
// simulation et data science / IA / LLM)
// ============================================================
CFA.content.qm = {
  modules: [
    {
      id: "qm-rates", lm: "QM1", title: "Rates and Returns",
      summary: "Composantes d'un taux, rendements moyens, MWR vs TWR, annualisation, rendements continus.",
      sections: [
        { title: "Un taux d'intérêt, trois lectures", html: `
<p>Un taux peut être vu comme : un <b>taux exigé</b> (required return), un <b>taux d'actualisation</b>, ou un <b>coût d'opportunité</b>.</p>
<p><span class="f">r = real risk-free + inflation premium + default + liquidity + maturity premium</span></p>
<p>Nominal risk-free ≈ real risk-free + inflation premium (ex. T-bill).</p>` },
        { title: "Moyennes : laquelle utiliser ?", html: `
<table class="t">
<tr><th>Moyenne</th><th>Usage</th></tr>
<tr><td>Arithmétique</td><td>Espérance de rendement d'<b>une</b> période future</td></tr>
<tr><td>Géométrique</td><td>Rendement composé réellement obtenu sur <b>plusieurs</b> périodes</td></tr>
<tr><td>Harmonique</td><td>Prix moyen payé avec un montant investi constant (cost averaging)</td></tr>
<tr><td>Trimmed / winsorized</td><td>Réduire l'effet des valeurs extrêmes</td></tr>
</table>
<p>Toujours : <b>harmonique ≤ géométrique ≤ arithmétique</b>.</p>
<div class="ex"><b>Exemple :</b> +50 % puis −50 %. Arithmétique = 0 %. Géométrique = √(1,5 × 0,5) − 1 = −13,4 %. Tu as perdu de l'argent : c'est la géométrique qui dit la vérité.</div>` },
        { title: "Money-weighted vs time-weighted", html: `
<ul>
<li><b>MWR</b> = IRR de tous les flux (apports, retraits, valeur finale). Sensible au timing des apports.</li>
<li><b>TWR</b> = moyenne géométrique des rendements de chaque sous-période. Neutralise les apports/retraits.</li>
</ul>
<div class="tip">Le gérant ne contrôle pas quand le client ajoute de l'argent → on le juge sur le <b>TWR</b>. Le standard de l'industrie (GIPS) est le TWR.</div>
<div class="trap">Si un gros apport arrive juste avant une bonne année, MWR &gt; TWR.</div>` },
        { title: "Annualiser et rendements continus", html: `
<p><span class="f">R annuel = (1 + R période)^(nombre de périodes par an) − 1</span></p>
<p>Rendement continu : <span class="f">r = ln(1 + HPR) = ln(P1/P0)</span>. Il s'additionne dans le temps : rendement sur 3 ans = r1 + r2 + r3.</p>
<p>Autres rendements : <b>gross vs net</b> (frais), <b>pre-tax vs after-tax</b>, <b>real</b> : (1 + nominal)/(1 + inflation) − 1, <b>leveraged</b> : rendement des fonds propres d'une position financée par dette.</p>` }
      ],
      methods: [
        { title: "Calculer un TWR", steps: [
          "Découper la période à chaque flux externe (apport ou retrait).",
          "Calculer le HPR de chaque sous-période : (valeur fin − valeur début après flux) / valeur début après flux.",
          "Chaîner : (1 + HPR1)(1 + HPR2)… − 1.",
          "Si la période dépasse un an, prendre la racine pour annualiser."
        ] }
      ]
    },
    {
      id: "qm-tvm", lm: "QM2", title: "Time Value of Money in Finance",
      summary: "Valoriser obligations et actions par actualisation, taux implicites, parité.",
      sections: [
        { title: "Le principe unique", html: `
<p>Tout actif financier vaut la <b>somme actualisée de ses flux futurs</b>. Les obligations, actions et projets ne sont que des variantes.</p>
<ul>
<li>Zero-coupon : PV = FV / (1 + r)^N.</li>
<li>Obligation à coupon : annuité (coupons) + valeur actualisée du nominal.</li>
<li>Action à dividende constant : perpétuité D / r.</li>
<li>Action à dividende croissant : D1 / (r − g).</li>
</ul>` },
        { title: "Implied returns et forward rates", html: `
<p>Si on connaît le prix, on peut retrouver le rendement implicite (le r qui égalise prix et flux actualisés) : c'est l'IRR ou le YTM.</p>
<p>Implied growth (Gordon) : g = r − D1 / P0.</p>
<p>Taux forward implicites à partir des taux spot : (1 + z2)² = (1 + z1)(1 + f1,1).</p>` },
        { title: "Cash flow additivity et no-arbitrage", html: `
<p>Deux stratégies qui produisent les mêmes flux futurs doivent avoir le même prix aujourd'hui, sinon il y a arbitrage.</p>
<p>Exemple : investir 2 ans au taux spot 2 ans = investir 1 an puis réinvestir au forward 1 an dans 1 an.</p>
<div class="tip">Sur la BA II Plus, vérifie toujours : <kbd>2ND</kbd> <kbd>P/Y</kbd> = 1, et le mode END (pas BGN) sauf annuity due.</div>` }
      ],
      methods: [
        { title: "Résoudre n'importe quel problème TVM", steps: [
          "Dessiner une ligne du temps avec les flux et leur date.",
          "Repérer la nature : flux unique, annuité, perpétuité, flux irréguliers.",
          "Aligner la périodicité : taux et N sur la même période.",
          "Calculatrice : TVM pour flux réguliers, CF/NPV pour flux irréguliers.",
          "Vérifier le signe : un flux sortant est négatif."
        ] }
      ]
    },
    {
      id: "qm-stats", lm: "QM3", title: "Statistical Measures of Asset Returns",
      summary: "Tendance centrale, dispersion, asymétrie, kurtosis, corrélation.",
      sections: [
        { title: "Position et dispersion", html: `
<ul>
<li>Médiane, mode, quantiles (quartiles, déciles, percentiles). Position du percentile y : L = (n + 1) × y / 100.</li>
<li>Range, mean absolute deviation (MAD), variance, écart-type.</li>
<li>Coefficient of variation = s / moyenne : risque par unité de rendement.</li>
<li>Target downside deviation : ne compte que les observations sous une cible.</li>
</ul>` },
        { title: "Skewness et kurtosis", html: `
<table class="t">
<tr><th>Forme</th><th>Relation</th></tr>
<tr><td>Skew positif (queue à droite)</td><td>Mode &lt; médiane &lt; moyenne</td></tr>
<tr><td>Skew négatif (queue à gauche)</td><td>Moyenne &lt; médiane &lt; mode</td></tr>
<tr><td>Leptokurtic (excess kurtosis &gt; 0)</td><td>Queues épaisses, plus d'événements extrêmes que la normale</td></tr>
<tr><td>Platykurtic (&lt; 0)</td><td>Queues fines</td></tr>
</table>
<div class="tip"><b>La moyenne suit la queue :</b> elle est tirée du côté de la queue. Ordre alphabétique pour skew positif : <b>M</b>ode, <b>M</b>édiane, <b>M</b>oyenne (Mo-Mé-Moy).</div>
<div class="trap">Les rendements financiers sont souvent <b>négativement</b> asymétriques et leptokurtiques : la normale sous-estime le risque de krach.</div>` },
        { title: "Covariance et corrélation", html: `
<p>Corrélation = covariance / (σX × σY), entre −1 et +1.</p>
<p>Limites : ne capte que les relations <b>linéaires</b> ; sensible aux outliers ; <b>spurious correlation</b> (corrélation sans lien réel) ; corrélation ≠ causalité.</p>` }
      ],
      methods: []
    },
    {
      id: "qm-prob", lm: "QM4", title: "Probability Trees and Conditional Expectations",
      summary: "Espérance, variance, probabilités conditionnelles, arbres, Bayes.",
      sections: [
        { title: "Règles de base", html: `
<ul>
<li>P(A ou B) = P(A) + P(B) − P(A et B).</li>
<li>P(A et B) = P(A | B) × P(B). Si indépendants : P(A) × P(B).</li>
<li>Probabilité totale : P(A) = Σ P(A | Si) × P(Si).</li>
<li>Odds for E = P(E) / (1 − P(E)).</li>
</ul>` },
        { title: "Arbres et espérance conditionnelle", html: `
<p>Un arbre multiplie les probabilités le long des branches. Espérance totale = Σ P(scénario) × E(X | scénario).</p>
<div class="ex"><b>Exemple :</b> 60 % de chances d'expansion (EPS 3) et 40 % de récession (EPS 1). E(EPS) = 0,6 × 3 + 0,4 × 1 = 2,2.</div>` },
        { title: "Bayes", html: `
<p><span class="f">P(A | B) = P(B | A) × P(A) / P(B)</span></p>
<p>Mettre à jour une probabilité « a priori » P(A) avec une nouvelle information B.</p>
<div class="tip">Méthode sûre : dessine l'arbre (A ou pas A, puis B ou pas B), calcule P(B) en additionnant les deux branches qui mènent à B, puis divise la branche « A et B » par P(B).</div>` }
      ],
      methods: [
        { title: "Résoudre un Bayes en 4 lignes", steps: [
          "Écrire P(A) et P(non A).",
          "Écrire P(B|A) et P(B|non A).",
          "P(B) = P(B|A)P(A) + P(B|non A)P(non A).",
          "P(A|B) = P(B|A)P(A) / P(B)."
        ] }
      ]
    },
    {
      id: "qm-port", lm: "QM5", title: "Portfolio Mathematics",
      summary: "Rendement et risque d'un portefeuille, safety-first, shortfall.",
      sections: [
        { title: "Rendement et variance d'un portefeuille", html: `
<p>E(Rp) = Σ wi E(Ri).</p>
<p>σp² = w1²σ1² + w2²σ2² + 2 w1 w2 Cov(1,2), avec Cov = ρ σ1 σ2.</p>
<p>Plus la corrélation est faible, plus la diversification réduit le risque. Avec ρ = +1, aucune diversification ; avec ρ = −1, on peut construire un portefeuille sans risque.</p>` },
        { title: "Roy's safety-first", html: `
<p>SFRatio = [E(Rp) − RL] / σp. On choisit le portefeuille au SFRatio le plus élevé : il minimise la probabilité de passer sous le seuil RL (si les rendements sont normaux).</p>
<p>Shortfall risk = P(Rp &lt; RL) = N(−SFRatio).</p>` }
      ],
      methods: []
    },
    {
      id: "qm-sim", lm: "QM6", title: "Simulation Methods (renforcé en 2027)", priority: false,
      summary: "Loi lognormale, Monte Carlo, simulation historique, bootstrapping.",
      sections: [
        { title: "Lognormale et rendements continus", html: `
<p>Si les rendements continus sont normaux, les <b>prix</b> suivent une loi <b>lognormale</b> : bornée à 0, asymétrique à droite. C'est cohérent avec un prix qui ne peut pas être négatif.</p>` },
        { title: "Monte Carlo", html: `
<ol>
<li>Spécifier les variables et leurs lois de probabilité (paramètres).</li>
<li>Générer des tirages aléatoires.</li>
<li>Calculer le résultat (valeur d'un portefeuille, d'une option) pour chaque tirage.</li>
<li>Répéter des milliers de fois et analyser la distribution des résultats.</li>
</ol>
<p>Avantages : gère des situations complexes (options exotiques, passifs de retraite). Limites : dépend des hypothèses de lois ; ne donne pas de relation analytique de cause à effet.</p>` },
        { title: "Simulation historique et bootstrapping", html: `
<ul>
<li><b>Historical simulation</b> : on rejoue les scénarios réellement observés dans le passé. Ne suppose pas de loi, mais ne contient que ce qui est arrivé.</li>
<li><b>Bootstrapping</b> : on tire <b>avec remise</b> dans l'échantillon observé pour créer de nombreux échantillons et estimer une statistique (ex. son erreur standard). Utile quand la loi est inconnue.</li>
<li><b>Jackknife</b> : on retire une observation à la fois.</li>
</ul>
<div class="tip">Bootstrap = « avec remise » (tu remets la bille dans le sac). Jackknife = « on en enlève une ».</div>
<p class="small muted">Le curriculum 2027 illustre ces méthodes avec un tableur (Excel / Google Sheets). Vérifie le détail dans Kaplan 2027.</p>` }
      ],
      methods: []
    },
    {
      id: "qm-est", lm: "QM7", title: "Estimation and Inference",
      summary: "Échantillonnage, théorème central limite, erreur standard, intervalles de confiance.",
      sections: [
        { title: "Échantillonnage", html: `
<ul>
<li>Simple random sampling, <b>stratified</b> (on garde les proportions des sous-groupes), <b>cluster</b> (on tire des groupes entiers), convenience, judgmental.</li>
<li><b>Sampling error</b> = statistique d'échantillon − paramètre de population.</li>
</ul>` },
        { title: "Théorème central limite", html: `
<p>Pour n ≥ 30, la <b>distribution de la moyenne d'échantillon</b> est approximativement normale, quelle que soit la loi de la population, de moyenne μ et de variance σ²/n.</p>
<p>Erreur standard : σ / √n (ou s / √n si σ inconnu).</p>` },
        { title: "Intervalles de confiance", html: `
<p>X̄ ± (valeur critique) × erreur standard.</p>
<table class="t"><tr><th>Confiance</th><th>z</th></tr><tr><td>90 %</td><td>1,645</td></tr><tr><td>95 %</td><td>1,96</td></tr><tr><td>99 %</td><td>2,58</td></tr></table>
<p>Utiliser t (n − 1 ddl) si σ inconnu, surtout pour un petit échantillon.</p>
<p>Biais : data snooping, sample selection, survivorship, look-ahead, time-period bias.</p>` }
      ],
      methods: []
    },
    {
      id: "qm-hyp", lm: "QM8", title: "Hypothesis Testing",
      summary: "Les étapes d'un test, erreurs de type I et II, tests usuels, tests non paramétriques.",
      sections: [
        { title: "Les étapes", html: `
<ol>
<li>Énoncer H0 et Ha (H0 contient toujours le « = »).</li>
<li>Choisir la statistique de test.</li>
<li>Fixer le seuil α.</li>
<li>Règle de décision (valeur critique).</li>
<li>Calculer la statistique.</li>
<li>Décider : rejeter H0 ou ne pas rejeter.</li>
</ol>
<div class="trap">On ne dit jamais « accepter H0 », seulement « ne pas rejeter H0 ».</div>` },
        { title: "Erreurs et puissance", html: `
<table class="t">
<tr><th></th><th>H0 vraie</th><th>H0 fausse</th></tr>
<tr><td>Rejeter H0</td><td><b>Type I</b> (proba α)</td><td>Bonne décision (power)</td></tr>
<tr><td>Ne pas rejeter</td><td>Bonne décision</td><td><b>Type II</b> (proba β)</td></tr>
</table>
<p>Power = 1 − β. Baisser α augmente β (à taille d'échantillon fixe).</p>
<p><b>p-value</b> : plus petit α auquel on rejette H0. Rejeter si p-value &lt; α.</p>
<div class="tip">Type <b>I</b> = condamner un <b>I</b>nnocent (rejeter une H0 vraie).</div>` },
        { title: "Quel test pour quoi ?", html: `
<table class="t">
<tr><th>On teste</th><th>Statistique</th></tr>
<tr><td>Une moyenne</td><td>t (ou z)</td></tr>
<tr><td>Différence de moyennes (indépendantes)</td><td>t</td></tr>
<tr><td>Moyenne des différences (échantillons appariés)</td><td>t (paired)</td></tr>
<tr><td>Une variance</td><td>Chi-square (χ²)</td></tr>
<tr><td>Égalité de deux variances</td><td>F</td></tr>
<tr><td>Une corrélation</td><td>t avec n − 2 ddl</td></tr>
<tr><td>Indépendance de variables catégorielles</td><td>χ² (contingency table)</td></tr>
</table>
<p>Tests <b>non paramétriques</b> (ex. Spearman rank correlation) : quand les hypothèses de loi ne tiennent pas, données en rangs, outliers.</p>` }
      ],
      methods: []
    },
    {
      id: "qm-reg", lm: "QM9", title: "Simple Linear Regression",
      summary: "Estimation, hypothèses, ANOVA, prévision, formes fonctionnelles.",
      sections: [
        { title: "Le modèle", html: `
<p>Yi = b0 + b1 Xi + εi. Méthode des moindres carrés (OLS) : minimise la somme des carrés des résidus.</p>
<p>b1 = Cov(X, Y) / Var(X) ; b0 = Ȳ − b1 X̄.</p>` },
        { title: "Les 4 hypothèses", html: `
<ol>
<li><b>Linéarité</b> de la relation.</li>
<li><b>Homoskedasticity</b> : variance des résidus constante.</li>
<li><b>Indépendance</b> des résidus (pas d'autocorrélation).</li>
<li><b>Normalité</b> des résidus.</li>
</ol>
<div class="tip">Mnémotechnique : <b>L-H-I-N</b> → « <b>L</b>es <b>H</b>ypothèses <b>I</b>mportent <b>N</b>ormalement ».</div>` },
        { title: "ANOVA et qualité", html: `
<p>SST = SSR + SSE. R² = SSR / SST. SEE = √(SSE / (n − 2)). F = MSR / MSE.</p>
<p>En régression simple : R² = ρ², et le test F est équivalent au test t sur la pente (F = t²).</p>
<p>Prévision : Ŷ = b0 + b1 X ; l'intervalle de prévision est plus large que l'intervalle sur la moyenne.</p>
<p>Formes fonctionnelles : log-lin (ln Y = b0 + b1 X), lin-log (Y = b0 + b1 ln X), log-log (élasticité).</p>` }
      ],
      methods: []
    },
    {
      id: "qm-ai", lm: "QM10", title: "Data Science, AI et LLM (nouveau 2027)",
      summary: "Nouvelle lecture 2027 : big data, machine learning, IA générative et LLM en finance.",
      sections: [
        { title: "Big data et data science", html: `
<p class="small muted">Lecture nouvelle en 2027 : vérifie le détail des learning outcomes dans Kaplan 2027. Ce qui suit couvre les bases.</p>
<p>Big data : les <b>3 V</b> (volume, velocity, variety), parfois + veracity. Sources : traditionnelles (états financiers, prix), alternatives (données satellites, cartes bancaires, réseaux sociaux, capteurs IoT).</p>
<p>Étapes d'un projet : collecte → préparation (nettoyage) → exploration → modélisation → évaluation → déploiement.</p>` },
        { title: "Machine learning", html: `
<table class="t">
<tr><th>Type</th><th>Principe</th><th>Exemples</th></tr>
<tr><td>Supervised</td><td>Données étiquetées (on connaît la bonne réponse)</td><td>Régression, classification (défaut oui/non)</td></tr>
<tr><td>Unsupervised</td><td>Pas d'étiquette, on cherche une structure</td><td>Clustering, réduction de dimension</td></tr>
<tr><td>Deep learning</td><td>Réseaux de neurones à plusieurs couches</td><td>Images, texte, son</td></tr>
<tr><td>Reinforcement</td><td>Un agent apprend par essais et récompenses</td><td>Exécution d'ordres, jeux</td></tr>
</table>
<p><b>Overfitting</b> : le modèle apprend le bruit de l'échantillon d'entraînement et généralise mal. Remède : jeu de validation et de test, modèles plus simples, régularisation.</p>` },
        { title: "IA générative et LLM", html: `
<ul>
<li>Un <b>LLM</b> (large language model) prédit le mot (token) suivant à partir d'un très grand corpus de textes.</li>
<li>Usages en finance : résumer des rapports et earnings calls, extraire des données de documents, analyse de sentiment, aide au code.</li>
<li>Limites : <b>hallucinations</b> (réponses fausses mais plausibles), biais des données d'entraînement, confidentialité des données, explicabilité faible, dépendance au prompt.</li>
<li>Bonnes pratiques : vérifier les sources, garder un humain dans la boucle, ne pas mettre de données confidentielles dans un outil non autorisé.</li>
</ul>
<div class="tip">Lien avec l'éthique : utiliser un LLM ne dispense pas de la <b>reasonable basis</b> (V(A)) ni de la compétence (I(E)).</div>` }
      ],
      methods: []
    }
  ],

  questions: [
    { id: "qm-o1", m: "qm-rates", type: "open", q: "Pourquoi juge-t-on un gérant sur le TWR plutôt que sur le MWR ?", a: "Parce que le gérant ne contrôle pas le timing des apports et retraits du client. Le TWR neutralise ces flux ; le MWR (IRR) en dépend." },
    { id: "qm-o2", m: "qm-rates", type: "open", q: "Pourquoi la moyenne géométrique est-elle toujours inférieure ou égale à l'arithmétique ?", a: "Parce que la volatilité réduit le rendement composé : une baisse de x % demande une hausse supérieure à x % pour revenir au point de départ. L'égalité n'a lieu que si tous les rendements sont identiques." },
    { id: "qm-1", m: "qm-rates", type: "mcq", q: "A portfolio returns +20% in Year 1 and −10% in Year 2. The geometric mean annual return is closest to:", o: ["3.92%.", "5.00%.", "8.00%."], a: 0, e: "√(1,20 × 0,90) − 1 = √1,08 − 1 = 3,92 %. L'arithmétique serait 5 %." },
    { id: "qm-2", m: "qm-rates", type: "mcq", q: "An investor adds a large amount to her account just before a period of strong performance. Relative to the time-weighted return, the money-weighted return will most likely be:", o: ["lower.", "the same.", "higher."], a: 2, e: "Plus d'argent investi pendant la bonne période → MWR > TWR." },
    { id: "qm-3", m: "qm-rates", type: "mcq", q: "A 90-day holding period return is 2%. Assuming a 365-day year, the annualized return is closest to:", o: ["8.1%.", "8.4%.", "8.0%."], a: 1, e: "(1,02)^(365/90) − 1 = 1,02^4,056 − 1 ≈ 8,36 %." },
    { id: "qm-4", m: "qm-rates", type: "mcq", q: "An investor buys shares for 1,000 per month regardless of price. The average cost per share is best measured using the:", o: ["arithmetic mean of prices.", "geometric mean of prices.", "harmonic mean of prices."], a: 2, e: "Montant constant investi → moyenne harmonique des prix." },
    { id: "qm-5", m: "qm-tvm", type: "mcq", q: "A stock pays a dividend of 2.00 next year, expected to grow at 4% forever. The required return is 9%. The stock's value is:", o: ["22.22.", "40.00.", "41.60."], a: 1, e: "V = D1 / (r − g) = 2 / 0,05 = 40. Ne pas re-multiplier par 1,04 : c'est déjà D1." },
    { id: "qm-6", m: "qm-tvm", type: "mcq", q: "The 1-year spot rate is 3% and the 2-year spot rate is 4%. The 1-year forward rate one year from now is closest to:", o: ["4.50%.", "5.01%.", "7.00%."], a: 1, e: "(1,04)² / 1,03 − 1 = 1,0816/1,03 − 1 = 5,01 %." },
    { id: "qm-o3", m: "qm-stats", type: "open", q: "Dans une distribution avec un skew positif, ordonne moyenne, médiane, mode.", a: "Mode < médiane < moyenne. La moyenne est tirée vers la queue de droite." },
    { id: "qm-7", m: "qm-stats", type: "mcq", q: "A return distribution with excess kurtosis of 2.5 is best described as:", o: ["platykurtic, with thinner tails than the normal distribution.", "leptokurtic, with fatter tails than the normal distribution.", "mesokurtic."], a: 1, e: "Excess kurtosis > 0 → leptokurtic, queues épaisses." },
    { id: "qm-8", m: "qm-stats", type: "mcq", q: "Fund A has a mean return of 10% and standard deviation of 15%; Fund B has a mean of 6% and standard deviation of 8%. Based on the coefficient of variation:", o: ["Fund A has less risk per unit of return.", "Fund B has less risk per unit of return.", "both have equal risk per unit of return."], a: 1, e: "CV A = 1,5 ; CV B = 1,33. B a moins de risque par unité de rendement." },
    { id: "qm-9", m: "qm-stats", type: "mcq", q: "A correlation coefficient of 0 between two variables most likely indicates:", o: ["no linear relationship.", "no relationship of any kind.", "a perfect inverse relationship."], a: 0, e: "La corrélation ne mesure que le lien linéaire. Une relation non linéaire peut exister." },
    { id: "qm-10", m: "qm-prob", type: "mcq", q: "The probability of an economic expansion is 70%. EPS is 4.00 in an expansion and 2.00 otherwise. Expected EPS is:", o: ["3.00.", "3.40.", "3.60."], a: 1, e: "0,7 × 4 + 0,3 × 2 = 2,8 + 0,6 = 3,40." },
    { id: "qm-11", m: "qm-prob", type: "mcq", q: "Prior probability that a company beats earnings is 40%. If it beats, an analyst's model signals 'beat' 80% of the time; if it does not beat, the model signals 'beat' 30% of the time. Given a 'beat' signal, the probability the company beats is closest to:", o: ["32%.", "50%.", "64%."], a: 2, e: "P(signal) = 0,8 × 0,4 + 0,3 × 0,6 = 0,32 + 0,18 = 0,50. P(beat | signal) = 0,32 / 0,50 = 64 %." },
    { id: "qm-o4", m: "qm-prob", type: "open", q: "Explique avec tes mots ce que fait le théorème de Bayes.", a: "Il met à jour une probabilité a priori après une nouvelle information : P(A|B) = P(B|A) × P(A) / P(B). P(B) se calcule par probabilité totale sur toutes les branches menant à B." },
    { id: "qm-12", m: "qm-port", type: "mcq", q: "Two assets each have a standard deviation of 20% and are held 50/50. If their correlation is 0, the portfolio standard deviation is closest to:", o: ["10.0%.", "14.1%.", "20.0%."], a: 1, e: "σp² = 0,25 × 0,04 + 0,25 × 0,04 + 0 = 0,02 → σp = 14,1 %." },
    { id: "qm-13", m: "qm-port", type: "mcq", q: "Threshold return is 3%. Portfolio X: E(R) 9%, σ 12%. Portfolio Y: E(R) 7%, σ 6%. Using Roy's safety-first criterion, the preferred portfolio is:", o: ["X.", "Y.", "indifferent."], a: 1, e: "SFR X = 6/12 = 0,50 ; SFR Y = 4/6 = 0,67. Y a le ratio le plus élevé." },
    { id: "qm-o5", m: "qm-sim", type: "open", q: "Différence entre bootstrapping et simulation historique ?", a: "La simulation historique rejoue les scénarios passés tels quels. Le bootstrap tire au hasard avec remise dans l'échantillon pour créer de nombreux échantillons artificiels et estimer la distribution d'une statistique." },
    { id: "qm-14", m: "qm-sim", type: "mcq", q: "Which statement about Monte Carlo simulation is most accurate?", o: ["It requires no assumptions about the distributions of risk factors.", "Its results depend on the assumed probability distributions of the inputs.", "It provides an exact analytical solution."], a: 1, e: "Monte Carlo dépend fortement des lois supposées pour les variables. Ce n'est pas une solution analytique." },
    { id: "qm-15", m: "qm-sim", type: "mcq", q: "Bootstrapping involves:", o: ["drawing repeated samples with replacement from the observed sample.", "removing one observation at a time.", "assuming returns are normally distributed."], a: 0, e: "Bootstrap = tirages avec remise. Retirer une observation à la fois = jackknife." },
    { id: "qm-16", m: "qm-sim", type: "mcq", q: "If continuously compounded returns are normally distributed, asset prices are most likely:", o: ["normally distributed.", "lognormally distributed.", "uniformly distributed."], a: 1, e: "Rendements continus normaux → prix lognormaux (positifs, skew à droite)." },
    { id: "qm-17", m: "qm-est", type: "mcq", q: "A sample of 64 returns has a standard deviation of 16%. The standard error of the sample mean is:", o: ["2%.", "4%.", "0.25%."], a: 0, e: "16 % / √64 = 16 % / 8 = 2 %." },
    { id: "qm-18", m: "qm-est", type: "mcq", q: "According to the central limit theorem, for a large sample the distribution of the sample mean is approximately:", o: ["the same as the population distribution.", "normal, regardless of the population distribution.", "lognormal."], a: 1, e: "TCL : la moyenne d'échantillon est approximativement normale pour n grand (≥ 30)." },
    { id: "qm-19", m: "qm-est", type: "mcq", q: "Dividing a population into subgroups and sampling from each in proportion to its size is:", o: ["cluster sampling.", "stratified random sampling.", "convenience sampling."], a: 1, e: "Stratified : on respecte les proportions de chaque sous-groupe." },
    { id: "qm-20", m: "qm-est", type: "mcq", q: "A study of mutual fund performance that includes only funds still in existence suffers from:", o: ["look-ahead bias.", "survivorship bias.", "time-period bias."], a: 1, e: "Les fonds disparus (souvent mauvais) sont exclus : survivorship bias." },
    { id: "qm-o6", m: "qm-hyp", type: "open", q: "Définis l'erreur de type I et l'erreur de type II.", a: "Type I : rejeter H0 alors qu'elle est vraie (probabilité α). Type II : ne pas rejeter H0 alors qu'elle est fausse (probabilité β). Power = 1 − β." },
    { id: "qm-21", m: "qm-hyp", type: "mcq", q: "A test has a p-value of 0.03. At the 5% significance level, the analyst should:", o: ["reject the null hypothesis.", "not reject the null hypothesis.", "accept the null hypothesis."], a: 0, e: "p-value 3 % < α 5 % → rejeter H0." },
    { id: "qm-22", m: "qm-hyp", type: "mcq", q: "To test whether the variances of two normally distributed populations are equal, the appropriate test statistic is:", o: ["t.", "chi-square.", "F."], a: 2, e: "Égalité de deux variances → test F. Une seule variance → χ²." },
    { id: "qm-23", m: "qm-hyp", type: "mcq", q: "Reducing the significance level from 5% to 1%, holding sample size constant, most likely:", o: ["increases the probability of a Type II error.", "increases the probability of a Type I error.", "increases the power of the test."], a: 0, e: "α plus bas → plus difficile de rejeter → β (type II) augmente, power diminue." },
    { id: "qm-24", m: "qm-hyp", type: "mcq", q: "To test the independence of two categorical variables in a contingency table, an analyst would use a:", o: ["paired t-test.", "chi-square test.", "z-test."], a: 1, e: "Indépendance de variables catégorielles → χ²." },
    { id: "qm-o7", m: "qm-reg", type: "open", q: "Cite les 4 hypothèses de la régression linéaire simple.", a: "Linéarité ; homoskedasticité (variance constante des résidus) ; indépendance des résidus ; normalité des résidus." },
    { id: "qm-25", m: "qm-reg", type: "mcq", q: "In a simple linear regression, SST = 200 and SSE = 50. The coefficient of determination is:", o: ["0.25.", "0.50.", "0.75."], a: 2, e: "R² = 1 − SSE/SST = 1 − 50/200 = 0,75." },
    { id: "qm-26", m: "qm-reg", type: "mcq", q: "The covariance of X and Y is 12 and the variance of X is 4. The estimated slope coefficient is:", o: ["0.33.", "3.00.", "48.00."], a: 1, e: "b1 = Cov / Var(X) = 12 / 4 = 3." },
    { id: "qm-27", m: "qm-reg", type: "mcq", q: "If the residuals of a regression show a variance that increases with X, the assumption violated is:", o: ["linearity.", "homoskedasticity.", "normality."], a: 1, e: "Variance non constante = heteroskedasticity : violation de l'hypothèse d'homoskedasticité." },
    { id: "qm-o8", m: "qm-ai", type: "open", q: "Qu'est-ce qu'une hallucination d'un LLM et comment s'en protéger ?", a: "Une réponse fausse mais formulée de façon convaincante. On s'en protège en vérifiant les faits et les sources, en gardant un humain dans la boucle et en ne se basant pas uniquement sur le modèle pour une recommandation (reasonable basis)." },
    { id: "qm-28", m: "qm-ai", type: "mcq", q: "A model trained on labeled data to predict whether a borrower will default is an example of:", o: ["unsupervised learning.", "supervised learning.", "reinforcement learning."], a: 1, e: "Données étiquetées (défaut oui/non) → supervised learning (classification)." },
    { id: "qm-29", m: "qm-ai", type: "mcq", q: "A machine learning model performs very well on training data but poorly on new data. This is most likely:", o: ["underfitting.", "overfitting.", "survivorship bias."], a: 1, e: "Overfitting : le modèle a appris le bruit de l'échantillon d'entraînement." },
    { id: "qm-30", m: "qm-ai", type: "mcq", q: "Which is least likely a limitation of large language models?", o: ["They can generate plausible but incorrect statements.", "They may reflect biases in training data.", "They can only process numerical data."], a: 2, e: "Les LLM traitent du texte. Les hallucinations et les biais sont de vraies limites." },
    { id: "qm-31", m: "qm-ai", type: "mcq", q: "Grouping customers into segments without predefined labels is an example of:", o: ["clustering (unsupervised learning).", "classification (supervised learning).", "regression."], a: 0, e: "Pas d'étiquette → unsupervised, ici clustering." }
  ]
};
