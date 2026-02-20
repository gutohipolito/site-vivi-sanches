import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-40 px-10 text-center">
                <div className="max-w-xl space-y-8">
                    <h1 className="text-8xl font-serif text-primary-bronze">404</h1>
                    <h2 className="text-3xl font-serif text-deep-charcoal">Página não encontrada</h2>
                    <p className="text-deep-charcoal/60 font-sans leading-relaxed text-lg">
                        Ops! Parece que o caminho que você tentou acessar não existe ou foi movido.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-gradient-premium text-white px-10 py-5 rounded-full uppercase text-xs font-bold tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Voltar para o Início
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
