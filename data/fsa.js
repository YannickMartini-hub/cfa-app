// ============================================================
// fsa.js — Financial Statement Analysis (12 learning modules)
// Structure : modules (cours 101 + méthodes) puis questions
//   - type "mcq"  : QCM style examen (en anglais, comme le jour J)
//   - type "open" : question de cours, réponse modèle à comparer
// Dans les textes : {TOUCHE} s'affiche comme une touche de BA II Plus.
// ============================================================
CFA.content.fsa = {
  modules: [
    // ---------------------------------------------------------- LM9 TAXES
    {
      id: "fsa-taxes", lm: "LM9", title: "Analysis of Income Taxes", priority: true,
      summary: "Le module qui fait perdre le plus de points en FSA. On le reprend de zéro : deux comptabilités, une seule logique.",
      sections: [
        { title: "L'idée de départ : deux jeux de comptes", html: `
<p>Une entreprise calcule son résultat deux fois :</p>
<ul>
<li><b>Accounting profit</b> (pretax income) : selon les normes comptables (IFRS / US GAAP), pour les investisseurs.</li>
<li><b>Taxable income</b> : selon le droit fiscal, pour l'administration. C'est lui qui détermine <b>income tax payable</b> (l'impôt à payer).</li>
</ul>
<p>Les deux ne coïncident pas. L'écart est soit <b>temporaire</b> (il se résorbe plus tard), soit <b>permanent</b> (jamais).</p>
<div class="tip"><b>Image à retenir :</b> la comptabilité veut montrer l'impôt « juste » de l'année (matching principle). Le fisc veut l'argent selon ses propres règles. Les <b>deferred taxes</b> sont le tampon entre les deux.</div>` },
        { title: "Le vocabulaire qu'il faut maîtriser", html: `
<table class="t">
<tr><th>Terme</th><th>Ce que c'est</th></tr>
<tr><td>Income tax payable</td><td>Impôt dû au fisc pour l'année (bilan, passif courant). = taxable income × taux.</td></tr>
<tr><td>Income tax expense</td><td>Charge d'impôt au compte de résultat. = tax payable + ΔDTL − ΔDTA.</td></tr>
<tr><td>Income tax paid</td><td>Le cash réellement versé (tableau de flux).</td></tr>
<tr><td>Carrying amount (CA)</td><td>Valeur au bilan comptable (= book value).</td></tr>
<tr><td>Tax base (TB)</td><td>Valeur du même élément aux yeux du fisc (= tax basis).</td></tr>
<tr><td>DTL</td><td>Deferred tax liability : impôt payé en moins aujourd'hui, à payer plus tard.</td></tr>
<tr><td>DTA</td><td>Deferred tax asset : impôt payé en trop aujourd'hui (ou perte reportable), récupéré plus tard.</td></tr>
</table>
<div class="trap"><b>Piège :</b> « tax expense » et « tax payable » ne sont pas synonymes. La question te dira souvent l'un et te demandera l'autre.</div>` },
        { title: "Le tableau qui règle 80 % des questions", html: `
<table class="t">
<tr><th>Élément</th><th>Comparaison</th><th>Résultat</th></tr>
<tr><td>Actif</td><td>CA &gt; TB</td><td><b class="neg">DTL</b></td></tr>
<tr><td>Actif</td><td>CA &lt; TB</td><td><b class="pos">DTA</b></td></tr>
<tr><td>Passif</td><td>CA &gt; TB</td><td><b class="pos">DTA</b></td></tr>
<tr><td>Passif</td><td>CA &lt; TB</td><td><b class="neg">DTL</b></td></tr>
</table>
<p>Montant : <span class="f">Deferred tax = |CA − TB| × taux d'impôt</span></p>
<div class="tip"><b>Moyen mnémotechnique :</b> retiens uniquement la première ligne : <b>« Actif plus gros dans les livres → DTL »</b>. Pour un passif, tout s'inverse. Pour l'autre sens, tout s'inverse aussi.</div>
<div class="tip"><b>Pourquoi ça marche :</b> un actif plus gros dans les livres que pour le fisc veut dire que le fisc a déjà accordé plus de déductions (ex. amortissement accéléré). Moins d'impôt payé maintenant, donc une dette d'impôt future : DTL.</div>` },
        { title: "Les sources classiques (à reconnaître en 5 secondes)", html: `
<table class="t">
<tr><th>Situation</th><th>Effet</th><th>Pourquoi</th></tr>
<tr><td>Amortissement accéléré pour le fisc, linéaire en compta</td><td><b class="neg">DTL</b></td><td>Taxable income &lt; pretax income au début</td></tr>
<tr><td>Provision pour garantie (warranty) déduite fiscalement quand payée</td><td><b class="pos">DTA</b></td><td>Charge en compta maintenant, déduction fiscale plus tard</td></tr>
<tr><td>Revenu reçu d'avance (unearned revenue) taxé à l'encaissement</td><td><b class="pos">DTA</b></td><td>Impôt payé avant de reconnaître le revenu</td></tr>
<tr><td>Tax loss carryforward (perte reportable)</td><td><b class="pos">DTA</b></td><td>Économie d'impôt future</td></tr>
<tr><td>Dépréciation (impairment) comptable non déductible tout de suite</td><td><b class="pos">DTA</b></td><td>CA de l'actif &lt; TB</td></tr>
<tr><td>Charges de retraite (post-employment benefits) déduites quand payées</td><td><b class="pos">DTA</b></td><td>Passif CA &gt; TB</td></tr>
<tr><td>Development costs capitalisés en compta, déduits immédiatement fiscalement</td><td><b class="neg">DTL</b></td><td>Actif CA &gt; TB</td></tr>
</table>
<div class="tip"><b>Règle d'or :</b> si taxable income &lt; pretax income (écart temporaire) → DTL. Si taxable income &gt; pretax income → DTA.</div>` },
        { title: "Permanent differences : aucun impôt différé", html: `
<p>Un écart permanent ne se résorbera jamais. <b>Il ne crée ni DTA ni DTL.</b> Exemples :</p>
<ul>
<li>Amendes et pénalités (fines, penalties) : charges en compta, jamais déductibles.</li>
<li>Revenus exonérés (ex. municipal bond interest aux US).</li>
<li>Tax credits qui réduisent directement l'impôt (ex. crédit pour panneaux solaires).</li>
<li>Dividendes reçus d'une filiale non imposables (selon la juridiction).</li>
</ul>
<p>Leur seul effet : <b>effective tax rate ≠ statutory tax rate</b>.</p>
<div class="trap"><b>Piège classique :</b> la question décrit une amende de 50 et propose « deferred tax asset of 50 × t ». Faux. Une amende = différence permanente = pas de deferred tax.</div>` },
        { title: "Les trois taux d'impôt", html: `
<ul>
<li><b>Statutory rate</b> : le taux légal de la juridiction.</li>
<li><b>Effective tax rate (ETR)</b> = income tax expense / pretax income. C'est celui qu'on utilise pour <b>projeter le résultat</b>.</li>
<li><b>Cash tax rate</b> = cash taxes paid / pretax income. C'est celui qu'on utilise pour <b>projeter les flux de trésorerie</b>.</li>
</ul>
<p>Les notes annexes donnent une <b>reconciliation</b> du taux légal vers le taux effectif. L'analyste y cherche les éléments récurrents (garder pour les prévisions) et non récurrents (exclure).</p>
<div class="tip"><b>Astuce :</b> Effective → Earnings (résultat). Cash → Cash flows. Les deux commencent par la même lettre que ce qu'ils servent à prévoir.</div>` },
        { title: "Changement du taux d'impôt", html: `
<p>Les DTA et DTL sont <b>réévalués au nouveau taux</b> (taux voté ; IFRS accepte aussi « substantively enacted »). L'ajustement passe par la tax expense de l'année.</p>
<table class="t">
<tr><th>Taux</th><th>DTL</th><th>DTA</th><th>Effet sur tax expense</th></tr>
<tr><td>Baisse</td><td>↓</td><td>↓</td><td>Baisse de DTL → expense ↓ ; baisse de DTA → expense ↑</td></tr>
<tr><td>Hausse</td><td>↑</td><td>↑</td><td>Hausse de DTL → expense ↑ ; hausse de DTA → expense ↓</td></tr>
</table>
<div class="ex"><b>Exemple :</b> différence temporaire de 1 000 qui crée une DTL à 30 % = 300. Le taux passe à 25 % : DTL = 250. La baisse de 50 <b>réduit</b> la tax expense de 50, donc le résultat net augmente de 50.</div>` },
        { title: "Valuation allowance et réalisabilité des DTA", html: `
<p>Une DTA n'a de valeur que si l'entreprise fera assez de bénéfices imposables pour l'utiliser.</p>
<ul>
<li><b>US GAAP</b> : on comptabilise toute la DTA puis on la réduit par une <b>valuation allowance</b> s'il est « more likely than not » (&gt; 50 %) qu'une partie ne sera pas réalisée.</li>
<li><b>IFRS</b> : on ne comptabilise la DTA que dans la mesure où un bénéfice futur est <b>probable</b>. Pas de compte de valuation allowance séparé.</li>
</ul>
<p>Hausse de la valuation allowance → DTA nette ↓ → tax expense ↑ → résultat ↓. C'est un signal : la direction doute des bénéfices futurs.</p>
<div class="trap"><b>Red flag :</b> la valuation allowance dépend du jugement de la direction. La réduire gonfle le résultat. Une baisse sans amélioration visible de l'activité est suspecte.</div>` },
        { title: "Comment l'analyste traite les deferred taxes", html: `
<ul>
<li><b>DTL qui va se résorber</b> → c'est une vraie dette : <b>liability</b>.</li>
<li><b>DTL qui ne se résorbera pas</b> (ex. capex en croissance continue : l'amortissement accéléré se renouvelle sans fin) → traiter comme <b>equity</b>.</li>
<li><b>Montant et timing incertains</b> → ni l'un ni l'autre ; on peut exclure la DTL des deux et retraiter.</li>
</ul>
<p>Présentation : DTA et DTL sont classés en <b>non-current</b> (IFRS et US GAAP). Compensation (netting) possible s'ils relèvent de la même autorité fiscale.</p>
<p>IFRS : quand une revaluation d'actif passe par l'OCI (revaluation surplus), l'impôt différé associé passe aussi par les capitaux propres, pas par le résultat.</p>` },
        { title: "Exemple complet : amortissement accéléré sur 4 ans", html: `
<div class="ex">
<p>Machine achetée 1 000, durée 4 ans, valeur résiduelle 0. Compta : linéaire (250/an). Fisc : 400, 300, 200, 100. Résultat avant amortissement : 2 000/an. Taux : 30 %.</p>
<div class="scroll"><table class="t num">
<tr><th></th><th>An 1</th><th>An 2</th><th>An 3</th><th>An 4</th></tr>
<tr><td>CA fin d'année</td><td>750</td><td>500</td><td>250</td><td>0</td></tr>
<tr><td>TB fin d'année</td><td>600</td><td>300</td><td>100</td><td>0</td></tr>
<tr><td>CA − TB</td><td>150</td><td>200</td><td>150</td><td>0</td></tr>
<tr><td>DTL (× 30 %)</td><td>45</td><td>60</td><td>45</td><td>0</td></tr>
<tr><td>ΔDTL</td><td>+45</td><td>+15</td><td>−15</td><td>−45</td></tr>
<tr><td>Taxable income</td><td>1 600</td><td>1 700</td><td>1 800</td><td>1 900</td></tr>
<tr><td>Tax payable</td><td>480</td><td>510</td><td>540</td><td>570</td></tr>
<tr><td>Tax expense = payable + ΔDTL</td><td>525</td><td>525</td><td>525</td><td>525</td></tr>
<tr><td>Pretax income</td><td>1 750</td><td>1 750</td><td>1 750</td><td>1 750</td></tr>
</table></div>
<p>La tax expense reste à 30 % du pretax income chaque année (525 = 30 % × 1 750). Le cash payé au fisc, lui, varie. Sur 4 ans, le total payé (2 100) égale le total de la charge (2 100) : c'est bien une différence <b>temporaire</b>.</p>
</div>` }
      ],
      methods: [
        { title: "Trouver DTA ou DTL en 4 étapes", steps: [
          "Identifier si l'élément est un ACTIF ou un PASSIF.",
          "Écrire CA (valeur comptable) et TB (valeur fiscale) côte à côte.",
          "Appliquer le tableau : Actif CA > TB → DTL. Sinon inverser (passif ou sens opposé).",
          "Montant = |CA − TB| × taux. Vérifier que l'écart est temporaire ; sinon, rien."
        ] },
        { title: "Calculer la tax expense", steps: [
          "Tax payable = taxable income × taux.",
          "Calculer ΔDTL et ΔDTA (fin − début de période).",
          "Tax expense = tax payable + ΔDTL − ΔDTA.",
          "Contrôle : sans différence permanente, tax expense = pretax income × taux."
        ] },
        { title: "Trouver la tax base d'un passif", steps: [
          "Tax base d'un passif = CA − montants qui seront déductibles fiscalement dans le futur.",
          "Revenu reçu d'avance déjà taxé : TB = CA − revenu non taxable plus tard (souvent TB = 0).",
          "Provision pour garantie déductible au paiement : TB = CA − CA = 0.",
          "Puis appliquer le tableau : passif CA > TB → DTA."
        ] },
        { title: "Effective tax rate avec différences permanentes", steps: [
          "Partir du pretax income.",
          "Taxable income = pretax income + charges non déductibles − revenus exonérés (et ± écarts temporaires).",
          "Tax expense = (pretax income ± écarts permanents) × taux, moins les tax credits.",
          "ETR = tax expense / pretax income. Comparer au statutory rate."
        ] }
      ]
    },
    // ---------------------------------------------------------- LM1
    {
      id: "fsa-intro", lm: "LM1", title: "Introduction to Financial Statement Analysis",
      summary: "Les états financiers, l'audit, les sources d'information et le cadre d'analyse en 6 étapes.",
      sections: [
        { title: "Les états financiers", html: `
<ul>
<li><b>Balance sheet</b> (statement of financial position) : Assets = Liabilities + Equity, à une date.</li>
<li><b>Income statement</b> : revenus − charges sur une période. <b>Statement of comprehensive income</b> = NI + OCI.</li>
<li><b>Statement of changes in equity</b> : comment les capitaux propres ont bougé.</li>
<li><b>Cash flow statement</b> : CFO, CFI, CFF.</li>
<li><b>Notes</b> (annexes) : méthodes comptables, estimations, détails. Indispensables.</li>
<li><b>MD&amp;A</b> (management commentary) : la vision de la direction, non auditée.</li>
</ul>` },
        { title: "L'audit", html: `
<p>L'auditeur donne une <b>reasonable assurance</b> (pas une garantie absolue) que les comptes sont exempts d'anomalies significatives.</p>
<table class="t">
<tr><th>Opinion</th><th>Sens</th></tr>
<tr><td>Unqualified / unmodified</td><td>Comptes fidèles. Le cas normal.</td></tr>
<tr><td>Qualified</td><td>Fidèles sauf une exception précise.</td></tr>
<tr><td>Adverse</td><td>Les comptes ne sont pas fidèles.</td></tr>
<tr><td>Disclaimer</td><td>L'auditeur ne peut pas se prononcer.</td></tr>
</table>
<p>Le rapport mentionne les <b>key audit matters</b> (IFRS / ISA) ou <b>critical audit matters</b> (US). Aux US, l'auditeur se prononce aussi sur le <b>contrôle interne</b> (Sarbanes-Oxley).</p>
<div class="tip"><b>Ordre de gravité :</b> Unqualified &lt; Qualified &lt; Adverse. Disclaimer = « je ne sais pas ».</div>` },
        { title: "Autres sources et documents SEC", html: `
<ul>
<li><b>10-K</b> annuel, <b>10-Q</b> trimestriel, <b>8-K</b> événement important, <b>DEF 14A</b> (proxy statement : rémunération, votes).</li>
<li><b>Forms 3, 4, 5</b> : transactions des initiés. <b>Form 144</b> : intention de vendre des titres restreints.</li>
<li>Earnings calls, communiqués, rapports de l'industrie, données macro.</li>
</ul>` },
        { title: "Le cadre d'analyse en 6 étapes", html: `
<ol>
<li>Définir l'objectif et le contexte.</li>
<li>Collecter les données.</li>
<li>Traiter les données (retraitements, ratios, common-size).</li>
<li>Analyser et interpréter.</li>
<li>Formuler et communiquer les conclusions (recommandation).</li>
<li>Suivre (follow-up) et mettre à jour.</li>
</ol>
<div class="tip"><b>Mnémotechnique :</b> « <b>O</b>n <b>C</b>ollecte, <b>T</b>raite, <b>A</b>nalyse, <b>C</b>onclut, <b>S</b>uit » → O-C-T-A-C-S.</div>` },
        { title: "Normes et qualités de l'information", html: `
<p><b>IASB</b> publie les IFRS ; <b>FASB</b> publie les US GAAP ; la <b>SEC</b> et l'<b>IOSCO</b> sont des régulateurs (ils font appliquer, ils ne rédigent pas les normes comptables).</p>
<p>Qualités fondamentales : <b>relevance</b> et <b>faithful representation</b>. Qualités qui les renforcent : comparability, verifiability, timeliness, understandability.</p>
<div class="trap"><b>Piège :</b> standard-setters (IASB, FASB) ≠ regulators (SEC, IOSCO).</div>` }
      ],
      methods: []
    },
    // ---------------------------------------------------------- LM2
    {
      id: "fsa-is", lm: "LM2", title: "Analyzing Income Statements",
      summary: "Reconnaissance du revenu, éléments non récurrents, EPS de base et dilué.",
      sections: [
        { title: "Revenue recognition en 5 étapes (IFRS 15 / ASC 606)", html: `
<ol>
<li>Identifier le <b>contrat</b>.</li>
<li>Identifier les <b>performance obligations</b> (biens ou services distincts).</li>
<li>Déterminer le <b>transaction price</b> (y compris variable consideration, si fortement probable).</li>
<li><b>Allouer</b> le prix à chaque obligation (au prorata des prix de vente autonomes).</li>
<li>Reconnaître le revenu <b>quand (ou au fur et à mesure que)</b> l'obligation est remplie.</li>
</ol>
<p><b>Principal vs agent :</b> le principal contrôle le bien et reconnaît le revenu <b>brut</b> ; l'agent reconnaît seulement sa commission (<b>net</b>).</p>
<div class="tip">Mnémotechnique : <b>C-O-P-A-R</b> : Contrat, Obligations, Prix, Allocation, Reconnaissance.</div>` },
        { title: "Éléments non récurrents et changements", html: `
<table class="t">
<tr><th>Élément</th><th>Traitement</th></tr>
<tr><td>Discontinued operations</td><td>Ligne séparée, <b>net of tax</b>, sous le résultat des activités poursuivies.</td></tr>
<tr><td>Unusual or infrequent items</td><td>Dans les activités poursuivies, <b>avant impôt</b>.</td></tr>
<tr><td>Changement de méthode comptable</td><td><b>Rétrospectif</b> (on retraite les années passées).</td></tr>
<tr><td>Changement d'estimation (durée d'amortissement…)</td><td><b>Prospectif</b>, pas de retraitement.</td></tr>
<tr><td>Correction d'erreur</td><td>Retraitement des périodes antérieures (restatement).</td></tr>
</table>
<div class="tip"><b>Mnémotechnique :</b> une <b>E</b>stimation regarde <b>E</b>n avant (prospectif). Une méthode (policy) se corrige dans le passé.</div>
<div class="trap">Les extraordinary items n'existent plus (IFRS : interdits ; US GAAP : supprimés en 2015).</div>` },
        { title: "Méthodes d'amortissement", html: `
<ul>
<li><b>Straight-line</b> : (coût − valeur résiduelle) / durée.</li>
<li><b>Double-declining balance</b> : 2/n × valeur nette comptable de début d'année. On ignore la valeur résiduelle dans le calcul, mais on ne descend jamais en dessous.</li>
<li><b>Units of production</b> : (coût − résiduelle) × unités produites / unités totales.</li>
</ul>
<div class="trap"><b>Piège DDB :</b> on applique le taux à la <b>valeur nette</b>, pas au coût moins résiduel. Et on s'arrête quand on atteint la valeur résiduelle.</div>` },
        { title: "EPS de base et dilué", html: `
<p><span class="f">Basic EPS = (Net income − preferred dividends) / weighted average shares</span></p>
<p>Diluted EPS : on ajoute l'effet de chaque titre dilutif.</p>
<ul>
<li><b>Convertible preferred</b> (if-converted) : rajouter les preferred dividends au numérateur, ajouter les actions issues de la conversion.</li>
<li><b>Convertible bonds</b> : rajouter <b>interest × (1 − t)</b> au numérateur, ajouter les actions.</li>
<li><b>Options / warrants</b> (treasury stock method) : nouvelles actions nettes = N − (N × strike / prix moyen). Seulement si strike &lt; prix moyen.</li>
</ul>
<p>Un titre <b>antidilutif</b> (qui augmente l'EPS) est exclu.</p>
<div class="trap"><b>Pièges EPS :</b> (1) stock dividends et splits sont appliqués <b>rétroactivement</b> à toute la période ; (2) on prend le <b>prix moyen</b> de la période pour la treasury stock method, pas le prix de fin.</div>` },
        { title: "Comprehensive income et common-size", html: `
<p><b>Comprehensive income = Net income + OCI.</b> Éléments typiques d'OCI :</p>
<ul>
<li>Écarts de conversion (foreign currency translation).</li>
<li>Gains/pertes latents sur titres FVOCI.</li>
<li>Partie efficace des cash flow hedges.</li>
<li>Réévaluations des régimes de retraite (remeasurements).</li>
<li>Revaluation surplus (IFRS).</li>
</ul>
<p><b>Common-size income statement :</b> chaque ligne en % du revenu. Permet de comparer des entreprises de tailles différentes.</p>` }
      ],
      methods: [
        { title: "Diluted EPS sans se tromper", steps: [
          "Calculer basic EPS (NI − dividendes préférentiels) / WASO.",
          "Pour chaque titre potentiellement dilutif, calculer son EPS « marginal » (ajustement numérateur / actions ajoutées).",
          "Si cet EPS marginal est inférieur au basic EPS → dilutif → l'inclure. Sinon l'exclure.",
          "Options : actions ajoutées = N × (1 − K / prix moyen), numérateur inchangé.",
          "Diluted EPS = numérateur ajusté / (WASO + actions ajoutées)."
        ] }
      ]
    },
    // ---------------------------------------------------------- LM3
    {
      id: "fsa-bs", lm: "LM3", title: "Analyzing Balance Sheets",
      summary: "Classement, bases d'évaluation, instruments financiers, goodwill, capitaux propres.",
      sections: [
        { title: "Structure et classement", html: `
<p>Actifs et passifs sont classés <b>current</b> (réalisés ou réglés dans l'année ou le cycle d'exploitation) ou <b>non-current</b>. IFRS autorise aussi une présentation par liquidité (banques).</p>
<p>Bases d'évaluation : <b>historical cost</b>, <b>amortized cost</b>, <b>fair value</b>, net realizable value.</p>` },
        { title: "Instruments financiers (IFRS 9)", html: `
<table class="t">
<tr><th>Catégorie</th><th>Bilan</th><th>Variations de valeur</th></tr>
<tr><td>Amortized cost (dette détenue pour encaisser)</td><td>Coût amorti</td><td>Non reconnues (sauf dépréciation)</td></tr>
<tr><td>FVOCI</td><td>Juste valeur</td><td>OCI</td></tr>
<tr><td>FVPL</td><td>Juste valeur</td><td>Compte de résultat</td></tr>
</table>
<div class="tip">Dans tous les cas, intérêts et dividendes passent par le compte de résultat. Seuls les gains latents changent de destination.</div>` },
        { title: "Intangibles et goodwill", html: `
<p><span class="f">Goodwill = prix d'acquisition − juste valeur des actifs nets identifiables</span></p>
<ul>
<li>Goodwill : <b>pas amorti</b>, test de dépréciation au moins annuel. Jamais de reprise de dépréciation.</li>
<li>Intangibles à durée finie : amortis. À durée indéfinie : test de dépréciation.</li>
<li>R&amp;D interne : IFRS → research en charge, development capitalisé si critères ; US GAAP → tout en charge (exception : certains logiciels).</li>
<li>Le goodwill créé en interne n'est jamais comptabilisé.</li>
</ul>` },
        { title: "Capitaux propres", html: `
<ul>
<li>Capital apporté (contributed capital), primes.</li>
<li>Retained earnings (bénéfices non distribués).</li>
<li>Treasury shares : actions rachetées, <b>en déduction</b> des capitaux propres, sans droit de vote ni dividende.</li>
<li>Accumulated OCI.</li>
<li>Non-controlling interest (minority interest) : part des filiales qui n'appartient pas au groupe.</li>
</ul>` },
        { title: "Ratios du bilan", html: `
<ul>
<li>Liquidité : current ratio, quick ratio, cash ratio.</li>
<li>Solvabilité : debt-to-equity, debt-to-assets, financial leverage (assets / equity).</li>
<li>Common-size balance sheet : chaque ligne en % du total actif.</li>
</ul>
<p>Les formules détaillées sont dans l'onglet Formules.</p>` }
      ],
      methods: []
    },
    // ---------------------------------------------------------- LM4-5
    {
      id: "fsa-cf", lm: "LM4–5", title: "Analyzing Statements of Cash Flows I & II",
      summary: "CFO / CFI / CFF, méthode directe et indirecte, différences IFRS vs US GAAP, free cash flows.",
      sections: [
        { title: "Classement IFRS vs US GAAP", html: `
<table class="t">
<tr><th>Flux</th><th>IFRS</th><th>US GAAP</th></tr>
<tr><td>Interest paid</td><td>CFO ou CFF</td><td>CFO</td></tr>
<tr><td>Interest received</td><td>CFO ou CFI</td><td>CFO</td></tr>
<tr><td>Dividends received</td><td>CFO ou CFI</td><td>CFO</td></tr>
<tr><td>Dividends paid</td><td>CFO ou CFF</td><td>CFF</td></tr>
<tr><td>Taxes paid</td><td>CFO (sauf lien direct CFI/CFF)</td><td>CFO</td></tr>
</table>
<div class="tip"><b>Astuce :</b> US GAAP = tout en CFO, sauf <b>dividends paid</b> en CFF. IFRS = flexibilité.</div>` },
        { title: "Méthode indirecte", html: `
<p>On part du net income et on corrige :</p>
<ol>
<li>+ charges non cash (D&amp;A, impairment, charge d'impôt différé).</li>
<li>− gains / + pertes sur cessions (ils sont dans CFI).</li>
<li>− hausse des actifs d'exploitation (AR, stocks, prepaid) / + baisse.</li>
<li>+ hausse des passifs d'exploitation (AP, accrued, unearned) / − baisse.</li>
</ol>
<div class="tip"><b>Mnémotechnique :</b> actif qui monte = cash qui part (−). Passif qui monte = cash qui reste (+).</div>` },
        { title: "Méthode directe", html: `
<ul>
<li>Cash from customers = revenue − ΔAR + Δunearned revenue.</li>
<li>Cash paid to suppliers = COGS + Δinventory − ΔAP.</li>
<li>Cash paid for operating expenses = expense + Δprepaid − Δaccrued liabilities.</li>
<li>Cash paid for interest = interest expense − Δinterest payable.</li>
<li>Cash paid for taxes = tax expense − Δtaxes payable − ΔDTL + ΔDTA.</li>
</ul>
<div class="trap">La ligne « taxes » relie ce module à LM9 : une hausse de DTL veut dire qu'on a payé <b>moins</b> que la charge.</div>` },
        { title: "CFI et cession d'actifs", html: `
<p><span class="f">Cash from sale = valeur nette comptable cédée + gain (ou − perte)</span></p>
<p>Avec : valeur nette cédée = coût historique cédé − amortissement cumulé sur cet actif.</p>
<p>Les transactions non monétaires importantes (échange d'actifs, conversion de dette en actions) ne passent pas dans le tableau ; elles sont dans les notes.</p>` },
        { title: "Free cash flows et ratios", html: `
<p><span class="f">FCFF = CFO + Int × (1 − t) − FCInv</span> (si les intérêts sont en CFO)</p>
<p><span class="f">FCFE = CFO − FCInv + net borrowing</span></p>
<p>Ratios : CFO / revenue, cash return on assets, CFO / net income (qualité des résultats), debt coverage, reinvestment, dividend payment.</p>
<div class="tip">CFO / net income durablement &lt; 1 : les bénéfices ne se transforment pas en cash. Signal d'alerte sur la qualité des résultats.</div>` }
      ],
      methods: [
        { title: "Construire le CFO (indirect)", steps: [
          "Partir du net income.",
          "Ajouter D&A et autres charges non cash ; retirer les gains, ajouter les pertes de cession.",
          "Pour chaque actif courant d'exploitation : hausse → soustraire, baisse → ajouter.",
          "Pour chaque passif courant d'exploitation : hausse → ajouter, baisse → soustraire.",
          "Ne pas toucher aux dettes financières ni aux dividendes (CFF)."
        ] }
      ]
    },
    // ---------------------------------------------------------- LM6
    {
      id: "fsa-inv", lm: "LM6", title: "Analysis of Inventories",
      summary: "FIFO / LIFO / WAC, LIFO reserve, évaluation au plus bas, ratios.",
      sections: [
        { title: "Ce qui entre dans le coût des stocks", html: `
<p>Inclus : prix d'achat, coûts de conversion, coûts pour amener le stock à son lieu et état.</p>
<p>Exclu (charge immédiate) : gaspillage anormal, stockage (sauf nécessaire à la production), frais administratifs, frais de vente.</p>` },
        { title: "Méthodes et effets en période d'inflation", html: `
<table class="t">
<tr><th>Prix en hausse</th><th>FIFO</th><th>LIFO</th></tr>
<tr><td>COGS</td><td>Plus faible</td><td>Plus élevé</td></tr>
<tr><td>Marge brute, résultat</td><td>Plus élevé</td><td>Plus faible</td></tr>
<tr><td>Stock au bilan</td><td>Plus élevé (proche du prix actuel)</td><td>Plus faible</td></tr>
<tr><td>Impôt payé</td><td>Plus élevé</td><td>Plus faible</td></tr>
<tr><td>CFO</td><td>Plus faible (impôt)</td><td>Plus élevé</td></tr>
</table>
<p>LIFO est <b>interdit en IFRS</b> (autorisé en US GAAP). WAC est entre les deux.</p>
<div class="tip"><b>FIFO</b> : le bilan est à jour, le compte de résultat est vieux. <b>LIFO</b> : le compte de résultat est à jour, le bilan est vieux.</div>` },
        { title: "LIFO reserve", html: `
<p><span class="f">FIFO inventory = LIFO inventory + LIFO reserve</span></p>
<p><span class="f">FIFO COGS = LIFO COGS − ΔLIFO reserve</span></p>
<p>Pour convertir les capitaux propres : + LIFO reserve × (1 − t). La part × t va dans les impôts (passif ou cash).</p>
<p><b>LIFO liquidation</b> : l'entreprise vend plus qu'elle n'achète, les vieilles couches peu chères passent en COGS → marge gonflée, non soutenable. Signal : LIFO reserve qui baisse.</p>` },
        { title: "Évaluation au plus bas", html: `
<ul>
<li><b>IFRS</b> : lower of cost and <b>NRV</b> (net realizable value). Reprise de dépréciation autorisée, dans la limite du coût initial.</li>
<li><b>US GAAP (FIFO, WAC)</b> : lower of cost and NRV. <b>Pas de reprise.</b></li>
<li><b>US GAAP (LIFO, retail)</b> : lower of cost or <b>market</b>. Market = replacement cost, borné par NRV (plafond) et NRV − marge normale (plancher). Pas de reprise.</li>
</ul>
<div class="trap">Les reprises de dépréciation : oui en IFRS, jamais en US GAAP.</div>` },
        { title: "Ratios de stock", html: `
<p><span class="f">Inventory turnover = COGS / stock moyen</span> ; <span class="f">DOH = 365 / turnover</span></p>
<p>Rotation élevée : gestion efficace… ou stock insuffisant (ventes perdues). Comparer avec la croissance des ventes.</p>` }
      ],
      methods: [
        { title: "Passer de LIFO à FIFO", steps: [
          "Stock FIFO = stock LIFO + LIFO reserve (fin de période).",
          "COGS FIFO = COGS LIFO − (reserve fin − reserve début).",
          "Résultat avant impôt FIFO = LIFO + ΔLIFO reserve.",
          "Capitaux propres FIFO = LIFO + reserve × (1 − t).",
          "Recalculer les ratios avec les chiffres FIFO pour comparer avec une entreprise IFRS."
        ] }
      ]
    },
    // ---------------------------------------------------------- LM7
    {
      id: "fsa-lta", lm: "LM7", title: "Analysis of Long-Term Assets",
      summary: "Capitaliser vs passer en charge, intérêts capitalisés, dépréciation, réévaluation.",
      sections: [
        { title: "Capitaliser ou passer en charge ?", html: `
<table class="t">
<tr><th>Effet de capitaliser</th><th>Années 1</th><th>Années suivantes</th></tr>
<tr><td>Résultat</td><td>Plus élevé</td><td>Plus faible (amortissement)</td></tr>
<tr><td>Actifs, capitaux propres</td><td>Plus élevés</td><td>Plus élevés</td></tr>
<tr><td>CFO</td><td>Plus élevé (la sortie va en CFI)</td><td>Plus élevé</td></tr>
<tr><td>CFI</td><td>Plus faible</td><td>—</td></tr>
<tr><td>Volatilité du résultat</td><td colspan="2">Plus faible (la charge est lissée)</td></tr>
</table>
<div class="tip">Capitaliser fait paraître le CFO meilleur. Pour comparer deux entreprises, retraiter.</div>` },
        { title: "Intérêts capitalisés", html: `
<p>Les intérêts pendant la construction d'un actif sont <b>capitalisés</b> (ajoutés au coût de l'actif). Ils apparaissent en <b>CFI</b> et sont amortis ensuite.</p>
<p>L'analyste les réintègre en charge d'intérêts pour calculer l'<b>interest coverage</b> (sinon il est surestimé).</p>` },
        { title: "Impairment (dépréciation)", html: `
<table class="t">
<tr><th></th><th>IFRS</th><th>US GAAP</th></tr>
<tr><td>Test</td><td>CA &gt; recoverable amount ?</td><td>Étape 1 : CA &gt; flux futurs <b>non actualisés</b> ?</td></tr>
<tr><td>Valeur de référence</td><td>Recoverable = max(fair value − costs to sell, value in use)</td><td>Étape 2 : fair value</td></tr>
<tr><td>Perte</td><td>CA − recoverable amount</td><td>CA − fair value</td></tr>
<tr><td>Reprise</td><td>Autorisée (sauf goodwill)</td><td>Interdite (actifs détenus pour utilisation)</td></tr>
</table>
<p>Une dépréciation n'a <b>aucun effet sur le cash</b> à la date où elle est passée.</p>` },
        { title: "Revaluation model (IFRS uniquement)", html: `
<ul>
<li>Hausse de valeur → OCI (revaluation surplus), sauf si elle compense une baisse passée en résultat (alors en résultat).</li>
<li>Baisse → résultat, sauf si elle compense un surplus antérieur (alors OCI).</li>
<li>Investment property : modèle du coût ou de la juste valeur (variations en résultat).</li>
</ul>` },
        { title: "Ratios d'âge des immobilisations", html: `
<p><span class="f">Average age = accumulated depreciation / depreciation expense</span></p>
<p><span class="f">Remaining life = net PP&amp;E / depreciation expense</span></p>
<p><span class="f">Total useful life = gross PP&amp;E / depreciation expense</span></p>
<p>Un âge moyen élevé annonce des capex importants à venir.</p>` }
      ],
      methods: []
    },
    // ---------------------------------------------------------- LM8
    {
      id: "fsa-ltl", lm: "LM8", title: "Topics in Long-Term Liabilities and Equity",
      summary: "Leases, retraites, rémunération en actions, comptabilisation des obligations émises.",
      sections: [
        { title: "Leases côté preneur (lessee)", html: `
<ul>
<li><b>IFRS 16</b> : un seul modèle. Right-of-use asset + lease liability au bilan. Compte de résultat : amortissement + intérêts (charge totale plus forte au début).</li>
<li><b>US GAAP</b> : finance lease (comme IFRS) ou operating lease (ROU asset et liability au bilan aussi, mais <b>une seule charge linéaire</b>).</li>
<li>Exemptions IFRS : leases &lt; 12 mois et actifs de faible valeur. US GAAP : &lt; 12 mois.</li>
</ul>
<table class="t">
<tr><th>Cash flows</th><th>Finance lease</th><th>Operating lease (US GAAP)</th></tr>
<tr><td>Intérêt</td><td>CFO (ou CFF en IFRS)</td><td rowspan="2">Tout le loyer en CFO</td></tr>
<tr><td>Principal</td><td>CFF</td></tr>
</table>
<p>Lease liability initiale = PV des loyers au taux implicite (ou taux d'emprunt marginal).</p>` },
        { title: "Leases côté bailleur (lessor)", html: `
<p><b>Finance lease</b> si transfert de quasiment tous les risques et avantages : l'actif sort du bilan, remplacé par une créance (lease receivable). Revenu d'intérêts.</p>
<p><b>Operating lease</b> : l'actif reste au bilan, amorti ; revenu locatif.</p>
<p>Critères de finance lease : transfert de propriété, option d'achat raisonnablement certaine, durée = majeure partie de la vie économique, PV des loyers ≈ toute la juste valeur, actif spécialisé.</p>` },
        { title: "Post-employment benefits", html: `
<ul>
<li><b>Defined contribution</b> : charge = cotisation versée. Le risque est sur le salarié.</li>
<li><b>Defined benefit</b> : l'entreprise porte le risque. Au bilan : <b>funded status = plan assets − DBO</b> (net asset si positif, net liability si négatif).</li>
<li>IFRS : service cost + net interest en résultat ; remeasurements en OCI, jamais recyclés.</li>
</ul>
<div class="tip">Un net pension liability = une dette cachée. L'analyste peut l'ajouter à la dette pour les ratios de solvabilité.</div>` },
        { title: "Share-based compensation", html: `
<p>Charge = <b>fair value à la date d'attribution</b> (grant date), étalée sur la période d'acquisition (vesting period).</p>
<p>Stock grants : valeur = cours à la date d'attribution. Stock options : modèle de valorisation (hypothèses de volatilité, durée, dividendes) → beaucoup de jugement.</p>` },
        { title: "Obligations émises (rappel)", html: `
<p>Méthode du taux effectif : <span class="f">interest expense = valeur comptable début × taux du marché à l'émission</span>.</p>
<ul>
<li>Émise en dessous du pair (discount) : charge d'intérêts &gt; coupon, la valeur comptable monte vers le nominal.</li>
<li>Émise au-dessus du pair (premium) : charge &lt; coupon, la valeur comptable descend.</li>
</ul>
<div class="trap">Le CFO enregistre le <b>coupon payé</b>, pas la charge d'intérêts. Une obligation zéro coupon ne fait jamais sortir d'intérêt du CFO : tout part en CFF au remboursement.</div>` }
      ],
      methods: []
    },
    // ---------------------------------------------------------- LM10
    {
      id: "fsa-frq", lm: "LM10", title: "Financial Reporting Quality",
      summary: "Spectre de qualité, conditions de manipulation, signaux d'alerte.",
      sections: [
        { title: "Le spectre de qualité", html: `
<ol>
<li>GAAP, utile à la décision, résultats soutenables et de qualité.</li>
<li>GAAP, utile, mais résultats peu soutenables (qualité faible).</li>
<li>GAAP mais choix biaisés (agressifs ou conservateurs).</li>
<li>Within GAAP mais « earnings management » réelle (timing des dépenses…).</li>
<li>Non conforme aux normes.</li>
<li>Fictif (transactions inventées).</li>
</ol>
<p>On distingue <b>reporting quality</b> (l'information décrit-elle fidèlement la réalité ?) et <b>earnings quality</b> (les résultats sont-ils soutenables ?).</p>` },
        { title: "Pourquoi les entreprises manipulent", html: `
<p>Le <b>fraud triangle</b> : <b>motivation</b> (pression des attentes, bonus), <b>opportunity</b> (contrôles faibles), <b>rationalization</b> (« tout le monde le fait »).</p>` },
        { title: "Les mécanismes", html: `
<ul>
<li>Revenu : channel stuffing, bill-and-hold, reconnaissance trop tôt.</li>
<li>Capitaliser des dépenses qui devraient être des charges.</li>
<li>Allonger les durées d'amortissement, augmenter les valeurs résiduelles.</li>
<li>Jouer sur les provisions (cookie jar reserves), big bath.</li>
<li>CFO : retarder le paiement des fournisseurs, vendre les créances, classer des sorties d'exploitation en CFI.</li>
<li>Non-GAAP measures qui excluent des charges récurrentes.</li>
</ul>` },
        { title: "Signaux d'alerte", html: `
<ul>
<li>CFO / net income durablement &lt; 1.</li>
<li>AR qui croît plus vite que les ventes (DSO en hausse).</li>
<li>Stock qui croît plus vite que les ventes.</li>
<li>Résultats toujours juste au-dessus du consensus.</li>
<li>Changements fréquents de méthodes ou d'estimations, restatements.</li>
<li>Gros profits sur le dernier trimestre de l'année.</li>
</ul>` }
      ],
      methods: []
    },
    // ---------------------------------------------------------- LM11
    {
      id: "fsa-fat", lm: "LM11", title: "Financial Analysis Techniques",
      summary: "Les familles de ratios, DuPont, et comment interpréter.",
      sections: [
        { title: "Les 5 familles de ratios", html: `
<table class="t">
<tr><th>Famille</th><th>Question</th><th>Exemples</th></tr>
<tr><td>Activity</td><td>L'entreprise utilise-t-elle bien ses actifs ?</td><td>Turnovers, DOH, DSO, DPO</td></tr>
<tr><td>Liquidity</td><td>Peut-elle payer à court terme ?</td><td>Current, quick, cash ratio, CCC</td></tr>
<tr><td>Solvency</td><td>Peut-elle honorer ses dettes long terme ?</td><td>D/E, interest coverage</td></tr>
<tr><td>Profitability</td><td>Génère-t-elle des profits ?</td><td>Marges, ROA, ROE</td></tr>
<tr><td>Valuation</td><td>Combien le marché la paie ?</td><td>P/E, P/B, P/S</td></tr>
</table>` },
        { title: "DuPont", html: `
<p><span class="f">ROE = Net profit margin × Asset turnover × Financial leverage</span></p>
<p><span class="f">ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Revenue) × (Revenue/Assets) × (Assets/Equity)</span></p>
<p>Dans l'ordre : tax burden, interest burden, EBIT margin, asset turnover, leverage.</p>
<div class="tip"><b>Astuce :</b> les termes se simplifient en chaîne (EBT s'annule avec EBT…). Si tu oublies la formule, écris NI/Equity et intercale les étapes.</div>
<div class="trap">Une hausse de ROE due uniquement au levier n'est pas une amélioration de la performance opérationnelle.</div>` },
        { title: "Bien interpréter", html: `
<ul>
<li>Comparer dans le temps (tendance) et avec les pairs (cross-sectional).</li>
<li>Un ratio n'est ni bon ni mauvais seul : un current ratio très élevé peut signaler du cash inutilisé.</li>
<li>Retraiter les différences de normes (LIFO vs FIFO, leases…) avant de comparer.</li>
<li>Segment analysis : marges et ROA par segment.</li>
</ul>` }
      ],
      methods: [
        { title: "Diagnostiquer une variation de ROE", steps: [
          "Décomposer le ROE en 5 facteurs pour les deux années.",
          "Repérer le facteur qui bouge le plus.",
          "Tax burden ↓ = plus d'impôt ; interest burden ↓ = plus d'intérêts ; leverage ↑ = plus de dette.",
          "Conclure : la hausse vient-elle de l'opérationnel (marge, rotation) ou du financement (levier) ?"
        ] }
      ]
    },
    // ---------------------------------------------------------- LM12
    {
      id: "fsa-model", lm: "LM12", title: "Introduction to Financial Statement Modeling",
      summary: "Prévoir les revenus et les coûts, biais comportementaux, forces de Porter.",
      sections: [
        { title: "Prévoir le revenu", html: `
<ul>
<li><b>Top-down</b> : partir du macro / marché (croissance du PIB, part de marché).</li>
<li><b>Bottom-up</b> : partir de l'entreprise (volumes × prix, magasins × ventes par magasin).</li>
<li><b>Hybride</b> : les deux.</li>
</ul>` },
        { title: "Prévoir les coûts et le bilan", html: `
<ul>
<li>Séparer coûts fixes et variables ; les économies d'échelle font baisser le coût unitaire.</li>
<li>Working capital : via les ratios d'activité (DSO, DOH, DPO).</li>
<li>Capex : maintenance (≈ amortissement) + croissance.</li>
</ul>` },
        { title: "Biais comportementaux de l'analyste", html: `
<ul>
<li><b>Overconfidence</b> : intervalles de prévision trop étroits.</li>
<li><b>Illusion of control</b> : modèles trop complexes.</li>
<li><b>Conservatism</b> : ne pas assez réviser ses prévisions face à une nouvelle information.</li>
<li><b>Representativeness</b> : extrapoler un cas récent.</li>
<li><b>Confirmation bias</b> : chercher ce qui confirme sa thèse.</li>
</ul>` },
        { title: "Les 5 forces de Porter", html: `
<p>Menace des nouveaux entrants, menace des substituts, pouvoir des clients, pouvoir des fournisseurs, rivalité entre concurrents. Elles déterminent la capacité à maintenir les marges.</p>
<p>Inflation : selon le pouvoir de fixation des prix, l'entreprise répercute ou non la hausse des coûts. L'horizon de prévision dépend de la stratégie de l'investisseur et du cycle de l'industrie.</p>` }
      ],
      methods: []
    }
  ],

  // ============================================================ QUESTIONS
  questions: [
    // ---------------- Income taxes : questions de cours
    { id: "fsa-t-o1", m: "fsa-taxes", type: "open", q: "Explique avec tes mots la différence entre income tax expense et income tax payable.", a: "Tax payable = l'impôt dû au fisc pour l'année, calculé sur le taxable income. Tax expense = la charge au compte de résultat, calculée selon les normes comptables : tax payable + ΔDTL − ΔDTA. Elles diffèrent à cause des différences temporaires." },
    { id: "fsa-t-o2", m: "fsa-taxes", type: "open", q: "Un actif a une valeur comptable supérieure à sa tax base. DTA ou DTL ? Pourquoi, intuitivement ?", a: "DTL. Le fisc a déjà accordé plus de déductions que la comptabilité (ex. amortissement accéléré). L'entreprise a payé moins d'impôt jusqu'ici et paiera plus plus tard, quand l'écart se résorbera." },
    { id: "fsa-t-o3", m: "fsa-taxes", type: "open", q: "Pourquoi une amende non déductible ne crée-t-elle aucun impôt différé ?", a: "Parce que c'est une différence permanente : elle ne se résorbera jamais, le fisc ne la déduira à aucun moment. Il n'y a donc pas d'impôt « à récupérer » ou « à payer plus tard ». Son seul effet est de rendre l'effective tax rate supérieur au statutory rate." },
    { id: "fsa-t-o4", m: "fsa-taxes", type: "open", q: "Quel taux utilises-tu pour projeter le résultat net, et lequel pour projeter les flux de trésorerie ?", a: "Effective tax rate (tax expense / pretax income) pour le résultat. Cash tax rate (cash taxes paid / pretax income) pour les flux de trésorerie." },
    { id: "fsa-t-o5", m: "fsa-taxes", type: "open", q: "Le taux d'impôt baisse. Que deviennent une DTL et une DTA, et quel est l'effet sur le résultat ?", a: "Les deux sont réévaluées au nouveau taux, donc diminuent. La baisse de la DTL réduit la tax expense (résultat ↑). La baisse de la DTA augmente la tax expense (résultat ↓). L'effet net dépend de la taille relative des deux." },
    { id: "fsa-t-o6", m: "fsa-taxes", type: "open", q: "Qu'est-ce qu'une valuation allowance, sous quelle norme existe-t-elle, et que signale sa hausse ?", a: "US GAAP. C'est une réduction de la DTA quand il est plus probable qu'improbable (> 50 %) qu'une partie ne sera pas réalisée. Sa hausse augmente la tax expense et signale que la direction doute des bénéfices imposables futurs. IFRS ne comptabilise la DTA que si son utilisation est probable, sans compte séparé." },
    { id: "fsa-t-o7", m: "fsa-taxes", type: "open", q: "Une entreprise en forte croissance renouvelle sans cesse ses machines avec amortissement fiscal accéléré. Comment l'analyste doit-il traiter sa DTL ?", a: "Comme de l'equity : la DTL ne se résorbera pas tant que la croissance des investissements continue (de nouvelles différences remplacent celles qui se résorbent). Ce n'est pas une vraie dette à rembourser." },
    { id: "fsa-t-o8", m: "fsa-taxes", type: "open", q: "Une entreprise encaisse en décembre 120 de loyers pour l'année suivante, taxés à l'encaissement. Taux 25 %. Quel impôt différé ?", a: "Passif unearned revenue : CA = 120. Tax base = 120 − 120 (revenu déjà taxé, non taxable plus tard) = 0. Passif CA > TB → DTA = 120 × 25 % = 30." },
    { id: "fsa-t-o9", m: "fsa-taxes", type: "open", q: "Écris la formule qui relie tax expense, tax payable, DTA et DTL. Comment la retrouver si tu l'oublies ?", a: "Tax expense = tax payable + ΔDTL − ΔDTA. Pour la retrouver : une hausse de DTL veut dire qu'on « doit » de l'impôt pour plus tard, donc la charge est plus grosse que ce qu'on paye maintenant (+). Une hausse de DTA veut dire qu'on a prépayé, donc la charge est plus faible (−)." },
    { id: "fsa-t-o10", m: "fsa-taxes", type: "open", q: "Où sont classés DTA et DTL au bilan, en IFRS et en US GAAP ?", a: "En non-current dans les deux référentiels. On peut compenser DTA et DTL s'ils concernent la même autorité fiscale." },

    // ---------------- Income taxes : QCM
    { id: "fsa-t-1", m: "fsa-taxes", type: "mcq", q: "A company uses straight-line depreciation for financial reporting and an accelerated method for tax purposes. In the early years of the asset's life, this most likely creates a:", o: ["deferred tax asset.", "deferred tax liability.", "permanent difference."], a: 1, e: "Amortissement fiscal plus élevé → taxable income < pretax income → moins d'impôt payé maintenant → DTL. L'écart se résorbe : différence temporaire, pas permanente." },
    { id: "fsa-t-2", m: "fsa-taxes", type: "mcq", q: "Income tax expense reported on the income statement equals taxes payable plus the net increase in:", o: ["deferred tax assets and deferred tax liabilities.", "deferred tax assets, less the net increase in deferred tax liabilities.", "deferred tax liabilities, less the net increase in deferred tax assets."], a: 2, e: "Tax expense = tax payable + ΔDTL − ΔDTA. Une DTL qui monte augmente la charge ; une DTA qui monte la réduit." },
    { id: "fsa-t-3", m: "fsa-taxes", type: "mcq", q: "A company records a fine of USD 50,000 that is not tax deductible. The tax rate is 25%. The company should most likely record:", o: ["a deferred tax asset of USD 12,500.", "a deferred tax liability of USD 12,500.", "no deferred tax asset or liability."], a: 2, e: "Une amende non déductible est une différence permanente. Pas d'impôt différé ; l'ETR sera simplement plus élevé que le taux légal." },
    { id: "fsa-t-4", m: "fsa-taxes", type: "mcq", q: "An asset has a carrying amount of EUR 800 and a tax base of EUR 1,000. The tax rate is 30%. The company will recognize a:", o: ["deferred tax asset of EUR 60.", "deferred tax liability of EUR 60.", "deferred tax asset of EUR 240."], a: 0, e: "Actif avec CA < TB → DTA. Montant = (1 000 − 800) × 30 % = 60. Le 240 applique le taux au CA entier : erreur classique." },
    { id: "fsa-t-5", m: "fsa-taxes", type: "mcq", q: "A warranty liability is recognized for accounting purposes; warranty costs are deductible for tax only when paid. The carrying amount of the liability is GBP 400 and the tax rate is 25%. This creates a:", o: ["deferred tax liability of GBP 100.", "deferred tax asset of GBP 100.", "deferred tax asset of GBP 400."], a: 1, e: "Tax base du passif = CA − montant déductible plus tard = 400 − 400 = 0. Passif CA > TB → DTA = 400 × 25 % = 100." },
    { id: "fsa-t-6", m: "fsa-taxes", type: "mcq", q: "If the statutory tax rate decreases, the carrying value of a company's existing deferred tax liability will most likely:", o: ["increase.", "decrease.", "remain unchanged."], a: 1, e: "Les DTL sont réévaluées au nouveau taux voté. Moins d'impôt futur à payer → DTL ↓, ce qui réduit la tax expense de l'année." },
    { id: "fsa-t-7", m: "fsa-taxes", type: "mcq", q: "Which tax rate is most appropriate for forecasting a company's future cash flows?", o: ["Statutory tax rate.", "Effective tax rate.", "Cash tax rate."], a: 2, e: "Cash tax rate = cash taxes paid / pretax income → pour les flux. L'ETR sert à projeter le résultat net." },
    { id: "fsa-t-8", m: "fsa-taxes", type: "mcq", q: "Under US GAAP, an increase in the valuation allowance for deferred tax assets will most likely:", o: ["increase net income.", "decrease net income.", "have no effect on net income."], a: 1, e: "Valuation allowance ↑ → DTA nette ↓ → tax expense ↑ → net income ↓. C'est aussi un signal de doute sur les bénéfices futurs." },
    { id: "fsa-t-9", m: "fsa-taxes", type: "mcq", q: "A company reports pretax income of 1,000, tax payable of 220, and an increase in its deferred tax liability of 30. There is no change in deferred tax assets. Income tax expense is:", o: ["190.", "220.", "250."], a: 2, e: "Tax expense = 220 + 30 − 0 = 250. L'ETR est donc 25 %." },
    { id: "fsa-t-10", m: "fsa-taxes", type: "mcq", q: "An analyst determines that a company's deferred tax liability will not reverse in the foreseeable future because of steadily growing capital expenditures. The analyst should most likely treat this DTL as:", o: ["a liability.", "equity.", "an asset."], a: 1, e: "Une DTL qui ne se résorbera pas n'est pas une vraie dette : on la reclasse en capitaux propres." },
    { id: "fsa-t-11", m: "fsa-taxes", type: "mcq", q: "A company receives rent in advance, which is taxable when received. At year-end, unearned rent revenue is CHF 10,000 and the tax rate is 20%. The tax base of the unearned revenue liability is:", o: ["CHF 0.", "CHF 2,000.", "CHF 10,000."], a: 0, e: "Tax base d'un revenu reçu d'avance = CA − montant qui ne sera pas taxable plus tard = 10 000 − 10 000 = 0. Ça crée une DTA de 2 000." },
    { id: "fsa-t-12", m: "fsa-taxes", type: "mcq", q: "Pretax income is 500. It includes 40 of tax-exempt interest income. There are no temporary differences, and the statutory rate is 30%. The effective tax rate is closest to:", o: ["27.6%.", "30.0%.", "32.6%."], a: 0, e: "Taxable income = 500 − 40 = 460. Tax = 460 × 30 % = 138. ETR = 138 / 500 = 27,6 %. Le revenu exonéré fait baisser l'ETR sous le taux légal." },
    { id: "fsa-t-13", m: "fsa-taxes", type: "mcq", q: "Under IFRS, deferred tax assets are recognized:", o: ["in full, then reduced by a valuation allowance.", "only to the extent it is probable that taxable profit will be available.", "only when the tax rate is enacted for at least three years."], a: 1, e: "IFRS : reconnaissance seulement si l'utilisation est probable. La valuation allowance est le mécanisme US GAAP." },
    { id: "fsa-t-14", m: "fsa-taxes", type: "mcq", q: "Which of the following is most likely to give rise to a deferred tax asset?", o: ["Tax loss carryforwards.", "Accelerated tax depreciation.", "Tax-exempt municipal bond interest."], a: 0, e: "Une perte reportable réduira l'impôt futur → DTA. L'amortissement accéléré crée une DTL ; les intérêts exonérés sont une différence permanente." },
    { id: "fsa-t-15", m: "fsa-taxes", type: "mcq", q: "Equipment cost 1,000 with a 4-year life. Book depreciation is straight-line; tax depreciation in Year 1 is 400. The tax rate is 30%. The deferred tax liability at the end of Year 1 is:", o: ["45.", "120.", "150."], a: 0, e: "CA = 1 000 − 250 = 750. TB = 1 000 − 400 = 600. DTL = (750 − 600) × 30 % = 45. Le 150 oublie le taux ; le 120 applique le taux à l'amortissement fiscal." },
    { id: "fsa-t-16", m: "fsa-taxes", type: "mcq", q: "A company's taxable income is greater than its pretax accounting income because of a temporary difference. This most likely results in:", o: ["a deferred tax asset.", "a deferred tax liability.", "a lower effective tax rate."], a: 0, e: "Taxable income > pretax income : l'entreprise paie plus d'impôt que sa charge comptable → elle a prépayé → DTA." },
    { id: "fsa-t-17", m: "fsa-taxes", type: "mcq", q: "A company has a DTL of 300 calculated at a 30% tax rate. The rate is reduced to 25%. The effect on the current-period income tax expense is:", o: ["a decrease of 50.", "an increase of 50.", "a decrease of 75."], a: 0, e: "Différence temporaire = 300 / 30 % = 1 000. Nouvelle DTL = 1 000 × 25 % = 250. Baisse de 50 de la DTL → tax expense −50." },
    { id: "fsa-t-18", m: "fsa-taxes", type: "mcq", q: "Under IFRS, the deferred tax related to an upward revaluation of property, plant, and equipment recognized in a revaluation surplus is most likely recognized in:", o: ["profit or loss.", "other comprehensive income (equity).", "the cash flow statement."], a: 1, e: "L'impôt différé suit l'élément qui l'a créé : la revaluation passe en OCI, l'impôt différé associé aussi." },
    { id: "fsa-t-19", m: "fsa-taxes", type: "mcq", q: "Tax credits that directly reduce taxes payable (for example, for solar equipment) are most likely:", o: ["temporary differences creating a DTA.", "temporary differences creating a DTL.", "permanent differences."], a: 2, e: "Les tax credits ne se résorbent pas : différences permanentes, pas d'impôt différé, ETR plus bas." },
    { id: "fsa-t-20", m: "fsa-taxes", type: "mcq", q: "Cash paid for income taxes equals income tax expense:", o: ["plus the increase in DTL, minus the increase in DTA, minus the increase in taxes payable.", "minus the increase in DTL, plus the increase in DTA, minus the increase in taxes payable.", "minus the increase in DTL, minus the increase in DTA, plus the increase in taxes payable."], a: 1, e: "Cash taxes = tax expense − ΔDTL + ΔDTA − Δtaxes payable. Une DTL qui monte, ou un impôt dû qui monte = moins de cash sorti." },

    // ---------------- Intro
    { id: "fsa-i-o1", m: "fsa-intro", type: "open", q: "Cite les 4 types d'opinion d'audit et leur sens.", a: "Unqualified/unmodified (fidèle), qualified (fidèle sauf une exception), adverse (pas fidèle), disclaimer (impossible de se prononcer)." },
    { id: "fsa-i-o2", m: "fsa-intro", type: "open", q: "Quelle est la différence entre un standard-setter et un regulator ? Donne deux exemples de chaque.", a: "Le standard-setter écrit les normes comptables (IASB, FASB). Le regulator a un pouvoir légal et fait appliquer les règles (SEC, IOSCO)." },
    { id: "fsa-i-1", m: "fsa-intro", type: "mcq", q: "An auditor's opinion stating that the financial statements are fairly presented except for a specific item is a(n):", o: ["adverse opinion.", "qualified opinion.", "disclaimer of opinion."], a: 1, e: "Qualified = « sauf pour… ». Adverse = pas fidèle du tout. Disclaimer = impossible de se prononcer." },
    { id: "fsa-i-2", m: "fsa-intro", type: "mcq", q: "Which of the following is least likely to be audited?", o: ["Notes to the financial statements.", "Management's discussion and analysis (MD&A).", "Statement of cash flows."], a: 1, e: "Le MD&A est le commentaire de la direction, non audité. Les notes font partie des états financiers audités." },
    { id: "fsa-i-3", m: "fsa-intro", type: "mcq", q: "Which SEC filing would most likely disclose executive compensation and matters subject to a shareholder vote?", o: ["Form 10-Q.", "Proxy statement (DEF 14A).", "Form 8-K."], a: 1, e: "Le proxy statement couvre rémunérations et votes. 10-Q = trimestriel ; 8-K = événement important." },
    { id: "fsa-i-4", m: "fsa-intro", type: "mcq", q: "The fundamental qualitative characteristics of useful financial information are:", o: ["relevance and faithful representation.", "comparability and verifiability.", "timeliness and understandability."], a: 0, e: "Les deux qualités fondamentales. Les autres sont des qualités qui renforcent (enhancing)." },

    // ---------------- Income statement
    { id: "fsa-is-o1", m: "fsa-is", type: "open", q: "Récite les 5 étapes de la reconnaissance du revenu.", a: "1) identifier le contrat ; 2) identifier les performance obligations ; 3) déterminer le prix de transaction ; 4) allouer le prix aux obligations ; 5) reconnaître le revenu quand chaque obligation est remplie." },
    { id: "fsa-is-o2", m: "fsa-is", type: "open", q: "Changement de méthode comptable vs changement d'estimation : quel traitement pour chacun ?", a: "Méthode (policy) : application rétrospective, on retraite les années comparatives. Estimation (durée de vie, valeur résiduelle) : prospectif, seules les périodes futures changent." },
    { id: "fsa-is-o3", m: "fsa-is", type: "open", q: "Pourquoi une option dont le strike est supérieur au cours moyen n'entre-t-elle pas dans le diluted EPS ?", a: "Elle est antidilutive : avec la treasury stock method, le produit de l'exercice permettrait de racheter plus d'actions que celles émises. Elle ferait monter l'EPS, donc on l'exclut." },
    { id: "fsa-is-1", m: "fsa-is", type: "mcq", q: "A company has net income of 1,000,000, preferred dividends of 100,000, and 450,000 weighted average common shares. Basic EPS is closest to:", o: ["2.00.", "2.22.", "2.44."], a: 0, e: "(1 000 000 − 100 000) / 450 000 = 2,00. Ne pas oublier de retirer les dividendes préférentiels." },
    { id: "fsa-is-2", m: "fsa-is", type: "mcq", q: "A company has 10,000 options outstanding with an exercise price of 20. The average share price during the year was 25. Using the treasury stock method, the number of incremental shares is:", o: ["2,000.", "8,000.", "10,000."], a: 0, e: "Produit = 10 000 × 20 = 200 000 → rachat de 200 000 / 25 = 8 000 actions. Actions nettes = 10 000 − 8 000 = 2 000." },
    { id: "fsa-is-3", m: "fsa-is", type: "mcq", q: "Under US GAAP, the results of discontinued operations are reported:", o: ["as part of continuing operations, before tax.", "separately, net of tax, after income from continuing operations.", "in other comprehensive income."], a: 1, e: "Ligne séparée, nette d'impôt, sous le résultat des activités poursuivies (IFRS et US GAAP)." },
    { id: "fsa-is-4", m: "fsa-is", type: "mcq", q: "A change in the estimated useful life of an asset is accounted for:", o: ["retrospectively.", "prospectively.", "as a prior-period adjustment."], a: 1, e: "Un changement d'estimation est prospectif. Retrospectif = changement de méthode. Prior-period adjustment = correction d'erreur." },
    { id: "fsa-is-5", m: "fsa-is", type: "mcq", q: "An online travel agency arranges hotel bookings without taking control of the rooms. It should most likely report revenue:", o: ["gross, as the full booking amount.", "net, as its commission.", "only when the guest checks out."], a: 1, e: "Agent (pas de contrôle du service) → revenu net (commission)." },
    { id: "fsa-is-6", m: "fsa-is", type: "mcq", q: "An asset costs 10,000, has a 5-year life and a salvage value of 1,000. Using double-declining balance, Year 2 depreciation is:", o: ["2,160.", "2,400.", "3,600."], a: 1, e: "Taux = 2/5 = 40 %. An 1 : 40 % × 10 000 = 4 000 → VNC 6 000. An 2 : 40 % × 6 000 = 2 400. On ignore la valeur résiduelle dans le calcul." },
    { id: "fsa-is-7", m: "fsa-is", type: "mcq", q: "Which item is least likely to be reported in other comprehensive income?", o: ["Foreign currency translation adjustments.", "Unrealized gains on securities measured at FVPL.", "The effective portion of cash flow hedges."], a: 1, e: "FVPL = gains latents en résultat (P&L), pas en OCI." },

    // ---------------- Balance sheet
    { id: "fsa-bs-o1", m: "fsa-bs", type: "open", q: "Comment calcule-t-on le goodwill, et comment est-il traité ensuite ?", a: "Goodwill = prix payé − juste valeur des actifs nets identifiables acquis. Il n'est pas amorti ; il est testé pour dépréciation au moins une fois par an ; une dépréciation de goodwill n'est jamais reprise." },
    { id: "fsa-bs-o2", m: "fsa-bs", type: "open", q: "Où vont les gains latents d'un titre classé FVOCI ? Et FVPL ?", a: "FVOCI → OCI (capitaux propres). FVPL → compte de résultat. Les dividendes et intérêts vont en résultat dans les deux cas." },
    { id: "fsa-bs-1", m: "fsa-bs", type: "mcq", q: "Company A acquires Company B for 500. The fair value of B's identifiable assets is 700 and of its liabilities is 300. Goodwill is:", o: ["100.", "200.", "400."], a: 0, e: "Actifs nets identifiables = 700 − 300 = 400. Goodwill = 500 − 400 = 100." },
    { id: "fsa-bs-2", m: "fsa-bs", type: "mcq", q: "Under IFRS, internally generated research costs are:", o: ["capitalized.", "expensed.", "capitalized only if technical feasibility is established."], a: 1, e: "Research : toujours en charge. Development : capitalisé si critères (faisabilité technique, intention, etc.)." },
    { id: "fsa-bs-3", m: "fsa-bs", type: "mcq", q: "Treasury shares are reported:", o: ["as an asset.", "as a reduction of shareholders' equity.", "as a liability."], a: 1, e: "Actions rachetées : en déduction des capitaux propres, sans droit de vote ni dividende." },
    { id: "fsa-bs-4", m: "fsa-bs", type: "mcq", q: "A debt security held to collect contractual cash flows of principal and interest is most likely measured at:", o: ["amortized cost.", "fair value through OCI.", "fair value through profit or loss."], a: 0, e: "Business model « hold to collect » + flux SPPI → amortized cost (IFRS 9)." },

    // ---------------- Cash flows
    { id: "fsa-cf-o1", m: "fsa-cf", type: "open", q: "Sous US GAAP, dans quelle section vont : interest paid, dividends received, dividends paid ?", a: "Interest paid → CFO. Dividends received → CFO. Dividends paid → CFF." },
    { id: "fsa-cf-o2", m: "fsa-cf", type: "open", q: "Dans la méthode indirecte, pourquoi soustrait-on une hausse des receivables ?", a: "Le revenu a été reconnu dans le net income mais le cash n'a pas encore été encaissé. Il faut retirer cette partie non encaissée pour obtenir le cash réel." },
    { id: "fsa-cf-1", m: "fsa-cf", type: "mcq", q: "Net income is 200, depreciation 50, gain on sale of equipment 10, increase in accounts receivable 20, increase in accounts payable 15. CFO is:", o: ["235.", "245.", "255."], a: 0, e: "200 + 50 − 10 − 20 + 15 = 235." },
    { id: "fsa-cf-2", m: "fsa-cf", type: "mcq", q: "Under IFRS, interest paid may be classified as:", o: ["CFO only.", "CFO or CFF.", "CFI or CFF."], a: 1, e: "IFRS : interest paid en CFO ou CFF. US GAAP : CFO uniquement." },
    { id: "fsa-cf-3", m: "fsa-cf", type: "mcq", q: "Revenue is 1,000, accounts receivable increased by 80, and unearned revenue increased by 20. Cash collected from customers is:", o: ["900.", "940.", "1,060."], a: 1, e: "1 000 − 80 + 20 = 940." },
    { id: "fsa-cf-4", m: "fsa-cf", type: "mcq", q: "Equipment with an original cost of 500 and accumulated depreciation of 300 is sold at a gain of 40. Cash received is:", o: ["160.", "200.", "240."], a: 2, e: "Valeur nette = 500 − 300 = 200. Cash = 200 + 40 = 240. Ce montant va en CFI ; le gain de 40 est retiré du CFO." },
    { id: "fsa-cf-5", m: "fsa-cf", type: "mcq", q: "Which of the following is least likely to appear on the statement of cash flows?", o: ["Conversion of bonds into common stock.", "Repurchase of common stock.", "Purchase of equipment for cash."], a: 0, e: "Conversion de dette en actions = transaction non monétaire, présentée en notes uniquement." },
    { id: "fsa-cf-6", m: "fsa-cf", type: "mcq", q: "CFO is 500, capital expenditures are 150, net borrowing is 50, and after-tax interest is 30. FCFE is closest to:", o: ["350.", "400.", "430."], a: 1, e: "FCFE = CFO − FCInv + net borrowing = 500 − 150 + 50 = 400. Les intérêts ne s'ajoutent pas pour le FCFE." },

    // ---------------- Inventories
    { id: "fsa-inv-o1", m: "fsa-inv", type: "open", q: "En période d'inflation, compare FIFO et LIFO sur : COGS, résultat, stock au bilan, impôt, CFO.", a: "FIFO : COGS plus bas, résultat plus haut, stock plus haut, impôt plus haut, CFO plus bas. LIFO : l'inverse." },
    { id: "fsa-inv-o2", m: "fsa-inv", type: "open", q: "Qu'est-ce qu'une LIFO liquidation et pourquoi l'analyste s'en méfie-t-il ?", a: "Quand une entreprise en LIFO vend plus qu'elle ne produit/achète, d'anciennes couches de stock à bas coût passent en COGS. La marge est gonflée de façon non soutenable. Signal : LIFO reserve en baisse." },
    { id: "fsa-inv-1", m: "fsa-inv", type: "mcq", q: "A company using LIFO reports inventory of 400 and a LIFO reserve of 120. FIFO inventory is:", o: ["280.", "400.", "520."], a: 2, e: "Stock FIFO = LIFO + reserve = 400 + 120 = 520." },
    { id: "fsa-inv-2", m: "fsa-inv", type: "mcq", q: "LIFO COGS is 1,000. The LIFO reserve increased from 80 to 110. FIFO COGS is:", o: ["970.", "1,030.", "1,110."], a: 0, e: "FIFO COGS = LIFO COGS − ΔLIFO reserve = 1 000 − 30 = 970." },
    { id: "fsa-inv-3", m: "fsa-inv", type: "mcq", q: "Under IFRS, a reversal of a previous inventory write-down is:", o: ["prohibited.", "permitted, up to the original write-down amount.", "permitted without limit."], a: 1, e: "IFRS : reprise autorisée dans la limite de la dépréciation initiale. US GAAP : interdite." },
    { id: "fsa-inv-4", m: "fsa-inv", type: "mcq", q: "Which cost is most likely included in the cost of inventory?", o: ["Abnormal waste of materials.", "Freight-in to bring goods to the warehouse.", "Selling costs."], a: 1, e: "Les frais de transport pour amener le bien sont inclus. Gaspillage anormal et frais de vente sont des charges." },
    { id: "fsa-inv-5", m: "fsa-inv", type: "mcq", q: "During a period of rising prices, compared with FIFO, LIFO most likely results in a higher:", o: ["gross margin.", "inventory turnover.", "current ratio."], a: 1, e: "LIFO : COGS plus haut et stock plus bas → turnover (COGS/stock) plus élevé. Marge et current ratio plus bas." },

    // ---------------- Long-term assets
    { id: "fsa-lta-o1", m: "fsa-lta", type: "open", q: "Quels effets a le fait de capitaliser une dépense plutôt que de la passer en charge, sur le CFO et sur le résultat de la première année ?", a: "CFO plus élevé (la sortie va en CFI). Résultat de l'année 1 plus élevé (seul l'amortissement passe en charge). Ensuite, résultat plus faible par l'amortissement." },
    { id: "fsa-lta-o2", m: "fsa-lta", type: "open", q: "Décris le test de dépréciation US GAAP pour un actif détenu pour utilisation.", a: "Étape 1 (recoverability) : CA > somme des flux futurs non actualisés ? Si oui, étape 2 : perte = CA − fair value. Aucune reprise ultérieure." },
    { id: "fsa-lta-1", m: "fsa-lta", type: "mcq", q: "Under IFRS, an asset has a carrying amount of 900, fair value less costs to sell of 700, and value in use of 750. The impairment loss is:", o: ["0.", "150.", "200."], a: 1, e: "Recoverable amount = max(700, 750) = 750. Perte = 900 − 750 = 150." },
    { id: "fsa-lta-2", m: "fsa-lta", type: "mcq", q: "Compared with expensing, capitalizing interest during construction most likely results in a higher:", o: ["interest coverage ratio in the period of capitalization.", "cash flow from investing.", "interest expense in the period of capitalization."], a: 0, e: "Moins de charge d'intérêts au compte de résultat → coverage plus élevé. Les intérêts capitalisés vont en CFI (CFI plus faible)." },
    { id: "fsa-lta-3", m: "fsa-lta", type: "mcq", q: "Accumulated depreciation is 400, annual depreciation expense is 100, and gross PP&E is 1,000. The estimated average age of the assets is:", o: ["4 years.", "6 years.", "10 years."], a: 0, e: "Âge moyen = amortissement cumulé / dotation = 400 / 100 = 4 ans. (Durée restante = 600/100 = 6 ; durée totale = 10.)" },
    { id: "fsa-lta-4", m: "fsa-lta", type: "mcq", q: "Under US GAAP, reversal of an impairment loss on an asset held for use is:", o: ["permitted.", "permitted only for intangibles.", "prohibited."], a: 2, e: "Interdite en US GAAP pour les actifs détenus pour utilisation. Autorisée en IFRS (sauf goodwill)." },

    // ---------------- LT liabilities & equity
    { id: "fsa-ltl-o1", m: "fsa-ltl", type: "open", q: "Pour un preneur en US GAAP, compare l'effet sur le compte de résultat d'un finance lease et d'un operating lease.", a: "Finance lease : amortissement du ROU asset + intérêt sur la liability → charge totale plus forte au début. Operating lease : une seule charge de loyer, linéaire. Les deux sont au bilan." },
    { id: "fsa-ltl-o2", m: "fsa-ltl", type: "open", q: "Comment est mesuré le funded status d'un régime à prestations définies ?", a: "Funded status = juste valeur des plan assets − defined benefit obligation (DBO). Positif = net pension asset ; négatif = net pension liability." },
    { id: "fsa-ltl-1", m: "fsa-ltl", type: "mcq", q: "Under IFRS 16, a lessee most likely reports:", o: ["a single straight-line lease expense.", "depreciation of the right-of-use asset and interest on the lease liability.", "the lease off-balance sheet."], a: 1, e: "IFRS 16 = modèle unique : amortissement + intérêts. La charge linéaire unique = operating lease US GAAP." },
    { id: "fsa-ltl-2", m: "fsa-ltl", type: "mcq", q: "For a lessee with an operating lease under US GAAP, lease payments are classified in the cash flow statement as:", o: ["operating activities.", "financing activities.", "split between operating and financing."], a: 0, e: "Operating lease US GAAP : tout le paiement en CFO. Finance lease : intérêt CFO, principal CFF." },
    { id: "fsa-ltl-3", m: "fsa-ltl", type: "mcq", q: "A bond issued at a discount will most likely report interest expense that is:", o: ["less than the coupon payment.", "equal to the coupon payment.", "greater than the coupon payment."], a: 2, e: "Taux de marché > coupon → charge = VNC × taux de marché > coupon. La VNC monte vers le pair." },
    { id: "fsa-ltl-4", m: "fsa-ltl", type: "mcq", q: "Compensation expense for employee stock options is measured at fair value:", o: ["on the grant date and recognized over the vesting period.", "on the exercise date.", "at each reporting date."], a: 0, e: "Fair value à la grant date, étalée sur la période d'acquisition." },

    // ---------------- Reporting quality
    { id: "fsa-frq-o1", m: "fsa-frq", type: "open", q: "Quels sont les trois éléments du fraud triangle ?", a: "Motivation (ou pression), opportunité, rationalisation." },
    { id: "fsa-frq-o2", m: "fsa-frq", type: "open", q: "Cite trois signaux d'alerte sur la qualité des résultats.", a: "Par exemple : CFO/NI durablement < 1 ; receivables qui croissent plus vite que les ventes ; stock qui croît plus vite que les ventes ; changements fréquents d'estimations ; profits concentrés sur le dernier trimestre." },
    { id: "fsa-frq-1", m: "fsa-frq", type: "mcq", q: "A company ships excess product to distributors near year-end to boost reported revenue. This practice is best described as:", o: ["channel stuffing.", "big bath accounting.", "a cookie jar reserve."], a: 0, e: "Channel stuffing = gonfler les ventes en poussant du stock chez les distributeurs." },
    { id: "fsa-frq-2", m: "fsa-frq", type: "mcq", q: "Which of the following is most likely a warning sign of low earnings quality?", o: ["CFO consistently exceeds net income.", "Days sales outstanding is rising while revenue grows strongly.", "Inventory grows in line with sales."], a: 1, e: "DSO en hausse : les ventes ne se transforment pas en cash, possible reconnaissance agressive du revenu." },
    { id: "fsa-frq-3", m: "fsa-frq", type: "mcq", q: "Lengthening the estimated useful lives of depreciable assets will most likely:", o: ["decrease reported net income.", "increase reported net income.", "increase operating cash flow."], a: 1, e: "Dotation plus faible → résultat plus élevé. Aucun effet sur le cash (hors impôt)." },

    // ---------------- Analysis techniques
    { id: "fsa-fat-o1", m: "fsa-fat", type: "open", q: "Écris la DuPont à 5 facteurs et nomme chaque terme.", a: "ROE = (NI/EBT) tax burden × (EBT/EBIT) interest burden × (EBIT/Revenue) EBIT margin × (Revenue/Assets) asset turnover × (Assets/Equity) financial leverage." },
    { id: "fsa-fat-1", m: "fsa-fat", type: "mcq", q: "A company has a net profit margin of 5%, asset turnover of 2.0, and financial leverage of 1.5. ROE is:", o: ["7.5%.", "10.0%.", "15.0%."], a: 2, e: "ROE = 5 % × 2,0 × 1,5 = 15 %." },
    { id: "fsa-fat-2", m: "fsa-fat", type: "mcq", q: "A decrease in a company's interest burden ratio (EBT/EBIT) most likely indicates:", o: ["higher interest expense relative to EBIT.", "a higher tax rate.", "improved operating margins."], a: 0, e: "EBT/EBIT baisse quand les intérêts prennent une part plus grande de l'EBIT." },
    { id: "fsa-fat-3", m: "fsa-fat", type: "mcq", q: "Which ratio is an activity ratio?", o: ["Quick ratio.", "Receivables turnover.", "Interest coverage."], a: 1, e: "Receivables turnover = activité. Quick = liquidité. Interest coverage = solvabilité." },
    { id: "fsa-fat-4", m: "fsa-fat", type: "mcq", q: "DOH is 50 days, DSO is 40 days, and DPO is 30 days. The cash conversion cycle is:", o: ["40 days.", "60 days.", "120 days."], a: 1, e: "CCC = DOH + DSO − DPO = 50 + 40 − 30 = 60 jours." },

    // ---------------- Modeling
    { id: "fsa-mod-o1", m: "fsa-model", type: "open", q: "Quelle est la différence entre une approche top-down et bottom-up pour prévoir le revenu ?", a: "Top-down : on part du macro / du marché total et de la part de marché. Bottom-up : on part des données propres à l'entreprise (volumes, prix, magasins, capacité)." },
    { id: "fsa-mod-1", m: "fsa-model", type: "mcq", q: "An analyst fails to sufficiently update a forecast after the company announces a major new contract. This is most likely an example of:", o: ["conservatism bias.", "overconfidence bias.", "illusion of control."], a: 0, e: "Conservatism = ne pas assez réviser face à une nouvelle information." },
    { id: "fsa-mod-2", m: "fsa-model", type: "mcq", q: "Forecasting revenue as the number of stores multiplied by average sales per store is an example of a:", o: ["top-down approach.", "bottom-up approach.", "hybrid approach."], a: 1, e: "On part des éléments propres à l'entreprise : bottom-up." }
  ]
};
