import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoSrc, title }) {
    const isYoutubeEmbed = videoSrc?.includes('youtube.com/embed');
    
    // 1. On crée une référence pour accéder directement au lecteur vidéo
    const videoRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // 2. Fonction déclenchée dès que la vidéo est chargée et prête à jouer
    const handleVideoReady = () => {
        if (videoRef.current) {
            // Tu peux changer cette valeur (1.25, 1.5, 2.0...)
            videoRef.current.playbackRate = 1.5; 
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 md:p-4" 
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-7xl bg-[#0d0f24] rounded-lg md:rounded-2xl border border-gray-700 shadow-[0_0_40px_rgba(139,92,246,0.5)] overflow-hidden flex flex-col max-h-[95vh]" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={onClose}
                            className="absolute top-2 right-2 md:top-4 md:right-4 z-20 p-1.5 md:p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition touch-manipulation"
                            aria-label="Fermer"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <div className="bg-[#11132b] text-white text-xs md:text-base font-bold p-2 md:p-3 px-3 md:px-6 shrink-0 z-10">
                            {title}
                        </div>
                        
                        <div className="relative w-full aspect-video bg-black shrink-0">
                            {videoSrc ? (
                                isYoutubeEmbed ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={videoSrc}
                                        title={title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <video
                                        ref={videoRef} // 3. On attache la ref à la balise vidéo
                                        onCanPlay={handleVideoReady} // 4. On appelle la fonction quand elle est prête
                                        className="absolute inset-0 w-full h-full object-contain"
                                        src={videoSrc}
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                )
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0b1e]">
                                    <p className="text-gray-400 text-sm md:text-lg">Vidéo bientôt disponible</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}