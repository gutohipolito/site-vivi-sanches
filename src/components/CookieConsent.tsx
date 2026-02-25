"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 left-6 right-6 md:right-auto md:left-8 md:max-w-md z-[100]"
                >
                    <div className="bg-white/80 backdrop-blur-3xl border border-primary-bronze/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                        {/* Subtle background decoration */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-gold/5 rounded-full blur-2xl group-hover:bg-accent-gold/10 transition-colors"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze">
                                    <Cookie size={24} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-xl font-serif text-deep-charcoal tracking-tight">
                                    Sua privacidade importa
                                </h4>
                            </div>

                            <p className="text-sm text-deep-charcoal/60 leading-relaxed font-light">
                                Utilizamos cookies para personalizar conteúdos e melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
                                <Link
                                    href="/politica-de-privacidade"
                                    className="text-primary-bronze font-medium hover:underline underline-offset-4"
                                >
                                    Política de Privacidade
                                </Link>.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-4 rounded-full border border-primary-bronze/10 text-[10px] uppercase font-bold tracking-[0.2em] text-deep-charcoal/40 hover:bg-deep-charcoal hover:text-white transition-all duration-500"
                                >
                                    Recusar
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-4 rounded-full bg-gradient-premium text-[10px] uppercase font-bold tracking-[0.2em] text-white shadow-lg shadow-accent-gold/20 hover:-translate-y-1 transition-all duration-500"
                                >
                                    Aceitar Tudo
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-6 right-6 text-deep-charcoal/20 hover:text-deep-charcoal transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
