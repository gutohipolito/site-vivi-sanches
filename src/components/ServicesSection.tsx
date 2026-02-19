"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Nutrição Clínica",
        desc: "Acompanhamento focado em detectar e restabelecer o equilíbrio orgânico através de bioquímica profunda."
    },
    {
        id: "02",
        title: "Nutrição Estética",
        desc: "Protocolos voltados à modulação do envelhecimento e melhoria qualitativa de pele e cabelos."
    },
    {
        id: "03",
        title: "Nutrição Esportiva",
        desc: "Otimização de performance e recuperação metabólica para o máximo desempenho físico."
    },
    {
        id: "04",
        title: "Reeducação",
        desc: "Transformação de hábitos pautada na ciência do comportamento alimentar e sustentabilidade."
    }
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-48 px-10 bg-warm-alabaster">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="space-y-6">
                        <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-bronze/40">Especialidades</h2>
                        <h3 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none">Áreas de <br />Atuação.</h3>
                    </div>
                    <p className="max-w-xs text-xs uppercase tracking-[0.2em] font-bold text-deep-charcoal/30 leading-relaxed text-right">
                        Protocolos clínicos pautados na integridade e excelência de resultados.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-px bg-primary-bronze/10 border-t border-b border-primary-bronze/10">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group py-20 bg-warm-alabaster hover:bg-white transition-colors duration-700 cursor-default flex items-start gap-12"
                        >
                            <span className="text-3xl font-serif text-accent-gold/40 group-hover:text-primary-bronze transition-colors">{s.id}</span>
                            <div className="space-y-6">
                                <h4 className="text-2xl font-serif text-deep-charcoal">{s.title}</h4>
                                <p className="text-base text-deep-charcoal/40 font-sans leading-relaxed max-w-sm">
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
