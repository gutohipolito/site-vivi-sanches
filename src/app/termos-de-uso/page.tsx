import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function TermosUso() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHeader
                title="Termos de Uso"
                subtitle="Regras de Utilização"
                align="left"
            />
            <section className="py-24 px-10 max-w-4xl mx-auto space-y-12">
                <div className="prose prose-lg text-deep-charcoal/80 font-sans mx-auto">
                    <p>
                        Bem-vindo ao site da Clínica Vivian Sanches. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições.
                    </p>

                    <h3 className="font-serif text-deep-charcoal">1. Uso do Conteúdo</h3>
                    <p>
                        Todo o conteúdo deste site (textos, imagens, logotipos) é de propriedade da Clínica Vivian Sanches e está protegido por leis de direitos autorais. O uso não autorizado é proibido.
                    </p>

                    <h3 className="font-serif text-deep-charcoal">2. Natureza Informativa</h3>
                    <p>
                        As informações contidas neste site têm caráter meramente informativo e educativo. Elas não substituem o aconselhamento, diagnóstico ou tratamento profissional de um nutricionista ou médico. Sempre procure um profissional qualificado para orientações de saúde.
                    </p>

                    <h3 className="font-serif text-deep-charcoal">3. Limitação de Responsabilidade</h3>
                    <p>
                        A Clínica Vivian Sanches não se responsabiliza por danos decorrentes do uso indevido das informações aqui apresentadas ou da impossibilidade de uso do site.
                    </p>

                    <h3 className="font-serif text-deep-charcoal">4. Links Externos</h3>
                    <p>
                        Este site pode conter links para sites de terceiros (como redes sociais ou parceiros). Não nos responsabilizamos pelo conteúdo ou políticas de privacidade desses sites.
                    </p>

                    <h3 className="font-serif text-deep-charcoal">5. Alterações</h3>
                    <p>
                        Reservamo-nos o direito de alterar estes termos a qualquer momento. Recomendamos a revisão periódica desta página.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
