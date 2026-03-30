import React from 'react';
import { motion } from 'framer-motion';

export default function DashboardSection() {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden bg-[#0d0f24]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 space-y-4 md:space-y-6"
                    >
                        <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold tracking-wide uppercase">
                            100% Personnalisable
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            Votre Dashboard.<br/> 
                            Vos Règles.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                            Chaque trader est unique. Avec notre système de widgets "Drag & Drop", construisez l'interface qui correspond à votre style. Scalper, Swing Trader ou Investisseur ? Affichez uniquement ce qui compte pour vous.
                        </p>
                        <ul className="space-y-2 md:space-y-3 text-gray-300">
                            {[
                                'Plus de 20 widgets disponibles',
                                'Redimensionnez et organisez à volonté',
                                'Créez plusieurs templates (Scalping, Journal, Bilan)'
                            ].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-2 md:gap-3 text-xs md:text-sm"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-500/20 blur-[80px] md:blur-[100px] rounded-full"></div>
                        
                        <div className="relative grid grid-cols-2 gap-2 md:gap-4">
                            <motion.div 
                                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                                className="bg-[#1a1d3a] p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-700 shadow-xl transform rotate-[-2deg] transition duration-300"
                            >
                                <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold mb-1 md:mb-2">Win Rate</p>
                                <div className="flex items-end justify-between">
                                    <span className="text-xl md:text-3xl font-bold text-white">68%</span>
                                    <span className="text-green-400 text-xs md:text-sm">+2.4%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1 md:h-1.5 mt-2 md:mt-3 rounded-full overflow-hidden">
                                    <div className="bg-cyan-400 w-[68%] h-full rounded-full"></div>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                                className="bg-[#1a1d3a] p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-700 shadow-xl transform translate-y-4 md:translate-y-8 rotate-[2deg] transition duration-300"
                            >
                                <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold mb-1 md:mb-2">Profit Net</p>
                                <div className="flex items-end justify-between">
                                    <span className="text-xl md:text-3xl font-bold text-white">$4,250</span>
                                </div>
                                <div className="mt-2 flex gap-0.5 md:gap-1">
                                    <div className="h-4 md:h-6 w-1.5 md:w-2 bg-green-500 rounded-sm"></div>
                                    <div className="h-3 md:h-4 w-1.5 md:w-2 bg-green-500/50 rounded-sm"></div>
                                    <div className="h-5 md:h-8 w-1.5 md:w-2 bg-green-500 rounded-sm"></div>
                                    <div className="h-2 md:h-3 w-1.5 md:w-2 bg-red-500 rounded-sm"></div>
                                    <div className="h-3.5 md:h-5 w-1.5 md:w-2 bg-green-500 rounded-sm"></div>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                                className="col-span-2 bg-[#1a1d3a] p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-700 shadow-xl transform rotate-[1deg] transition duration-300"
                            >
                                <div className="flex justify-between items-center mb-2 md:mb-3">
                                    <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold">Calendrier</p>
                                    <span className="text-[10px] md:text-xs text-cyan-400 bg-cyan-400/10 px-1.5 md:px-2 py-0.5 rounded">Octobre</span>
                                </div>
                                <div className="grid grid-cols-7 gap-0.5 md:gap-1">
                                    {[20, 100, 60, 40, 100, 0, 100].map((intensity, i) => (
                                        <div key={i} className={`h-4 md:h-6 rounded ${
                                            intensity === 0 ? 'bg-gray-700' :
                                            intensity === 100 ? 'bg-green-500' :
                                            intensity === 60 ? 'bg-green-500/60' :
                                            intensity === 40 ? 'bg-red-500/40' :
                                            'bg-green-500/20'
                                        }`}></div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}