import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Scale, Smartphone, Clock, Utensils, MessageCircle, Sparkles, ArrowRight } from "lucide-react";



export default function Servicos() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <PageHeader
                title="Áreas de Atuação"
                subtitle="Nossos Protocolos"
                image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2787&auto=format&fit=crop"
            />

            {/* Services Section - Zig Zag Layout */}
            <section className="py-24 px-10 max-w-7xl mx-auto space-y-32">

                {/* 1. Nutrição Estética */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group flex justify-center">
                        <div className="absolute inset-0 bg-primary-bronze/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <img
                            src="/images/clinica/nutricao_funcional_1_servicos.png"
                            alt="Nutrição Estética"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Beleza & Autoestima</span>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Estética</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            Os nutrientes são de grande importância na prevenção do envelhecimento precoce, da produção excessiva de radicais livres
                            e processos inflamatórios. A nutrição estética atua no restabelecimento da saúde com foco na melhoria de desordens estéticas
                            – como celulite, flacidez, estrias, gordura localizada e envelhecimento precoce – através de uma alimentação adequada
                            e de suplementação específica e individual, caso necessário.
                        </p>
                    </div>
                </div>

                {/* 2. Nutrição Funcional */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2 relative group flex justify-center">
                        <div className="absolute inset-0 bg-accent-gold/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <img
                            src="/images/clinica/nutricao_funcional_2_servicos.png"
                            alt="Nutrição Funcional"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="lg:order-1 space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Equilíbrio Corporal</span>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Funcional</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            Acompanhamento personalizado e individualizado de hábitos alimentares e condições de saúde do paciente,
                            visando detectar e restabelecer possíveis desajustes nutricionais que, quando afetam o indivíduo,
                            promovem desequilíbrios bioquímicos alterando o bom funcionamento do organismo.
                        </p>
                    </div>
                </div>

                {/* 3. Nutrição Esportiva */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group flex justify-center">
                        <div className="absolute inset-0 bg-primary-bronze/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                        <img
                            src="/images/clinica/nutricao_funcional_3_servicos.png"
                            alt="Nutrição Esportiva"
                            className="relative z-10 w-4/5 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Alta Performance</span>
                        <h2 className="text-4xl font-serif text-deep-charcoal">Nutrição Esportiva</h2>
                        <div className="w-16 h-px bg-primary-bronze/30"></div>
                        <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed text-justify">
                            O rendimento esportivo está diretamente relacionado à alimentação. Nosso trabalho é atuar na melhora do rendimento do atleta,
                            ajudando na recuperação de lesões, manutenção e controle do peso e aperfeiçoamento da composição corporal.
                            Também realizamos avaliação individualizada para a prescrição de suplementos para atletas que praticam exercícios
                            físicos de alta performance, respeitando a genética e as necessidades de cada paciente e garantindo resultados com segurança.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bioimpedância Highlight Section */}
            <section className="py-24 px-10 bg-deep-charcoal text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="lg:order-2 space-y-8">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-gold">Tecnologia</span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Exame de <br /> <span className="text-accent-gold">Bioimpedância</span>
                        </h2>
                        <div className="space-y-6 text-white/70 font-sans leading-relaxed text-justify text-lg">
                            <p>
                                A bioimpedância é um exame que avalia a composição corporal por meio da passagem de uma corrente elétrica imperceptível pelo corpo.
                                O resultado deste exame apresenta dados específicos que mostram a quantidade de massa magra, a quantidade de água e gordura no corpo,
                                especificando qual é seu Índice de Massa Corpórea (IMC).
                            </p>
                            <p>
                                A bioimpedância permite identificar casos de obesidade ou inchaços, sendo um exame indicado para os pacientes que desejam
                                perda de peso e/ou ganho de massa muscular.
                            </p>
                            <div className="bg-white/5 border-l-2 border-accent-gold p-6 rounded-r-xl">
                                <p className="text-sm italic text-white/90">
                                    &quot;O exame é aprovado pela Organização Mundial da Saúde (OMS) e funciona como um orientador para que as metas do planejamento
                                    alimentar e de seu treino atuem de forma mais intensa naquilo que o seu corpo precisa.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:order-1 relative flex justify-center">
                        <div className="absolute inset-0 bg-accent-gold/20 blur-[80px] rounded-full opacity-60"></div>
                        <img
                            src="/images/clinica/bioimpedancia.png"
                            alt="Exame de Bioimpedância"
                            className="relative z-10 w-4/5 object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Evaluation Parameters Section - Redesigned */}
            <section className="py-32 px-10 bg-warm-alabaster border-y border-primary-bronze/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Metodologia Exclusiva</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                            Parâmetros de Avaliação
                        </h2>
                        <p className="text-deep-charcoal/60 font-sans max-w-xl mx-auto">
                            Utilizamos ferramentas precisas para monitorar sua evolução muito além do peso na balança.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1: Adipômetro */}
                        <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-primary-bronze/5 border border-primary-bronze/10 hover:border-primary-bronze/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-bronze/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                                <div className="w-32 h-32 rounded-full bg-warm-alabaster flex items-center justify-center border border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/clinica/adipometro.png"
                                        alt="Ícone Adipômetro"
                                        className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-deep-charcoal">Adipômetro</h3>
                                    <p className="text-sm md:text-base text-deep-charcoal/60 font-sans leading-relaxed">
                                        Mede a espessura das dobras cutâneas para calcular a gordura subcutânea.
                                        Permite avaliar evoluções imperceptíveis e acompanhar a redução de gordura em pontos específicos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Fotos */}
                        <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-accent-gold/5 border border-accent-gold/10 hover:border-accent-gold/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                                <div className="w-32 h-32 rounded-full bg-warm-alabaster flex items-center justify-center border border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/clinica/fotos.png"
                                        alt="Ícone Fotos"
                                        className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-deep-charcoal">Fotos & Evolução</h3>
                                    <p className="text-sm md:text-base text-deep-charcoal/60 font-sans leading-relaxed">
                                        Registros visuais que capturam sua jornada de autoconhecimento.
                                        Ajustamos estratégias baseados nessas evidências reais e celebramos juntos cada conquista visível.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais / App Section */}
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

            {/* FINAL CTA */}
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
