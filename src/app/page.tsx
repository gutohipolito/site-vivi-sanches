import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-gold selection:text-white relative">
      <Navbar />

      <div className="relative">
        <Hero />

        {/* A Clínica Section (Expanded) */}
        <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-primary-bronze/10">
          <div className="space-y-20">
            {/* 1. Intro & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze">Consultoria Nutricional</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-deep-charcoal leading-tight">
                  A Clínica Vivian Sanches
                </h3>
              </div>
              <p className="text-lg text-deep-charcoal/60 leading-relaxed font-sans font-light">
                Visa detectar e restabelecer possíveis desajustes nutricionais que, quando afetam o indivíduo, promovem desequilíbrios bioquímicos alterando o bom funcionamento do organismo.
              </p>
            </div>

            {/* 2. Visual Feature: Estrutura */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-bronze/10 group">
              <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/10 transition-colors duration-700 z-10"></div>
              <Image
                src="/images/clinica/clinica_interior_luxury_1771467230428.png"
                alt="Estrutura da Clínica Vivian Sanches"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 p-10 text-center">
                <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-lg max-w-4xl">
                  "Estrutura completa para um atendimento de excelência."
                </h3>
              </div>
            </div>

            {/* 3. Features Grid: App & Parcerias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {/* App / Individualizado */}
              <div className="space-y-6">
                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h4 className="text-2xl font-serif text-deep-charcoal">Atendimento Individualizado</h4>
                <p className="text-deep-charcoal/60 leading-relaxed font-light">
                  Cada paciente recebe seu plano alimentar de acordo com suas necessidades e rotina diária por meio de um aplicativo exclusivo.
                </p>
                <ul className="space-y-3 text-sm text-deep-charcoal/70">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>Receitas fitness para planejamento</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>Alertas de horários e hidratação</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>Chat direto com a nutricionista</li>
                </ul>
              </div>

              {/* Parcerias */}
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary-bronze/10 rounded-full flex items-center justify-center text-primary-bronze mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h4 className="text-2xl font-serif text-deep-charcoal">Rede de Parcerias</h4>
                <p className="text-deep-charcoal/60 leading-relaxed font-light">
                  Oferecemos descontos em diversos serviços e consultas através de nossa rede de parceiros selecionados.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Personal Trainers", "Endocrinologistas", "Estética", "Salão de Beleza", "Ginecologista", "Laboratórios"].map((p, i) => (
                    <span key={i} className="px-4 py-2 bg-warm-alabaster border border-deep-charcoal/5 rounded-full text-xs uppercase tracking-wider text-deep-charcoal/60">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Teaser */}
        <section className="py-32 bg-deep-charcoal text-white px-10">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="flex justify-between items-end border-b border-white/10 pb-12">
              <h3 className="text-4xl md:text-5xl font-serif">Áreas de Atuação</h3>
              <Link href="/servicos" className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent-gold transition-colors">Ver Todas</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {["Nutrição Clínica", "Performance Esportiva", "Estética Avançada"].map((s, i) => (
                <div key={i} className="space-y-6 group cursor-pointer">
                  <div className="w-full h-px bg-white/10 group-hover:bg-gradient-premium transition-all duration-500"></div>
                  <h4 className="text-2xl font-serif text-white/90 group-hover:text-accent-gold transition-colors">{s}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Protocolos individualizados baseados em evidência científica para maximizar seus resultados.
                  </p>
                  <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Saiba Mais</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profil Teaser */}
        <section className="py-32 px-10 max-w-7xl mx-auto">
          <div className="bg-warm-alabaster border border-primary-bronze/10 p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden rounded-[4rem] shadow-glow-gold">
            <div className="relative z-10 flex-1 space-y-8 text-center md:text-left">
              <h3 className="text-4xl font-serif text-deep-charcoal">Dra. Vivian Sanches</h3>
              <p className="text-deep-charcoal/60 leading-relaxed">
                Especialista em Fisiologia do Exercício e Nutrição Clínica, com uma carreira dedicada a transformar vidas através da ciência nutricional.
              </p>
              <Link href="/dra-vivian-sanches" className="inline-block btn-premium bg-white hover:bg-gradient-premium hover:border-transparent text-deep-charcoal hover:text-white rounded-full transition-all duration-500">
                Ler Biografia
              </Link>
            </div>
            <div className="flex-1 w-full relative aspect-[3/4] md:aspect-square bg-white border border-primary-bronze/10 p-4 rotate-3 shadow-2xl shadow-primary-bronze/5 rounded-[2rem]">
              <Image
                src="/images/clinica/vivi-home-site.jpg"
                alt="Dra. Vivian Sanches"
                fill
                className="object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* Personalidades Section */}
        <section className="py-32 bg-deep-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

          <div className="max-w-7xl mx-auto px-10 text-center space-y-16 relative z-10">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-accent-gold">
                Personalidades
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight max-w-4xl mx-auto">
                "Alimente sua mente com <span className="italic text-accent-gold opacity-80">pensamentos saudáveis</span> para que seu corpo possa refletir saúde."
              </h3>
              <p className="text-white/40 text-sm uppercase tracking-[0.2em] pt-4">
                Confira as personalidades que já passaram pela clínica!
              </p>
            </div>

            {/* Marquee Gallery */}
            <div className="relative w-full overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-deep-charcoal to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-deep-charcoal to-transparent z-10"></div>

              <div className="inline-flex gap-8 animate-marquee whitespace-nowrap">
                {[
                  "Cristian_Baroni.png", "DInho_machado.png", "Ju_Leme.png", "amanda_gontijo.png",
                  "bruno.png", "catherine_bascoy.png", "eduguedes-1.png", "erikka-1.png", "faro.png",
                  "fernanda_hernandes.jpg", "igao.jpg", "italo.png", "joelma.jpg", "juju-1.jpg",
                  "matheus.png", "milene.png", "mionzinho.png", "rodrigo_capella.png", "ronald.png",
                  "thiago_nigro.png", "valeska.png", "victor-sarro.png", "victor_teixeira.png"
                ].map((img, i) => (
                  <div key={i} className="inline-block w-48 h-48 md:w-64 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 shrink-0 hover:border-accent-gold/50 transition-colors duration-500 grayscale hover:grayscale-0">
                    <Image
                      src={`/images/clientes/${img}`}
                      alt="Cliente da Clínica Vivian Sanches"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
                {/* Duplicate for smooth loop */}
                {[
                  "Cristian_Baroni.png", "DInho_machado.png", "Ju_Leme.png", "amanda_gontijo.png",
                  "bruno.png", "catherine_bascoy.png", "eduguedes-1.png", "erikka-1.png", "faro.png",
                  "fernanda_hernandes.jpg", "igao.jpg", "italo.png", "joelma.jpg", "juju-1.jpg",
                  "matheus.png", "milene.png", "mionzinho.png", "rodrigo_capella.png", "ronald.png",
                  "thiago_nigro.png", "valeska.png", "victor-sarro.png", "victor_teixeira.png"
                ].map((img, i) => (
                  <div key={`dup-${i}`} className="inline-block w-48 h-48 md:w-64 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 shrink-0 hover:border-accent-gold/50 transition-colors duration-500 grayscale hover:grayscale-0">
                    <Image
                      src={`/images/clientes/${img}`}
                      alt="Cliente da Clínica Vivian Sanches"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto bg-warm-alabaster relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze mb-4">
              Histórias Reais
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-deep-charcoal">
              O Que Dizem Nossos Pacientes
            </h3>
          </div>

          {/* Testimonials Grid/Slider */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 snap-x snap-mandatory md:overflow-visible">
            {/* Card 1: Joelma */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-10 rounded-[2.5rem] shadow-lg shadow-primary-bronze/5 border border-primary-bronze/10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 rounded-full border-2 border-accent-gold p-1 mb-6">
                <Image src="/images/clientes/joelma-1-85x85.png" alt="Joelma Sarraf" width={85} height={85} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="text-4xl text-accent-gold mb-6 font-serif opacity-30">“</div>
              <p className="text-deep-charcoal/70 font-sans italic leading-relaxed mb-6 flex-grow">
                Obrigada, o tratamento está sendo maravilhoso, demais! Melhorou minha pele, melhorou meu cabelo, minha energia, meu corpo está definindo mais rápido também. Olha galera, você que malha e não consegue ganhar músculo, que está sem energia, vai lá com a Dra. Vivian Sanches que ela é top, topíssima! Me ajudou pra caramba.
              </p>
              <div className="w-12 h-px bg-primary-bronze/20 mb-4"></div>
              <h5 className="font-serif text-xl text-deep-charcoal">Joelma Sarraf</h5>
            </div>

            {/* Card 2: Bruna */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-10 rounded-[2.5rem] shadow-lg shadow-primary-bronze/5 border border-primary-bronze/10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 rounded-full border-2 border-accent-gold p-1 mb-6">
                <Image src="/images/clientes/bruninha_cicolino-85x85.png" alt="Bruna Cicolino" width={85} height={85} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="text-4xl text-accent-gold mb-6 font-serif opacity-30">“</div>
              <p className="text-deep-charcoal/70 font-sans italic leading-relaxed mb-6 flex-grow">
                Nutricionista competente e da melhor energia, ambiente incrível! Merece todo sucesso do mundo!
              </p>
              <div className="w-12 h-px bg-primary-bronze/20 mb-4"></div>
              <h5 className="font-serif text-xl text-deep-charcoal">Bruna Cicolino</h5>
            </div>

            {/* Card 3: Marcela */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-10 rounded-[2.5rem] shadow-lg shadow-primary-bronze/5 border border-primary-bronze/10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 rounded-full border-2 border-accent-gold p-1 mb-6">
                <Image src="/images/clientes/marcela_lima_depoimento-85x85.png" alt="Marcela Lima" width={85} height={85} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="text-4xl text-accent-gold mb-6 font-serif opacity-30">“</div>
              <p className="text-deep-charcoal/70 font-sans italic leading-relaxed mb-6 flex-grow">
                Eu super indico a clínica Dra Vivian Sanches é uma excelente clínica e uma ótima profissional e uma excelente nutricionista competente agendem suas consultas gente, vocês não vão se arrepender estarão passando com uma das melhores nutricionista do Brasil.
              </p>
              <div className="w-12 h-px bg-primary-bronze/20 mb-4"></div>
              <h5 className="font-serif text-xl text-deep-charcoal">Marcela Lima</h5>
            </div>
          </div>

          {/* Mobile Hint */}
          <div className="md:hidden text-center mt-4 animate-pulse">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary-bronze opacity-70">
              ← Deslize para ver mais →
            </span>
          </div>
        </section>

      </div>

      <Footer />

      {/* Floating CTA */}
    </main>
  );
}
