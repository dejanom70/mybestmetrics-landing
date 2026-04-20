import React from 'react';
import { Link } from 'react-router-dom';

export default function CGVCGU() {
    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - CGV/CGU</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour a l&apos;accueil
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <article className="max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        CONDITIONS GENERALES DE VENTE ET D&apos;UTILISATION (CGV/CGU)
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">Derniere mise a jour : [Date]</p>

                    <section className="mt-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">PREAMBULE</h3>
                        <p>
                            Les presentes Conditions Generales de Vente et d&apos;Utilisation (ci-apres les « CGV/CGU ») regissent
                            l&apos;utilisation de l&apos;application SaaS MyBestMetrics (ci-apres « l&apos;Application »), accessible a
                            l&apos;adresse mybestmetrics.com, editee par [Votre Prenom et Nom], exercant sous le statut de
                            micro-entrepreneur, immatricule(e) au RCS/RM de [Ville] sous le numero SIRET [Votre numero SIRET],
                            dont le siege social est situe au [Votre adresse postale] (ci-apres « l&apos;Editeur »).
                        </p>
                        <p>
                            L&apos;Application s&apos;adresse exclusivement a des utilisateurs particuliers (B2C) agissant a des fins
                            non professionnelles (ci-apres « l&apos;Utilisateur »).
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">1. OBJET ET ACCEPTATION</h3>
                        <p>
                            L&apos;Application fournit un service de journal de bord numerique pour traders, incluant la
                            synchronisation de donnees de trading, l&apos;analyse de performance par Intelligence Artificielle et des
                            outils de reporting.
                        </p>
                        <p>
                            L&apos;inscription a l&apos;Application et la souscription a un abonnement impliquent l&apos;acceptation sans
                            reserve des presentes CGV/CGU par l&apos;Utilisateur.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">
                            2. DESCRIPTION DES SERVICES ET LIMITES D&apos;UTILISATION (FAIR USE)
                        </h3>
                        <p>L&apos;Application est proposee selon un modele « Freemium » :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Plan Gratuit : Acces limite a un (1) seul compte de trading manuel (sans synchronisation
                                automatique) et fonctionnalites restreintes.
                            </li>
                            <li>
                                Plans Payants (Pro Mensuel / Pro Annuel) : Acces debloque aux fonctionnalites avancees, comptes
                                de trading illimites et synchronisation automatique.
                            </li>
                        </ul>
                        <p>
                            Limites techniques et Intelligence Artificielle (IA) : Afin de garantir la stabilite des serveurs, la
                            synchronisation des comptes s&apos;effectue via un systeme de file d&apos;attente (Queue) gere par
                            l&apos;Editeur. De plus, l&apos;utilisation des fonctionnalites liees a l&apos;Intelligence Artificielle (chatbot,
                            analyse de compte) est strictement limitee a un usage raisonnable (« Fair Use »), fixe a un maximum
                            de [Ex: 10] requetes par jour et par Utilisateur. L&apos;Editeur se reserve le droit de bloquer
                            temporairement l&apos;acces a l&apos;IA en cas de depassement abusif.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">3. CREATION DE COMPTE ET SECURITE</h3>
                        <p>
                            <strong>3.1. Usage strictement personnel :</strong> Le compte est strictement personnel. Le partage
                            d&apos;identifiants entre plusieurs personnes est formellement interdit et entrainera la suspension
                            immediate et definitive du compte sans remboursement.
                        </p>
                        <p>
                            <strong>3.2. Identifiants de trading (MT4 / MT5) :</strong> Pour synchroniser ses comptes,
                            l&apos;Utilisateur doit renseigner ses identifiants de plateforme de trading. L&apos;Editeur recommande
                            imperativement l&apos;utilisation du mot de passe « Investisseur » (Lecture seule / Read-only). Si
                            l&apos;Utilisateur decide, sous sa seule responsabilite, de renseigner son mot de passe « Master »
                            (permettant le passage d&apos;ordres), l&apos;Editeur decline toute responsabilite en cas de passage d&apos;ordre
                            accidentel, de bug logiciel, ou de piratage cote broker. L&apos;Application n&apos;a pas pour vocation
                            d&apos;ouvrir ou de fermer des positions.
                        </p>
                        <p>
                            <strong>3.3. Chiffrement :</strong> Les identifiants de trading fournis par l&apos;Utilisateur sont
                            chiffres (cryptes) par l&apos;Application. L&apos;Editeur n&apos;a jamais acces a ces mots de passe en clair.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">4. CONDITIONS FINANCIERES ET PAIEMENT</h3>
                        <p><strong>4.1. Tarifs :</strong> Les prix des abonnements sont indiques en Euros (€) toutes taxes comprises (TTC) sur l&apos;Application.</p>
                        <p><strong>4.2. Prelevement automatique :</strong> Le paiement s&apos;effectue par prelevement automatique via notre prestataire de paiement securise (ex: Stripe). A l&apos;issue de la periode initiale, l&apos;abonnement est renouvele tacitement.</p>
                        <p><strong>4.3. Incident de paiement :</strong> En cas d&apos;echec de prelevement, l&apos;Utilisateur beneficie d&apos;un delai de grace de 72 heures pour regulariser sa situation. Passe ce delai, l&apos;acces aux fonctionnalites « Pro » sera suspendu et le compte repassera en formule gratuite.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">5. DROIT DE RETRACTATION ET GARANTIE</h3>
                        <p><strong>5.1. Renonciation au droit de retractation legal :</strong> Conformement a l&apos;article L221-28 13° du Code de la consommation, s&apos;agissant de la fourniture d&apos;un contenu numerique non fourni sur un support materiel dont l&apos;execution a commence, l&apos;Utilisateur accepte expressement de renoncer a son droit de retractation de 14 jours lors de la souscription pour pouvoir acceder immediatement aux services payants. Cette renonciation est recueillie formellement au moment du paiement.</p>
                        <p><strong>5.2. Garantie commerciale :</strong> L&apos;Editeur peut proposer, a sa seule discretion, une garantie commerciale « Satisfait ou rembourse de 14 jours ». Si celle-ci est active et mentionnee sur la page de paiement, l&apos;Utilisateur pourra demander un remboursement complet dans les 14 jours suivant son premier achat en contactant le support.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">6. AVERTISSEMENT IMPORTANT ET NON-RESPONSABILITE (DISCLAIMER)</h3>
                        <p><strong>Aucun conseil financier :</strong> L&apos;Application est un outil purement analytique et pedagogique. L&apos;Editeur n&apos;est pas un conseiller financier et ne fournit aucune recommandation d&apos;investissement ni signal de trading.</p>
                        <p><strong>Risques de marche :</strong> Le trading de CFD, Forex, Indices et Cryptomonnaies comporte un risque eleve de perte en capital. L&apos;Editeur ne saurait en aucun cas etre tenu responsable des pertes financieres subies par l&apos;Utilisateur.</p>
                        <p><strong>Technologie tierce :</strong> L&apos;Editeur ne peut etre tenu responsable des erreurs, retards ou interruptions de synchronisation causes par les serveurs des brokers, MetaQuotes (MT4/MT5) ou toute autre technologie tierce.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">7. RESILIATION ET CONSERVATION DES DONNEES</h3>
                        <p>L&apos;Utilisateur peut resilier son abonnement a tout moment depuis son espace client (la resiliation sera effective a la fin du cycle facture).</p>
                        <p>Conservation post-resiliation : En cas de fin d&apos;abonnement ou d&apos;inactivite, l&apos;Editeur conservera les donnees de trading (historique, graphiques) de l&apos;Utilisateur pendant une duree de un (1) mois. Passe ce delai, l&apos;integralite des donnees de trading de l&apos;Utilisateur sera definitivement supprimee des serveurs de l&apos;Editeur. L&apos;Utilisateur devra tout resynchroniser s&apos;il decide de se reabonner ulterieurement.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">8. GAMIFICATION ET FONCTIONNALITES PUBLIQUES</h3>
                        <p>L&apos;Application propose des classements (Leaderboards) et des badges de recompense. La participation a ces fonctionnalites communautaires est 100% optionnelle et soumise au consentement explicite (opt-in) de l&apos;Utilisateur. Par defaut, le compte et les performances de l&apos;Utilisateur sont strictement prives.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">9. DONNEES PERSONNELLES (RGPD) ET HEBERGEMENT</h3>
                        <p>L&apos;Editeur s&apos;engage a respecter le Reglement General sur la Protection des Donnees (RGPD).</p>
                        <p><strong>Donnees collectees :</strong> Nom, prenom, adresse e-mail, donnees de trading analytiques.</p>
                        <p><strong>Hebergement hybride souverain :</strong> Les donnees d&apos;identite sont gerees de maniere securisee via nos prestataires cloud (Supabase, Vercel, OVH). Afin de garantir une securite maximale et des performances optimales, le traitement lourd des donnees de trading (synchronisation, graphiques) s&apos;effectue sur une infrastructure serveur privee et proprietaire, geree directement par l&apos;Editeur.</p>
                        <p><strong>Droits de l&apos;utilisateur :</strong> L&apos;Utilisateur dispose d&apos;un droit d&apos;acces, de modification, de portabilite et de suppression de ses donnees en contactant : [Votre email de contact, ex: support@mybestmetrics.com].</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">10. PROPRIETE INTELLECTUELLE</h3>
                        <p>Tous les elements de l&apos;Application (code source, algorithmes de calcul, interface, graphismes, nom de domaine) sont la propriete exclusive de l&apos;Editeur. Le reverse-engineering ou l&apos;extraction de donnees non autorisee est strictement interdit.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">11. LOI APPLICABLE ET REGLEMENT DES LITIGES</h3>
                        <p>Les presentes CGV/CGU sont soumises a la loi francaise.</p>
                        <p>En cas de litige, l&apos;Utilisateur s&apos;adressera en priorite a l&apos;Editeur pour tenter de trouver une solution amiable. A defaut, le litige sera soumis a la competence exclusive des tribunaux francais.</p>
                    </section>
                </article>
            </main>
        </div>
    );
}
