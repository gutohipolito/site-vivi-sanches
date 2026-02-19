import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function PoliticaPrivacidade() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHeader
                title="Política de Privacidade"
                subtitle="Transparência e Dados"
                align="left"
            />
            <section className="py-24 px-10 max-w-4xl mx-auto space-y-12">
                <div className="prose prose-lg text-deep-charcoal/80 font-sans mx-auto text-justify">

                    <h3 className="font-serif text-deep-charcoal text-2xl">Do Objetivo</h3>
                    <p>
                        A Equipe Vivian De Campos Sanches Orientação Nutricional comprometida com a proteção de dados pessoais, com a conscientização e publicidade ofertada a você, cliente, Titular dos Dados Pessoais apresenta a forma pela qual coleta e protege seus dados pessoais em seu website: <a href="http://viviansanches.com.br/" className="text-primary-bronze hover:underline">viviansanches.com.br</a>.
                    </p>
                    <p>
                        A política de privacidade poderá ser eventualmente alterada, e, em caso de alteração, esta será informada e publicada para você, Titular dos Dados Pessoais.
                    </p>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Nomenclaturas</h3>
                    <p>Nesta política as definições abaixo serão adotadas:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Controlador de Dados – Vivian De Campos Sanches Orientação Nutricional:</strong> Pessoa jurídica que coleta, processa e trata os dados dos titulares, transferindo-os também para determinados Operadores.</li>
                        <li><strong>Titular dos Dados Pessoais – Clientes e Pacientes:</strong> Pessoa física que consome e utiliza os serviços oferecidos pelo Controlador (Cliente/usuário)</li>
                        <li><strong>Operador 01 – LOCAWEB:</strong> Ambiente em cloud que hospeda esse website.</li>
                    </ul>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Público-Alvo</h3>
                    <p>Essa política se aplica ao Titular dos Dados Pessoais que navegue pelos seguintes canais:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>App/Website (viviansanches.com.br):</strong> consultando serviços, agendando atendimentos e solicitando contato comercial.</li>
                        <li><strong>Instagram/Facebook/WhatsApp:</strong> acompanhando informações institucionais, campanhas de publicidade, marketing promocional, entre outros.</li>
                        <li><strong>Prédio físico:</strong> consultas clínicas e utilizando os serviços na modalidade presencial.</li>
                    </ul>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Informações que coletamos sobre você</h3>
                    <p>
                        Iremos coletar dados e informações sobre você para prestar atendimento quanto a dúvidas e consultas de serviços, formalizar a contratação dos serviços, monitorar pagamento pelos serviços e acompanhar a evolução do seu tratamento nutricional.
                    </p>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Do direito dos titulares dos Dados Pessoais</h3>
                    <p>
                        A política de privacidade busca atingir todos os direitos amparados pelo Artigo 9º da Lei 13.709/2018.
                        O Titular dos Dados Pessoais tem a liberdade de escolher quais informações quer fornecer para o website, entretanto, algumas delas são essenciais para a regular prestação de serviços.
                    </p>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Política de Cookies</h3>
                    <p>
                        Esse ambiente utiliza cookies para coleta de dados de preferências e dados de personalização, coleta necessária para melhorar a personalização e a experiência do usuário ao navegar no website.
                    </p>
                    <p>
                        O usuário poderá se opor ao registro de cookies pelo sistema, site, aplicativo ou plataforma desativando esta opção no seu próprio navegador ou aparelho, no entanto, a desativação dos cookies poderá afetar diretamente a disponibilidade do website, comprometendo a navegação e funcionalidades de todo o sistema.
                    </p>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Segurança da Informação</h3>
                    <p>
                        O banco de dados bem como os servidores em que os dados são tratados, estão protegidos por procedimentos através de boas práticas da Segurança da Informação contra o acesso ou uso não autorizado de terceiros.
                    </p>
                    <p>
                        Essa empresa busca também ter conexões seguras de Internet, utilizando sistemas criptográficos SSL (“Secure Sockets Layer”) para informações de natureza financeira, principal tecnologia atualmente disponível para segurança online e chaves de segurança eletrônicas.
                    </p>
                    <p>
                        É recomendado ao Titular dos Dados Pessoais, como medida de segurança, a alteração de senhas de forma regular, além de cuidados ao acessar ou fazer login nas ferramentas disponibilizadas pela nossa clínica.
                    </p>

                    <h3 className="font-serif text-deep-charcoal text-2xl mt-12">Canal de Privacidade e Atendimento</h3>
                    <p>
                        Essa empresa possui como meio de receber solicitações ou prestar esclarecimentos, portabilidade, exclusão ou quaisquer solicitações do Titular dos Dados Pessoais o canal de privacidade pode ser acessado pelo e-mail: <strong>contato@viviansanches.com.br</strong>.
                    </p>

                    <p className="text-sm text-deep-charcoal/50 mt-12 border-t pt-6">
                        Atualizada em DEZEMBRO/2023 <br />
                        Elaborada por Vanessa Genaro, consultora Executiva, CEO VG Consultoria.
                    </p>

                </div>
            </section>
            <Footer />
        </main>
    );
}
