import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMainAppLoginUrl } from '@/lib/mainAppUrl';

export default function Navigation() {
    const loginUrl = getMainAppLoginUrl();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#0a0b1e]/95 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center">
            <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent pb-1 inline-block"
                style={{
                    backgroundImage: 'linear-gradient(110deg, #22d3ee 0%, #0000ff 25%, #f472b6 75%, #22d3ee 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'textShimmer 3s linear infinite',
                }}
                >
                MyBestMetrics
                {/* On injecte les keyframes directement ici pour que l'animation fonctionne */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes textShimmer {
                    to { background-position: -200% center; }
                    }
                `}} />
            </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300 text-sm font-medium">
                    <a href="#features" className="hover:text-white transition">Fonctionnalités</a>
                    <a href="#integrations" className="hover:text-white transition">Intégrations</a>
                    <a href="#pricing" className="hover:text-white transition">Tarifs</a>
                    <a href="#responsive-mobile" className="hover:text-white transition">Mobile</a>
                    <a href="#" className="opacity-50 cursor-not-allowed" title="Bientôt disponible">Blog</a>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href={loginUrl || '#'} className="text-gray-300 hover:text-white text-sm transition">
                        Connexion
                    </a>
                    <a href={loginUrl || '#'} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-sm font-semibold transition shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        Essai Gratuit
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2 touch-manipulation"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#11132b] border-t border-gray-800"
                >
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <a href="#features" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition py-2">Fonctionnalités</a>
                        <a href="#integrations" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition py-2">Intégrations</a>
                        <a href="#pricing" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition py-2">Tarifs</a>
                        <a href="#responsive-mobile" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition py-2">Mobile</a>
                        <div className="pt-4 border-t border-gray-800 space-y-3">
                            <a href={loginUrl || '#'} className="block w-full text-left text-gray-300 hover:text-white transition py-2">
                                Connexion
                            </a>
                            <a href={loginUrl || '#'} className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold">
                                Essai Gratuit
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
