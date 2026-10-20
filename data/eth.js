// ============================================================
// eth.js — Ethical & Professional Standards
// Aligné sur le Code et les Standards révisés en 2023
// (12e édition du Standards of Practice Handbook).
// ============================================================
CFA.content.eth = {
  modules: [
    {
      id: "eth-code", lm: "Clé", title: "Code of Ethics vs Standards : ne plus jamais confondre", priority: true,
      summary: "La confusion la plus fréquente en Ethics. Le Code = 6 principes généraux. Les Standards = 7 familles de règles précises.",
      sections: [
        { title: "La différence en une phrase", html: `
<p>Le <b>Code of Ethics</b> dit <b>qui tu dois être</b> : 6 principes larges, aspirationnels.</p>
<p>Les <b>Standards of Professional Conduct</b> disent <b>ce que tu dois faire ou ne pas faire</b> : 7 familles (I à VII), découpées en règles précises (I(A), I(B)…).</p>
<div class="tip">Si la phrase porte un <b>numéro romain et une lettre</b>, ou décrit une situation concrète (un cadeau, une info privilégiée, un rapport de performance), c'est un <b>Standard</b>. Si elle est générale et parle de « la profession », « la société », « les marchés mondiaux », c'est le <b>Code</b>.</div>` },
        { title: "Les 6 composantes du Code (à savoir par cœur)", html: `
<p>Members and Candidates must :</p>
<ol>
<li><b>Act</b> with integrity, competence, diligence, and respect, and in an ethical manner with the public, clients, prospective clients, employers, employees, colleagues and other market participants.</li>
<li><b>Place</b> the integrity of the investment profession and the interests of clients above their own personal interests.</li>
<li><b>Use</b> reasonable care and exercise independent professional judgment.</li>
<li><b>Practice</b> and encourage others to practice in a professional and ethical manner that will reflect credit on themselves and the profession.</li>
<li><b>Promote</b> the integrity and viability of the global capital markets for the ultimate benefit of society.</li>
<li><b>Maintain</b> and improve their professional competence and strive to maintain and improve the competence of other investment professionals.</li>
</ol>
<div class="tip"><b>Mnémotechnique :</b> les 6 verbes de tête : <b>A</b>ct, <b>P</b>lace, <b>U</b>se, <b>P</b>ractice, <b>P</b>romote, <b>M</b>aintain → « <b>A PUPP M</b>e » (« a puppy me »). Un énoncé qui commence par un de ces verbes et reste général = Code.</div>
<div class="trap">Le Code met <b>la profession et les clients</b> au-dessus de tes intérêts personnels. Il ne dit pas « l'employeur avant les clients ». L'ordre de priorité des transactions (client → employeur → toi) vient du Standard VI(B).</div>` },
        { title: "Les 7 Standards et leurs 22 sous-sections", html: `
<table class="t">
<tr><th>Standard</th><th>Sous-sections</th></tr>
<tr><td><b>I. Professionalism</b></td><td>A Knowledge of the Law · B Independence and Objectivity · C Misrepresentation · D Misconduct · E Competence</td></tr>
<tr><td><b>II. Integrity of Capital Markets</b></td><td>A Material Nonpublic Information · B Market Manipulation</td></tr>
<tr><td><b>III. Duties to Clients</b></td><td>A Loyalty, Prudence, and Care · B Fair Dealing · C Suitability · D Performance Presentation · E Preservation of Confidentiality</td></tr>
<tr><td><b>IV. Duties to Employers</b></td><td>A Loyalty · B Additional Compensation Arrangements · C Responsibilities of Supervisors</td></tr>
<tr><td><b>V. Investment Analysis, Recommendations, and Actions</b></td><td>A Diligence and Reasonable Basis · B Communication with Clients and Prospective Clients · C Record Retention</td></tr>
<tr><td><b>VI. Conflicts of Interest</b></td><td>A Avoid or Disclose Conflicts · B Priority of Transactions · C Referral Fees</td></tr>
<tr><td><b>VII. Responsibilities as a CFA Institute Member or CFA Candidate</b></td><td>A Conduct as Participants in CFA Institute Programs · B Reference to CFA Institute, the CFA Designation, and the CFA Program</td></tr>
</table>
<div class="tip"><b>Mnémotechnique des 7 familles :</b> « <b>P</b>our <b>I</b>nvestir <b>C</b>almement, <b>É</b>vite <b>I</b>nfos <b>C</b>onfidentielles <b>R</b>isquées » → Professionalism, Integrity of markets, Clients, Employers, Investment analysis, Conflicts, Responsibilities CFA.</div>` },
        { title: "Les révisions de 2023 (souvent testées)", html: `
<ul>
<li><b>Nouveau I(E) Competence</b> : agir avec et maintenir la compétence nécessaire à tes responsabilités. Il rend explicite une idée déjà présente dans le Code.</li>
<li><b>V(B) révisé</b> : en plus du processus et des risques, il faut désormais <b>divulguer la nature des services fournis et leurs coûts</b> pour le client.</li>
<li><b>VI(A) renommé « Avoid or Disclose Conflicts »</b> : avant, il fallait seulement divulguer ; maintenant, il faut <b>éviter</b> le conflit ou le <b>divulguer</b>.</li>
</ul>
<div class="trap">Un QCM peut citer l'ancien nom « Disclosure of Conflicts ». Le nom actuel est « Avoid or Disclose Conflicts ».</div>` },
        { title: "Mini-cas : Code ou Standard ?", html: `
<table class="t">
<tr><th>Énoncé</th><th>Source</th></tr>
<tr><td>Promouvoir l'intégrité et la viabilité des marchés mondiaux</td><td><b>Code</b> (composante 5)</td></tr>
<tr><td>Ne pas agir sur une information matérielle non publique</td><td><b>Standard II(A)</b></td></tr>
<tr><td>Maintenir et améliorer sa compétence et celle des autres</td><td><b>Code</b> (composante 6). Le Standard I(E) parle seulement de <i>sa</i> compétence.</td></tr>
<tr><td>Distinguer faits et opinions dans un rapport</td><td><b>Standard V(B)</b></td></tr>
<tr><td>Placer les intérêts des clients au-dessus des siens</td><td><b>Code</b> (composante 2) et, de façon opérationnelle, III(A)</td></tr>
<tr><td>Obtenir le consentement écrit de l'employeur pour une rémunération externe</td><td><b>Standard IV(B)</b></td></tr>
</table>
<div class="tip">Le piège classique : une idée apparaît dans <b>les deux</b> (loyauté, compétence, jugement indépendant). Regarde la formulation : générale et morale → Code ; règle précise avec une action concrète → Standard.</div>` }
      ],
      methods: [
        { title: "Classer un énoncé en 10 secondes", steps: [
          "L'énoncé commence-t-il par Act / Place / Use / Practice / Promote / Maintain et reste-t-il général ? → Code.",
          "Décrit-il une situation concrète ou une obligation précise (consentement écrit, cadeau, rapport, dossier) ? → Standard.",
          "Identifier la famille : à qui est due l'obligation ? (soi / marchés / clients / employeur / analyse / conflits / CFA Institute).",
          "Choisir la sous-section en vérifiant le mot-clé (ex. « written consent » → IV(B), « 7 years » → V(C))."
        ] }
      ]
    },
    {
      id: "eth-trust", lm: "LM1", title: "Ethics and Trust in the Investment Profession",
      summary: "Pourquoi l'éthique compte, éthique vs légal, et le cadre de décision éthique.",
      sections: [
        { title: "Éthique, profession et confiance", html: `
<p>Une <b>profession</b> repose sur la confiance : expertise spécialisée, code de conduite, engagement à servir le client et la société, formation continue.</p>
<p>La finance dépend de la confiance parce que le client ne peut pas vérifier facilement la qualité du service (asymétrie d'information).</p>
<p>Obstacles à un comportement éthique : <b>overconfidence</b> (se croire plus éthique que les autres), <b>situational influences</b> (pression, argent, loyauté envers l'entreprise), focus excessif sur le court terme.</p>` },
        { title: "Éthique vs légal", html: `
<p>Légal ≠ éthique. Une action peut être <b>légale mais non éthique</b> (exploiter une faille réglementaire au détriment du client), ou <b>éthique mais illégale</b> (désobéir à une loi injuste, rare).</p>
<p>Les lois évoluent lentement et ne couvrent pas tout ; l'éthique va plus loin.</p>
<div class="tip">À l'examen, « it is legal » ne veut jamais dire « it is ethical ». Les Standards demandent souvent plus que la loi.</div>` },
        { title: "Le cadre de décision éthique", html: `
<ol>
<li><b>Identify</b> : faits, parties prenantes, devoirs envers chacun, conflits.</li>
<li><b>Consider</b> : influences situationnelles, biais personnels, alternatives, conseils extérieurs (compliance, collègue de confiance).</li>
<li><b>Decide and act</b>.</li>
<li><b>Reflect</b> : le résultat était-il celui attendu ? Qu'apprendre ?</li>
</ol>
<div class="tip">Mnémotechnique : <b>I-C-D-R</b> → « <b>I</b>l <b>C</b>onvient de <b>D</b>écider puis <b>R</b>éfléchir ».</div>
<p>En cas de dilemme, en parler d'abord en interne à un supérieur ou au compliance est souvent un bon point de départ.</p>` }
      ],
      methods: []
    },
    {
      id: "eth-pcp", lm: "LM2", title: "Professional Conduct Program et application du Code",
      summary: "Qui doit respecter le Code, comment les violations sont instruites et sanctionnées.",
      sections: [
        { title: "Qui est concerné", html: `
<p>Tous les <b>membres</b> de CFA Institute (dont les charterholders) et tous les <b>candidats</b> au programme CFA. On les encourage à informer leur employeur de cette obligation.</p>` },
        { title: "Le Professional Conduct Program (PCP)", html: `
<p>Supervisé par le <b>Disciplinary Review Committee (DRC)</b> du Board of Governors. Le personnel du PCP mène les enquêtes.</p>
<p>Une enquête peut démarrer après :</p>
<ul>
<li>une auto-déclaration sur le <b>Professional Conduct Statement</b> annuel ;</li>
<li>une plainte écrite ;</li>
<li>des informations publiques (presse, sanctions réglementaires) ;</li>
<li>un rapport d'un surveillant d'examen ;</li>
<li>l'analyse des résultats et du comportement aux examens.</li>
</ul>
<p>Issues : pas de sanction, lettre de mise en garde (cautionary letter), ou sanction. Le membre peut accepter ou refuser ; s'il refuse, l'affaire va devant un panel du DRC.</p>
<p>Sanctions : public censure, suspension, révocation de l'adhésion et du droit d'utiliser la désignation ; pour un candidat, suspension ou interdiction de participer au programme.</p>` }
      ],
      methods: []
    },
    {
      id: "eth-s1", lm: "Std I", title: "Standard I : Professionalism",
      summary: "Loi applicable, indépendance, misrepresentation, misconduct, compétence.",
      sections: [
        { title: "I(A) Knowledge of the Law", html: `
<p>Connaître et respecter toutes les lois, règles et règlements applicables, <b>y compris le Code et les Standards</b>. En cas de conflit, appliquer <b>le plus strict</b>.</p>
<p>Ne pas participer sciemment à une violation, et <b>s'en dissocier</b> (refuser de participer, en parler au supérieur ou au compliance, si besoin quitter le projet ou l'entreprise).</p>
<ul>
<li>Pas d'obligation de dénoncer aux autorités (sauf si la loi l'exige), mais c'est encouragé dans certains cas.</li>
<li>Le simple fait de quitter l'entreprise n'est pas toujours nécessaire, mais la dissociation doit être réelle.</li>
</ul>
<div class="tip"><b>Règle d'or :</b> compare toujours la loi locale, la loi du pays du client et le Code. Applique le plus exigeant des trois.</div>
<div class="trap">Si le Code est plus strict que la loi, tu suis le Code. Si la loi est plus stricte que le Code, tu suis la loi. « C'est légal ici » ne suffit jamais.</div>` },
        { title: "I(B) Independence and Objectivity", html: `
<p>Ne pas offrir, solliciter ou accepter un cadeau, avantage ou rémunération qui pourrait raisonnablement compromettre son indépendance ou celle d'autrui.</p>
<ul>
<li>Cadeaux <b>modestes</b> (déjeuner, petit cadeau de fin d'année) : acceptables.</li>
<li>Cadeau d'un <b>client</b> pour une bonne performance passée : acceptable s'il est <b>divulgué à l'employeur</b> (il récompense le passé, influence moins).</li>
<li>Cadeau d'un <b>émetteur ou courtier</b> : beaucoup plus suspect (il cherche à influencer le futur).</li>
<li>Voyages pour visiter une entreprise : <b>payer soi-même</b> son transport et hôtel quand c'est possible ; utiliser les vols commerciaux.</li>
<li>Recherche payée par l'émetteur (issuer-paid research) : honoraires fixes, non liés aux conclusions, et divulgation.</li>
<li>Pression interne de l'investment banking pour changer une note : ne pas céder (firewall).</li>
</ul>
<div class="trap">Accepter un cadeau d'un client n'est pas une violation tant qu'il est divulgué à l'employeur. Ne pas le divulguer, si.</div>` },
        { title: "I(C) Misrepresentation", html: `
<p>Ne pas faire sciemment de fausse déclaration ou d'omission sur l'analyse, les recommandations, les qualifications, les services.</p>
<ul>
<li><b>Plagiat</b> : utiliser le travail de quelqu'un sans le citer est une misrepresentation.</li>
<li>Exception : les données factuelles de sources reconnues (S&amp;P, Bloomberg, statistiques publiques) peuvent être utilisées sans citation.</li>
<li><b>Garantir un rendement</b> sur un investissement risqué est une misrepresentation. On peut dire « garanti » seulement s'il existe une vraie garantie (ex. dépôt garanti, obligation d'État pour le paiement du coupon).</li>
<li>Utiliser la performance d'une autre entreprise comme si c'était la sienne est interdit.</li>
</ul>` },
        { title: "I(D) Misconduct", html: `
<p>Pas de conduite professionnelle impliquant malhonnêteté, fraude ou tromperie, ni d'acte qui nuit à sa réputation, son intégrité ou sa compétence <b>professionnelle</b>.</p>
<ul>
<li>Le comportement personnel est visé seulement s'il touche l'intégrité ou la compétence professionnelle (ex. alcool au déjeuner qui affecte le travail l'après-midi).</li>
<li>Une faillite personnelle sans fraude n'est pas en soi une violation.</li>
<li>Manifester légalement pour une cause personnelle n'est pas une violation.</li>
</ul>` },
        { title: "I(E) Competence (nouveau 2023)", html: `
<p>Agir avec et maintenir la compétence nécessaire à ses responsabilités professionnelles. Si le rôle évolue (nouvelle classe d'actifs, nouveaux outils), il faut acquérir les compétences correspondantes.</p>
<div class="ex"><b>Exemple :</b> un gérant actions à qui on confie un fonds de dérivés de crédit sans formation viole I(E) s'il ne se forme pas ou n'obtient pas l'expertise nécessaire.</div>` }
      ],
      methods: []
    },
    {
      id: "eth-s2", lm: "Std II", title: "Standard II : Integrity of Capital Markets",
      summary: "Information privilégiée (mosaic theory) et manipulation de marché.",
      sections: [
        { title: "II(A) Material Nonpublic Information", html: `
<p>Si tu possèdes une information <b>matérielle</b> et <b>non publique</b> qui pourrait affecter la valeur d'un investissement, tu ne dois <b>ni agir, ni faire agir les autres</b>.</p>
<ul>
<li><b>Material</b> : un investisseur raisonnable voudrait la connaître ; elle pourrait faire bouger le prix. Plus la source est fiable et l'info précise, plus elle est matérielle.</li>
<li><b>Nonpublic</b> : pas encore diffusée au marché. Une info donnée lors d'un appel réservé à quelques analystes reste non publique.</li>
</ul>
<p>Si tu reçois une telle info : inciter l'entreprise à la rendre publique, ne pas trader, et en parler au compliance.</p>
<div class="tip"><b>Mosaic theory :</b> combiner des infos <b>publiques</b> et des infos <b>non matérielles</b> non publiques pour arriver à une conclusion importante est <b>autorisé</b>, même si la conclusion ressemble à une info privilégiée.</div>
<p>Procédures recommandées : <b>firewalls</b> entre banque d'affaires et recherche, restricted lists, surveillance des transactions du personnel.</p>
<div class="trap">Un mot entendu par hasard dans un ascenseur de la part d'un dirigeant reste une MNPI. Le canal d'obtention ne change rien.</div>` },
        { title: "II(B) Market Manipulation", html: `
<p>Ne pas déformer les prix ou gonfler artificiellement les volumes <b>dans l'intention de tromper</b> les participants.</p>
<ul>
<li><b>Information-based</b> : diffuser de fausses rumeurs, pump-and-dump.</li>
<li><b>Transaction-based</b> : wash trading, prendre une position dominante pour manipuler un prix (squeeze).</li>
</ul>
<div class="tip">Le critère clé est l'<b>intention de tromper</b>. Une stratégie de trading légitime (exploiter une inefficience, acheter beaucoup pour une vraie raison) n'est pas une manipulation.</div>` }
      ],
      methods: []
    },
    {
      id: "eth-s3", lm: "Std III", title: "Standard III : Duties to Clients",
      summary: "Loyauté, équité, adéquation, performance, confidentialité.",
      sections: [
        { title: "III(A) Loyalty, Prudence, and Care", html: `
<p>Devoir de loyauté envers les clients ; agir avec prudence ; placer les intérêts des clients <b>avant ceux de l'employeur et les siens</b>.</p>
<ul>
<li>Identifier le vrai client : pour un fonds de pension, ce sont les <b>bénéficiaires</b> ; pour un fonds, c'est le respect du <b>mandat</b>.</li>
<li><b>Soft commissions / soft dollars</b> : les commissions appartiennent au client. Elles ne peuvent payer que de la recherche qui profite au client.</li>
<li><b>Best execution</b> : chercher la meilleure exécution pour le client. Diriger les ordres vers un broker à la demande du client (directed brokerage) est possible, mais il faut l'informer qu'il peut ne pas avoir la meilleure exécution.</li>
<li><b>Proxy voting</b> : voter dans l'intérêt du client ; une analyse coût-bénéfice peut justifier de ne pas voter sur des sujets mineurs.</li>
</ul>` },
        { title: "III(B) Fair Dealing", html: `
<p>Traiter tous les clients <b>équitablement</b> (fair), pas forcément <b>également</b> (equally).</p>
<ul>
<li>Différents niveaux de service sont permis s'ils sont <b>divulgués</b> et accessibles à tous les clients qui les paient.</li>
<li>Diffuser une nouvelle recommandation ou un changement de note à tous les clients concernés <b>en même temps</b>.</li>
<li>Allouer les IPO sursouscrites <b>au prorata</b> entre clients éligibles ; le gérant et sa famille passent après.</li>
</ul>
<div class="trap">« Fair » ne veut pas dire « tout le monde reçoit pareil ». Un service premium payant est autorisé, pas un traitement de faveur caché.</div>` },
        { title: "III(C) Suitability", html: `
<p>Dans une relation de conseil :</p>
<ul>
<li>s'informer sur l'expérience, les objectifs de risque et rendement et les contraintes du client <b>avant</b> de recommander ;</li>
<li>mettre à jour régulièrement (au moins une fois par an, et à chaque changement important) ;</li>
<li>juger l'adéquation dans le contexte du <b>portefeuille total</b>.</li>
</ul>
<p>Pour un gérant de fonds : respecter le mandat et la stratégie annoncés.</p>
<p><b>Ordre non sollicité</b> (unsolicited trade) inadapté : expliquer au client pourquoi il n'est pas adapté. S'il insiste et que l'impact est mineur, on peut l'exécuter ; s'il change le profil du portefeuille, il faut mettre à jour l'IPS ou refuser.</p>` },
        { title: "III(D) Performance Presentation", html: `
<p>Présenter la performance de façon <b>juste, exacte et complète</b>.</p>
<ul>
<li>Ne pas présenter des résultats simulés (backtest) comme réels.</li>
<li>Ne pas sélectionner seulement les meilleurs comptes (cherry picking) ; inclure les comptes clôturés.</li>
<li>Une présentation résumée est possible si on propose des informations détaillées sur demande.</li>
<li>Respecter les GIPS est recommandé, pas obligatoire.</li>
</ul>` },
        { title: "III(E) Preservation of Confidentiality", html: `
<p>Garder confidentielles les informations sur les clients actuels, anciens et potentiels, <b>sauf</b> :</p>
<ul>
<li>si l'info concerne une <b>activité illégale</b> du client ;</li>
<li>si la <b>loi</b> exige la divulgation ;</li>
<li>si le <b>client</b> l'autorise.</li>
</ul>
<p>Transmettre des infos au PCP de CFA Institute lors d'une enquête n'est pas une violation.</p>` }
      ],
      methods: []
    },
    {
      id: "eth-s4", lm: "Std IV", title: "Standard IV : Duties to Employers",
      summary: "Loyauté envers l'employeur, rémunérations externes, superviseurs.",
      sections: [
        { title: "IV(A) Loyalty", html: `
<p>Agir au profit de l'employeur, ne pas le priver de ses compétences, ne pas divulguer d'infos confidentielles, ne pas lui nuire.</p>
<ul>
<li><b>Préparer un départ</b> est permis : chercher un emploi, monter sa société, <b>sur son temps libre et sans les ressources de l'employeur</b>.</li>
<li>Interdit avant le départ : solliciter les clients, emporter des fichiers clients ou des documents (même en papier, même dont on est l'auteur).</li>
<li>Après le départ : on peut contacter d'anciens clients à partir de sa <b>mémoire</b> ou de sources publiques, sauf clause de non-sollicitation.</li>
<li><b>Whistleblowing</b> : divulguer des pratiques illégales de l'employeur pour protéger les clients ou les marchés est acceptable.</li>
<li>S'applique aussi aux contrats non salariés (consultant, indépendant).</li>
</ul>
<div class="trap">Copier sa propre liste de contacts pros sur une clé USB avant de démissionner est une violation : ces fichiers appartiennent à l'employeur.</div>` },
        { title: "IV(B) Additional Compensation Arrangements", html: `
<p>Ne pas accepter de cadeaux, avantages ou rémunérations qui concurrencent ou pourraient créer un conflit avec l'intérêt de l'employeur, sans le <b>consentement écrit de toutes les parties</b> concernées.</p>
<div class="ex"><b>Exemple :</b> un client te propose un bonus si son portefeuille bat l'indice. Tu dois obtenir l'accord écrit de ton employeur avant d'accepter.</div>
<div class="tip">Mot-clé de l'examen : <b>written consent</b> → IV(B).</div>` },
        { title: "IV(C) Responsibilities of Supervisors", html: `
<p>Faire des efforts raisonnables pour que les personnes supervisées respectent les lois et les Standards.</p>
<ul>
<li>Si le système de compliance est inadéquat, <b>refuser par écrit</b> la responsabilité de supervision jusqu'à ce qu'il soit corrigé.</li>
<li>Si une violation est découverte : <b>enquêter rapidement</b>, limiter les activités de la personne pendant l'enquête (pas seulement lui demander d'arrêter), mettre en place des mesures.</li>
<li>Un superviseur peut déléguer des tâches, pas sa responsabilité.</li>
</ul>` }
      ],
      methods: []
    },
    {
      id: "eth-s5", lm: "Std V", title: "Standard V : Investment Analysis, Recommendations, and Actions",
      summary: "Base raisonnable, communication avec les clients (et coûts), conservation des dossiers.",
      sections: [
        { title: "V(A) Diligence and Reasonable Basis", html: `
<p>Faire preuve de diligence et avoir une <b>base raisonnable</b>, appuyée par des recherches appropriées, pour toute analyse ou recommandation.</p>
<ul>
<li>Recherche de tiers : vérifier qu'elle est fiable (hypothèses, rigueur, indépendance).</li>
<li>Rapport de groupe : on peut signer un rapport collectif même en désaccord, si le processus est sérieux ; on peut faire retirer son nom.</li>
<li>Modèles quantitatifs : comprendre les hypothèses et tester leurs limites (scénarios extrêmes).</li>
<li>Sélection de gérants externes : due diligence sur le processus, le risque, la conformité.</li>
</ul>` },
        { title: "V(B) Communication with Clients and Prospective Clients", html: `
<ul>
<li>Divulguer le format de base et les principes généraux du processus d'investissement, et tout changement important.</li>
<li>Expliquer les <b>risques et limites</b> de l'analyse.</li>
<li><b>Distinguer faits et opinions.</b></li>
<li><b>(2023)</b> Divulguer la <b>nature des services</b> fournis et les <b>coûts</b> pour le client.</li>
<li>Utiliser son jugement pour identifier les facteurs importants et les inclure dans les communications.</li>
</ul>
<div class="trap">Présenter une prévision de croissance comme un fait certain (« les bénéfices vont doubler ») viole V(B).</div>` },
        { title: "V(C) Record Retention", html: `
<p>Conserver les documents qui justifient l'analyse, les recommandations et les communications avec les clients.</p>
<ul>
<li>Si aucune règle locale : CFA Institute recommande <b>au moins 7 ans</b>.</li>
<li>Les dossiers appartiennent à l'<b>employeur</b>. On ne les emporte pas en partant.</li>
<li>Format électronique accepté.</li>
</ul>
<div class="tip">Mot-clé : <b>7 years</b> → V(C).</div>` }
      ],
      methods: []
    },
    {
      id: "eth-s6", lm: "Std VI", title: "Standard VI : Conflicts of Interest",
      summary: "Éviter ou divulguer, priorité des transactions, commissions d'apport.",
      sections: [
        { title: "VI(A) Avoid or Disclose Conflicts", html: `
<p>Éviter les conflits d'intérêts, ou les divulguer de manière complète et équitable à l'employeur, aux clients et prospects.</p>
<ul>
<li>La divulgation doit être <b>visible, en langage clair</b>, pas noyée dans un document.</li>
<li>Exemples : détenir les actions qu'on recommande, siéger au conseil d'une entreprise suivie, rémunération liée à la vente d'un produit.</li>
</ul>` },
        { title: "VI(B) Priority of Transactions", html: `
<p>Les transactions des <b>clients et de l'employeur</b> passent <b>avant</b> les transactions personnelles.</p>
<ul>
<li>Ordre : clients → employeur → soi-même.</li>
<li>Les comptes de la famille qui sont des clients de la firme sont traités <b>comme les autres clients</b> (ni favorisés ni pénalisés).</li>
<li>Procédures : blackout periods, préautorisation (preclearance), limites sur la participation aux IPO et placements privés, déclaration des positions.</li>
</ul>
<div class="trap">Faire un front-running (passer son ordre personnel avant celui d'un client) viole VI(B).</div>` },
        { title: "VI(C) Referral Fees", html: `
<p>Divulguer à l'employeur, aux clients et prospects toute compensation, avantage ou bénéfice reçu ou payé pour la recommandation de produits ou services.</p>
<p>La divulgation doit être faite <b>avant</b> l'accord, et préciser la <b>nature</b> et la <b>valeur estimée</b> (en argent).</p>` }
      ],
      methods: []
    },
    {
      id: "eth-s7", lm: "Std VII", title: "Standard VII : Responsibilities as a CFA Member or Candidate",
      summary: "Conduite aux examens et utilisation correcte de la désignation CFA.",
      sections: [
        { title: "VII(A) Conduct as Participants in CFA Institute Programs", html: `
<p>Ne pas compromettre la réputation ou l'intégrité de CFA Institute, de la désignation ou des examens.</p>
<ul>
<li>Interdit : tricher, divulguer des questions, ou même les <b>topics</b> testés ou non testés après l'examen.</li>
<li>Autorisé : donner son avis sur les politiques de CFA Institute ou la difficulté générale de l'examen.</li>
<li>Les bénévoles (correcteurs, rédacteurs) doivent garder la confidentialité.</li>
</ul>
<div class="trap">Écrire sur un forum « il y avait beaucoup de questions sur les deferred taxes » viole VII(A).</div>` },
        { title: "VII(B) Reference to CFA Institute, the Designation, and the Program", html: `
<ul>
<li>Ne pas laisser entendre que le CFA garantit une performance supérieure. On peut dire qu'il demande de la discipline et de la rigueur.</li>
<li>« CFA » est un <b>adjectif</b> : « CFA charterholder », jamais « a CFA ».</li>
<li>Pas de désignation partielle : « CFA Level II » est interdit. « Level II candidate in the CFA Program » est autorisé si tu es inscrit.</li>
<li>« I passed Level I on my first attempt » : autorisé (fait). « I'll pass Level II » : interdit.</li>
<li>Pour garder le droit d'utiliser la désignation : payer sa cotisation et signer chaque année le Professional Conduct Statement.</li>
</ul>
<div class="tip">Candidat : tu es candidat seulement si tu es inscrit au prochain examen ou en attente de résultats.</div>` }
      ],
      methods: []
    },
    {
      id: "eth-gips", lm: "GIPS", title: "Global Investment Performance Standards (GIPS)",
      summary: "À vérifier avec Kaplan 2027 : selon certaines sources, GIPS n'est plus une lecture à part entière en 2027.",
      sections: [
        { title: "L'essentiel des GIPS", html: `
<p class="small muted">Les sources de préparation divergent sur le maintien de GIPS en lecture autonome au Level I 2027. Vérifie dans ton manuel Kaplan. Ces bases restent utiles car III(D) y fait référence.</p>
<ul>
<li>Standards <b>volontaires</b> de présentation de la performance, pour permettre la comparaison entre gérants.</li>
<li>Seules les <b>firms</b> (ou asset owners) peuvent se déclarer conformes, pas un individu ni un éditeur de logiciel.</li>
<li>La conformité est <b>tout ou rien</b> : pas de « partiellement conforme ».</li>
<li><b>Composites</b> : regroupent tous les portefeuilles discrétionnaires et payants ayant le même mandat ou la même stratégie.</li>
<li><b>Verification</b> par un tiers : recommandée, <b>pas obligatoire</b>.</li>
</ul>` }
      ],
      methods: []
    }
  ],

  questions: [
    // ---- Code vs Standards
    { id: "eth-c-o1", m: "eth-code", type: "open", q: "Récite les 6 composantes du Code of Ethics (au moins les verbes et l'idée).", a: "Act (intégrité, compétence, diligence, respect, éthique) ; Place (intégrité de la profession et intérêts des clients au-dessus des siens) ; Use (soin raisonnable, jugement professionnel indépendant) ; Practice (et encourager les autres à pratiquer de façon professionnelle et éthique) ; Promote (intégrité et viabilité des marchés mondiaux pour la société) ; Maintain (et améliorer sa compétence et celle des autres)." },
    { id: "eth-c-o2", m: "eth-code", type: "open", q: "Cite les 7 Standards (titres des familles) dans l'ordre.", a: "I Professionalism ; II Integrity of Capital Markets ; III Duties to Clients ; IV Duties to Employers ; V Investment Analysis, Recommendations, and Actions ; VI Conflicts of Interest ; VII Responsibilities as a CFA Institute Member or CFA Candidate." },
    { id: "eth-c-o3", m: "eth-code", type: "open", q: "Quelles sont les 3 modifications de 2023 des Standards ?", a: "Nouveau I(E) Competence ; V(B) révisé pour exiger la divulgation de la nature des services et de leurs coûts ; VI(A) renommé « Avoid or Disclose Conflicts » (il faut éviter ou divulguer)." },
    { id: "eth-c-o4", m: "eth-code", type: "open", q: "« Maintain and improve their professional competence » : Code ou Standard ? Et en quoi diffère-t-il de I(E) ?", a: "C'est une composante du Code. Le Code va plus loin : il demande aussi de chercher à améliorer la compétence des autres professionnels. Le Standard I(E) exige d'agir avec et de maintenir la compétence nécessaire à ses propres responsabilités." },
    { id: "eth-c-1", m: "eth-code", type: "mcq", q: "Which of the following is a component of the CFA Institute Code of Ethics?", o: ["Members and Candidates must not act on material nonpublic information.", "Members and Candidates must promote the integrity and viability of the global capital markets for the ultimate benefit of society.", "Members and Candidates must retain records supporting their recommendations."], a: 1, e: "« Promote the integrity and viability… » est la composante 5 du Code. MNPI = Standard II(A). Record retention = Standard V(C)." },
    { id: "eth-c-2", m: "eth-code", type: "mcq", q: "Which of the following is least likely a component of the Code of Ethics?", o: ["Use reasonable care and exercise independent professional judgment.", "Place the integrity of the investment profession and the interests of clients above their own personal interests.", "Distinguish between fact and opinion in the presentation of investment analysis."], a: 2, e: "Distinguer faits et opinions est une règle précise du Standard V(B). Les deux autres sont des composantes du Code (Use, Place)." },
    { id: "eth-c-3", m: "eth-code", type: "mcq", q: "The requirement to obtain written consent from all parties before accepting compensation that may conflict with an employer's interests is found in:", o: ["the Code of Ethics.", "Standard IV(B) Additional Compensation Arrangements.", "Standard VI(A) Avoid or Disclose Conflicts."], a: 1, e: "« Written consent » → IV(B). C'est une règle précise, donc un Standard." },
    { id: "eth-c-4", m: "eth-code", type: "mcq", q: "Following the 2023 revisions, Standard VI(A) requires Members and Candidates to:", o: ["disclose all conflicts of interest only.", "avoid or disclose conflicts of interest.", "avoid all conflicts of interest without exception."], a: 1, e: "Le nouveau titre est « Avoid or Disclose Conflicts » : éviter ou divulguer." },
    { id: "eth-c-5", m: "eth-code", type: "mcq", q: "The revised Standard V(B) newly requires Members and Candidates to disclose:", o: ["the nature of the services provided and the costs to the client associated with those services.", "their personal holdings in all securities.", "the names of all other clients of the firm."], a: 0, e: "Révision 2023 de V(B) : nature des services et coûts associés pour le client." },
    { id: "eth-c-6", m: "eth-code", type: "mcq", q: "How many components does the Code of Ethics contain, and how many Standards of Professional Conduct (main categories)?", o: ["Six components and seven Standards.", "Seven components and six Standards.", "Six components and twenty-two Standards."], a: 0, e: "6 composantes du Code, 7 familles de Standards (22 sous-sections)." },

    // ---- Trust
    { id: "eth-t-o1", m: "eth-trust", type: "open", q: "Cite les 4 étapes du cadre de décision éthique.", a: "Identify (faits, parties prenantes, devoirs, conflits) ; Consider (influences situationnelles, alternatives, conseils) ; Decide and act ; Reflect." },
    { id: "eth-t-1", m: "eth-trust", type: "mcq", q: "Which statement about ethics and the law is most accurate?", o: ["Legal conduct is always ethical.", "Ethical standards often require more than the law.", "Laws typically change faster than ethical standards."], a: 1, e: "Les standards éthiques vont souvent au-delà de la loi, qui évolue lentement et ne couvre pas tout." },
    { id: "eth-t-2", m: "eth-trust", type: "mcq", q: "An analyst believes she is more ethical than her peers and therefore does not question her own decisions. This is best described as:", o: ["a situational influence.", "overconfidence bias.", "a conflict of interest."], a: 1, e: "Se croire plus éthique que les autres = overconfidence, un obstacle classique au comportement éthique." },

    // ---- PCP
    { id: "eth-p-1", m: "eth-pcp", type: "mcq", q: "Which of the following is least likely to trigger an investigation by the CFA Institute Professional Conduct Program?", o: ["A self-disclosure on the annual Professional Conduct Statement.", "A written complaint from a client.", "A member's decision to change employers."], a: 2, e: "Changer d'employeur ne déclenche rien. Auto-déclaration, plainte écrite, info publique ou rapport de surveillant d'examen peuvent déclencher une enquête." },
    { id: "eth-p-2", m: "eth-pcp", type: "mcq", q: "If a member rejects the sanction proposed by Professional Conduct staff, the matter is most likely:", o: ["closed without further action.", "referred to a hearing panel of the Disciplinary Review Committee.", "referred directly to local regulators."], a: 1, e: "En cas de refus, l'affaire va devant un panel du Disciplinary Review Committee." },

    // ---- Standard I
    { id: "eth-1-o1", m: "eth-s1", type: "open", q: "La loi locale est moins stricte que le Code, mais la loi du pays du client est plus stricte que le Code. Que fais-tu ?", a: "J'applique la règle la plus stricte : ici la loi du pays du client (si elle s'applique à l'activité). Règle générale I(A) : toujours suivre le plus strict entre les lois applicables et le Code." },
    { id: "eth-1-o2", m: "eth-s1", type: "open", q: "Un client t'offre des places de concert pour te remercier d'une excellente année. As-tu le droit d'accepter ?", a: "Oui, s'il s'agit d'un client et que je le divulgue à mon employeur (I(B)). Un cadeau d'un client récompense le passé ; il menace moins l'indépendance qu'un cadeau d'un émetteur." },
    { id: "eth-1-1", m: "eth-s1", type: "mcq", q: "Kim works in a country where local law has no rules on insider trading. CFA Institute Standards prohibit it. Kim most likely:", o: ["may trade on material nonpublic information because local law allows it.", "must follow the Standards because they are stricter than local law.", "must report the lack of local law to regulators."], a: 1, e: "I(A) : suivre la règle la plus stricte. Ici le Code et les Standards." },
    { id: "eth-1-2", m: "eth-s1", type: "mcq", q: "An analyst learns his firm is engaged in an illegal activity. According to Standard I(A), he should first:", o: ["immediately report the activity to regulators.", "dissociate from the activity, for example by discussing it with his supervisor or compliance.", "resign without saying anything."], a: 1, e: "I(A) exige de se dissocier. Le premier pas recommandé est d'en parler au supérieur ou au compliance. Dénoncer aux autorités n'est pas exigé par les Standards (sauf si la loi l'impose)." },
    { id: "eth-1-3", m: "eth-s1", type: "mcq", q: "A company the analyst covers offers to fly her on its corporate jet to visit a remote facility; commercial flights are available. To comply with Standard I(B), she should most likely:", o: ["accept, since the visit is for research purposes.", "use commercial transportation and have her firm pay for it.", "accept but disclose it in her report."], a: 1, e: "Payer son propre transport quand des vols commerciaux existent préserve l'indépendance." },
    { id: "eth-1-4", m: "eth-s1", type: "mcq", q: "An analyst copies several paragraphs from another firm's report into her own report without attribution. She most likely violated:", o: ["Standard I(C) Misrepresentation.", "Standard I(D) Misconduct.", "Standard V(C) Record Retention."], a: 0, e: "Plagiat = misrepresentation, I(C)." },
    { id: "eth-1-5", m: "eth-s1", type: "mcq", q: "An analyst uses inflation data from a recognized government statistical agency without citing it. Under Standard I(C), this is:", o: ["a violation, because all sources must be cited.", "not a violation, because factual data from recognized statistical sources need not be cited.", "a violation only if the data is used in a client report."], a: 1, e: "Les données factuelles de sources reconnues peuvent être utilisées sans citation." },
    { id: "eth-1-6", m: "eth-s1", type: "mcq", q: "A portfolio manager files for personal bankruptcy after a failed real estate venture, with no evidence of fraud. Under Standard I(D), this is most likely:", o: ["a violation, because it reflects poorly on his competence.", "not a violation, because it does not involve dishonesty, fraud, or deceit in professional conduct.", "a violation of the Code of Ethics but not the Standards."], a: 1, e: "Une faillite personnelle sans fraude ne viole pas I(D)." },
    { id: "eth-1-7", m: "eth-s1", type: "mcq", q: "A fixed-income manager is reassigned to manage a complex derivatives fund and does not acquire the necessary knowledge. He most likely violates:", o: ["Standard I(E) Competence.", "Standard III(C) Suitability.", "Standard V(B) Communication with Clients."], a: 0, e: "I(E) exige d'acquérir et maintenir la compétence nécessaire à ses responsabilités." },
    { id: "eth-1-8", m: "eth-s1", type: "mcq", q: "A client gives a portfolio manager an expensive watch as thanks for strong returns last year. The manager complies with the Standards if he:", o: ["refuses the gift in all cases.", "discloses the gift to his employer.", "obtains written consent from the client."], a: 1, e: "Cadeau d'un client pour une performance passée : acceptable avec divulgation à l'employeur (I(B))." },

    // ---- Standard II
    { id: "eth-2-o1", m: "eth-s2", type: "open", q: "Explique la mosaic theory et pourquoi elle est autorisée.", a: "Combiner des informations publiques et des informations non publiques mais non matérielles pour aboutir à une conclusion importante. C'est autorisé car aucune information matérielle non publique n'est utilisée : c'est du travail d'analyse." },
    { id: "eth-2-1", m: "eth-s2", type: "mcq", q: "An analyst combines public filings, industry data, and nonmaterial observations from a store visit to conclude a company will miss earnings, then recommends selling. This is:", o: ["a violation of Standard II(A).", "permitted under the mosaic theory.", "a violation of Standard II(B)."], a: 1, e: "Mosaic theory : infos publiques + infos non matérielles = analyse légitime." },
    { id: "eth-2-2", m: "eth-s2", type: "mcq", q: "A CFO tells an analyst during a private call that the company will announce a large acquisition next week. The analyst should:", o: ["buy the stock for his clients before the announcement.", "not act on the information and encourage the company to make it public.", "share the information only with his largest clients."], a: 1, e: "MNPI : ne pas agir ni faire agir. Encourager la diffusion publique et prévenir le compliance." },
    { id: "eth-2-3", m: "eth-s2", type: "mcq", q: "A trader buys and sells the same thinly traded security between accounts he controls to create the appearance of high volume. This is:", o: ["transaction-based market manipulation.", "information-based market manipulation.", "acceptable if no client is harmed."], a: 0, e: "Wash trading = manipulation par les transactions (II(B))." },
    { id: "eth-2-4", m: "eth-s2", type: "mcq", q: "Which procedure is most effective in preventing the misuse of material nonpublic information within a firm?", o: ["Firewalls between investment banking and research.", "Requiring analysts to sign the annual Professional Conduct Statement.", "Allowing analysts to trade only after client trades."], a: 0, e: "Les firewalls (barrières à l'information) sont la procédure clé pour la MNPI." },

    // ---- Standard III
    { id: "eth-3-o1", m: "eth-s3", type: "open", q: "Pour un fonds de pension, qui est le client au sens de III(A) ?", a: "Les bénéficiaires du plan (participants et ayants droit), pas l'entreprise sponsor ni ses dirigeants." },
    { id: "eth-3-o2", m: "eth-s3", type: "open", q: "Quelles sont les 3 exceptions à la confidentialité des informations client (III(E)) ?", a: "1) Info concernant une activité illégale du client ; 2) divulgation exigée par la loi ; 3) le client autorise la divulgation. (Transmettre au PCP de CFA Institute n'est pas une violation.)" },
    { id: "eth-3-1", m: "eth-s3", type: "mcq", q: "A manager uses client brokerage commissions (soft dollars) to pay for research that benefits the client's account. This is:", o: ["a violation, because commissions belong to the manager.", "acceptable, because the research benefits the client.", "a violation unless the employer consents in writing."], a: 1, e: "Les commissions appartiennent au client ; les utiliser pour de la recherche utile au client respecte III(A)." },
    { id: "eth-3-2", m: "eth-s3", type: "mcq", q: "A firm offers a premium research service to clients who pay higher fees. Under Standard III(B), this is:", o: ["prohibited, because all clients must be treated equally.", "permitted if the different service levels are disclosed and available to all clients.", "permitted only for institutional clients."], a: 1, e: "Fair ≠ equal. Les niveaux de service différents sont permis s'ils sont divulgués et ouverts à tous." },
    { id: "eth-3-3", m: "eth-s3", type: "mcq", q: "An IPO is oversubscribed. The manager should most likely allocate shares:", o: ["first to his largest clients.", "on a pro rata basis among clients for whom the IPO is suitable.", "to his own account and family first, then clients."], a: 1, e: "III(B) : allocation au prorata entre clients éligibles. Le personnel passe après." },
    { id: "eth-3-4", m: "eth-s3", type: "mcq", q: "Under Standard III(C), a client's investment policy statement should be updated:", o: ["only when the client requests it.", "at least annually and when the client's circumstances change materially.", "every five years."], a: 1, e: "Mise à jour régulière, au moins une fois par an, et à chaque changement important." },
    { id: "eth-3-5", m: "eth-s3", type: "mcq", q: "A manager presents the performance of only her best-performing accounts to prospective clients, excluding terminated accounts. She most likely violates:", o: ["Standard III(D) Performance Presentation.", "Standard I(B) Independence and Objectivity.", "Standard V(C) Record Retention."], a: 0, e: "Cherry picking et exclusion des comptes clôturés : III(D)." },
    { id: "eth-3-6", m: "eth-s3", type: "mcq", q: "A manager learns a client is using his account to launder money. Disclosing this information to authorities:", o: ["violates Standard III(E).", "does not violate Standard III(E) because the information concerns illegal activity.", "is permitted only with the client's consent."], a: 1, e: "Exception à la confidentialité : activité illégale du client." },
    { id: "eth-3-7", m: "eth-s3", type: "mcq", q: "A client asks to direct trades to a broker who provides him personal services. The manager should:", o: ["refuse, as it violates best execution.", "comply, but inform the client that he may not receive best execution.", "comply and charge the client an extra fee."], a: 1, e: "Directed brokerage : possible car les commissions appartiennent au client, mais l'informer du risque sur la best execution." },

    // ---- Standard IV
    { id: "eth-4-o1", m: "eth-s4", type: "open", q: "Que peux-tu faire et ne pas faire pour préparer ton départ de ton employeur ?", a: "Je peux chercher un emploi ou préparer ma société sur mon temps libre, sans ressources de l'employeur. Je ne peux pas solliciter les clients avant mon départ, ni emporter de documents ou fichiers (même les miens). Après le départ, je peux contacter d'anciens clients de mémoire ou via des sources publiques, sauf clause de non-sollicitation." },
    { id: "eth-4-o2", m: "eth-s4", type: "open", q: "Que doit faire un superviseur qui constate que le système de compliance de sa firme est inadéquat ?", a: "Refuser par écrit d'assumer la responsabilité de supervision jusqu'à ce que la firme adopte des procédures adéquates (IV(C))." },
    { id: "eth-4-1", m: "eth-s4", type: "mcq", q: "Before resigning, an analyst emails client contact lists to his personal account to use at his new firm. He most likely violates:", o: ["Standard IV(A) Loyalty.", "Standard III(E) Preservation of Confidentiality only.", "No Standard, because he created the lists."], a: 0, e: "IV(A) : les fichiers clients appartiennent à l'employeur, même s'il les a créés." },
    { id: "eth-4-2", m: "eth-s4", type: "mcq", q: "A client offers a manager a bonus if the portfolio beats its benchmark. To comply, the manager must:", o: ["refuse the offer.", "obtain written consent from his employer before accepting.", "disclose the offer to other clients."], a: 1, e: "IV(B) : consentement écrit de toutes les parties (employeur) avant d'accepter." },
    { id: "eth-4-3", m: "eth-s4", type: "mcq", q: "A supervisor learns that an employee may be front-running client trades. The supervisor's best response is to:", o: ["ask the employee to stop and take no further action.", "promptly investigate and limit the employee's activities during the investigation.", "report the employee to CFA Institute immediately."], a: 1, e: "IV(C) : enquêter rapidement et limiter les activités pendant l'enquête. Un simple avertissement ne suffit pas." },
    { id: "eth-4-4", m: "eth-s4", type: "mcq", q: "An employee discloses to regulators that her employer is defrauding clients. Under Standard IV(A), this is most likely:", o: ["a violation of loyalty to the employer.", "acceptable, because it protects clients and the integrity of markets.", "a violation unless she first resigns."], a: 1, e: "Le whistleblowing pour protéger les clients ou les marchés est acceptable." },

    // ---- Standard V
    { id: "eth-5-o1", m: "eth-s5", type: "open", q: "Combien de temps conserver les dossiers si aucune règle locale n'existe, et à qui appartiennent-ils ?", a: "Au moins 7 ans (recommandation de CFA Institute). Les dossiers appartiennent à l'employeur (V(C))." },
    { id: "eth-5-1", m: "eth-s5", type: "mcq", q: "An analyst disagrees with a research team's consensus recommendation but the team's process was thorough. She may:", o: ["not allow her name on the report.", "allow her name on the report, since the recommendation has a reasonable basis.", "publish her own contrary report immediately to all clients."], a: 1, e: "V(A) : on peut signer un rapport collectif fondé sur un processus sérieux même en désaccord (ou demander le retrait de son nom)." },
    { id: "eth-5-2", m: "eth-s5", type: "mcq", q: "A report states, \"Earnings will grow 20% next year,\" without indicating that this is a projection. This most likely violates:", o: ["Standard V(B) Communication with Clients and Prospective Clients.", "Standard I(C) Misrepresentation only.", "Standard V(C) Record Retention."], a: 0, e: "V(B) exige de distinguer faits et opinions." },
    { id: "eth-5-3", m: "eth-s5", type: "mcq", q: "In the absence of regulatory guidance, CFA Institute recommends retaining records for at least:", o: ["3 years.", "5 years.", "7 years."], a: 2, e: "7 ans → V(C)." },
    { id: "eth-5-4", m: "eth-s5", type: "mcq", q: "A firm changes its investment process from fundamental to quantitative stock selection. Under Standard V(B), the firm should:", o: ["inform clients of the significant change.", "change nothing until the annual review.", "inform only new prospective clients."], a: 0, e: "V(B) : informer les clients de tout changement important du processus." },

    // ---- Standard VI
    { id: "eth-6-o1", m: "eth-s6", type: "open", q: "Dans quel ordre passent les transactions selon VI(B) ? Comment traiter les comptes de la famille d'un employé qui sont clients ?", a: "Clients d'abord, puis employeur, puis soi-même. Les comptes familiaux clients sont traités comme n'importe quel client : ni favorisés ni désavantagés." },
    { id: "eth-6-1", m: "eth-s6", type: "mcq", q: "An analyst owns shares of a company she recommends. Under Standard VI(A), she must:", o: ["sell the shares before publishing.", "avoid the conflict or prominently disclose her ownership.", "do nothing if the holding is small."], a: 1, e: "VI(A) : éviter ou divulguer de façon visible et claire." },
    { id: "eth-6-2", m: "eth-s6", type: "mcq", q: "A manager places a personal trade in a stock just before executing a large client order in the same stock. This most likely violates:", o: ["Standard VI(B) Priority of Transactions.", "Standard III(B) Fair Dealing only.", "Standard VI(C) Referral Fees."], a: 0, e: "Front-running = violation de la priorité des transactions VI(B)." },
    { id: "eth-6-3", m: "eth-s6", type: "mcq", q: "An adviser receives a fee for referring clients to an accountant. Under Standard VI(C), the adviser must disclose:", o: ["the arrangement only to the employer.", "the nature and estimated value of the fee to the employer, clients, and prospective clients before entry into any formal agreement.", "the fee only if it exceeds a materiality threshold."], a: 1, e: "VI(C) : à l'employeur, aux clients et prospects, avant l'accord, avec la nature et la valeur estimée." },

    // ---- Standard VII
    { id: "eth-7-o1", m: "eth-s7", type: "open", q: "Corrige : « John Smith, a CFA, passed CFA Level II and expects to pass Level III. »", a: "Correct : « John Smith, a Level III candidate in the CFA Program, passed Level II. » On n'utilise pas « a CFA » (CFA est un adjectif), pas de « CFA Level II », et on ne peut pas affirmer qu'on réussira." },
    { id: "eth-7-1", m: "eth-s7", type: "mcq", q: "After the exam, a candidate posts online that \"there were many questions on deferred taxes.\" This most likely violates:", o: ["Standard VII(A) Conduct as Participants in CFA Institute Programs.", "Standard VII(B) Reference to the CFA Designation.", "No Standard, since no specific question was revealed."], a: 0, e: "VII(A) interdit de divulguer les topics testés, même sans questions précises." },
    { id: "eth-7-2", m: "eth-s7", type: "mcq", q: "Which of the following statements complies with Standard VII(B)?", o: ["\"As a CFA, I achieve superior returns.\"", "\"I passed all three levels of the CFA exam on my first attempt.\"", "\"I am a CFA Level II.\""], a: 1, e: "Énoncer un fait vérifiable (passé du premier coup) est permis. « A CFA » et « CFA Level II » sont interdits, comme toute promesse de performance." },
    { id: "eth-7-3", m: "eth-s7", type: "mcq", q: "A charterholder stops paying her CFA Institute dues. She:", o: ["may continue to use the CFA designation.", "may not use the CFA designation until her membership is reactivated.", "may use the designation with a footnote."], a: 1, e: "Membre inactif (cotisation impayée, PCS non signé) : plus le droit d'utiliser la désignation." },
    { id: "eth-7-4", m: "eth-s7", type: "mcq", q: "A candidate criticizes CFA Institute's exam pass-rate policy in a public blog post. This is:", o: ["a violation of Standard VII(A).", "not a violation, because expressing an opinion about CFA Institute policies is permitted.", "a violation of the Code of Ethics."], a: 1, e: "Donner son avis sur les politiques de CFA Institute est autorisé." },

    // ---- GIPS
    { id: "eth-g-1", m: "eth-gips", type: "mcq", q: "Which of the following can claim compliance with the GIPS standards?", o: ["An individual portfolio manager.", "An investment management firm.", "A software vendor."], a: 1, e: "Seules les firms (et asset owners) peuvent se déclarer conformes." },
    { id: "eth-g-2", m: "eth-gips", type: "mcq", q: "Third-party verification of GIPS compliance is:", o: ["required.", "recommended but not required.", "prohibited."], a: 1, e: "Recommandée, pas obligatoire." }
  ]
};
