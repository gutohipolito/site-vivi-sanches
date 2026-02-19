"use client";

import { motion } from "framer-motion";

const team = [
    { name: "Dr. Lucas Soares", role: "Clínica & Performance" },
    { name: "Dra. Vivian Sanches", role: "Nutrição Estratégica" }
];

export default function TeamSection() {
    return (
        <section id="equipe" className="py-48 px-10 bg-white">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="space-y-6">
                        <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-accent-gold/60">Profissionais</h2>
                        <h3 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none">Corpo <br /> Clínico.</h3>
                    </div>
                    <p className="max-w-sm text-sm text-deep-charcoal/40 font-sans leading-relaxed">
                        Nossa equipe combina expertise clínica e compromisso humano para um
                        atendimento de excelência pautado em resultados reais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-bronze/10 border border-primary-bronze/10">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-20 bg-white hover:bg-warm-alabaster transition-colors duration-700 space-y-12"
                        >
                            <div className="space-y-4">
                                <h4 className="text-3xl font-serif text-deep-charcoal">{member.name}</h4>
                                <div className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">{member.role}</div>
                            </div>
                            <div className="w-12 h-px bg-primary-bronze/20 group-hover:w-full transition-all duration-1000"></div>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-deep-charcoal/30">
                                Especialista em Nutrição de Precisão
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
