import React from 'react';
import { motion } from 'framer-motion';
import { getMainAppLoginUrl } from '@/lib/mainAppUrl';

export default function UpdatesSection() {
    const loginUrl = getMainAppLoginUrl();

    return (
        <section id="mises-a-jour" className="py-10 md:py-14 bg-[#0a0b1e] border-y border-gray-800/80 relative overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-4xl mx-auto text-center md:text-left"
                >
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-white">Mises à jour</h2>
                        <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
                            Les nouveautés et correctifs sont déployés régulièrement directement dans l&apos;application. Connectez-vous
                            pour profiter de la dernière version sans installation.
                        </p>
                    </div>
                        <a
                            href={loginUrl || '#'}
                            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-3 shadow-lg shadow-blue-900/30 transition"
                        >
                            Ouvrir l&apos;application
                        </a>
                </motion.div>
            </div>
        </section>
    );
}
