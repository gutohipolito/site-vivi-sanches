import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TEAM_MEMBERS } from "@/constants/team";
import { Award, Heart, ArrowLeft, ArrowRight, User, Stethoscope, Scissors, Sparkles, Microscope, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return TEAM_MEMBERS.map((member) => ({
        slug: member.slug,
    }));
}

export const dynamicParams = false;

export default async function ProfessionalPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = TEAM_MEMBERS.find((m) => m.slug.toLowerCase() === slug.toLowerCase());

    if (!member) {
        notFound();
    }

    const isAlexandre = slug === "alexandre-ramos-da-silva";
    const isMatheus = slug === "matheus-santebanes";

    return (
        <main className="min-h-screen selection:bg-accent-gold selection:text-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-10 bg-warm-alabaster overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                {/* Asymmetric Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-bronze/5 transform skew-x-12 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <Link
                            href="/clinica"
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary-bronze hover:gap-4 transition-all duration-300"
                        >
                            <ArrowLeft size={12} /> Voltar para Clínica
                        </Link>

                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-primary-bronze/10 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">
                                {isAlexandre ? "Médico Especialista" : isMatheus ? "Enfermeiro Especialista" : member.role.split(',')[0]}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-serif text-deep-charcoal leading-[0.9] tracking-tighter">
                                {member.name}
                            </h1>
                            {isMatheus && (
                                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal/40">
                                    Matheus Cerqueira Barbosa | COREN 1438288
                                </div>
                            )}
                        </div>

                        <div className="w-24 h-px bg-primary-bronze/30"></div>

                        <h2 className="text-2xl font-serif italic text-deep-charcoal/60 leading-relaxed max-w-lg">
                            {isAlexandre
                                ? "Especialista em Nutrição Estratégica, Estética e Performance."
                                : isMatheus
                                    ? "Unindo ciência, técnica e estética para resultados harmônicos."
                                    : `"${member.description}"`}
                        </h2>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        {/* Layered Depth for Image */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 w-full max-w-md aspect-[3/4] bg-white border border-primary-bronze/10 p-4 -rotate-2 shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.1)] rounded-[2.5rem] group overflow-hidden">
                            {member.image.includes("placeholder") ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-bronze/10 gap-4">
                                    <User size={120} strokeWidth={0.5} />
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black">Corpo Clínico</span>
                                </div>
                            ) : (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                            )}
                        </div>
                        {/* Floating Credential Tag */}
                        <div className="absolute bottom-10 -left-10 bg-deep-charcoal text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block border border-white/10">
                            <div className="text-[10px] uppercase tracking-widest font-black text-accent-gold mb-1">Registro</div>
                            <div className="font-serif text-lg">
                                {isAlexandre ? "Médico desde 2007" : isMatheus ? "Enfermagem & Estética" : "Profissional Especialista"}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Content for Alexandre */}
            {isAlexandre && (
                <section className="py-32 px-10 max-w-7xl mx-auto space-y-32">
                    {/* 1. Introduction - Fragmented Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <h3 className="text-4xl font-serif text-deep-charcoal">Trajetória e <br /> <span className="text-primary-bronze italic">Abordagem Integrada.</span></h3>
                            <div className="prose prose-xl prose-stone leading-relaxed text-deep-charcoal/70 font-sans">
                                <p>
                                    Médico desde 2007, construiu sua trajetória aliando atuação clínica criteriosa e prática cirúrgica especializada, desenvolvendo uma abordagem integrada voltada à saúde, estética e performance individual.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-start-9 lg:col-span-4 aspect-square bg-warm-alabaster rounded-[3rem] border border-primary-bronze/10 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <Activity size={120} strokeWidth={0.5} className="text-primary-bronze group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </div>

                    {/* 2. Philosophy - Center Staggered */}
                    <div className="max-w-4xl mx-auto space-y-12 text-center relative py-20 border-y border-primary-bronze/10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-accent-gold rounded-full border border-primary-bronze/10">
                            <Microscope size={20} />
                        </div>
                        <p className="text-2xl md:text-3xl font-serif text-deep-charcoal leading-snug">
                            "Acredita que resultados consistentes não dependem apenas de procedimentos, mas de <span className="text-primary-bronze">diagnóstico preciso</span>, planejamento estruturado e acompanhamento contínuo."
                        </p>
                        <p className="text-lg text-deep-charcoal/50 font-sans max-w-2xl mx-auto">
                            Sua abordagem integra avaliação clínica aprofundada às intervenções cirúrgicas, promovendo uma visão global do paciente.
                        </p>
                    </div>

                    {/* 3. Fields of Action - 90/10 Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { title: "Clínico Geral", desc: "Abordagem sistêmica e preventiva", icon: Stethoscope },
                                { title: "Cirurgias Estéticas", desc: "Precisão cirúrgica e refinamento", icon: Scissors },
                                { title: "Transplante Capilar", desc: "Foco em naturalidade e densidade", icon: Sparkles }
                            ].map((feat, i) => (
                                <div key={i} className="bg-warm-alabaster p-12 space-y-6 rounded-[2rem] border border-primary-bronze/5 group hover:bg-white hover:shadow-glow-gold transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-bronze group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500">
                                        <feat.icon size={20} />
                                    </div>
                                    <h4 className="text-xl font-serif text-deep-charcoal">{feat.title}</h4>
                                    <p className="text-xs uppercase tracking-widest text-deep-charcoal/40 font-bold">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="w-px h-full bg-primary-bronze/20"></div>
                        </div>
                    </div>

                    {/* 4. Expertise & Closing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                        <div className="bg-deep-charcoal text-white p-16 rounded-[4rem] space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Award size={200} strokeWidth={1} />
                            </div>
                            <h4 className="text-2xl font-serif relative z-10">O Olhar do Perito Médico</h4>
                            <p className="text-white/60 font-sans leading-relaxed relative z-10">
                                Sua experiência como perito médico reforça seu olhar técnico e analítico, agregando precisão e responsabilidade à sua prática assistencial. Foco em naturalidade, segurança e resultados individualizados.
                            </p>
                        </div>
                        <div className="space-y-6 lg:pb-16">
                            <p className="text-2xl font-serif text-deep-charcoal italic leading-tight">
                                Mais do que procedimentos, sua proposta é oferecer estratégia e construção de resultados sustentáveis ao longo do tempo.
                            </p>
                            <div className="w-24 h-px bg-primary-bronze/50"></div>
                        </div>
                    </div>
                </section>
            )}

            {/* Specialized Content for Matheus */}
            {isMatheus && (
                <section className="py-32 px-10 max-w-7xl mx-auto space-y-32">
                    {/* 1. Base Técnica e Vivência Hospitalar */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <h3 className="text-4xl font-serif text-deep-charcoal">Base Técnica e <br /> <span className="text-primary-bronze italic">Vivência Hospitalar.</span></h3>
                            <p className="text-xl text-deep-charcoal/60 font-sans leading-relaxed max-w-2xl">
                                Profissional da área da Enfermagem, com 6 anos de atuação em Urgência e Emergência, incluindo experiência em Pronto-Socorro Pediátrico. Sua vivência consolidou uma base técnica sólida e rigor com protocolos de segurança.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                            <div className="p-10 bg-warm-alabaster rounded-[2rem] border border-primary-bronze/5 space-y-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-500">
                                <div className="space-y-4">
                                    <Heart size={24} className="text-primary-bronze" />
                                    <h4 className="text-lg font-serif">Prática Clínica</h4>
                                    <p className="text-sm text-deep-charcoal/50 leading-relaxed">
                                        Experiência em soroterapia, sangria terapêutica e auto-hemoterapia sob rigoroso acompanhamento médico.
                                    </p>
                                </div>
                            </div>
                            <div className="p-10 bg-deep-charcoal text-white rounded-[2rem] space-y-4 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group">
                                <div className="space-y-4">
                                    <Award size={24} className="text-accent-gold" />
                                    <h4 className="text-lg font-serif">Ética Profissional</h4>
                                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                        Rigorosa observância das normativas éticas e legais vigentes para garantir a segurança em cada atendimento.
                                    </p>
                                </div>
                            </div>
                            <div className="p-10 bg-primary-bronze/5 rounded-[2rem] border border-primary-bronze/10 space-y-4 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-glow-gold transition-all duration-500 group">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-bronze shadow-lg group-hover:bg-primary-bronze group-hover:text-white transition-all duration-500">
                                    <Microscope size={28} strokeWidth={1} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-serif">Protocolos de Segurança</h4>
                                    <p className="text-[10px] uppercase tracking-widest font-black text-primary-bronze/60">Pilar Fundamental</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Qualificação Estética */}
                    <div className="space-y-16">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-serif text-deep-charcoal">Qualificação Estética.</h3>
                            <div className="w-20 h-px bg-accent-gold mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Microagulhamento", desc: "Com Dermapen para regeneração", icon: Scissors },
                                { title: "Toxina Botulínica", desc: "Aplicação precisa e natural", icon: Sparkles },
                                { title: "Peeling Químico", desc: "Retinóico 8% para renovação", icon: Microscope }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 bg-white border border-primary-bronze/10 rounded-[2.5rem] hover:shadow-glow-gold hover:-translate-y-2 transition-all duration-500">
                                    <div className="w-12 h-12 bg-warm-alabaster rounded-2xl flex items-center justify-center text-primary-bronze group-hover:bg-primary-bronze group-hover:text-white transition-all mb-6">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-deep-charcoal/40">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Evolução Odontológica */}
                    <div className="relative overflow-hidden rounded-[4rem] border border-primary-bronze/10 bg-warm-alabaster group">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform -skew-x-12 translate-x-1/2"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[400px]">
                            <div className="lg:col-span-7 p-12 md:p-24 space-y-10">
                                <div className="space-y-4">
                                    <span className="inline-block px-4 py-1.5 bg-primary-bronze/10 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">
                                        Evolução Acadêmica
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                                        Odontologia & <br />
                                        <span className="text-primary-bronze italic">Harmonização Orofacial.</span>
                                    </h3>
                                </div>

                                <p className="text-deep-charcoal/60 font-sans leading-relaxed text-lg max-w-xl">
                                    Atualmente graduando em Odontologia, Matheus direciona sua futura residência para **Bucomaxilofacial** com finalidade estética e **HOF**, unindo precisão anatômica hospitalar a uma visão estética sofisticada.
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-px bg-primary-bronze/30"></div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/40">Visão Científica & Arte</span>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative bg-white overflow-hidden min-h-[400px]">
                                <Image
                                    src="/images/equipe/odontologia-real.jpg"
                                    alt="Odontologia e Harmonização Orofacial"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 z-10">
                                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary-bronze shadow-lg">
                                        <Activity size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Compromisso & Frase */}
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="w-px h-24 bg-gradient-to-b from-transparent to-primary-bronze mx-auto"></div>
                        <p className="text-3xl font-serif text-deep-charcoal leading-snug italic">
                            “Excelência técnica. Responsabilidade ética. <br /> Resultados que elevam autoestima.”
                        </p>
                        <div className="w-12 h-px bg-primary-bronze mx-auto"></div>
                        <p className="text-sm text-deep-charcoal/40 uppercase tracking-[0.4em] font-bold">Matheus Santebanes</p>
                    </div>
                </section>
            )}
            {/* Default Template for other members */}
            {!isAlexandre && !isMatheus && (
                <section className="py-24 px-10 max-w-7xl mx-auto space-y-24">
                    <div className="prose prose-lg text-deep-charcoal/70 font-sans mx-auto text-justify leading-relaxed max-w-none w-full flex flex-col gap-8">
                        <p className="text-xl text-deep-charcoal font-light italic border-l-4 border-accent-gold pl-8 py-4">
                            Em breve, mais informações sobre a trajetória acadêmica, especializações e a abordagem clínica de {member.name}.
                        </p>
                        <p>
                            Nosso compromisso é oferecer um atendimento de excelência, pautado na ética, ciência e no cuidado humanizado. Cada membro de nossa equipe é selecionado por sua expertise técnica e alinhamento com os valores da Clínica Sanches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-deep-charcoal/5 hover:shadow-glow-gold hover:-translate-y-2 transition-all duration-500 border border-primary-bronze/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Award size={120} strokeWidth={1} />
                            </div>
                            <div className="w-14 h-14 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze mb-8 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500 relative z-10">
                                <Award size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-deep-charcoal mb-8 relative z-10">Especialidades</h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center gap-4 text-sm font-bold text-deep-charcoal/80 uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0"></div>
                                    {member.role}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-deep-charcoal/5 hover:shadow-glow-gold hover:-translate-y-2 transition-all duration-500 border border-primary-bronze/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Heart size={120} strokeWidth={1} />
                            </div>
                            <div className="w-14 h-14 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze mb-8 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500 relative z-10">
                                <Heart size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-deep-charcoal mb-6 relative z-10">Abordagem</h3>
                            <p className="text-lg text-deep-charcoal/60 leading-relaxed font-sans relative z-10">
                                Foco no <strong className="text-deep-charcoal font-medium">resultado sustentável</strong> e no atendimento personalizado.
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA - Unified Style */}
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
