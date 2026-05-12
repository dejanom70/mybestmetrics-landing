import React from 'react';
import { motion } from 'framer-motion';

const exchanges = [
    {
        name: 'Binance',
        label: 'Binance Futures',
        logo: '/account_logo/binance.svg',
        status: 'available',
    },
    {
        name: 'Bybit',
        label: 'Bybit',
        logo: '/account_logo/bybit.svg',
        status: 'soon',
    },
    {
        name: 'OKX',
        label: 'OKX',
        logo: '/account_logo/okx.png',
        status: 'soon',
    },
    {
        name: 'Coinbase',
        label: 'Coinbase',
        logo: '/account_logo/coinbase.png',
        status: 'soon',
    },
];

export default function CryptoExchangesSection() {
    return (
        <section id="crypto-exchanges" className="py-12 md:py-24 bg-[#0a0b1e] relative overflow-hidden scroll-mt-24">
            {/* Decorative gradients */}
            <div className="absolute left-0 top-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-[260px] md:w-[420px] h-[260px] md:h-[420px] bg-gradient-to-tr from-cyan-500/10 to-blue-500/15 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-10 md:gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="absolute inset-0 bg-black-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <img
                            src="/crypto.png"
                            alt="Illustration de cryptomonnaies"
                            className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[620px] object-contain drop-shadow-[0_30px_80px_rgba(43,255,255,0.22)]"
                            loading="lazy"
                        />
                    </motion.div>

                    <div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-[10px] md:text-xs font-bold tracking-wide uppercase mb-4 md:mb-6">
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Nouveau — Crypto Futures
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4 leading-tight">
                        Vos trades crypto,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500">
                            synchronisés automatiquement.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg px-4">
                        MyBestMetrics s&apos;ouvre aux exchanges crypto futures. Connectez votre compte via votre clé API
                        et retrouvez vos positions, votre PnL et vos statistiques dans le même journal que vos comptes
                        forex et CFD.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {exchanges.map((exchange, index) => {
                        const isAvailable = exchange.status === 'available';

                        return (
                            <motion.div
                                key={exchange.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={isAvailable ? { y: -5, transition: { duration: 0.2 } } : {}}
                                className={`relative block h-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#11132b] border transition-all text-center ${
                                    isAvailable
                                        ? 'border-yellow-500/30 hover:border-yellow-500/60 shadow-[0_0_30px_-15px_rgba(234,179,8,0.4)]'
                                        : 'border-gray-800 opacity-60'
                                }`}
                            >
                                {isAvailable && (
                                    <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-300 text-[8px] md:text-[9px] font-bold tracking-wide uppercase">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        Live
                                    </span>
                                )}
                                {!isAvailable && (
                                    <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-700/40 border border-gray-700 text-gray-400 text-[8px] md:text-[9px] font-bold tracking-wide uppercase">
                                        Bientôt
                                    </span>
                                )}

                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 overflow-hidden">
                                    {exchange.logo ? (
                                        <img
                                            src={exchange.logo}
                                            alt={`${exchange.label} logo`}
                                            className="w-10 h-10 md:w-14 md:h-14 object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-gray-800/60 border border-gray-700 flex items-center justify-center text-gray-500 font-bold text-base md:text-lg">
                                            {exchange.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-white font-semibold text-sm md:text-base">{exchange.label}</h3>
                                <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                                    {isAvailable ? 'Synchro Auto' : 'En développement'}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech callouts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12"
                >
                    <div className="flex items-start gap-3 p-4 rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
                            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold">Clé API en lecture seule</h4>
                            <p className="text-xs text-gray-500 mt-1">Aucune autorisation de trading ou de retrait n&apos;est requise.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold">Historique &amp; positions live</h4>
                            <p className="text-xs text-gray-500 mt-1">Récupération complète de l&apos;historique et synchronisation automatique.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <svg 
                            className="w-4 h-4 text-cyan-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                            />
                        </svg>
                    </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold">Un seul journal unifié</h4>
                            <p className="text-xs text-gray-500 mt-1">Crypto, forex et indices analysés côte à côte avec les mêmes métriques.</p>
                        </div>
                    </div>
                </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
