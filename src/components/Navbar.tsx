"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { navLinks, NavLinkItem } from "@/constants/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);



    return (
        <>
            <div className="fixed top-0 w-full z-50 px-6 pt-6 flex justify-center pointer-events-none">
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="w-full max-w-7xl bg-white/60 backdrop-blur-2xl px-6 py-4 lg:px-8 lg:py-4 flex justify-between items-center shadow-glow-gold pointer-events-auto rounded-[2rem] lg:rounded-full transition-all duration-500 hover:bg-white/70 hover:shadow-accent-gold/30 border border-white/40 relative"
                >
                    <Link href="/" className="flex items-center group pl-2 relative overflow-hidden rounded-lg">
                        <div className="relative">
                            <Image
                                src="/images/clinica/logo-clinica-sanches-v2.png"
                                alt="Clínica Sanches"
                                width={160}
                                height={40}
                                className="h-7 lg:h-9 w-auto object-contain transition-all duration-500"
                                priority
                            />
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-10">
                        {navLinks.map((link: NavLinkItem) => {
                            const isActive = pathname === link.href || (link.children?.some(child => pathname === child.href));
                            const hasChildren = link.children && link.children.length > 0;

                            return (
                                <div key={link.name} className="relative group/nav py-2">
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <Link
                                            href={link.href}
                                            className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent-gold ${isActive ? 'text-primary-bronze' : 'text-deep-charcoal/80 hover:text-primary-bronze'}`}
                                        >
                                            {link.name}
                                        </Link>
                                        {hasChildren && (
                                            <ChevronDown size={10} className={`transition-transform duration-300 group-hover/nav:rotate-180 ${isActive ? 'text-primary-bronze' : 'text-deep-charcoal/40'}`} />
                                        )}
                                    </div>

                                    {/* Premium Dropdown */}
                                    {hasChildren && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform group-hover/nav:translate-y-0 translate-y-2">
                                            <div className="bg-white/90 backdrop-blur-2xl border border-primary-bronze/10 rounded-2xl p-4 min-w-[200px] shadow-2xl shadow-primary-bronze/5">
                                                <div className="space-y-2">
                                                    {link.children?.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className={`block text-[10px] uppercase tracking-widest font-bold p-3 rounded-xl transition-all ${pathname === child.href ? 'bg-primary-bronze/10 text-primary-bronze' : 'text-deep-charcoal/60 hover:text-primary-bronze hover:bg-warm-alabaster'}`}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
                                className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-primary-bronze/10 border border-white/50 p-6 flex flex-col gap-2 lg:hidden overflow-hidden"
                            >
                                {navLinks.map((link: NavLinkItem) => {
                                    const isActive = pathname === link.href || (link.children?.some(child => pathname === child.href));
                                    const hasChildren = link.children && link.children.length > 0;

                                    return (
                                        <div key={link.name} className="space-y-1">
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center justify-between text-sm uppercase tracking-[0.2em] font-bold p-4 rounded-xl transition-all ${isActive ? 'bg-primary-bronze/10 text-primary-bronze' : 'text-deep-charcoal/80 hover:bg-warm-alabaster'}`}
                                            >
                                                {link.name}
                                            </Link>

                                            {hasChildren && (
                                                <div className="pl-4 space-y-1">
                                                    {link.children?.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className={`block text-xs uppercase tracking-[0.2em] font-bold p-4 rounded-xl transition-all ${pathname === child.href ? 'text-primary-bronze bg-primary-bronze/5' : 'text-deep-charcoal/50 hover:bg-warm-alabaster'}`}
                                                        >
                                                            • {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
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
