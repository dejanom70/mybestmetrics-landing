import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - Politique de confidentialité</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <article className="max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        POLITIQUE DE CONFIDENTIALITÉ ET DE PROTECTION DES DONNÉES
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">Dernière mise à jour : [Date]</p>

                    <section className="mt-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            La présente Politique de Confidentialité a pour but de vous informer de manière transparente sur la
                            façon dont MyBestMetrics (ci-après « l&apos;Application » ou « Nous ») collecte, utilise, stocke et
                            protège vos données personnelles, conformément au Règlement Général sur la Protection des Données
                            (RGPD - Règlement UE 2016/679).
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">1. RESPONSABLE DU TRAITEMENT</h3>
                        <p>
                            Le responsable du traitement des données est [Votre Prénom et Nom], exerçant sous le statut de
                            micro-entrepreneur, immatriculé(e) au RCS/RM de [Ville] sous le numéro SIRET [Votre numéro SIRET],
                            et dont le siège social est situé au [Votre adresse postale].
                        </p>
                        <p>
                            Pour toute question relative à vos données, vous pouvez nous contacter à l&apos;adresse suivante :
                            [support@mybestmetrics.com].
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">2. QUELLES DONNÉES COLLECTONS-NOUS ?</h3>
                        <p>Dans le cadre de l&apos;utilisation de l&apos;Application, nous limitons la collecte aux données strictement nécessaires à la fourniture de notre service :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Données d&apos;identité et de contact :</strong> Nom, Prénom, Adresse e-mail.</li>
                            <li><strong>Données de connexion et de sécurité :</strong> Mots de passe de votre compte MyBestMetrics (hachés).</li>
                            <li><strong>Données de trading (Synchronisation) :</strong> Numéros de comptes de trading, mots de passe de trading (MT4, MT5, etc.), historique des transactions, positions ouvertes, balance et statistiques de performance.</li>
                            <li><strong>Données de paiement :</strong> Historique de facturation. Note : Nous ne stockons jamais vos numéros de carte bancaire. Ces données sont gérées de manière sécurisée par notre prestataire de paiement (Stripe).</li>
                            <li><strong>Données d&apos;utilisation :</strong> Logs de navigation, utilisation des fonctionnalités de l&apos;Application (ex: requêtes à l&apos;Intelligence Artificielle), configuration de vos graphiques et journaux.</li>
                        </ul>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">3. COMMENT VOS IDENTIFIANTS DE TRADING SONT-ILS SÉCURISÉS ?</h3>
                        <p>
                            La sécurité de vos accès brokers est notre priorité absolue. Les identifiants et mots de passe de
                            vos comptes de trading (MT4/MT5) que vous renseignez pour la synchronisation sont fortement chiffrés
                            (cryptés) et stockés dans une base de données temporaire et isolée (Redis). L&apos;Éditeur de
                            l&apos;Application n&apos;a techniquement aucun moyen de lire ou de récupérer ces mots de passe en clair.
                        </p>
                        <p>
                            Par mesure de précaution supplémentaire, nous recommandons toujours à nos utilisateurs d&apos;utiliser
                            leur mot de passe « Investisseur » (Lecture seule) plutôt que leur mot de passe principal.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">4. POURQUOI COLLECTONS-NOUS VOS DONNÉES ? (FINALITÉS)</h3>
                        <p>Vos données sont traitées pour les finalités suivantes :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Fourniture du service :</strong> Synchroniser automatiquement vos historiques de trading, générer vos graphiques et calculer vos métriques de performance.</li>
                            <li><strong>Analyse par Intelligence Artificielle (IA) :</strong> Analyser vos habitudes de trading pour vous fournir des retours personnalisés via notre Chatbot ou l&apos;Analyse de compte.</li>
                            <li><strong>Gestion de l&apos;abonnement :</strong> Gérer la facturation, les paiements et le support client.</li>
                            <li><strong>Gamification (Optionnel) :</strong> Afficher vos performances dans les classements publics (Leaderboards) et vous attribuer des badges, uniquement si vous avez donné votre consentement explicite (Opt-in).</li>
                            <li><strong>Sécurité :</strong> Prévenir les fraudes, sécuriser vos accès et garantir la stabilité de nos serveurs de synchronisation (Workers).</li>
                        </ul>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">5. OÙ SONT HÉBERGÉES VOS DONNÉES ? (SOUS-TRAITANTS)</h3>
                        <p>
                            Nous utilisons une architecture hybride conçue pour maximiser la sécurité de vos données financières.
                            Nous faisons appel à des sous-traitants reconnus pour leur conformité au RGPD :
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Vercel (Europe) :</strong> Hébergement de l&apos;interface web (Front-end).</li>
                            <li><strong>Supabase :</strong> Gestion de l&apos;authentification et stockage de vos données d&apos;identité (Nom, Prénom, E-mail).</li>
                            <li><strong>Serveurs Privés (MyBestMetrics) :</strong> Le cœur du traitement de vos données financières (historiques de trading, bases de données QuestDB, files d&apos;attente Redis et scripts de synchronisation) est hébergé sur nos propres serveurs privés sécurisés. Ces données ne sont partagées avec aucun tiers.</li>
                            <li><strong>Stripe :</strong> Traitement sécurisé des paiements.</li>
                            <li><strong>OVH (France) :</strong> Gestion du nom de domaine.</li>
                        </ul>
                        <p>
                            Nous ne revendons jamais vos données personnelles ni vos données de trading à des tiers (ex:
                            courtiers, fonds d&apos;investissement, régies publicitaires).
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">6. COMBIEN DE TEMPS CONSERVONS-NOUS VOS DONNÉES ?</h3>
                        <p><strong>Compte Actif :</strong> Vos données sont conservées tant que votre compte est actif.</p>
                        <p><strong>Compte Résilié / Inactif :</strong> Si vous résiliez votre abonnement ou supprimez votre compte, nous conservons vos données de trading (historique, positions, analyses) pendant une durée de un (1) mois afin de faciliter une éventuelle réactivation de votre part. Passé ce délai strict de 1 mois, l&apos;intégralité de vos données de trading est définitivement et irréversiblement supprimée de nos serveurs. Vos données de facturation sont conservées selon les durées légales en vigueur (généralement 10 ans à des fins comptables).</p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">7. INTELLIGENCE ARTIFICIELLE ET CONFIDENTIALITÉ</h3>
                        <p>
                            MyBestMetrics utilise des modèles d&apos;Intelligence Artificielle pour analyser vos performances. Les
                            données transmises à ces modèles sont anonymisées autant que possible et servent uniquement à générer
                            vos rapports personnels. Vos données de trading ne sont pas utilisées pour entraîner publiquement des
                            modèles d&apos;IA tiers de manière à ce qu&apos;elles puissent être réutilisées pour d&apos;autres utilisateurs.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">8. QUELS SONT VOS DROITS ?</h3>
                        <p>Conformément à la réglementation européenne (RGPD), vous disposez des droits suivants sur vos données personnelles :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Droit d&apos;accès :</strong> Connaître les données que nous possédons sur vous.</li>
                            <li><strong>Droit de rectification :</strong> Modifier des données inexactes.</li>
                            <li><strong>Droit à l&apos;effacement (Droit à l&apos;oubli) :</strong> Demander la suppression totale de votre compte et de vos données de nos serveurs avant le délai de 1 mois.</li>
                            <li><strong>Droit à la portabilité :</strong> Récupérer vos données de trading dans un format lisible.</li>
                            <li><strong>Droit de retrait du consentement :</strong> Vous désinscrire à tout moment des fonctionnalités publiques (Classements) ou des newsletters.</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, vous pouvez effectuer la majorité de ces actions directement depuis les
                            paramètres de votre compte sur l&apos;Application. Pour toute demande spécifique, contactez-nous à :
                            [support@mybestmetrics.com]. Nous vous répondrons dans un délai maximum de 30 jours.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">9. COOKIES</h3>
                        <p>
                            L&apos;Application utilise des cookies strictement nécessaires à son bon fonctionnement (maintien de
                            votre session connectée, préférences de thème sombre/clair, sécurité de la plateforme). En utilisant
                            MyBestMetrics, vous acceptez l&apos;utilisation de ces cookies fonctionnels. Nous n&apos;utilisons pas de
                            cookies publicitaires invasifs.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">10. MODIFICATION DE LA POLITIQUE</h3>
                        <p>
                            Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment,
                            notamment pour l&apos;adapter aux évolutions législatives ou à l&apos;ajout de nouvelles fonctionnalités.
                            Vous serez informé(e) de toute modification substantielle par e-mail ou via une notification sur
                            l&apos;Application.
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
}
