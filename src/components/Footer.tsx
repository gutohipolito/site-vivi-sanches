"use client";

import { Instagram, Mail, Phone, MapPin, Clock, Apple, Grape, Map, Navigation } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const AppModal = dynamic(() => import("./AppModal"), { ssr: false });

export default function Footer() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    return (
        <footer className="bg-deep-charcoal text-warm-alabaster pt-32 pb-12 px-10 relative overflow-hidden">
            <AppModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />

            {/* Organic Watermarks - Distinct & Large */}
            <div className="absolute bottom-[-10%] right-[-5%] pointer-events-none transform rotate-12 z-0">
                <Image
                    src="/images/patterns/vivisanches-overlay.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[900px] h-auto object-contain opacity-[0.03]"
                />
            </div>

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif text-white tracking-wide">
                                VIVIAN SANCHES
                            </h3>
                            <p className="text-[10px] uppercase tracking-widest text-primary-bronze font-bold">
                                Clínica de Nutrição
                            </p>
                        </div>
                        <p className="text-sm text-warm-alabaster/60 font-sans leading-relaxed">
                            Excelência em nutrição clínica, esportiva e estética. Tecnologia e ciência a favor da sua melhor performance.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-accent-gold hover:bg-accent-gold hover:text-white transition-all duration-500 rounded-full text-white">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-primary-bronze pb-4 inline-block">Navegação</h4>
                        <ul className="space-y-4 text-xs uppercase tracking-widest font-bold text-warm-alabaster/50">
                            <li><a href="/clinica" className="hover:text-accent-gold transition-colors">A Clínica</a></li>
                            <li><a href="/servicos" className="hover:text-accent-gold transition-colors">Especialidades</a></li>
                            <li>
                                <button
                                    onClick={() => setIsAppModalOpen(true)}
                                    className="hover:text-accent-gold transition-colors text-left uppercase tracking-widest"
                                >
                                    App Exclusivo
                                </button>
                            </li>
                            <li><a href="/dra-vivian-sanches" className="hover:text-accent-gold transition-colors">Corpo Clínico</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-primary-bronze pb-4 inline-block">Fale Conosco</h4>
                        <ul className="space-y-4 text-sm font-sans text-warm-alabaster/60">
                            <li className="flex gap-3 items-start">
                                <Phone size={16} className="text-accent-gold shrink-0 mt-1" />
                                <span>
                                    <a href="tel:+551126685049" className="hover:text-white transition-colors block">(11) 2668-5049</a>
                                    <a href="https://wa.me/5511940057497" target="_blank" className="hover:text-white transition-colors block mt-1">(11) 94005-7497</a>
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <a href="mailto:contato@viviansanches.com.br" className="text-white/60 hover:text-white text-sm transition-colors">
                                    contato@viviansanches.com.br
                                </a>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Clock size={16} className="text-accent-gold shrink-0 mt-1" />
                                <span>Seg-Sex: 08h às 20h <br /> Sáb: 08h às 14h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Location */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-primary-bronze pb-4 inline-block">Endereço</h4>
                        <div className="space-y-4 text-sm font-sans text-warm-alabaster/60">
                            <div className="flex gap-3 items-start">
                                <MapPin size={16} className="text-accent-gold shrink-0 mt-1" />
                                <address className="not-italic">
                                    Alameda Caulim, 115 <br />
                                    Sala 126SAO, Torre Gate <br />
                                    Espaço Cerâmica <br />
                                    São Caetano do Sul - SP
                                </address>
                            </div>

                            <div className="flex flex-col gap-3 pt-4">
                                <a href="https://www.google.com/maps?ll=-23.624782,-46.581652&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=13882615468557937120" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-gold text-[10px] uppercase font-bold tracking-[0.2em] text-white transition-all group">
                                    <Map size={14} className="text-accent-gold group-hover:text-white transition-colors" />
                                    Google Maps
                                </a>
                                <a href="https://waze.com/ul?ll=-23.624782,-46.581652&navigate=yes" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-bronze text-[10px] uppercase font-bold tracking-[0.2em] text-white transition-all group">
                                    <Navigation size={14} className="text-primary-bronze group-hover:text-white transition-colors" />
                                    Waze
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/5 pt-8">
                    <div className="space-y-4 text-left">
                        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-warm-alabaster/40">
                            <a href="/politica-de-privacidade" className="hover:text-accent-gold transition-colors">Política de Privacidade</a>
                            <a href="/termos-de-uso" className="hover:text-accent-gold transition-colors">Termos de Uso</a>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-warm-alabaster/20 font-bold">
                            © 2026 Clínica Vivian Sanches. CNPJ: 28.559.176/0001-05
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] font-normal text-[#f0f0f0]">
                        <span>Desenvolvido por</span>
                        <a
                            href="https://asthros.com.br/?utm_source=viviansanches.com.br&utm_medium=footer&utm_campaign=site-institucional"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center group"
                        >
                            <Image
                                src="https://framerusercontent.com/images/VsYx2QVW5Y8IxBrQWgMgeUXXhhA.png"
                                alt="Asthros"
                                width={80}
                                height={15}
                                className="h-[15px] w-auto brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(180,255,0,0.6)] transition-all duration-500"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
