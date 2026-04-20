import React, { useState, useEffect } from 'react';
import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import DashboardSection from '@/components/landing/DashboardSection';
import TechSection from '@/components/landing/TechSection';
import PricingSection from '@/components/landing/PricingSection';
import UpdatesSection from '@/components/landing/UpdatesSection';
import ResponsiveSection from '@/components/landing/ResponsiveSection';
import VideoModal from '@/components/landing/VideoModal';
import { motion } from 'framer-motion';

export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState({ src: '', title: '' });
    const [zoomedImage, setZoomedImage] = useState({ src: '', alt: '' });

    useEffect(() => {
        document.title = 'MyBestMetrics - Journal de Trading Automatisé';
    }, []);

    const carouselImages = [
        '/img/img1.png',
        '/img/img2.png',
        '/img/img3.png',
        '/img/img4.png',
        '/img/img5.png',
        '/img/img6.png',
        '/img/img7.png',
        '/img/img8.png',
        '/img/img9.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const openVideoModal = (videoSrc, title) => {
        setCurrentVideo({ src: videoSrc, title });
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideo({ src: '', title: '' });
    };

    const openImageModal = (src, alt) => {
        setZoomedImage({ src, alt });
    };

    const closeImageModal = () => {
        setZoomedImage({ src: '', alt: '' });
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="bg-[#0a0b1e] text-white overflow-x-hidden">
            <Navigation />
            <Hero 
                carouselImages={carouselImages}
                currentSlide={currentSlide}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
            />
            <IntegrationsSection />
            <DashboardSection />

            {/* Journal Personnalisable Section */}
            <section id="features" className="py-12 md:py-24 bg-[#0a0b1e] relative overflow-hidden scroll-mt-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative rounded-lg md:rounded-xl border border-gray-800 bg-[#050614] shadow-2xl overflow-hidden group">
                                <div 
                                    className="relative aspect-video w-full group cursor-pointer touch-manipulation" 
                                    onClick={() => openVideoModal('/video/journal.mp4', 'Démo: Personnalisation du Journal')}
                                    style={{ backgroundImage: "url('/img/img13.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
                                >
                                    <div className="absolute inset-0 bg-[#0a0b1e]/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-[#0a0b1e]/50">
                                        <div className="relative flex items-center justify-center">
                                            <span className="absolute inline-flex h-12 w-12 md:h-16 md:w-16 rounded-full bg-indigo-500 opacity-20 animate-ping"></span>
                                            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 space-y-4 md:space-y-6"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Votre Journal,<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Votre Logique.</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                Trop de données tuent l'analyse. Ne vous laissez plus noyer par des informations inutiles. 
                                MyBestMetrics vous permet de configurer votre tableau de journalisation exactement comme vous le souhaitez.
                            </p>
                            
                            <ul className="space-y-3 md:space-y-4 mt-4">
                                <li className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mt-0.5 md:mt-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Colonnes à la carte</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">Masquez les commissions, le swap ou la durée si vous n'en avez pas besoin. Gardez l'essentiel.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mt-0.5 md:mt-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Glisser-Déposer & Redimensionner</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">Réorganisez l'ordre des colonnes et ajustez leur largeur pour une lisibilité parfaite.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        
                    </div>
                </div>
            </section>

            {/* Thème Personnalisable Section */}
            <section className="py-12 md:py-24 relative bg-[#0a0b1e] overflow-hidden">
                <div className="absolute right-0 top-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-pink-600/20 to-purple-600/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative rounded-lg md:rounded-xl border border-gray-800 bg-[#050614] shadow-2xl overflow-hidden group">
                                <div 
                                    className="relative aspect-video w-full group cursor-pointer touch-manipulation" 
                                    onClick={() => openVideoModal('/video/personnalisation.mp4', 'Démo: Personnalisation du Thème (PREMIUM)')}
                                    style={{ backgroundImage: "url('/img/img6.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
                                >
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/60">
                                        <div className="relative flex items-center justify-center">
                                            <span className="absolute inline-flex h-12 w-12 md:h-16 md:w-16 rounded-full bg-purple-500 opacity-20 animate-ping"></span>
                                            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 space-y-4 md:space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                                Fonctionnalité Premium
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Une interface qui<br/> 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">vous ressemble.</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                Le trading est une activité intense. Vous passez des heures devant vos écrans. 
                                MyBestMetrics vous permet de créer un environnement visuel confortable et inspirant grâce à une personnalisation poussée.
                            </p>
                            
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 mt-0.5 md:mt-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Thèmes Clair & Sombre</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">Passez du mode "Focus Nuit" au mode "Bureau Jour" en un clic.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full bg-pink-500/10 text-pink-400 mt-0.5 md:mt-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Palette de couleurs sur mesure (Gains/Pertes)</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">Définissez vos couleurs pour les gains, les pertes et les accents graphiques. Créez votre propre identité visuelle.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Backtesting Multi-Ecran Section */}
            <section className="py-12 md:py-24 bg-[#0a0b1e] relative overflow-hidden">
                <div className="absolute left-0 top-1/3 w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-gradient-to-br from-cyan-600/20 to-blue-600/10 blur-[110px] rounded-full pointer-events-none"></div>
                <div className="absolute right-0 bottom-0 w-[260px] md:w-[420px] h-[260px] md:h-[420px] bg-gradient-to-tr from-indigo-600/15 to-purple-600/20 blur-[110px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 space-y-4 md:space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                                Nouveau module premium
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Backtesting multi-écran.<br />
                                
                            </h2>
                            <span className="text-transparent text-lg md:text-xl lg:text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Testez vite, apprenez mieux,
                                progressez avec méthode</span>
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                Reproduisez vos conditions réelles avec jusqu&apos;à 4 écrans synchronisés, vos indicateurs et vos dessins.
                                Créez plusieurs sessions, sauvegardez-les et reprenez exactement là où vous vous êtes arrêté.
                                Une calculatrice de trading intégrée vous aide aussi à calibrer vos entrées.
                            </p>

                            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 md:gap-4 pt-1">
                                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 px-4 py-3">
                                    <p className="text-cyan-300 text-lg md:text-xl font-bold">4</p>
                                    <p className="text-gray-400 text-xs md:text-sm">écrans max</p>
                                </div>
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 px-4 py-3">
                                    <p className="text-blue-300 text-lg md:text-xl font-bold">41</p>
                                    <p className="text-gray-400 text-xs md:text-sm">actifs CFD</p>
                                </div>
                                <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 px-4 py-3">
                                    <p className="text-indigo-300 text-lg md:text-xl font-bold">∞</p>
                                    <p className="text-gray-400 text-xs md:text-sm">sessions</p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 md:p-5">
                                <p className="text-xs uppercase tracking-wide text-indigo-300 font-semibold">Stack d&apos;outils</p>
                                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start gap-2"><span className="text-indigo-400">•</span><span>41 actifs CFD couvrant les classes majeures (forex majeurs/mineurs, indices, commodités, crypto.)</span></li>
                                    <li className="flex items-start gap-2"><span className="text-indigo-400">•</span><span>Sessions multiples avec sauvegarde/reprise</span></li>
                                    <li className="flex items-start gap-2"><span className="text-indigo-400">•</span><span>Calculatrice trading: lot, montant, pourcentage</span></li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="rounded-2xl border border-gray-800 bg-[#050614] p-3 md:p-4 shadow-2xl">
                                <div className="grid grid-cols-2 gap-2 md:gap-3">
                                    <div
                                        className="relative group rounded-xl overflow-hidden border border-gray-700 cursor-zoom-in"
                                        onClick={() => openImageModal('/img/backtest1.png', 'Backtesting multi-écran vue 1')}
                                    >
                                        <img src="/img/backtest1.png" alt="Backtesting multi-écran vue 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div
                                        className="relative group rounded-xl overflow-hidden border border-gray-700 cursor-zoom-in"
                                        onClick={() => openImageModal('/img/backtest2.png', 'Backtesting multi-écran vue 2')}
                                    >
                                        <img src="/img/backtest2.png" alt="Backtesting multi-écran vue 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div
                                        className="relative group rounded-xl overflow-hidden border border-gray-700 cursor-zoom-in"
                                        onClick={() => openImageModal('/img/backtest3.png', 'Backtesting multi-écran vue 3')}
                                    >
                                        <img src="/img/backtest3.png" alt="Backtesting multi-écran vue 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div
                                        className="relative group rounded-xl overflow-hidden border border-gray-700 cursor-zoom-in"
                                        onClick={() => openImageModal('/img/backtest4.png', 'Backtesting multi-écran vue 4')}
                                    >
                                        <img src="/img/backtest4.png" alt="Backtesting multi-écran vue 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                </div>

                                <div className="mt-3 md:mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    <div className="rounded-lg border border-gray-800 bg-[#0a0b1e] px-3 py-2 text-[10px] md:text-xs text-gray-300 text-center">Forex</div>
                                    <div className="rounded-lg border border-gray-800 bg-[#0a0b1e] px-3 py-2 text-[10px] md:text-xs text-gray-300 text-center">Indices</div>
                                    <div className="rounded-lg border border-gray-800 bg-[#0a0b1e] px-3 py-2 text-[10px] md:text-xs text-gray-300 text-center">Commodités</div>
                                    <div className="rounded-lg border border-gray-800 bg-[#0a0b1e] px-3 py-2 text-[10px] md:text-xs text-gray-300 text-center">Crypto</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Replay Section */}
            <section className="py-12 md:py-24 bg-[#0d0f24] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative rounded-lg md:rounded-xl border border-gray-800 bg-[#050614] shadow-2xl overflow-hidden">
                                <div 
                                    className="relative aspect-video bg-[#0a0b1e] w-full group cursor-pointer touch-manipulation" 
                                    onClick={() => openVideoModal('/video/replay.mp4', 'Replay de Session (PREMIUM): EURUSD')}
                                    style={{ backgroundImage: "url('/img/img12.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
                                >
                                    <div className="absolute inset-0 bg-[#0a0b1e]/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-[#0a0b1e]/60">
                                        <div className="relative flex items-center justify-center">
                                            <span className="absolute inline-flex h-16 w-16 md:h-20 md:w-20 rounded-full bg-blue-500 opacity-20 animate-ping"></span>
                                            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 space-y-6 md:space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                                <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                Fonctionnalité Premium
                            </div>
                            
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Ne devinez plus.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Revivez l'action.</span>
                            </h2>
                            
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                Pourquoi avez-vous pris ce trade ? Le graphique statique ne dit pas tout. 
                                Avec notre module de <strong>Replay intégré</strong>, rejouez chaque instant de votre position comme si vous y étiez.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a1d3a] flex items-center justify-center border border-gray-700 shrink-0">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Replay de vos positions</h4>
                                        <p className="text-xs md:text-sm text-gray-500">Visualisez l'hésitation du marché et votre réaction émotionnelle en temps réel.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
                </section>

                <TechSection />

                <PricingSection />

                <UpdatesSection />
                <ResponsiveSection />

            {/* Footer */}
            <footer className="bg-[#050614] border-t border-gray-900 pt-8 md:pt-16 pb-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                        <div className="md:col-span-2">
                            <div className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">MyBestMetrics</div>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm">
                                La plateforme de journalisation de trading nouvelle génération. 
                                Automatisez votre routine, comprenez vos erreurs et devenez enfin rentable grâce à la puissance des données.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Produit</h4>
                            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-500">
                                <li><a href="#features" className="hover:text-white transition">Fonctionnalités</a></li>
                                <li><a href="#integrations" className="hover:text-white transition">Intégrations</a></li>
                                <li><a href="#pricing" className="hover:text-white transition">Tarifs</a></li>
                                <li><a href="#responsive-mobile" className="hover:text-white transition">Mobile</a></li>
                                <li><a href="#mises-a-jour" className="hover:text-white transition">Mises à jour</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Légal</h4>
                            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-500">
                                <li><a href="/CGV-CGU" className="hover:text-white transition">CGU / CGV</a></li>
                                <li><a href="/politique-confidentialite" className="hover:text-white transition">Politique de confidentialité</a></li>
                                <li><a href="/mentions-legales" className="hover:text-white transition">Mentions légales</a></li>
                                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-900 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                            <p className="text-gray-600 text-[10px] md:text-xs text-center md:text-left">
                                © 2025 MyBestMetrics. Tous droits réservés.
                            </p>
                            
                            {/* --- AJOUT OBLIGATOIRE TRADINGVIEW --- */}
                            <a 
                                href="https://www.tradingview.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-white text-[10px] md:text-xs transition-colors flex items-center gap-1"
                            >
                                Charts by TradingView
                            </a>
                            {/* ------------------------------------- */}
                        </div>

                        <div className="flex gap-3 md:gap-4 items-center">
                            <a href="#" className="text-gray-600 hover:text-white transition" aria-label="X (ex-Twitter)">
                                <span className="sr-only">X</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-white transition" aria-label="Instagram">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-white transition" aria-label="Facebook">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-white transition" aria-label="TikTok">
                                <span className="sr-only">TikTok</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.13a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.56z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Compatibilité Section */}
            <div className="border-t border-white/5 bg-[#050614]">
                <div className="container mx-auto px-4 md:px-6 py-8">
                    <p className="text-center text-gray-600 text-[10px] md:text-xs mb-6 uppercase tracking-widest font-semibold">
                        Compatible avec l'écosystème du trader moderne
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        {/* Ici juste du texte stylisé pour éviter les logos si tu ne les as pas */}
                        <span className="text-sm md:text-lg font-bold text-gray-400">MetaTrader 4 & 5</span>
                        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                        <span className="text-sm md:text-lg font-bold text-gray-400">cTrader</span>
                        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                        <span className="text-sm md:text-lg font-bold text-gray-400">TradeLocker</span>
                        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                        <span className="text-sm md:text-lg font-bold text-gray-400">Prop Firms</span>
                    </div>
                </div>
            </div>

            <VideoModal 
                isOpen={showVideoModal}
                onClose={closeVideoModal}
                videoSrc={currentVideo.src}
                title={currentVideo.title}
            />

            {zoomedImage.src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm p-3 md:p-6 flex items-center justify-center"
                    onClick={closeImageModal}
                >
                    <button
                        onClick={closeImageModal}
                        className="absolute top-3 right-3 md:top-6 md:right-6 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 transition"
                        aria-label="Fermer l'image"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <img
                        src={zoomedImage.src}
                        alt={zoomedImage.alt}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </div>
    );
}