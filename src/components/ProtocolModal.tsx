"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";

interface ProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
    protocol: {
        title: string;
        content: string[];
        image: string;
        tagline: string;
    } | null;
}

export default function ProtocolModal({ isOpen, onClose, protocol }: ProtocolModalProps) {
    if (!protocol) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-deep-charcoal/60 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Image Sidebar */}
                        <div className="hidden md:block w-1/3 relative bg-warm-alabaster">
                            <Image
                                src={protocol.image}
                                alt={protocol.title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary-bronze/10 mix-blend-multiply"></div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 p-8 md:p-16 overflow-y-auto">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full border border-deep-charcoal/10 flex items-center justify-center text-deep-charcoal hover:bg-deep-charcoal hover:text-white transition-all duration-300 z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="max-w-xl">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze mb-4 block">
                                    Protocolo Injetável
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif text-deep-charcoal mb-8 leading-tight">
                                    {protocol.title}
                                </h2>

                                <div className="space-y-6">
                                    {protocol.content.map((paragraph, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            {idx === protocol.content.length - 1 ? (
                                                <div className="mt-4 p-6 bg-warm-alabaster border-l-2 border-accent-gold rounded-r-2xl italic text-deep-charcoal/80 font-serif">
                                                    {paragraph}
                                                </div>
                                            ) : (
                                                <p className="text-deep-charcoal/60 leading-relaxed font-sans font-light text-lg">
                                                    {paragraph}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-12 border-t border-primary-bronze/10">
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-deep-charcoal mb-6">Incluso no Protocolo</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Avaliação Bioquímica",
                                            "Acompanhamento Personalizado",
                                            "Análise de Bioimpedância",
                                            "Suporte via Aplicativo"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-primary-bronze/10 flex items-center justify-center text-primary-bronze shrink-0">
                                                    <Check size={12} />
                                                </div>
                                                <span className="text-xs text-deep-charcoal/70 uppercase tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <a
                                        href="https://wa.me/5511940057497"
                                        target="_blank"
                                        className="inline-flex items-center gap-4 bg-deep-charcoal text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-black hover:bg-primary-bronze transition-colors shadow-xl shadow-deep-charcoal/20"
                                    >
                                        Agendar Consulta
                                        <Image src="/images/clinica/logo-clinica-sanches-v2.png" alt="" width={20} height={20} className="brightness-0 invert opacity-50" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
