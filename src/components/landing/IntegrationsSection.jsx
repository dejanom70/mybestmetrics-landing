import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
    { name: 'MT4', label: 'MetaTrader 4', logo: '/account_logo/mt4.png' },
    { name: 'MT5', label: 'MetaTrader 5', logo: '/account_logo/mt5.png' },
    { name: 'cTrader', label: 'cTrader', logo: '/account_logo/ctrader.webp' },
    { name: 'TL', label: 'TradeLocker', logo: '/account_logo/tradelocker.webp' },
    { 
        name: 'Ninja', 
        label: 'NinjaTrader', 
        logo: '/account_logo/NinjaTrader.png',
        link: 'https://account.ninjatrader.com/register?introducingPartner=MyBestMetrics' 
    },
    { name: 'Tradovate', label: 'Tradovate', logo: '/account_logo/tradovate.png' }
];

export default function IntegrationsSection() {
    return (
        <section id="integrations" className="py-12 md:py-24 bg-[#0a0b1e] relative scroll-mt-24">
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-6 mb-12">
                    {platforms.map((platform, index) => {
                        // On définit si c'est Ninja pour appliquer les styles spécifiques
                        const isNinja = platform.name === 'Ninja';
                        
                        // Le composant de base devient un lien (a) si un lien existe, sinon une div
                        const Wrapper = platform.link ? 'a' : 'div';
                        const extraProps = platform.link ? { 
                            href: platform.link, 
                            target: "_blank", 
                            rel: "noopener noreferrer" 
                        } : {};

                        return (
                            <motion.div 
                                key={platform.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <Wrapper 
                                    {...extraProps}
                                    className={`block h-full p-4 md:p-2 rounded-xl md:rounded-2xl bg-[#11132b] border border-gray-800 hover:border-purple-500/50 transition-all text-center ${platform.link ? 'cursor-pointer' : ''}`}
                                >
                                    <div className=" overflow-visible w-12 h-12 md:w-16 md:h-16 mx-auto rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 overflow-hidden">
                                        <img
                                            src={platform.logo}
                                            alt={`${platform.label} logo`}
                                            // Ajout d'une condition scale-150 (ou 125) pour NinjaTrader
                                            className={`object-contain transition-transform ${isNinja ? 'w-[70px] h-[70px] md:w-[80px] md:h-[80px] scale-[2.5]' : 'w-10 h-10 md:w-16 md:h-16'}`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-white font-semibold text-sm md:text-base">{platform.label}</h3>
                                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                                        {isNinja || platform.name === 'Tradovate' ? 'Nouveau' : 'Synchro Auto'}
                                    </p>
                                </Wrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}