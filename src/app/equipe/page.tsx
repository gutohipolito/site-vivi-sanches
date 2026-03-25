import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

export default function EquipePage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            
            {/* Equipe Header */}
            <section className="relative pt-40 pb-20 px-10 bg-warm-alabaster overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-bronze opacity-80">
                        Corpo Clínico
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-deep-charcoal leading-[0.85] tracking-tighter">
                        Nossos <br /> <span className="text-primary-bronze italic md:ml-20">Especialistas.</span>
                    </h1>
                    <div className="w-24 h-px bg-primary-bronze/30 mx-auto pt-4"></div>
                    <p className="text-lg text-deep-charcoal/60 font-sans leading-relaxed max-w-2xl mx-auto">
                        Conheça os profissionais que transformam vidas através da excelência técnica e atendimento humanizado.
                    </p>
                </div>
            </section>

            <TeamSection />
            
            <Footer />
        </main>
    );
}
