import { Button } from "@/components/ui/button"
import { Check, Smartphone, Plug, FileText, Settings } from "lucide-react"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Breadcrumb from "../../../components/breadcrumb"

const includedFeatures = [
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Layout que se adapta perfeitamente a todos os dispositivos - desktop, tablet e mobile.",
  },
  {
    icon: Plug,
    title: "Integrações Básicas",
    description: "Conexão com meios de pagamento, correios e ferramentas essenciais para vendas online.",
  },
  {
    icon: FileText,
    title: "Páginas Estruturadas",
    description: "Páginas otimizadas: home, produtos, carrinho, checkout e páginas institucionais.",
  },
  {
    icon: Settings,
    title: "Configuração Inicial",
    description: "Setup completo da loja, produtos cadastrados e configurações básicas de SEO.",
  },
]

export default function ConstrucaoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }, { label: "Construção de Loja Virtual" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Loja Virtual <span className="text-blue-500">Profissional</span> Começa Aqui
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforme sua visão em realidade com uma loja virtual que não apenas vende, mas encanta e fideliza seus
              clientes.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Abrir Formulário de Interesse
            </Button>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Para quem é?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Empreendedores</strong> que querem criar sua primeira loja virtual
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Empresas</strong> que precisam reformular completamente sua presença online
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Negócios físicos</strong> que querem expandir para o digital
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Quem busca</strong> uma solução completa e profissional desde o início
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ideal para quem quer começar certo</h3>
                <p className="text-gray-600">
                  Nossa experiência garante que sua loja nasça com as melhores práticas do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O que está incluso?</h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para ter uma loja virtual completa e profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Investimento</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Oferecemos planos acessíveis e adaptáveis ao seu orçamento. Cada projeto é único, por isso criamos uma
            proposta personalizada baseada nas suas necessidades específicas.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Formulário de Interesse</h3>
            <p className="text-gray-600 mb-6">
              Conte pra gente o que você precisa e receba um orçamento personalizado, sem compromisso.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto para começar sua loja profissional?</h2>
          <p className="text-xl text-blue-100 mb-8">Não perca mais tempo. Sua concorrência já está vendendo online.</p>
          <Button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-medium">
            Começar agora
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
