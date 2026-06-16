import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { withMainAppQuery, withMainAppNext } from '@/lib/mainAppUrl';

export default function PricingSection() {
    const [billing, setBilling] = useState('monthly');

    const plans = useMemo(() => {
        const isAnnual = billing === 'annual';
        return [
            {
                name: 'Starter',
                description: 'Pour découvrir la puissance de la data.',
                price: '0€',
                period: '/mois',
                features: [
                    { text: '1 Compte de Trading', included: true },
                    { text: 'Import Manuel .csv ou .html', included: true },
                    { text: 'Dashboard Standard', included: true },
                    { text: '500 Mo de stockage (environ 5000 captures TradingView)', included: true },
                    { text: 'Market replay', included: false },
                    { text: 'Pas de Synchro Auto', included: false },
                ],
                cta: 'Créer un compte',
                link: withMainAppQuery({}),
                highlighted: false,
                badge: null,
            },
            {
                name: 'Pro Essentiel',
                description: isAnnual
                    ? 'Facturation annuelle — équivalent à 2 mois offerts.'
                    : 'Le socle pro pour progresser avec l’IA au quotidien.',
                originalPrice: isAnnual ? '129€' : '12,90€',
                price: isAnnual ? '79€' : '7,90€',
                period: isAnnual ? '/an' : '/mois',
                features: [
                    { text: 'Synchronisation Auto (MT4/MT5/cTrader/TradeLocker)', included: true, bold: true },
                    { text: 'Comptes illimités', included: true },
                    { text: 'Dashboard 100% personnalisable', included: true },
                    { text: 'Market replay', included: true },
                    { text: 'Analyse IA : 150 requêtes Chatbot / mois', included: true },
                    { text: 'Analyse IA : 30 analyses de positions / mois', included: true },
                    { text: '3 Go de stockage inclus', included: true },
                ],
                cta: isAnnual ? 'S’abonner (annuel)' : 'S’abonner (mensuel)',
                link: withMainAppNext(isAnnual ? '/Checkout?plan=plan1_annual' : '/Checkout?plan=plan1_monthly'),
                highlighted: true,
                badge: 'Le plus populaire',
            },
            {
                name: 'Pro Elite',
                description: isAnnual
                    ? 'Maximum de puissance, sans plafond IA ni stockage.'
                    : 'IA et stockage illimités, nouveautés en avant-première.',
                originalPrice: isAnnual ? '149€' : '14,90€',
                price: isAnnual ? '99€' : '9,90€',
                period: isAnnual ? '/an' : '/mois',
                features: [
                    { text: 'Tout Pro Essentiel', included: true, bold: true },
                    { text: 'Sans limite IA (Fair-use)', included: true },
                    { text: 'Stockage illimité', included: true },
                    { text: 'Accès anticipé aux nouveautés', included: true, highlight: true },
                    { text: 'Synchronisation Auto (MT4/MT5/cTrader/TradeLocker)', included: true },
                    { text: 'Comptes illimités & dashboard premium', included: true },
                ],
                cta: isAnnual ? 'S’abonner Elite (annuel)' : 'S’abonner Elite (mensuel)',
                link: withMainAppNext(isAnnual ? '/Checkout?plan=plan2_annual' : '/Checkout?plan=plan2_monthly'),
                highlighted: false,
                badge: 'Maximum',
            },
        ];
    }, [billing]);

    return (
        <section id="pricing" className="py-12 md:py-24 bg-[#0a0b1e] relative scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f24] to-[#0a0b1e]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-6 md:mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-4">
                        Un investissement pour<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        passer au niveau supérieur dans votre trading.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg px-4">
                        Choisissez la formule adaptée à votre usage de l’IA et à votre volume de données.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center gap-3 mb-8 md:mb-12">
                    <p className="text-gray-500 text-xs md:text-sm">Formule de facturation</p>
                    <div
                        className="inline-flex rounded-xl border border-gray-700 bg-[#11132b] p-1"
                        role="group"
                        aria-label="Mensuel ou annuel"
                    >
                        <button
                            type="button"
                            onClick={() => setBilling('monthly')}
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition ${
                                billing === 'monthly'
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Mensuel
                        </button>
                        <button
                            type="button"
                            onClick={() => setBilling('annual')}
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition ${
                                billing === 'annual'
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Annuel
                            <span className="block text-[10px] font-normal opacity-90 md:inline md:ml-1">
                                (2 mois offerts)
                            </span>
                        </button>
                    </div>
                    {billing === 'annual' && (
                        <p className="text-emerald-400/90 text-xs md:text-sm max-w-md text-center">
                            Tarifs annuels : même puissance qu’en mensuel, avec l’équivalent de <strong>2 mois gratuits</strong> sur
                            l’année.
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={`${plan.name}-${billing}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`p-6 md:p-8 rounded-xl md:rounded-2xl border flex flex-col relative ${
                                plan.highlighted
                                    ? 'bg-[#1a1d3a] border-purple-500/30 transform md:-translate-y-4 shadow-2xl'
                                    : plan.badge === 'Maximum'
                                      ? 'bg-[#11132b] border-amber-500/25 shadow-lg'
                                      : 'bg-[#11132b] border-gray-800'
                            }`}
                        >
                            {plan.badge && (
                                <div
                                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wide whitespace-nowrap ${
                                        plan.badge === 'Maximum'
                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                            : 'bg-gradient-to-r from-purple-500 to-blue-500'
                                    }`}
                                >
                                    {plan.badge}
                                </div>
                            )}
                            <div className="mb-3 md:mb-4">
                                <h3 className="text-lg md:text-xl font-bold text-white">{plan.name}</h3>
                                <p className={`text-xs md:text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                            </div>
                            <div className="mb-4 md:mb-6">
                                {plan.originalPrice && (
                                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1 justify-center">
                                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-emerald-400/90">
                                            Tarifs de lancement <br />
                                        </span>
                                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-gray-400/90">
                                            (valable jusqu'au 30 Octobre 2026)
                                        </span>
                                        
                                        
                                    </div>
                                )}
                                <span className="text-2xl md:text-2xl text-gray-500 line-through decoration-gray-500/80">
                                            {plan.originalPrice}   
                                        </span>
                                <span className="text-3xl md:text-4xl font-bold text-white justify-center"> {plan.price}</span>
                                <span className={plan.highlighted ? 'text-gray-400' : 'text-gray-500'} justify-center>{plan.period}</span>
                            </div>
                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`flex items-start text-xs md:text-sm ${
                                            feature.included
                                                ? plan.highlighted
                                                    ? 'text-white'
                                                    : 'text-gray-300'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        <svg
                                            className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0 mt-0.5 ${
                                                feature.included
                                                    ? feature.highlight
                                                        ? 'text-amber-400'
                                                        : plan.highlighted
                                                          ? 'text-purple-400'
                                                          : 'text-green-500'
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
                                                d={feature.included ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
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
                                        : plan.badge === 'Maximum'
                                          ? 'border border-amber-500/50 text-amber-100 bg-amber-500/10 hover:bg-amber-500/20'
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
