import React from 'react';
import { Link } from 'react-router-dom';

export default function CGVCGU() {
    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - CGV/CGU</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <article className="max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        CONDITIONS GÉNÉRALES DE VENTE ET D&apos;UTILISATION (CGV/CGU)
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">Dernière mise à jour : [Date]</p>

                    <section className="mt-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">PRÉAMBULE</h3>
                        <p>
                            Les présentes Conditions Générales de Vente et d&apos;Utilisation (ci-après les « CGV/CGU ») régissent
                            l&apos;utilisation de l&apos;application SaaS MyBestMetrics (ci-après « l&apos;Application »), accessible à
                            l&apos;adresse mybestmetrics.com, éditée par MAXIME Daniel, exercant sous le statut de
                            micro-entrepreneur, immatriculé au RCS/RM de Paris sous le numéro SIRET 814 020 426 00031,
                            dont le siège social est situé au 59 rue de Ponthieu - Bureau 326, 75008 Paris, France (ci-après « l&apos;Éditeur »).
                        </p>
                        <p>
                            L&apos;Application s&apos;adresse exclusivement à des utilisateurs particuliers (B2C) agissant à des fins
                            non professionnelles (ci-après « l&apos;Utilisateur »).
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">1. OBJET ET ACCEPTATION</h3>
                        <p>
                            L&apos;Application fournit un service de journal de bord numérique pour traders, incluant la
                            synchronisation de données de trading, l&apos;analyse de performance par Intelligence Artificielle et des
                            outils de reporting.
                        </p>
                        <p>
                            L&apos;inscription à l&apos;Application et la souscription à un abonnement impliquent l&apos;acceptation sans
                            réserve des présentes CGV/CGU par l&apos;Utilisateur.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">
                            2. DESCRIPTION DES SERVICES ET LIMITES D&apos;UTILISATION (FAIR USE)
                        </h3>
                        <p>L&apos;Application est proposée selon un modèle « Freemium » :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Plan Gratuit : Accès limité à un 1 seul compte de trading manuel (sans synchronisation
                                automatique) et fonctionnalités restreintes.
                            </li>
                            <li>
                                Plans Payants (Pro Mensuel / Pro Annuel) : Accès débloqué aux fonctionnalités avancées, comptes
                                de trading illimités et synchronisation automatique.
                            </li>
                        </ul>
                        <p>
                            Limites techniques et Intelligence Artificielle (IA) : Afin de garantir la stabilité des serveurs, la
                            synchronisation des comptes s&apos;effectue via un système de file d&apos;attente (Queue) géré par
                            l&apos;Éditeur. De plus, l&apos;utilisation des fonctionnalités liées à l&apos;Intelligence Artificielle (chatbot,
                            analyse de compte) est strictement limitée à un usage raisonnable (« Fair Use »), fixé à un maximum
                            de 50 requêtes par jour et par Utilisateur. L&apos;Éditeur se réserve le droit de bloquer
                            temporairement l&apos;accès à l&apos;IA en cas de dépassement abusif.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">3. CRÉATION DE COMPTE ET SÉCURITÉ</h3>
                        <p>
                            <strong>3.1. Usage strictement personnel :</strong> Le compte est strictement personnel. Le partage
                            d&apos;identifiants entre plusieurs personnes est formellement interdit et entraînera la suspension
                            immédiate et définitive du compte sans remboursement.
                        </p>
                        <p>
                            <strong>3.2. Identifiants de trading (MT4 / MT5) :</strong> Pour synchroniser ses comptes,
                            l&apos;Utilisateur doit renseigner ses identifiants de plateforme de trading. L&apos;Éditeur recommande
                            impérativement l&apos;utilisation du mot de passe « Investisseur » (Lecture seule / Read-only). Si
                            l&apos;Utilisateur décide, sous sa seule responsabilité, de renseigner son mot de passe « Master »
                            (permettant le passage d&apos;ordres), l&apos;Éditeur décline toute responsabilité en cas de passage d&apos;ordre
                            accidentel, de bug logiciel, ou de piratage côté broker. L&apos;Application n&apos;a pas pour vocation
                            d&apos;ouvrir ou de fermer des positions.
                        </p>
                        <p>
                            <strong>3.3. Chiffrement :</strong> Les identifiants de trading fournis par l&apos;Utilisateur sont
                            chiffrés (cryptés) par l&apos;Application. L&apos;Éditeur n&apos;a jamais accès à ces mots de passe en clair.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">4. CONDITIONS FINANCIÈRES ET PAIEMENT</h3>
                        <p><strong>4.1. Tarifs :</strong> Les prix des abonnements sont indiqués en Euros (€) toutes taxes comprises (TTC) sur l&apos;Application.</p>
                        <p><strong>4.2. Prélèvement automatique :</strong> Le paiement s&apos;effectue par prélèvement automatique via notre prestataire de paiement sécurisé (ex: Stripe). À l&apos;issue de la période initiale, l&apos;abonnement est renouvelé tacitement.</p>
                        <p><strong>4.3. Incident de paiement :</strong> En cas d&apos;échec de prélèvement, l&apos;Utilisateur bénéficie d&apos;un délai de grâce de 72 heures pour régulariser sa situation. Passé ce délai, l&apos;accès aux fonctionnalités « Pro » sera suspendu et le compte repassera en formule gratuite.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">5. DROIT DE RÉTRACTATION ET GARANTIE</h3>
                        <p><strong>5.1. Renonciation au droit de rétractation légal :</strong> Conformément à l&apos;article L221-28 13° du Code de la consommation, s&apos;agissant de la fourniture d&apos;un contenu numérique non fourni sur un support matériel dont l&apos;exécution a commencé, l&apos;Utilisateur accepte expressément de renoncer à son droit de rétractation de 14 jours lors de la souscription pour pouvoir accéder immédiatement aux services payants. Cette renonciation est recueillie formellement au moment du paiement.</p>
                        <p><strong>5.2. Garantie commerciale :</strong> L&apos;Éditeur peut proposer, à sa seule discrétion, une garantie commerciale « Satisfait ou remboursé de 14 jours ». Si celle-ci est active et mentionnée sur la page de paiement, l&apos;Utilisateur pourra demander un remboursement complet dans les 14 jours suivant son premier achat en contactant le support.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">6. AVERTISSEMENT IMPORTANT ET NON-RESPONSABILITÉ (DISCLAIMER)</h3>
                        <p><strong>Aucun conseil financier :</strong> L&apos;Application est un outil purement analytique et pédagogique. L&apos;Éditeur n&apos;est pas un conseiller financier et ne fournit aucune recommandation d&apos;investissement ni signal de trading.</p>
                        <p><strong>Risques de marché :</strong> Le trading de CFD, Forex, Indices et Cryptomonnaies comporte un risque élevé de perte en capital. L&apos;Éditeur ne saurait en aucun cas être tenu responsable des pertes financières subies par l&apos;Utilisateur.</p>
                        <p><strong>Technologie tierce :</strong> L&apos;Éditeur ne peut être tenu responsable des erreurs, retards ou interruptions de synchronisation causés par les serveurs des brokers, MetaQuotes (MT4/MT5) ou toute autre technologie tierce.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">7. RÉSILIATION ET CONSERVATION DES DONNÉES</h3>
                        <p>L&apos;Utilisateur peut résilier son abonnement à tout moment depuis son espace client (la résiliation sera effective à la fin du cycle facturé).</p>
                        <p>Conservation post-résiliation : En cas de fin d&apos;abonnement ou d&apos;inactivité, l&apos;Éditeur conservera les données de trading (historique, graphiques) de l&apos;Utilisateur pendant une durée de un (1) mois. Passé ce délai, l&apos;intégralité des données de trading de l&apos;Utilisateur sera définitivement supprimée des serveurs de l&apos;Éditeur. L&apos;Utilisateur devra tout resynchroniser s&apos;il décide de se réabonner ultérieurement.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">8. GAMIFICATION ET FONCTIONNALITÉS PUBLIQUES</h3>
                        <p>L&apos;Application propose des classements (Leaderboards) et des badges de récompense. La participation à ces fonctionnalités communautaires est 100% optionnelle et soumise au consentement explicite (opt-in) de l&apos;Utilisateur. Par défaut, le compte et les performances de l&apos;Utilisateur sont strictement privés.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">9. DONNÉES PERSONNELLES (RGPD) ET HÉBERGEMENT</h3>
                        <p>L&apos;Éditeur s&apos;engage à respecter le Règlement Général sur la Protection des Données (RGPD).</p>
                        <p><strong>Données collectées :</strong> Nom, prénom, adresse e-mail, données de trading analytiques.</p>
                        <p><strong>Hébergement hybride souverain :</strong> Les données d&apos;identité sont gérées de manière sécurisée via nos prestataires cloud (Supabase, Vercel, OVH). Afin de garantir une sécurité maximale et des performances optimales, le traitement lourd des données de trading (synchronisation, graphiques) s&apos;effectue sur une infrastructure serveur privée et propriétaire, gérée directement par l&apos;Éditeur.</p>
                        <p><strong>Droits de l&apos;utilisateur :</strong> L&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de modification, de portabilité et de suppression de ses données en contactant : [Votre email de contact, ex: support@mybestmetrics.com].</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">10. PROPRIÉTÉ INTELLECTUELLE</h3>
                        <p>Tous les éléments de l&apos;Application (code source, algorithmes de calcul, interface, graphismes, nom de domaine) sont la propriété exclusive de l&apos;Éditeur. Le reverse-engineering ou l&apos;extraction de données non autorisée est strictement interdit.</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">11. LOI APPLICABLE ET RÈGLEMENT DES LITIGES</h3>
                        <p>Les présentes CGV/CGU sont soumises à la loi française.</p>
                        <p>En cas de litige, l&apos;Utilisateur s&apos;adressera en priorité à l&apos;Éditeur pour tenter de trouver une solution amiable. À défaut, le litige sera soumis à la compétence exclusive des tribunaux français.</p>
                    </section>
                </article>
            </main>
        </div>
    );
}
