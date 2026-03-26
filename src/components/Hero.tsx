"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-[120px] lg:pt-[160px] pb-12 lg:pb-0 px-6 md:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 overflow-visible">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 space-y-8 text-center lg:text-left relative z-20"
            >
                <div className="space-y-4">
                    <div className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze opacity-80">Nutrição Especializada</div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-deep-charcoal leading-[0.9] tracking-tight">
                        Precisão <br />
                        <span className="text-transparent bg-clip-text bg-gradient-premium">Clínica</span>
                    </h1>
                </div>

                <div className="max-w-xl space-y-8 mx-auto lg:mx-0">
                    <div className="w-24 h-px bg-deep-charcoal/10 mx-auto lg:mx-0"></div>
                    <p className="text-lg text-deep-charcoal/60 leading-relaxed font-sans font-light">
                        Estratégias nutricionais personalizadas com base científica rigorosa para transformar seu metabolismo, saúde e performance.
                    </p>
                    <div className="flex gap-6 items-center justify-center lg:justify-start">
                        <Link href="/servicos" className="bg-gradient-premium text-white px-8 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:shadow-glow-gold hover:-translate-y-1 transition-all duration-500 rounded-full shadow-xl shadow-primary-bronze/20">
                            Ver Especialidades
                        </Link>
                        <Link href="https://wa.me/5511940057497" target="_blank" className="text-[10px] uppercase tracking-[0.4em] font-black text-deep-charcoal hover:text-accent-gold transition-colors border-b border-transparent hover:border-accent-gold pb-1">
                            Agendar
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Right Image with Architectural Anchor */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full relative flex justify-center lg:justify-end z-10"
            >
                {/* Soft ambient glow to blend with the background */}
                <div className="absolute top-1/2 left-[40%] lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accent-gold/10 rounded-full blur-[80px] -z-20 pointer-events-none"></div>

                {/* Elegant architectural shape to ground the portrait */}
                <div className="absolute bottom-0 w-[85%] max-w-[380px] lg:max-w-[450px] aspect-[4/5] bg-gradient-to-t from-warm-alabaster to-white border border-primary-bronze/10 rounded-t-[12rem] -z-10 shadow-2xl shadow-primary-bronze/5"></div>

                <Image
                    src="/images/clinica/vivi-img-hero.png"
                    alt="Dra. Vivian Sanches"
                    width={800}
                    height={1000}
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full max-w-md md:max-w-lg lg:max-w-[550px] h-auto object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] z-10"
                />
            </motion.div>
        </section>
    );
}
