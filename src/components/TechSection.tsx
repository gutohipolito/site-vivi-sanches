"use client";

import { motion } from "framer-motion";

export default function TechSection() {
    const steps = [
        { title: "Monitoramento", desc: "Controle hídrico e de suplementação em tempo real." },
        { title: "Conectividade", desc: "Chat direto para esclarecimento de dúvidas clínicas." },
        { title: "Resultados", desc: "Histórico de exames e bioimpedância integrados." }
    ];

    return (
        <section id="tecnologia" className="py-48 px-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="space-y-20">
                        <div className="space-y-8">
                            <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-accent-gold/60">Metodologia Digital</h2>
                            <h3 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-[0.9]">
                                Cuidado <br />
                                <span className="text-primary-bronze">Omnipresente.</span>
                            </h3>
                            <p className="text-xl text-deep-charcoal/50 font-sans leading-relaxed max-w-md">
                                A tecnologia InBody e nosso aplicativo exclusivo garantem que sua
                                estratégia nutricional esteja sempre acessível e pautada em dados.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-px h-12 bg-primary-bronze/20 group-hover:bg-accent-gold transition-colors"></div>
                                    <div className="space-y-2">
                                        <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-deep-charcoal">{step.title}</h4>
                                        <p className="text-xs uppercase tracking-widest text-deep-charcoal/30">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aspect-[3/4] bg-warm-alabaster border border-primary-bronze/5 flex items-center justify-center p-20 relative"
                    >
                        <div className="w-full h-full border-[0.5px] border-primary-bronze/20 absolute inset-10"></div>
                        <div className="relative z-10 text-center space-y-4">
                            <div className="text-[8px] uppercase tracking-[1em] font-black text-primary-bronze/30">Interface Digital</div>
                            <div className="font-serif text-3xl text-primary-bronze/60 italic">CLÍNICA SANCHES APP</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
