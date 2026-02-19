"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link"; // Ensure Link is imported
import Image from "next/image";

interface AppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AppModal({ isOpen, onClose }: AppModalProps) {
    if (!isOpen) return null;

    const benefits = [
        "Plano alimentar na palma da mão",
        "Chat e videoconferência com o nutri",
        "Registro de refeições no diário alimentar",
        "Alertas de hidratação e de refeições",
        "Receitas, listas de compras e materiais complementares",
        "Acompanhamento da sua evolução",
        "Loja integrada dos produtos recomendados pelo seu nutri"
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-deep-charcoal w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* Left Content (Text) */}
                            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                                {/* Subtle Background Pattern */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                                    <Image
                                        src="/images/patterns/vivisanches-overlay.png"
                                        alt=""
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-widest">
                                            <Smartphone size={14} />
                                            <span>Tecnologia Exclusiva</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                            Nutrição Inteligente <br />
                                            <span className="text-white/40">Na Palma da Sua Mão</span>
                                        </h2>
                                    </div>

                                    <ul className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3 text-warm-alabaster/80 text-sm md:text-base group">
                                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-500/30 transition-colors">
                                                    <Check size={12} className="text-green-400" />
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4">
                                        <Link
                                            href="https://wa.me/5511940057497"
                                            target="_blank"
                                            className="inline-flex items-center gap-3 bg-gradient-premium px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest text-xs hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-1 transition-all duration-300 group"
                                        >
                                            <span>Agendar Consulta</span>
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content (Image) */}
                            <div className="w-full md:w-[45%] bg-black/20 relative min-h-[300px] md:min-h-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-transparent to-transparent z-10 md:bg-gradient-to-l opacity-80" />
                                <Image
                                    src="/images/clinica/clinica_interior_luxury_1771467230428.png"
                                    alt="App Exclusivo Vivian Sanches"
                                    fill
                                    className="object-cover opacity-80 md:opacity-100"
                                />

                                {/* Floating Phone Mockup (Stylized) */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl skew-y-[-6deg] rotate-[-6deg] transform hover:rotate-0 hover:skew-y-0 transition-all duration-700 opacity-0 md:opacity-100 hidden md:block">
                                        {/* Screen Content Placeholder */}
                                        <div className="absolute inset-0 bg-deep-charcoal rounded-[2.5rem] overflow-hidden relative">
                                            <Image
                                                src="/images/clinica/vivi-home-site.jpg"
                                                alt="App Interface"
                                                fill
                                                className="object-cover opacity-50"
                                            />
                                            <div className="absolute inset-0 bg-deep-charcoal/40 backdrop-blur-sm flex items-center justify-center">
                                                <Smartphone size={64} className="text-white/20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
