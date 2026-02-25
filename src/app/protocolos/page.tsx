"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProtocolCard from "@/components/ProtocolCard";
import ProtocolModal from "@/components/ProtocolModal";
import { motion } from "framer-motion";

const PROTOCOLS_DATA = [
    {
        title: "Protocolo para Ovário Policístico",
        shortDesc: "Suporte metabólico e auxílio no equilíbrio hormonal para sintomas de SOP.",
        image: "/images/clinica/protocol_metabolic.png",
        tagline: "Mais equilíbrio. Mais controle. Mais qualidade de vida.",
        content: [
            "Se você convive com sintomas como irregularidade menstrual, dificuldade para emagrecer, acne ou alterações metabólicas, nosso protocolo injetável para Ovário Policístico pode ser um grande aliado no seu tratamento.",
            "A proposta é oferecer suporte metabólico e auxiliar no equilíbrio hormonal, atuando como complemento ao plano alimentar e às mudanças no estilo de vida.",
            "Cada protocolo é cuidadosamente individualizado após avaliação clínica e análise de exames, garantindo segurança e estratégia personalizada para cada paciente.",
            "Mais equilíbrio. Mais controle. Mais qualidade de vida."
        ]
    },
    {
        title: "Protocolo para Ganho de Massa Muscular",
        shortDesc: "Suporte avançado à recuperação e adaptação muscular para alta performance.",
        image: "/images/clinica/protocol_performance.png",
        tagline: "Performance com estratégia é diferente de apenas treinar mais.",
        content: [
            "Para quem busca evolução física com estratégia e performance, o protocolo para ganho de massa muscular oferece suporte avançado à recuperação e adaptação muscular.",
            "Ele potencializa os resultados do treino e do plano alimentar, auxiliando na recuperação pós-exercício e no desenvolvimento de massa magra.",
            "Indicado para atletas e praticantes de atividade física que desejam otimizar resultados com acompanhamento profissional e abordagem baseada em evidência.",
            "Performance com estratégia é diferente de apenas treinar mais."
        ]
    },
    {
        title: "Protocolo para Queima de Gordura",
        shortDesc: "Otimização do metabolismo energético para favorecer a queima de gordura eficiente.",
        image: "/images/clinica/protocol_performance.png",
        tagline: "Emagrecimento inteligente é aquele que respeita sua fisiologia.",
        content: [
            "Se o seu objetivo é emagrecer com eficiência e acelerar o metabolismo, esse protocolo foi desenvolvido para atuar como suporte ao processo de queima de gordura.",
            "Ele auxilia na otimização do metabolismo energético, favorecendo melhores respostas ao déficit calórico e à prática de exercícios.",
            "Não substitui alimentação equilibrada, potencializa resultados quando existe estratégia.",
            "Emagrecimento inteligente é aquele que respeita sua fisiologia."
        ]
    },
    {
        title: "Protocolo para Resistência à Insulina",
        shortDesc: "Suporte ao controle glicêmico e melhora da sensibilidade à insulina.",
        image: "/images/clinica/protocol_metabolic.png",
        tagline: "Cuidar do metabolismo é investir na base da sua saúde.",
        content: [
            "A resistência à insulina é um dos principais obstáculos para emagrecimento e saúde metabólica. Nosso protocolo foi estruturado para oferecer suporte ao controle glicêmico e à melhora da sensibilidade à insulina.",
            "Indicado para pacientes com alterações metabólicas, síndrome metabólica ou dificuldade de resposta ao tratamento convencional.",
            "O acompanhamento é contínuo e individualizado, com foco em prevenção, performance metabólica e saúde a longo prazo.",
            "Cuidar do metabolismo é investir na base da sua saúde."
        ]
    },
    {
        title: "Terapia Injetável de Vitaminas e Minerais",
        shortDesc: "Reposição estratégica para combater cansaço, baixa imunidade e deficiências nutricionais.",
        image: "/images/clinica/protocol_metabolic.png",
        tagline: "Seu corpo performa melhor quando está nutrido corretamente.",
        content: [
            "Cansaço frequente, baixa imunidade, queda de cabelo ou dificuldade de recuperação podem estar relacionados a deficiências nutricionais.",
            "A terapia injetável oferece reposição estratégica e suporte ao funcionamento ideal do organismo, sempre após avaliação clínica criteriosa.",
            "Mais energia, mais disposição e melhor resposta fisiológica para o seu dia a dia.",
            "Seu corpo performa melhor quando está nutrido corretamente."
        ]
    },
    {
        title: "Protocolo para Aumento da Imunidade",
        shortDesc: "Fortalecimento do sistema imunológico para maior resistência física e mental.",
        image: "/images/clinica/protocol_performance.png",
        tagline: "Prevenir é sempre mais estratégico do que remediar.",
        content: [
            "Fortalecer o sistema imunológico é essencial para manter consistência nos treinos, produtividade no trabalho e qualidade de vida.",
            "Esse protocolo oferece suporte ao equilíbrio imunológico, especialmente em períodos de maior estresse físico ou mental.",
            "Ideal para quem busca prevenção, recuperação mais rápida e maior resistência orgânica.",
            "Prevenir é sempre mais estratégico do que remediar."
        ]
    },
    {
        title: "Qualidade de Unhas e Cabelo",
        shortDesc: "Suporte nutricional para fortalecimento e melhora da estrutura capilar e ungueal.",
        image: "/images/clinica/protocol_aesthetic.png",
        tagline: "Estética começa na saúde. Cuidar de dentro para refletir por fora.",
        content: [
            "Queda capilar, fios enfraquecidos ou unhas quebradiças podem ser sinais de desequilíbrios nutricionais e metabólicos.",
            "Nosso protocolo atua oferecendo suporte para fortalecimento e melhora da estrutura capilar e ungueal, dentro de uma abordagem personalizada.",
            "Estética começa na saúde.",
            "Cuidar de dentro para refletir por fora."
        ]
    },
    {
        title: "Pool de Aminoácidos",
        shortDesc: "Preservação e recuperação muscular para atletas, idosos e recuperação pós-cirúrgica.",
        image: "/images/clinica/protocol_performance.png",
        tagline: "Aliado estratégico para performance e preservação de massa magra.",
        content: [
            "O Protocolo Injetável de Pool de Aminoácidos é indicado para suporte à performance, preservação e recuperação muscular em diferentes fases da vida. Atua como aliado estratégico para atletas, praticantes de maratona e esportes de endurance, favorecendo melhor adaptação ao treino e recuperação mais eficiente.",
            "Também é recomendado para prevenção e manejo da sarcopenia em idosos, para mulheres 40+ que desejam preservar massa magra durante as mudanças hormonais, e em períodos pós-cirúrgicos ou pós-lesão, quando há maior demanda por recuperação muscular.",
            "A prescrição é sempre individualizada, após avaliação clínica, garantindo segurança e alinhamento com os objetivos de cada paciente."
        ]
    }
];

