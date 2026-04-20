import React from 'react';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - Mentions légales</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <article className="max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        MENTIONS LÉGALES
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">Dernière mise à jour : [Date]</p>

                    <section className="mt-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la
                            Confiance dans l&apos;Économie Numérique (dite L.C.E.N.), il est porté à la connaissance des utilisateurs
                            et visiteurs de l&apos;application MyBestMetrics (accessible à l&apos;adresse mybestmetrics.com) les présentes
                            mentions légales.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">1. ÉDITEUR DU SITE (Propriétaire)</h3>
                        <p>L&apos;application MyBestMetrics et son site web sont édités par :</p>
                        <ul className="list-none space-y-2 pl-0">
                            <li><strong className="text-gray-200">Nom et Prénom :</strong> [Votre Prénom et Nom]</li>
                            <li><strong className="text-gray-200">Statut juridique :</strong> Micro-entrepreneur</li>
                            <li><strong className="text-gray-200">Nom commercial :</strong> MyBestMetrics</li>
                            <li><strong className="text-gray-200">Numéro SIRET :</strong> [Votre numéro SIRET ou &quot;En cours d&apos;immatriculation&quot;]</li>
                            <li><strong className="text-gray-200">Siège social :</strong> [Votre adresse postale ou l&apos;adresse de votre société de domiciliation]</li>
                            <li><strong className="text-gray-200">Contact e-mail :</strong> [support@mybestmetrics.com]</li>
                            <li><strong className="text-gray-200">Directeur de la publication :</strong> [Votre Prénom et Nom]</li>
                        </ul>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">2. HÉBERGEMENT ET INFRASTRUCTURE</h3>
                        <p>L&apos;architecture de l&apos;Application repose sur une infrastructure hybride sécurisée.</p>

                        <p className="font-semibold text-gray-200 pt-2">Hébergement du site web (Front-end) :</p>
                        <p>
                            Le site est hébergé par la société Vercel Inc.<br />
                            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
                            Site web :{' '}
                            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                                https://vercel.com
                            </a>
                        </p>

                        <p className="font-semibold text-gray-200 pt-2">Gestion du nom de domaine :</p>
                        <p>
                            Le nom de domaine mybestmetrics.com est enregistré chez OVH SAS.<br />
                            Adresse : 2 rue Kellermann, 59100 Roubaix, France.<br />
                            Site web :{' '}
                            <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                                https://www.ovh.com
                            </a>
                        </p>

                        <p className="font-semibold text-gray-200 pt-2">Traitement des données financières (Back-end &amp; Bases de données) :</p>
                        <p>
                            Le stockage des historiques de trading (via Supabase et QuestDB) ainsi que les serveurs
                            d&apos;orchestration (Workers de synchronisation) sont hébergés et gérés directement de manière sécurisée
                            et privée par l&apos;Éditeur, garantissant la confidentialité absolue des données de trading.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">3. PROPRIÉTÉ INTELLECTUELLE</h3>
                        <p>
                            L&apos;ensemble de ce site et de l&apos;Application relève de la législation française et internationale sur le
                            droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris
                            pour les documents téléchargeables, les représentations iconographiques, les algorithmes de calcul, la
                            structure des bases de données et le code source.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                            éléments du site, quel que soit le moyen ou le procédé utilisé, est formellement interdite, sauf
                            autorisation écrite préalable de l&apos;Éditeur. Toute exploitation non autorisée sera considérée comme
                            constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et
                            suivants du Code de Propriété Intellectuelle.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">4. AVERTISSEMENT FINANCIER (DISCLAIMER)</h3>
                        <p>
                            MyBestMetrics est un outil logiciel destiné exclusivement à l&apos;analyse statistique et à la tenue
                            d&apos;un journal de trading personnel.
                        </p>
                        <p>
                            L&apos;Éditeur n&apos;est pas un conseiller financier, ni un courtier, ni une société d&apos;investissement. Les
                            informations, analyses, et métriques fournies par l&apos;Application (y compris par les outils
                            d&apos;Intelligence Artificielle) ne constituent en aucun cas une recommandation d&apos;investissement, un
                            conseil financier, ou une incitation à acheter ou vendre des actifs financiers. Le trading de produits
                            à effet de levier (CFD, Forex, Cryptomonnaies) comporte un risque élevé de perte en capital.
                            L&apos;utilisateur est seul responsable de ses décisions d&apos;investissement.
                        </p>
                    </section>

                    <section className="mt-8 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h3 className="text-white text-lg md:text-xl font-semibold">5. DONNÉES PERSONNELLES ET COOKIES</h3>
                        <p>
                            L&apos;Éditeur s&apos;engage à ce que la collecte et le traitement de vos données, effectués à partir du site
                            mybestmetrics.com, soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la
                            loi Informatique et Libertés.
                        </p>
                        <p>
                            Pour connaître le détail de notre gestion de vos données personnelles, de vos mots de passe de trading
                            (strictement chiffrés) et de vos droits d&apos;accès et de suppression, veuillez consulter notre{' '}
                            <Link to="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 underline">
                                Politique de Confidentialité
                            </Link>
                            .
                        </p>
                        <p>
                            L&apos;Application utilise des cookies strictement nécessaires à son fonctionnement technique et à la
                            sécurité de votre session de connexion. En naviguant sur l&apos;Application, l&apos;Utilisateur accepte
                            l&apos;utilisation de ces cookies fonctionnels.
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
}
