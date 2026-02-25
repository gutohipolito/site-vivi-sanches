import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const posts = [
    {
        title: "Nutrição e Longevidade: O Papel dos Antioxidantes",
        category: "Ciência",
        date: "12 AGO 2025",
        image: "/images/clinica/blog_antioxidantes.png",
        excerpt: "Descubra como compostos bioativos podem modular a expressão gênica e retardar o envelhecimento celular."
    },
    {
        title: "Estratégias de Hidratação para Alta Performance",
        category: "Esporte",
        date: "05 SET 2025",
        image: "/images/clinica/blog_hidratacao.png",
        excerpt: "A importância do equilíbrio eletrolítico na manutenção da potência muscular e prevenção de lesões."
    },
    {
        title: "Microbiota Intestinal e Saúde Mental",
        category: "Bem-estar",
        date: "22 OUT 2025",
        image: "/images/clinica/blog_microbiota.png",
        excerpt: "A conexão entre o intestino e o cérebro: como sua alimentação influencia diretamente seu humor e foco."
    }
];

export default function Blog() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <PageHeader
                title="Dicas de Saúde"
                subtitle="Artigos Recentes"
                image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
            />

            <section className="py-24 px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <article key={i} className="group cursor-pointer space-y-6">
                            <div className="aspect-[4/3] bg-warm-alabaster overflow-hidden relative border border-primary-bronze/10 rounded-2xl shadow-xl shadow-primary-bronze/5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/0 transition-colors duration-500"></div>
                                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[9px] uppercase tracking-widest font-bold text-deep-charcoal border border-primary-bronze/10 rounded-lg">
                                    {post.category}
                                </span>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] uppercase tracking-widest text-deep-charcoal/40 font-bold">{post.date}</span>
                                <h3 className="text-2xl font-serif text-deep-charcoal group-hover:text-primary-bronze transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed line-clamp-3 font-light">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-primary-bronze/10 flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-bronze group-hover:translate-x-2 transition-transform duration-300">Ler Artigo →</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
