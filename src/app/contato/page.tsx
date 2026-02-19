import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Send, Navigation, Map } from "lucide-react";

export default function Contato() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <PageHeader
                title="Entre em Contato"
                subtitle="Fale Conosco"
                align="left"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            />

            <section className="py-24 px-10 max-w-7xl mx-auto space-y-24">

                {/* Intro Text */}
                <div className="max-w-3xl space-y-6">
                    <h2 className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                        Estamos prontos para <br />
                        <span className="text-primary-bronze">atender você.</span>
                    </h2>
                    <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed">
                        Tenha mais saúde e conquiste o corpo que sempre sonhou através de uma dieta e alimentação equilibradas.
                    </p>
                </div>

                {/* Contact Hub - Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Telefone & WhatsApp */}
                    <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-primary-bronze/5 border border-primary-bronze/10 hover:border-primary-bronze/30 hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-warm-alabaster rounded-full flex items-center justify-center text-primary-bronze mb-8 group-hover:bg-primary-bronze group-hover:text-white transition-colors duration-300">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal mb-2">Telefones</h3>
                        <p className="text-deep-charcoal/60 mb-8 text-sm">Atendimento seg à sex das 8h às 20h.</p>

                        <div className="space-y-3">
                            <a href="https://wa.me/5511940057497" target="_blank" className="flex items-center justify-between w-full p-4 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                                <span className="flex items-center gap-3 font-bold text-sm">
                                    <MessageCircle size={18} /> WhatsApp
                                </span>
                                <ArrowRight size={16} />
                            </a>
                            <a href="tel:+551126685049" className="flex items-center justify-between w-full p-4 rounded-xl bg-primary-bronze/5 text-primary-bronze hover:bg-primary-bronze/10 transition-colors">
                                <span className="flex items-center gap-3 font-bold text-sm">
                                    <Phone size={18} /> (11) 2668-5049
                                </span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Email */}
                    <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-deep-charcoal/5 border border-deep-charcoal/5 hover:border-deep-charcoal/20 hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-warm-alabaster rounded-full flex items-center justify-center text-deep-charcoal mb-8 group-hover:bg-deep-charcoal group-hover:text-white transition-colors duration-300">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal mb-2">Email</h3>
                        <p className="text-deep-charcoal/60 mb-8 text-sm">Para dúvidas gerais ou parcerias.</p>

                        <a href="mailto:contato@viviansanches.com.br" className="flex items-center justify-between w-full p-4 rounded-xl bg-deep-charcoal/5 text-deep-charcoal hover:bg-deep-charcoal/10 transition-colors">
                            <span className="flex items-center gap-3 font-bold text-sm truncate">
                                contato@viviansanches.com.br
                            </span>
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Card 3: Localização */}
                    <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-accent-gold/5 border border-accent-gold/10 hover:border-accent-gold/30 hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-warm-alabaster rounded-full flex items-center justify-center text-accent-gold mb-8 group-hover:bg-accent-gold group-hover:text-white transition-colors duration-300">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-2xl font-serif text-deep-charcoal mb-2">Localização</h3>
                        <p className="text-deep-charcoal/60 mb-8 text-sm text-balance">
                            Alameda Caulim, 115, sala 126,<br /> Espaço Cerâmica, São Caetano do Sul.
                        </p>

                        <div className="space-y-3">
                            <a href="https://www.google.com/maps?ll=-23.624782,-46.581652&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=13882615468557937120" target="_blank" className="flex items-center justify-between w-full p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                                <span className="flex items-center gap-3 font-bold text-sm">
                                    <Map size={18} /> Google Maps
                                </span>
                                <ArrowRight size={16} />
                            </a>
                            <a href="https://waze.com/ul?ll=-23.624782,-46.581652&navigate=yes" target="_blank" className="flex items-center justify-between w-full p-4 rounded-xl bg-cyan-50 text-cyan-700 hover:bg-cyan-100 transition-colors">
                                <span className="flex items-center gap-3 font-bold text-sm">
                                    <Navigation size={18} /> Waze
                                </span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Enhanced Form Section */}
                <div className="bg-gradient-to-br from-warm-alabaster to-white p-10 md:p-20 rounded-[3rem] border border-primary-bronze/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Mensagem</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                                Como podemos <br /> ajudar?
                            </h2>
                            <p className="text-deep-charcoal/60 font-sans leading-relaxed text-lg">
                                Preencha o formulário e nossa equipe entrará em contato o mais breve possível para agendar sua consulta ou esclarecer dúvidas.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-bronze shadow-sm">
                                    <Clock size={20} />
                                </div>
                                <div className="text-sm">
                                    <strong className="block text-deep-charcoal">Horário de Funcionamento</strong>
                                    <span className="text-deep-charcoal/60">Seg-Sex: 08h às 20h | Sáb: 08h às 14h</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-primary-bronze/5">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/50">Nome Completo</label>
                                <input type="text" className="w-full bg-warm-alabaster border border-primary-bronze/10 p-4 rounded-xl focus:outline-none focus:border-primary-bronze focus:bg-white transition-all" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/50">Email</label>
                                <input type="email" className="w-full bg-warm-alabaster border border-primary-bronze/10 p-4 rounded-xl focus:outline-none focus:border-primary-bronze focus:bg-white transition-all" placeholder="seu@email.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/50">Telefone</label>
                                    <input type="tel" className="w-full bg-warm-alabaster border border-primary-bronze/10 p-4 rounded-xl focus:outline-none focus:border-primary-bronze focus:bg-white transition-all" placeholder="(11) 99999-9999" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/50">Assunto</label>
                                    <select className="w-full bg-warm-alabaster border border-primary-bronze/10 p-4 rounded-xl focus:outline-none focus:border-primary-bronze focus:bg-white transition-all appearance-none">
                                        <option>Agendamento</option>
                                        <option>Dúvidas</option>
                                        <option>Parcerias</option>
                                        <option>Outros</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-deep-charcoal/50">Mensagem</label>
                                <textarea rows={4} className="w-full bg-warm-alabaster border border-primary-bronze/10 p-4 rounded-xl focus:outline-none focus:border-primary-bronze focus:bg-white transition-all" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button className="w-full bg-deep-charcoal text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary-bronze transition-colors shadow-lg shadow-deep-charcoal/20 flex items-center justify-center gap-3">
                                <Send size={18} />
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
