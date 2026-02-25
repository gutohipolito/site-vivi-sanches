"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Nutrição Clínica",
      slug: "clinica",
      description: "Equilíbrio bioquímico e restauração da saúde através da nutrição funcional.",
      image: "/images/clinica/protocol_metabolic.png",
      bgText: "PRECISÃO"
    },
    {
      title: "Performance Esportiva",
      slug: "performance",
      description: "Maximização de resultados e otimização metabólica para atletas e entusiastas.",
      image: "/images/clinica/protocol_performance.png",
      bgText: "POTÊNCIA"
    },
    {
      title: "Estética Avançada",
      slug: "estetica",
      description: "Protocolos integrados para beleza real fundamentada em saúde celular.",
      image: "/images/clinica/protocol_aesthetic.png",
      bgText: "ESSÊNCIA"
    }
  ];

  return (
    <main className="min-h-screen selection:bg-accent-gold selection:text-white relative overflow-x-hidden">
      <Navbar />

      <div className="relative">
        <Hero />

        {/* Premium A Clínica Section */}
        <section className="relative py-24 md:py-48 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-bronze/20 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="relative z-20 mb-24 md:mb-32">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="space-y-6 max-w-2xl">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-bronze block"
                  >
                    Exclusividade & Ciência
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-deep-charcoal leading-[0.85] tracking-tighter"
                  >
                    Clínica <br />
                    <span className="italic font-light opacity-60 ml-4 lg:ml-12">Sanches</span>
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="lg:max-w-md"
                >
                  <p className="text-xl md:text-2xl text-deep-charcoal/70 font-sans font-light leading-relaxed">
                    A convergência entre a <span className="text-primary-bronze font-normal">bioquímica avançada</span> e o acolhimento humano. Restauramos o equilíbrio para que sua melhor versão emerja.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Cinematic Structure Reveal */}
            <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 lg:col-span-8 relative rounded-[2rem] md:rounded-[4rem] overflow-hidden aspect-[4/5] md:aspect-[16/9] shadow-2xl shadow-primary-bronze/10 group"
              >
                <Image
                  src="/images/clinica/fotoclinica1.png"
                  alt="Estrutura da Clínica Sanches"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-[3s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent"></div>

                {/* Radical Glassmorphism Card - Refined Mobile Docking */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 md:bottom-12 md:right-12 p-8 md:p-10 backdrop-blur-2xl bg-white/10 border-t md:border border-white/20 rounded-t-[2.5rem] md:rounded-[3rem] max-w-full md:max-w-sm shadow-2xl"
                >
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4">Estrutura Premium</h3>
                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                    Equipamentos de última geração em um ambiente projetado para o seu conforto e privacidade.
                  </p>
                </motion.div>
              </motion.div>

              <div className="col-span-12 lg:col-span-4 space-y-8 md:space-y-12 lg:pl-8">
                {/* Apps & Individualization - Redesigned */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-warm-alabaster rounded-[2rem] border border-primary-bronze/5 relative overflow-hidden group"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-colors duration-700"></div>
                  <div className="relative z-10 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-gold">Tecnologia Própria</span>
                    <h4 className="text-2xl font-serif text-deep-charcoal">Acompanhamento 360º</h4>
                    <p className="text-sm text-deep-charcoal/60 leading-relaxed font-light">
                      Plano alimentar dinâmico via app exclusivo, com chat direto e monitoramento de metas em tempo real.
                    </p>
                  </div>
                </motion.div>

                {/* Network - Redesigned */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-8 border border-deep-charcoal/5 rounded-[2rem] space-y-6"
                >
                  <h4 className="text-xl font-serif text-deep-charcoal flex items-center gap-3">
                    <span className="w-8 h-px bg-primary-bronze/30"></span>
                    Ecosistema de Saúde
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Personal Trainers", "Endocrinologia", "Laboratórios", "Estética"].map((p, i) => (
                      <span key={i} className="px-4 py-2 bg-white border border-deep-charcoal/5 rounded-full text-[10px] uppercase tracking-widest text-deep-charcoal/60 hover:border-accent-gold/30 hover:text-accent-gold transition-all duration-300">
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Services Showcase */}
        <section className="relative min-h-[600px] md:min-h-[800px] flex items-center bg-deep-charcoal overflow-hidden group/session">
          {/* Background Atmospheric Layer */}
          <div className="absolute inset-0 z-0 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover grayscale"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-transparent to-deep-charcoal"></div>
          </div>

          {/* Large Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeService}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.05, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="text-[25vw] font-black text-white tracking-tighter leading-none select-none uppercase"
              >
                {services[activeService].bgText}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 py-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-white">
              <div className="space-y-12">
                <div className="space-y-6">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[10px] uppercase tracking-[0.8em] font-black text-accent-gold"
                  >
                    Especialidades
                  </motion.span>
                  <h3 className="text-4xl md:text-6xl font-serif">Áreas de <br /> <span className="italic font-light opacity-60">Atuação</span></h3>
                </div>

                <div className="space-y-0 border-l border-white/5">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveService(index)}
                      className="group cursor-pointer py-8 pl-8 relative"
                    >
                      {/* Interactive underline */}
                      <motion.div
                        initial={false}
                        animate={{
                          width: activeService === index ? "100%" : "0%",
                          opacity: activeService === index ? 1 : 0
                        }}
                        className="absolute bottom-0 left-0 h-px bg-gradient-premium origin-left"
                      />

                      <div className="relative z-10 space-y-2">
                        <div className="flex items-center gap-4">
                          <span className={`text-xs font-mono transition-colors duration-500 ${activeService === index ? "text-accent-gold" : "text-white/20"}`}>
                            0{index + 1}
                          </span>
                          <h4 className={`text-2xl md:text-4xl font-serif transition-all duration-500 transform ${activeService === index ? "text-white translate-x-2" : "text-white/40"}`}>
                            {service.title}
                          </h4>
                        </div>
                        {activeService === index && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm md:text-base text-white/50 font-light max-w-sm ml-10"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link
                    href="/servicos"
                    className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white hover:text-accent-gold transition-colors"
                  >
                    Explorar Todas
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-accent-gold"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Visual Showcase Side */}
              <div className="hidden lg:block relative aspect-square">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-white/5 rounded-full animate-reverse-spin-slow"></div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-20 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4"
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                      <Image
                        src={services[activeService].image}
                        alt={services[activeService].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative floating elements */}
                <div className="absolute top-1/4 -left-12 w-24 h-24 bg-accent-gold/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary-bronze/10 rounded-full blur-3xl"></div>
              </div>
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
                &quot;Alimente sua mente com <span className="italic text-accent-gold opacity-80">pensamentos saudáveis</span> para que seu corpo possa refletir saúde.&quot;
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
                      alt="Cliente da Clínica Sanches"
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
                      alt="Cliente da Clínica Sanches"
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
                Eu super indico a Clínica Sanches é uma excelente clínica e uma ótima profissional e uma excelente nutricionista competente agendem suas consultas gente, vocês não vão se arrepender estarão passando com uma das melhores nutricionista do Brasil.
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
