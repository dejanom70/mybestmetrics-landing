import React from 'react';
import { motion } from 'framer-motion';

export default function TechSection() {
    return (
        <section className="py-16 md:py-24 bg-[#050614] relative overflow-hidden">
            {/* Effets de fond (Glow) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* En-tête de la section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm mb-6"
                    >
                        {/* LOGO TRADINGVIEW - TAILLE X2 (40px) */}
                        <svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <g clipPath="url(#clip_tv_large)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M115.055 72.5C115.055 79.8638 109.086 85.8333 101.722 85.8333C94.3583 85.8333 88.3888 79.8638 88.3888 72.5C88.3888 65.1362 94.3583 59.1667 101.722 59.1667C109.086 59.1667 115.055 65.1362 115.055 72.5ZM81.9999 59.7778H28.6667L28.6665 86.4444H55.3332V125.556H81.9999V59.7778ZM128.755 59.7778H159.333L131.778 125.556H101.111L128.755 59.7778Z" fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip_tv_large">
                                    <rect width="160" height="160" fill="white" transform="translate(10 10)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        
                        <span className="text-gray-300 text-sm font-bold tracking-widest uppercase">
                            Powered By TradingView
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Analyse de précision.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Propulsé par TradingView.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Ne changez pas vos habitudes. Retrouvez l'interface graphique n°1 au monde directement dans votre journal pour vos sessions de Backtesting et de Replay.
                    </motion.p>
                </div>

                {/* Grille des fonctionnalités TradingView */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Carte 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0a0b1e] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Image au survol */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-[#0a0b1e]/90 to-[#0a0b1e]/70 z-10"></div>
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f2877a6fd077e20c26678/16fa12b8c_indicators-and-tools.png" 
                                alt="Outils de dessin trading" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Contenu */}
                        <div className="relative z-20">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Outils de Dessin Familiers</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Fibonacci, Long/Short Position, Elliott Waves... Utilisez exactement les mêmes outils que sur votre plateforme d'analyse habituelle.
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#0a0b1e] border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Image au survol */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-[#0a0b1e]/90 to-[#0a0b1e]/70 z-10"></div>
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f2877a6fd077e20c26678/64d46e8d4_strategy.png" 
                                alt="Indicateurs techniques trading" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Contenu */}
                        <div className="relative z-20">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Indicateurs Techniques</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Accédez à une bibliothèque complète d'indicateurs (RSI, MACD, Moyennes Mobiles) pour reproduire votre stratégie à l'identique.
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#0a0b1e] border border-gray-800 p-8 rounded-2xl hover:border-green-500/30 transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Image au survol */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-[#0a0b1e]/90 to-[#0a0b1e]/70 z-10"></div>
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f2877a6fd077e20c26678/42e90dbc8_economic-calendar.png" 
                                alt="Performance et rapidité" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Contenu */}
                        <div className="relative z-20">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Performance Native</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Profitez de la fluidité légendaire du moteur TradingView, couplée à vos données historiques pour un Backtesting ultra-rapide.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Lien d'attribution OBLIGATOIRE (Centré et stylisé) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a 
                        href="https://www.tradingview.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium group"
                    >
                        <span>Charts by TradingView</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}