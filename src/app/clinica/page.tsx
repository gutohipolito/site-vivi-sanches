import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Activity, Camera, Heart, Lightbulb, ShieldCheck, Users, Smartphone, Clock, Utensils, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function Clinica() {
    const galleryImages = [
        "/images/clinica/fotoclinica1.png",
        "/images/clinica/fotoclinica10.png",
        "/images/clinica/fotoclinica2.png",
        "/images/clinica/fotoclinica11.png",
        "/images/clinica/fotoclinica3.png",
        "/images/clinica/fotoclinica5.png",
        "/images/clinica/fotoclinica9.png",
        "/images/clinica/fotoclinica7.png",
        "/images/clinica/fotoclinica8.png",
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Custom Header with Team Image */}
            <section className="relative pt-40 pb-20 px-10 bg-warm-alabaster overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze opacity-80">
                            A Clínica
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none tracking-tight">
                            Estrutura & <br /> Propósito
                        </h1>
                        <div className="w-24 h-px bg-primary-bronze/30 pt-4"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed max-w-md">
                            Um espaço pensado para o seu bem-estar, unindo ciência, tecnologia e acolhimento.
                        </p>
                    </div>

                    {/* Team Image - Attached by User */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-premium rounded-full blur-[100px] opacity-20"></div>
                        <img
                            src="/images/clinica/team-header.png"
                            alt="Equipe Clínica Vivian Sanches"
                            className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000"
                        />
                    </div>
                </div>
            </section>

            {/* 1. Intro & Methodology */}
            <section className="py-24 px-10 max-w-7xl mx-auto space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-deep-charcoal leading-tight">
                            Restabelecendo o <br />
                            <span className="text-primary-bronze">Equilíbrio Bioquímico</span>.
                        </h2>
                        <div className="space-y-6 text-deep-charcoal/60 font-sans leading-relaxed text-lg text-justify">
                            <p>
                                A Clínica Vivian Sanches Consultoria Nutricional visa detectar e restabelecer possíveis desajustes nutricionais
                                que, quando afetam o indivíduo, promovem desequilíbrios bioquímicos alterando o bom funcionamento do organismo.
                            </p>
                            <p>
                                Prezamos sempre por um atendimento profissional e qualificado, contando com equipamentos modernos e
                                tecnologia de ponta para garantir diagnósticos precisos e estratégias eficazes.
                            </p>
                        </div>
                    </div>

                    {/* Tech Highlight Card */}
                    <div className="glass-panel p-10 md:p-14 space-y-8 bg-warm-alabaster relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Activity size={120} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal relative z-10">Tecnologia Diagnóstica</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4 items-start pb-6 border-b border-primary-bronze/10 last:border-0 last:pb-0">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-bronze shadow-sm shrink-0">
                                    <Scale size={18} />
                                </div>
                                <div>
                                    <strong className="block text-xs uppercase tracking-widest text-deep-charcoal mb-1">InBody 270</strong>
                                    <p className="text-sm text-deep-charcoal/60">
                                        Análise precisa de massa magra, água corporal, gordura visceral, taxa metabólica e IMC.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-bronze shadow-sm shrink-0">
                                    <Camera size={18} />
                                </div>
                                <div>
                                    <strong className="block text-xs uppercase tracking-widest text-deep-charcoal mb-1">Avaliação Antropométrica</strong>
                                    <p className="text-sm text-deep-charcoal/60">
                                        Métodos convencionais de alta precisão, incluindo adipômetro e registro fotográfico para acompanhamento visual.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Gallery Section - O Espaço (Boxed & Lightbox) */}
            <section className="py-24 px-10 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Infraestrutura</span>
                    <h2 className="text-4xl font-serif text-deep-charcoal">Nosso Espaço</h2>
                    <p className="text-sm text-deep-charcoal/60 font-sans leading-relaxed max-w-xl mx-auto">
                        Um ambiente projetado para acolher e inspirar. Clique nas imagens para ampliar.
                    </p>
                </div>

                <Gallery images={galleryImages} />
            </section>

            {/* 3. Mission & Values */}
            <section className="bg-warm-alabaster py-32 px-10 border-y border-primary-bronze/10">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Mission Statement */}
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Nossa Essência</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                            <span className="italic font-light opacity-60">&quot;Na essência de nossa missão encontramos propósito...&quot;</span>
                        </h2>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed">
                            Empenhamo-nos em capacitar e inspirar nossos clientes a atingirem uma qualidade de vida elevada e longevidade saudável.
                            Isso é alcançado por meio de orientação personalizada sobre nutrição e saúde em geral, instigando hábitos
                            sustentáveis fundamentais para uma vida plena.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Compromisso",
                                icon: ShieldCheck,
                                desc: "Dedicação inabalável ao bem-estar e sucesso de nossos clientes, assegurando atenção máxima em cada jornada."
                            },
                            {
                                title: "Integridade",
                                icon: Scale,
                                desc: "Transparência e ética em todas as interações, garantindo confiança na qualidade e honestidade de nossas práticas."
                            },
                            {
                                title: "Empatia",
                                icon: Heart,
                                desc: "Compreensão profunda das necessidades únicas de cada cliente, proporcionando apoio e compaixão."
                            },
                            {
                                title: "Inovação",
                                icon: Lightbulb,
                                desc: "Busca constante por métodos inovadores para oferecer soluções personalizadas e eficazes."
                            }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-[24px] shadow-sm hover:shadow-glow-gold hover:-translate-y-1 transition-all duration-500 border border-primary-bronze/5 group">
                                <div className="w-12 h-12 rounded-full bg-warm-alabaster flex items-center justify-center text-primary-bronze mb-6 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-500">
                                    <val.icon size={20} />
                                </div>
                                <h4 className="text-lg font-serif text-deep-charcoal mb-4">{val.title}</h4>
                                <p className="text-sm text-deep-charcoal/50 leading-relaxed font-sans">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Team Section Placeholder (Kept for individual photos if needed) */}
            <section className="py-32 px-10 max-w-7xl mx-auto text-center space-y-16">
                <div className="space-y-6">
                    <div className="flex justify-center text-primary-bronze mb-4">
                        <Users size={40} strokeWidth={1} />
                    </div>
                    <h2 className="text-4xl font-serif text-deep-charcoal">Nossa Equipe</h2>
                    <p className="text-xl text-deep-charcoal/60 font-sans max-w-2xl mx-auto">
                        Conheça nossa equipe de profissionais capacitados e prontos para oferecer o melhor atendimento.
                    </p>
                </div>

                {/* Team Grid Placeholder - User will upload images later */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="group space-y-6">
                            <div className="aspect-[3/4] bg-warm-alabaster rounded-[32px] overflow-hidden relative border border-primary-bronze/10">
                                <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-deep-charcoal/20 group-hover:bg-white/50 transition-colors duration-500">
                                    <Camera size={48} strokeWidth={1} />
                                    <span className="text-xs uppercase tracking-widest font-bold">Foto da Equipe</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-serif text-deep-charcoal">Nome do Profissional</h4>
                                <p className="text-xs uppercase tracking-widest text-primary-bronze font-bold">Especialidade</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Diferenciais / App Section */}
            <section className="py-32 px-10 bg-deep-charcoal text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <Smartphone size={800} strokeWidth={0.5} className="transform rotate-12 translate-x-1/4" />
                </div>

                <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-gold">Diferenciais</span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                                Tecnologia a favor <br /> do seu resultado.
                            </h2>
                            <p className="text-lg text-white/60 font-sans leading-relaxed">
                                Atendimento totalmente individualizado, onde cada paciente recebe seu plano alimentar
                                de acordo com suas necessidades e rotina diária através do nosso <strong className="text-white">aplicativo exclusivo</strong>.
                            </p>

                            {/* Partnerships Badge */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm space-y-4">
                                <div className="flex items-center gap-3 text-accent-gold">
                                    <Sparkles size={20} />
                                    <h4 className="text-sm font-serif font-bold uppercase tracking-widest">Rede de Parceiros</h4>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Descontos exclusivos com personal trainers, endocrinologistas, clínicas de estética, salões e laboratórios.
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
                                    title: "Cardápios Personalizados",
                                    desc: "Seu planejamento alimentar na palma da mão, ajustado ao seu perfil.",
                                    icon: Scale
                                },
                                {
                                    title: "Receitas Fit",
                                    desc: "Aprenda a cozinhar sugestões saudáveis e deliciosas.",
                                    icon: Utensils
                                },
                                {
                                    title: "Chat com a Nutri",
                                    desc: "Tire dúvidas sobre dieta ou substituições diretamente pelo app.",
                                    icon: MessageCircle
                                }
                            ].map((feat, i) => (
                                <div key={i} className="bg-white/10 border border-white/5 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                                        <feat.icon size={20} />
                                    </div>
                                    <h4 className="text-lg font-serif mb-2 text-white">{feat.title}</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-sans">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-32 px-10 max-w-7xl mx-auto">
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
