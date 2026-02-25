"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

import { TEAM_MEMBERS } from "@/constants/team";

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-bronze/10 border border-primary-bronze/10">
                    {TEAM_MEMBERS.map((member, i) => (
                        <Link
                            key={i}
                            href={member.slug === "vivian-sanches" ? "/dra-vivian-sanches" : `/equipe/${member.slug}`}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 bg-white hover:bg-warm-alabaster transition-colors duration-700 space-y-8 h-full flex flex-col"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-warm-alabaster border border-primary-bronze/5">
                                    {member.image.includes("placeholder") ? (
                                        <div className="absolute inset-0 flex items-center justify-center text-primary-bronze/20">
                                            <User size={64} strokeWidth={1} />
                                        </div>
                                    ) : (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <h4 className="text-2xl font-serif text-deep-charcoal leading-tight">{member.name}</h4>
                                    <div className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze line-clamp-2">{member.role}</div>
                                </div>
                                <div className="w-12 h-px bg-primary-bronze/20 group-hover:w-full transition-all duration-1000"></div>
                                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-deep-charcoal/30">
                                    {member.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
