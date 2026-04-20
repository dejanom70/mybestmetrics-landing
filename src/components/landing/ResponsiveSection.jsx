import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
    { title: 'Interface tactile', text: 'Gestes et navigation adaptés au pouce, sans compromis sur la densité d\'information.' },
    { title: 'Toutes les fonctionnalités', text: 'Journal, synchronisation, backtesting, replay, IA : le même moteur que sur desktop.' },
    { title: 'Performances fluides', text: 'Chargements et graphiques optimisés pour les petits écrans et les réseaux mobiles.' },
];

export default function ResponsiveSection() {
    return (
        <section id="responsive-mobile" className="py-14 md:py-24 bg-[#050614] relative overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-cyan-500/15 blur-[100px] rounded-full" />
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="w-full lg:w-1/2 space-y-5"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/35 bg-violet-500/10 text-violet-200 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                            Mobile-first
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            100% utilisable sur mobile.
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mt-1 md:mt-2">
                                Même puissance, partout.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                            L&apos;application est conçue pour le trader en déplacement : consultez vos métriques, pilotez vos sessions
                            et accédez à l&apos;ensemble des outils sans sacrifier l&apos;expérience.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {highlights.map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.08 * i }}
                                    className="flex gap-4 rounded-xl border border-white/5 bg-[#0a0b1e]/80 backdrop-blur-sm p-4 hover:border-violet-500/25 transition-colors"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300 text-sm font-bold">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
                                        <p className="text-gray-500 text-xs md:text-sm mt-1 leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-[320px]">
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative mx-auto aspect-[9/19] w-[78%] rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#151832] to-[#0a0b1e] p-2 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
                            >
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/40" />
                                <div className="mt-8 h-[calc(100%-2.5rem)] rounded-[1.35rem] border border-white/5 bg-[#0d1028] overflow-hidden flex flex-col">
                                    <div className="h-9 flex items-center justify-between px-3 border-b border-white/5 bg-black/20">
                                        <span className="h-2 w-12 rounded bg-white/10" />
                                        <span className="h-2 w-8 rounded bg-emerald-500/40" />
                                    </div>
                                    <div className="flex-1 p-3 space-y-2">
                                        <motion.div
                                            className="h-16 rounded-lg bg-gradient-to-r from-violet-600/30 to-blue-600/20 border border-white/5"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                        {[0.85, 0.65, 0.9].map((w, j) => (
                                            <div
                                                key={j}
                                                className="h-2 rounded bg-white/10"
                                                style={{ width: `${w * 100}%` }}
                                            />
                                        ))}
                                        <div className="grid grid-cols-3 gap-2 pt-2">
                                            {['PnL', 'Win', 'DD'].map((label) => (
                                                <div key={label} className="rounded-md bg-white/5 border border-white/5 p-2 text-center">
                                                    <div className="text-[9px] text-gray-500 uppercase tracking-wider">{label}</div>
                                                    <div className="mt-1 h-3 w-8 mx-auto rounded bg-cyan-500/30" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-12 border-t border-white/5 flex items-center justify-around px-2 bg-black/25">
                                        {[0, 1, 2, 3].map((k) => (
                                            <motion.span
                                                key={k}
                                                className="h-8 w-8 rounded-lg bg-white/5 border border-white/5"
                                                whileHover={{ scale: 1.08 }}
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: k * 0.35 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {[0, 1, 2].map((d) => (
                                    <motion.span
                                        key={d}
                                        className="h-1.5 w-1.5 rounded-full bg-violet-400/60"
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: d * 0.3 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
