import React from 'react';
import { motion } from 'framer-motion';
import { getMainAppLoginUrl } from '@/lib/mainAppUrl';

export default function Hero({ carouselImages, currentSlide, nextSlide, prevSlide }) {
    const loginUrl = getMainAppLoginUrl();
    return (
        <section className="relative pt-8 md:pt-16 pb-16 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-gray-300">Compatible MT4, MT5, cTrader & TradeLocker</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight px-2"
                >
                    Arrêtez de trader à l'aveugle. Devenez rentable avec la Data.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 mt-2">
                        MyBestMetrics.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-4"
                >
                    Le journal de trading automatisé propulsé par l'IA. Importez vos trades, analysez vos erreurs et boostez votre Winrate.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-20 px-4"
                >
                    <a href={loginUrl || '#'} className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white text-[#0a0b1e] font-bold text-sm md:text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Commencer l'essai gratuit
                    </a>
                    <a href="#pricing" className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-gray-700 bg-white/5 backdrop-blur-sm text-white font-medium text-sm md:text-lg hover:bg-white/10 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                        Voir les tarifs
                    </a>
                </motion.div>

                {/* Carousel Dashboard */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30"></div>
                    
                    <div className="relative rounded-lg md:rounded-xl shadow-2xl border border-gray-800 w-full overflow-hidden aspect-video group">
                        <div className="relative w-full h-full">
                            {carouselImages.map((img, index) => (
                                <img 
                                    key={index}
                                    src={img} 
                                    className={`absolute top-0 left-0 w-full h-full object-cover md:object-contain transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    alt={`Dashboard ${index + 1}`}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            ))}
                        </div>
                        
                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2.5 rounded-full bg-white/10 text-white transition-opacity duration-300 hover:bg-white/30 z-20 touch-manipulation"
                            aria-label="Image précédente"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2.5 rounded-full bg-white/10 text-white transition-opacity duration-300 hover:bg-white/30 z-20 touch-manipulation"
                            aria-label="Image suivante"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {}}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/50'
                                    }`}
                                    aria-label={`Aller à l'image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}