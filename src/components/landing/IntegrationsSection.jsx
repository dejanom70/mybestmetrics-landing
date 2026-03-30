import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
    { name: 'MT4', label: 'MetaTrader 4', color: 'blue' },
    { name: 'MT5', label: 'MetaTrader 5', color: 'green' },
    { name: 'cTrader', label: 'cTrader', color: 'purple' },
    { name: 'TL', label: 'TradeLocker', color: 'pink' }
];

export default function IntegrationsSection() {
    return (
        <section className="py-12 md:py-24 bg-[#0a0b1e] relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
                        Fini la saisie manuelle.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tout est automatique.</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg px-4">
                        Connectez vos comptes de trading en quelques secondes. MyBestMetrics récupère votre historique et synchronise vos nouveaux trades en temps réel. Économisez 2h de journalisation par semaine.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12">
                    {platforms.map((platform, index) => (
                        <motion.div 
                            key={platform.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#11132b] border border-gray-800 hover:border-purple-500/50 transition-all text-center"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                <span className="text-lg md:text-2xl font-bold text-purple-400">{platform.name}</span>
                            </div>
                            <h3 className="text-white font-semibold text-sm md:text-base">{platform.label}</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-1">{platform.name === 'TL' ? 'Nouveau' : 'Synchro Auto'}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}