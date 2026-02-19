"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-[150px] lg:pt-[300px] pb-0 px-6 md:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 overflow-visible">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 space-y-8 text-center lg:text-left relative z-20 lg:-mt-[90px]"
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
                        Deteção e restabelecimento de desajustes nutricionais através de
                        uma abordagem científica rigorosa e individualização absoluta.
                    </p>
                    <div className="flex gap-6 items-center justify-center lg:justify-start">
                        <a href="/servicos" className="bg-gradient-premium text-white px-8 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:shadow-glow-gold hover:-translate-y-1 transition-all duration-500 rounded-full shadow-xl shadow-primary-bronze/20">
                            Ver Protocolos
                        </a>
                        <a href="https://wa.me/5511940057497" className="text-[10px] uppercase tracking-[0.4em] font-black text-deep-charcoal hover:text-accent-gold transition-colors border-b border-transparent hover:border-accent-gold pb-1">
                            Agendar
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full relative flex justify-center lg:justify-end z-10"
            >
                <Image
                    src="/images/clinica/capa-hero-vivi-sanches.png"
                    alt="Dra. Vivian Sanches"
                    width={800}
                    height={1000}
                    priority
                    quality={90}
                    className="w-[130%] max-w-none md:w-full lg:scale-[1.45] lg:origin-bottom-right drop-shadow-none opacity-90 object-contain"
                />
            </motion.div>
        </section>
    );
}
