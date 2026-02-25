"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Scale, Smartphone, Clock, Utensils, MessageCircle, Sparkles, ArrowRight, Activity, Beaker, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function Servicos() {
    return (
        <main className="min-h-screen selection:bg-accent-gold selection:text-white">
            <Navbar />

            <PageHeader
                title="Áreas de Atuação"
                subtitle="Especialidades"
                image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2787&auto=format&fit=crop"
            />

            {/* Services Section - Zig Zag Layout */}
            <section className="py-24 px-10 max-w-7xl mx-auto space-y-32">

                {/* 1. Nutrição Estética */}
                <motion.div
                    {...fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative group flex justify-center">
                        <div className="absolute inset-0 bg-primary-bronze/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <Image
                            src="/images/clinica/nutricao_funcional_1_servicos.png"
                            alt="Nutrição Estética"
                            width={500}
                            height={500}
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-primary-bronze w-5 h-5" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Beleza & Autoestima</span>
                        </div>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Estética</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            Os nutrientes são de grande importância na prevenção do envelhecimento precoce, da produção excessiva de radicais livres
                            e processos inflamatórios. A nutrição estética atua no restabelecimento da saúde com foco na melhoria de desordens estéticas
                            – como celulite, flacidez, estrias, gordura localizada e envelhecimento precoce – através de uma alimentação adequada
                            e de suplementação específica e individual, caso necessário.
                        </p>
                    </div>
                </motion.div>

                {/* 2. Nutrição Funcional */}
                <motion.div
                    {...fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="lg:order-2 relative group flex justify-center">
                        <div className="absolute inset-0 bg-accent-gold/20 blur-[80px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <Image
                            src="/images/clinica/nutricao_funcional_2_servicos.png"
                            alt="Nutrição Funcional"
                            width={500}
                            height={500}
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="lg:order-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <Activity className="text-primary-bronze w-5 h-5" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Equilíbrio Corporal</span>
                        </div>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Funcional</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            Acompanhamento personalizado e individualizado de hábitos alimentares e condições de saúde do paciente,
                            visando detectar e restabelecer possíveis desajustes nutricionais que, quando afetam o indivíduo,
                            promovem desequilíbrios bioquímicos alterando o bom funcionamento do organismo.
                        </p>
                    </div>
                </motion.div>

                {/* 3. Nutrição Esportiva */}
                <motion.div
                    {...fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative group flex justify-center">
                        <div className="absolute inset-0 bg-primary-bronze/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <Image
                            src="/images/clinica/nutricao_funcional_3_servicos.png"
                            alt="Nutrição Esportiva"
                            width={500}
                            height={500}
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Zap className="text-primary-bronze w-5 h-5" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Alta Performance</span>
                        </div>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Esportiva</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            O rendimento esportivo está diretamente relacionado à alimentação. Nosso trabalho é atuar na melhora do rendimento do atleta,
                            ajudando na recuperação de lesões, manutenção e controle do peso e aperfeiçoamento da composição corporal.
                            Também realizamos avaliação individualizada para a prescrição de suplementos para atletas que praticam exercícios
                            físicos de alta performance, respeitando a genética e as necessidades de cada paciente e garantindo resultados com segurança.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Bioimpedância Highlight Section */}
            <motion.section
                {...fadeInUp}
                className="py-24 px-10 bg-deep-charcoal text-white relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="lg:order-2 space-y-8 text-center lg:text-left">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-gold">Tecnologia</span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Exame de <br /> <span className="text-accent-gold italic">Bioimpedância</span>
                        </h2>
                        <div className="space-y-6 text-white/70 font-sans leading-relaxed text-justify text-lg max-w-xl mx-auto lg:mx-0">
                            <p>
                                A bioimpedância é um exame padrão-ouro que avalia a composição corporal por meio da passagem de uma corrente elétrica imperceptível pelo corpo.
                                O resultado apresenta dados precisos sobre massa magra, hidratação e percentual de gordura.
                            </p>
                            <p>
                                Essencial para identificar casos de retenção hídrica e monitorar de forma fidedigna o ganho de massa muscular.
                            </p>
                            <div className="bg-white/5 border-l-2 border-accent-gold p-6 rounded-r-xl">
                                <p className="text-sm italic text-white/90">
                                    &quot;O exame é aprovado pela OMS e funciona como bússola para que as estratégias nutricionais atuem exatamente no que o seu corpo precisa.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:order-1 relative flex justify-center">
                        <div className="absolute inset-0 bg-accent-gold/20 blur-[80px] rounded-full opacity-60"></div>
                        <Image
                            src="/images/clinica/bioimpedancia.png"
                            alt="Exame de Bioimpedância"
                            width={500}
                            height={500}
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="relative z-10 w-4/5 object-contain drop-shadow-2xl translate-y-4"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Evaluation Parameters Section */}
            <section className="py-32 px-10 bg-warm-alabaster border-y border-primary-bronze/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto space-y-4"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Metodologia Exclusiva</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                            Parâmetros de Avaliação
                        </h2>
                        <p className="text-deep-charcoal/60 font-sans max-w-xl mx-auto">
                            Utilizamos ferramentas precisas para monitorar sua evolução muito além do peso na balança.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1: Adipômetro */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-[32px] shadow-xl shadow-primary-bronze/5 border border-primary-bronze/10 hover:border-primary-bronze/30 transition-all duration-500 group relative overflow-hidden text-center"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-bronze/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-32 h-32 mx-auto rounded-full bg-warm-alabaster flex items-center justify-center border border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/images/clinica/adipometro.png"
                                        alt="Adipômetro"
                                        width={120}
                                        height={120}
                                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-deep-charcoal">Adipômetro</h3>
                                    <p className="text-sm md:text-base text-deep-charcoal/60 font-sans leading-relaxed max-w-sm mx-auto">
                                        Mede a espessura das dobras cutâneas para avaliar a gordura subcutânea em pontos específicos.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Fotos */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-10 rounded-[32px] shadow-xl shadow-accent-gold/5 border border-accent-gold/10 hover:border-accent-gold/30 transition-all duration-500 group relative overflow-hidden text-center"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-32 h-32 mx-auto rounded-full bg-warm-alabaster flex items-center justify-center border border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/images/clinica/fotos.png"
                                        alt="Fotos & Evolução"
                                        width={120}
                                        height={120}
                                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-deep-charcoal">Fotos & Evolução</h3>
                                    <p className="text-sm md:text-base text-deep-charcoal/60 font-sans leading-relaxed max-w-sm mx-auto">
                                        Registros visuais fidedignos para capturar sua jornada e ajustar estratégias em tempo real.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diferenciais / App Section */}
            <motion.section
                {...fadeInUp}
                className="py-32 px-10 bg-deep-charcoal text-white relative overflow-hidden"
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <Smartphone size={800} strokeWidth={0.5} className="transform rotate-12 translate-x-1/4 text-accent-gold" />
                </div>

                <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-gold">Diferenciais</span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                                Tecnologia a favor <br /> do seu resultado.
                            </h2>
                            <p className="text-lg text-white/60 font-sans leading-relaxed">
                                Atendimento totalmente individualizado, com plano alimentar
                                integrado à sua rotina diária através do nosso <strong className="text-white">aplicativo exclusivo</strong>.
                            </p>

                            {/* Partnerships Badge */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm space-y-4">
                                <div className="flex items-center gap-3 text-accent-gold">
                                    <Sparkles size={20} />
                                    <h4 className="text-sm font-serif font-bold uppercase tracking-widest">Rede de Parceiros</h4>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Acesso a uma rede curada de especialistas, laboratórios e serviços complementares com condições exclusivas.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Hora da Refeição",
                                    desc: "Despertador inteligente para refeições, suplementação e hidratação.",
                                    icon: Clock
                                },
                                {
                                    title: "Cardápios",
                                    desc: "Seu planejamento alimentar na palma da mão, ajustado ao seu perfil.",
                                    icon: Scale
                                },
                                {
                                    title: "Receitas Fit",
                                    desc: "Sugestões saudáveis e práticas para facilitar sua rotina.",
                                    icon: Utensils
                                },
                                {
                                    title: "Chat Direto",
                                    desc: "Tire dúvidas sobre sua estratégia nutricional diretamente pelo app.",
                                    icon: MessageCircle
                                }
                            ].map((feat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/10 border border-white/5 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                                        <feat.icon size={20} />
                                    </div>
                                    <h4 className="text-lg font-serif mb-2 text-white">{feat.title}</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-sans">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* FINAL CTA */}
            <motion.section
                {...fadeInUp}
                className="py-32 px-10 max-w-7xl mx-auto"
            >
                <div className="bg-gradient-premium rounded-[3rem] p-12 md:p-24 text-center md:text-left relative overflow-hidden shadow-2xl shadow-accent-gold/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                                Transforme sua <br />
                                <span className="opacity-80 italic text-white/90">qualidade de vida.</span>
                            </h2>
                            <p className="text-white/60 font-sans text-lg">
                                Agende uma consulta para uma avaliação personalizada.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/5511940057497"
                            target="_blank"
                            className="bg-white text-primary-bronze hover:text-deep-charcoal px-12 py-6 rounded-full text-[12px] uppercase tracking-[0.3em] font-black hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group"
                        >
                            Agendar Consulta
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
}
