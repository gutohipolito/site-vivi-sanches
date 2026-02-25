"use client";

import { Instagram, Phone, MapPin, Clock, Map, Navigation } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const AppModal = dynamic(() => import("./AppModal"), { ssr: false });

export default function Footer() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    return (
        <footer className="bg-deep-charcoal text-warm-alabaster pt-32 pb-12 px-10 relative overflow-hidden">
            <AppModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />

            {/* Organic Watermarks - Distinct & Large */}
            <div className="absolute bottom-[5%] right-[-5%] pointer-events-none transform rotate-12 z-0">
                <Image
                    src="/images/patterns/vivisanches-overlay.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[900px] h-auto object-contain opacity-[0.03]"
                />
            </div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Image
                                src="/images/clinica/logo-clinica-sanches-v2.png"
                                alt="Clínica Sanches"
                                width={200}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm text-warm-alabaster/60 font-sans leading-relaxed">
                            Prezamos sempre por um atendimento profissional e qualificado, contando com equipamentos modernos e tecnologia de ponta para garantir diagnósticos precisos e estratégias eficazes.
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
                            <li><Link href="/clinica" className="hover:text-accent-gold transition-colors">A Clínica</Link></li>
                            <li><Link href="/servicos" className="hover:text-accent-gold transition-colors">Especialidades</Link></li>
                            <li><Link href="/dicas-de-saude" className="hover:text-accent-gold transition-colors">Dicas de Saúde</Link></li>
                            <li><Link href="/contato" className="hover:text-accent-gold transition-colors">Contato</Link></li>
                            <li>
                                <button
                                    onClick={() => setIsAppModalOpen(true)}
                                    className="hover:text-accent-gold transition-colors text-left uppercase tracking-widest"
                                >
                                    App Exclusivo
                                </button>
                            </li>
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

                <div className="flex flex-col items-center justify-center gap-8 border-t border-white/5 pt-12 text-center">
                    <div className="space-y-6">
                        <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-warm-alabaster/40">
                            <Link href="/politica-de-privacidade" className="hover:text-accent-gold transition-colors">Política de Privacidade</Link>
                            <Link href="/termos-de-uso" className="hover:text-accent-gold transition-colors">Termos de Uso</Link>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-warm-alabaster/20 font-bold">
                            © 2026 Clínica Sanches. CNPJ: 28.559.176/0001-05
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-[13px] font-normal text-[#f0f0f0]">
                        <span className="opacity-40">Desenvolvido por</span>
                        <a
                            href="https://asthros.com.br/?utm_source=viviansanches.com.br&utm_medium=footer&utm_campaign=site-institucional"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center group"
                        >
                            <div
                                className="h-[15px] w-[80px] bg-white/80 group-hover:bg-[#dbfb36] group-hover:drop-shadow-[0_0_8px_#dbfb36] transition-all duration-500"
                                style={{
                                    maskImage: 'url(https://framerusercontent.com/images/VsYx2QVW5Y8IxBrQWgMgeUXXhhA.png)',
                                    WebkitMaskImage: 'url(https://framerusercontent.com/images/VsYx2QVW5Y8IxBrQWgMgeUXXhhA.png)',
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
