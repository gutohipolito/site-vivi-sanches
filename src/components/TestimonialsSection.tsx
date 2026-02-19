"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Joelma Sarraf",
        text: "O tratamento está sendo maravilhoso! Melhorou minha pele, meu cabelo e minha energia corporal."
    },
    {
        name: "Bruna Cicolino",
        text: "Nutricionista competente e da melhor energia, ambiente incrível! Merece todo sucesso."
    },
    {
        name: "Marcela Lima",
        text: "Excelente clínica e uma ótima profissional. Atendimento competente e de alto padrão."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-48 px-10 bg-warm-alabaster">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-6 mb-32">
                    <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-bronze/40">Relatos</h2>
                    <h3 className="text-4xl md:text-6xl font-serif text-deep-charcoal">Voz de <span className="italic">Confiança.</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-12"
                        >
                            <p className="text-lg text-deep-charcoal/50 font-sans italic leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="space-y-2">
                                <span className="block text-xs uppercase tracking-[0.4em] font-black text-primary-bronze">{t.name}</span>
                                <span className="text-[8px] uppercase tracking-widest text-deep-charcoal/20 font-bold">Paciente Clínica</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