export default function ProtocolosPage() {
    const [selectedProtocol, setSelectedProtocol] = useState<typeof PROTOCOLS_DATA[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (protocol: typeof PROTOCOLS_DATA[0]) => {
        setSelectedProtocol(protocol);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen selection:bg-accent-gold selection:text-white">
            <Navbar />

            <PageHeader
                title="Protocolos Injetáveis"
                subtitle="Tratamentos Avançados"
                image="/images/clinica/protocol_metabolic.png"
            />

            <section className="py-24 px-10 max-w-7xl mx-auto space-y-20">
                {/* Intro Section */}
                <div className="max-w-3xl space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-deep-charcoal leading-tight"
                    >
                        Tecnologia a favor da sua <br />
                        <span className="text-primary-bronze italic">Performance e Saúde.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-deep-charcoal/60 leading-relaxed font-sans font-light"
                    >
                        Nossos protocolos injetáveis são desenhados para oferecer suporte metabólico direto,
                        maximizando resultados e equilibrando o organismo de forma precisa e segura.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROTOCOLS_DATA.map((protocol, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <ProtocolCard
                                title={protocol.title}
                                description={protocol.shortDesc}
                                image={protocol.image}
                                onClick={() => openModal(protocol)}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <ProtocolModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                protocol={selectedProtocol}
            />

            {/* Trust & Safety Section */}
            <section className="py-24 bg-warm-alabaster border-y border-primary-bronze/10 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary-bronze">Segurança em Primeiro Lugar</span>
                        <h3 className="text-3xl md:text-4xl font-serif text-deep-charcoal">Abordagem Baseada em <br /> Evidências</h3>
                        <p className="text-deep-charcoal/60 leading-relaxed font-light">
                            Toda prescrição de terapia injetável é precedida por uma avaliação clínica minuciosa e análise laboratorial.
                            Garantimos que cada ativo utilizado esteja alinhado com a necessidade fisiológica real do paciente.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-primary-bronze/5 border border-primary-bronze/10">
                        <div className="space-y-6">
                            {[
                                { t: "Análise Individual", d: "Exames de sangue e anamnese completa." },
                                { t: "Grau Farmacêutico", d: "Apenas insumos de alta pureza e procedência." },
                                { t: "Aplicação Segura", d: "Protocolos rigorosos de higiene e técnica." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary-bronze/10 flex items-center justify-center text-primary-bronze shrink-0 font-serif text-lg">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-deep-charcoal mb-1">{item.t}</h4>
                                        <p className="text-sm text-deep-charcoal/50">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
