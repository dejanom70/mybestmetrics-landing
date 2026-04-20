import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { withMainAppQuery } from '@/lib/mainAppUrl';

export default function PricingSection() {
    const plans = useMemo(() => [
        {
            name: 'Starter',
            description: 'Pour découvrir la puissance de la data.',
            price: '0€',
            period: '/mois',
            features: [
                { text: '1 Compte de Trading', included: true },
                { text: 'Import Manuel .csv ou .html', included: true },
                { text: 'Dashboard Standard', included: true },
                { text: 'Market replay', included: false },
                { text: 'Pas de Synchro Auto', included: false }
            ],
            cta: 'Créer un compte',
            link: withMainAppQuery({}),
            highlighted: false
        },
        {
            name: 'Pro Annuel',
            description: '2 mois offerts pour les visionnaires.',
            price: '79€',
            period: '/an',
            badge: 'Le plus populaire',
            features: [
                { text: 'Synchronisation Auto (MT4/MT5/cTrader/TradeLocker)', included: true, bold: true },
                { text: 'Comptes Illimités', included: true },
                { text: 'Analyse IA Avancée', included: true },
                { text: 'Dashboard 100% Personnalisable', included: true },
                { text: 'Market replay', included: true },
                { text: '2 mois offerts', included: true, highlight: true }
            ],
            cta: 'Passer au niveau supérieur',
            link: withMainAppQuery({ checkout: 'pro', plan: 'annual' }),
            highlighted: true
        },
        {
            name: 'Pro Mensuel',
            description: 'Pour les traders actifs qui veulent progresser.',
            price: '7.90€',
            period: '/mois',
            features: [
                { text: 'Tout le contenu du plan PRO', included: true, bold: true },
                { text: 'Backtesting multi-écran', included: true },
                { text: 'Thème personnalisable (votre journal, vos couleurs)', included: true },
                { text: 'Support Prioritaire', included: true }
            ],
            cta: 'Abonnement mensuel',
            link: withMainAppQuery({ checkout: 'pro', plan: 'monthly' }),
            highlighted: false
        }
    ], []);
    return (
        <section id="pricing" className="py-12 md:py-24 bg-[#0a0b1e] relative scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f24] to-[#0a0b1e]"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-4">
                        Un investissement pour<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">votre réussite.</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg px-4">
                        Combien vous coûte une seule erreur de trading ? Probablement plus que le prix de notre abonnement annuel.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 md:p-8 rounded-xl md:rounded-2xl border flex flex-col relative ${
                                plan.highlighted 
                                    ? 'bg-[#1a1d3a] border-purple-500/30 transform md:-translate-y-4 shadow-2xl' 
                                    : 'bg-[#11132b] border-gray-800'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="mb-3 md:mb-4">
                                <h3 className="text-lg md:text-xl font-bold text-white">{plan.name}</h3>
                                <p className={`text-xs md:text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                            </div>
                            <div className="mb-4 md:mb-6">
                                <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                                <span className={plan.highlighted ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
                            </div>
                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start text-xs md:text-sm ${
                                        feature.included ? (plan.highlighted ? 'text-white' : 'text-gray-300') : 'text-gray-500'
                                    }`}>
                                        <svg 
                                            className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0 mt-0.5 ${
                                                feature.included 
                                                    ? feature.highlight ? 'text-green-500' : (plan.highlighted ? 'text-purple-400' : 'text-green-500')
                                                    : ''
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d={feature.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
                                            />
                                        </svg>
                                        <span className={feature.bold ? 'font-semibold' : ''}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href={plan.link} 
                                className={`w-full block text-center py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition ${
                                    plan.highlighted
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105 duration-300'
                                        : 'border border-gray-600 text-white hover:bg-gray-800'
                                }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}