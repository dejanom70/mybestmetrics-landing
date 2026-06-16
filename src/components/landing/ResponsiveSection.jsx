import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const highlights = [
    { title: 'Interface tactile', text: 'Gestes et navigation adaptés au pouce, sans compromis sur la densité d\'information.' },
    { title: 'Toutes les fonctionnalités', text: 'Journal, synchronisation, backtesting, replay, IA : le même moteur que sur desktop.' },
    { title: 'Performances fluides', text: 'Chargements et graphiques optimisés pour les petits écrans et les réseaux mobiles.' },
];

// Tableau contenant les chemins de tes 4 captures d'écran
const mobileScreenshots = [
    '/img/mobile1.png',
    '/img/mobile2.png',
    '/img/mobile3.png',
    '/img/mobile4.png'
];

export default function ResponsiveSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effet pour changer d'image automatiquement toutes les 4 secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mobileScreenshots.length);
        }, 4000); // 4000ms = 4 secondes par image

        return () => clearInterval(timer);
    }, []);

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
                            {/* Le téléphone qui flotte */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative mx-auto aspect-[9/19] w-[78%] rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-[#151832] to-[#0a0b1e] p-2.5 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
                            >
                                {/* Poinçon de la caméra frontale */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-black z-30" />
                                
                                {/* Écran avec fondu enchaîné des captures */}
                                <div className="relative h-full w-full rounded-[1.4rem] overflow-hidden bg-[#0d1028] z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={currentImageIndex} // Important pour que Framer Motion détecte le changement
                                            src={mobileScreenshots[currentImageIndex]} 
                                            alt={`MyBestMetrics Screen ${currentImageIndex + 1}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }} // Vitesse du fondu
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Les 3 petits points indicateurs sous le téléphone */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {mobileScreenshots.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            currentImageIndex === index 
                                            ? 'w-4 bg-violet-400' 
                                            : 'w-1.5 bg-violet-400/30'
                                        }`}
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