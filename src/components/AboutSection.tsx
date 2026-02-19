"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="sobre" className="py-48 px-10 bg-white selection:bg-primary-bronze selection:text-white">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-accent-gold/60">A Clínica</h2>
                        <h3 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none">
                            Excelência <br /> Nutricional.
                        </h3>
                    </div>
                    <div className="lg:col-span-7 pt-12 lg:pt-20">
                        <p className="text-2xl text-deep-charcoal/60 font-serif leading-relaxed italic max-w-2xl">
                            "Focamos na deteção e restabelecimento de desajustes nutricionais que
                            alteram o funcionamento pleno do seu organismo, priorizando a longevidade
                            e performance real."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-primary-bronze/10 pt-16">
                    {[
                        { title: "Metodologia", desc: "Análise bioquímica profunda e individualização baseada em dados concretos do organismo." },
                        { title: "Tecnologia", desc: "Uso do InBody 270 para bioimpedância de precisão e suporte contínuo via plataforma digital." },
                        { title: "Propósito", desc: "Capacitar pacientes a atingirem o equilíbrio orgânico através de hábitos sustentáveis." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-6"
                        >
                            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-primary-bronze">{item.title}</h4>
                            <p className="text-sm text-deep-charcoal/50 leading-relaxed font-sans">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
