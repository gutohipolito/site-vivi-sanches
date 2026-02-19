"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "A Clínica", href: "/clinica" },
        { name: "Dra. Vivian", href: "/dra-vivian-sanches" },
        { name: "Serviços", href: "/servicos" },
        { name: "Dicas de Saúde", href: "/dicas-de-saude" },
        { name: "Contato", href: "/contato" }
    ];

    return (
        <>
            <div className="fixed top-0 w-full z-50 px-6 pt-6 flex justify-center pointer-events-none">
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="w-full max-w-7xl bg-white/60 backdrop-blur-2xl px-6 py-4 lg:px-8 lg:py-4 flex justify-between items-center shadow-glow-gold pointer-events-auto rounded-[2rem] lg:rounded-full transition-all duration-500 hover:bg-white/70 hover:shadow-accent-gold/30 border border-white/40 relative"
                >
                    <Link href="/" className="flex flex-col group pl-2">
                        <span className="text-lg lg:text-xl font-serif tracking-tight text-deep-charcoal font-bold leading-none group-hover:text-primary-bronze transition-colors duration-500">
                            DRA. VIVIAN SANCHES
                        </span>
                        <span className="text-[8px] lg:text-[9px] uppercase tracking-[0.3em] text-primary-bronze font-bold mt-1.5 opacity-80 pl-0.5">
                            Nutrição Estratégica
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            if (link.onClick) {
                                return (
                                    <button
                                        key={link.name}
                                        onClick={link.onClick}
                                        className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent-gold text-deep-charcoal/80 hover:text-primary-bronze`}
                                    >
                                        {link.name}
                                    </button>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent-gold ${isActive ? 'text-primary-bronze' : 'text-deep-charcoal/80 hover:text-primary-bronze'}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <Link
                        href="https://wa.me/5511940057497"
                        target="_blank"
                        className="hidden lg:flex bg-gradient-premium text-white px-6 py-3 uppercase text-[10px] font-bold tracking-[0.2em] hover:shadow-lg hover:shadow-accent-gold/40 hover:-translate-y-0.5 transition-all duration-500 rounded-full items-center gap-2"
                    >
                        <MessageCircle size={14} />
                        Agendar
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-deep-charcoal hover:text-primary-bronze transition-colors p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-primary-bronze/10 border border-white/50 p-6 flex flex-col gap-4 lg:hidden overflow-hidden"
                            >
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;

                                    if (link.onClick) {
                                        return (
                                            <button
                                                key={link.name}
                                                onClick={() => {
                                                    link.onClick?.();
                                                    setIsOpen(false);
                                                }}
                                                className={`text-sm uppercase tracking-[0.2em] font-bold p-4 rounded-xl transition-all text-left text-deep-charcoal/80 hover:bg-warm-alabaster`}
                                            >
                                                {link.name}
                                            </button>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-sm uppercase tracking-[0.2em] font-bold p-4 rounded-xl transition-all ${isActive ? 'bg-primary-bronze/10 text-primary-bronze' : 'text-deep-charcoal/80 hover:bg-warm-alabaster'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                <div className="h-px bg-primary-bronze/10 my-2"></div>

                                <Link
                                    href="https://wa.me/5511940057497"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-gradient-premium text-white px-6 py-4 uppercase text-xs font-bold tracking-[0.2em] shadow-lg rounded-xl flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={16} />
                                    Agendar Consulta
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>
        </>
    );
}
