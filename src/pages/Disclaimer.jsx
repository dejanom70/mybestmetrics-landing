import React from 'react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white">
            <div className="border-b border-gray-800 bg-[#050614]/90 backdrop-blur-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-sm md:text-base font-bold tracking-wide">MyBestMetrics - Disclaimer</h1>
                    <Link to="/" className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>

            {/* Decorative gradients */}
            <div className="relative">
                <div className="absolute left-0 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-amber-500/10 to-orange-600/10 blur-[110px] rounded-full pointer-events-none"></div>
                <div className="absolute right-0 top-1/3 w-[260px] md:w-[420px] h-[260px] md:h-[420px] bg-gradient-to-tr from-red-600/10 to-pink-600/10 blur-[110px] rounded-full pointer-events-none"></div>

                <main className="container mx-auto px-4 md:px-6 py-10 md:py-14 relative z-10">
                    <article className="max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#11132b]/60 p-5 md:p-8 backdrop-blur-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] md:text-xs font-bold tracking-wide uppercase mb-4">
                            <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                            </svg>
                            Avertissements importants
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                            DISCLAIMER
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm md:text-base">
                            Veuillez lire attentivement les avertissements ci-dessous avant d&apos;utiliser MyBestMetrics ou tout
                            service de trading associé.
                        </p>

                        {/* Section 1 - Risk */}
                        <section className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 p-5 md:p-6">
                            <div className="flex items-start gap-3 mb-3">
                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            </div>
                                <h3 className="text-white text-lg md:text-xl font-semibold pt-1">
                                    Avertissement relatif aux risques
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Les opérations sur les marchés à terme et les marchés des changes comportent des risques
                                importants et ne conviennent pas à tous les investisseurs. Un investisseur peut potentiellement
                                perdre la totalité ou une partie de son investissement initial. Le capital-risque est l&apos;argent
                                que l&apos;on peut perdre sans mettre en péril sa sécurité financière ou son style de vie. Seul le
                                capital-risque doit être utilisé pour la négociation et seules les personnes disposant d&apos;un
                                capital-risque suffisant doivent envisager de négocier. Les performances passées ne sont pas
                                nécessairement indicatives des résultats futurs.
                            </p>
                        </section>

                        {/* Section 2 - Hypothetical performance */}
                        <section className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 md:p-6">
                            <div className="flex items-start gap-3 mb-3">
                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                            </div>
                                <h3 className="text-white text-lg md:text-xl font-semibold pt-1">
                                    Avertissement relatif aux performances hypothétiques
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Les résultats des performances hypothétiques ont de nombreuses limitations inhérentes, dont
                                certaines sont décrites ci-dessous. Aucune déclaration n&apos;est faite selon laquelle un compte
                                réalisera ou est susceptible de réaliser des profits ou des pertes similaires à ceux indiqués ;
                                en fait, il existe souvent des différences marquées entre les résultats de performance
                                hypothétiques et les résultats réels obtenus par la suite par un programme de trading
                                particulier. L&apos;une des limites des résultats de performance hypothétiques est qu&apos;ils sont
                                généralement préparés avec le bénéfice du recul. De plus, la négociation hypothétique n&apos;implique
                                pas de risque financier, et aucun résultat de négociation hypothétique ne peut complètement
                                rendre compte de l&apos;impact du risque financier de la négociation réelle. Par exemple, la
                                capacité à supporter les pertes ou à adhérer à un programme de négociation particulier malgré
                                les pertes de négociation sont des points importants qui peuvent également affecter négativement
                                les résultats de négociation réels. Il existe de nombreux autres facteurs liés aux marchés en
                                général ou à la mise en œuvre d&apos;un programme de trading spécifique qui ne peuvent pas être
                                entièrement pris en compte dans la préparation de résultats de performance hypothétiques et qui
                                peuvent tous avoir un impact négatif sur les résultats de trading.
                            </p>
                        </section>

                        {/* Section 3 - Live Trade Room */}
                        <section className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 md:p-6">
                            <div className="flex items-start gap-3 mb-3">
                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            </div>
                                <h3 className="text-white text-lg md:text-xl font-semibold pt-1">
                                    Informations sur la Live Trade Room
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Cette présentation a un but éducatif uniquement et les opinions exprimées sont uniquement celles
                                du présentateur. Toutes les transactions présentées doivent être considérées comme hypothétiques
                                et ne doivent pas être reproduites dans un compte de trading réel.
                            </p>
                        </section>

                        {/* Section 4 - Testimonials */}
                        <section className="mt-6 rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 md:p-6">
                            <div className="flex items-start gap-3 mb-3">
                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                            </div>
                                <h3 className="text-white text-lg md:text-xl font-semibold pt-1">
                                    Avertissement relatif aux témoignages
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Les témoignages figurant sur ce site Web ne sont pas nécessairement représentatifs d&apos;autres
                                clients et ne constituent pas une garantie de performances ou de succès futurs.
                            </p>
                        </section>

                        {/* Bottom note */}
                        <div className="mt-10 pt-6 border-t border-gray-800">
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                                Pour plus d&apos;informations sur le cadre légal et l&apos;utilisation de MyBestMetrics, consultez
                                également nos{' '}
                                <Link to="/mentions-legales" className="text-blue-400 hover:text-blue-300 underline">
                                    Mentions légales
                                </Link>
                                , notre{' '}
                                <Link to="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 underline">
                                    Politique de confidentialité
                                </Link>{' '}
                                et nos{' '}
                                <Link to="/CGV-CGU" className="text-blue-400 hover:text-blue-300 underline">
                                    CGU / CGV
                                </Link>
                                .
                            </p>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
}
