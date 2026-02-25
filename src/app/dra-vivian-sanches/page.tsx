import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Award, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DraVivian() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Custom Header with Dra Vivian Image */}
            <section className="relative pt-40 pb-20 px-10 bg-warm-alabaster overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze opacity-80">
                                Nutricionista & Fundadora
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none tracking-tight">
                                Dra. Vivian Sanches
                            </h1>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal/40">
                                CRN 3 30798
                            </span>
                        </div>

                        <div className="w-24 h-px bg-primary-bronze/30"></div>

                        <h2 className="text-2xl font-serif italic text-deep-charcoal/60 leading-relaxed">
                            &quot;Minha missão é traduzir a complexidade bioquímica em hábitos simples e poderosos.&quot;
                        </h2>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="absolute inset-0 bg-gradient-premium rounded-full blur-[100px] opacity-20 transform translate-x-10 translate-y-10"></div>
                        <Image
                            src="/images/clinica/dravivian.png"
                            alt="Dra. Vivian Sanches"
                            width={500}
                            height={600}
                            className="relative z-10 w-full max-w-md drop-shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000 rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* Biography Section & Cards */}
            <section className="py-24 px-10 max-w-7xl mx-auto space-y-24">

                {/* 1. Biography Text (Full Width & Spaced) */}
                <div className="prose prose-lg text-deep-charcoal/70 font-sans mx-auto text-justify leading-relaxed max-w-none w-full flex flex-col gap-8">
                    <p>
                        Formada pela <strong className="text-deep-charcoal font-bold">Universidade Municipal de São Caetano do Sul</strong>, Vivian Sanches iniciou sua carreira na Nutrição como proprietária de redes de loja de suplementos alimentares. Atuou como <strong>funcionária pública</strong> na Prefeitura Municipal de São Caetano do Sul, com atendimentos domiciliares à população, incluindo pacientes em estado terminal, acamados via dieta enteral (através de sonda) e pacientes com quadros de dislipidemia.
                    </p>
                    <p>
                        Paralelamente, ministrava palestras na Área de Nutrição Esportiva, Suplementação, Gestação e Lactação e capacitava profissionais da área da saúde.
                    </p>
                    <p>
                        Atualmente, é dona de sua própria clínica, especializada em <strong className="text-primary-bronze font-bold">Nutrição Clínica, Estética e Esportiva</strong>, onde busca promover o <strong className="text-deep-charcoal font-bold">equilíbrio do corpo e mente</strong> de seus pacientes, visando a alimentação saudável, perda de gordura corporal com qualidade e ganho de massa muscular para uma melhora integral e uma <strong className="text-primary-bronze font-bold">mudança de vida efetiva</strong>.
                    </p>
                </div>

                {/* 2. Cards Grid (Side by Side) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Especializações Card */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-deep-charcoal/5 hover:shadow-glow-gold hover:-translate-y-2 transition-all duration-500 border border-primary-bronze/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Award size={120} strokeWidth={1} />
                        </div>
                        <div className="w-14 h-14 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze mb-8 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500 relative z-10">
                            <Award size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal mb-8 relative z-10">Especializações</h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Nutrição Clínica Funcional",
                                "Nutrição Esportiva e Performance",
                                "Modulação Estética e Anti-aging",
                                "Emagrecimento Estratégico"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-sm font-bold text-deep-charcoal/80 uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Filosofia Card */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-deep-charcoal/5 hover:shadow-glow-gold hover:-translate-y-2 transition-all duration-500 border border-primary-bronze/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Heart size={120} strokeWidth={1} />
                        </div>
                        <div className="w-14 h-14 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze mb-8 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500 relative z-10">
                            <Heart size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal mb-6 relative z-10">Filosofia</h3>
                        <p className="text-lg text-deep-charcoal/60 leading-relaxed font-sans relative z-10">
                            Acredita no <strong className="text-deep-charcoal font-medium">equilíbrio entre prazer e disciplina</strong>.
                        </p>
                        <p className="text-lg text-deep-charcoal/60 leading-relaxed font-sans mt-4 relative z-10">
                            Não prescreve dietas restritivas insustentáveis, mas sim reeducação alimentar fundamentada na densidade nutricional e na adequação metabólica, respeitando a <strong className="text-deep-charcoal font-medium">individualidade biológica</strong> de cada paciente.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-10 max-w-7xl mx-auto">
                <div className="bg-gradient-premium rounded-[3rem] p-12 md:p-24 text-center md:text-left relative overflow-hidden shadow-2xl shadow-accent-gold/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                                Que tal melhorar sua <br />
                                <span className="opacity-80 italic">qualidade de vida?</span>
                            </h2>
                        </div>
                        <a
                            href="https://wa.me/5511940057497"
                            target="_blank"
                            className="bg-white text-primary-bronze hover:text-deep-charcoal px-12 py-6 rounded-full text-[12px] uppercase tracking-[0.3em] font-black hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group"
                        >
                            Agende já sua consulta
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
