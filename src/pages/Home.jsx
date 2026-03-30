import React, { useState, useEffect } from 'react';
import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import DashboardSection from '@/components/landing/DashboardSection';
import TechSection from '@/components/landing/TechSection';
import PricingSection from '@/components/landing/PricingSection';
import VideoModal from '@/components/landing/VideoModal';
import { motion } from 'framer-motion';

export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState({ src: '', title: '' });

    useEffect(() => {
        document.title = 'MyBestMetrics - Journal de Trading Automatisé';
    }, []);

    const carouselImages = [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/547d468c8_img1.png',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/6cb2279ca_img2.png',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/88e520e36_img3.png',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/efd25b63f_img4.png',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/c6c21bcd4_img5.png',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/9180ef24a_img6.png'
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
            <section id="features" className="py-12 md:py-24 bg-[#0a0b1e] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
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
                                    onClick={() => openVideoModal('https://www.youtube.com/embed/ZJpqfZjHbMI', 'Démo: Personnalisation du Journal')}
                                    style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/c6c21bcd4_img5.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
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
                                    onClick={() => openVideoModal('', 'Démo: Personnalisation du Thème (PREMIUM) - Bientôt Disponible')}
                                    style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/547d468c8_img1.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
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

            {/* Replay Section */}
            <section className="py-12 md:py-24 bg-[#0d0f24] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
                                Avec notre module de <strong>Replay intégré</strong>, rejouez chaque tick de votre position comme si vous y étiez.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a1d3a] flex items-center justify-center border border-gray-700 shrink-0">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm md:text-base">Replay tick-par-tick</h4>
                                        <p className="text-xs md:text-sm text-gray-500">Visualisez l'hésitation du marché et votre réaction émotionnelle en temps réel.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

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
                                    onClick={() => openVideoModal('https://www.youtube.com/embed/IUjHLRIcdT0', 'Replay de Session (PREMIUM): EURUSD')}
                                    style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ecce9bafeaf6ac74736fbe/efd25b63f_img4.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
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
                    </div>
                </div>
                </section>

                <TechSection />

                <PricingSection />

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
                                <li><a href="#" className="hover:text-white transition">Mises à jour</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Légal</h4>
                            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-white transition">CGU / CGV</a></li>
                                <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
                                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
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

                        <div className="flex gap-3 md:gap-4">
                            <a href="#" className="text-gray-600 hover:text-white transition">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
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
        </div>
    );
}