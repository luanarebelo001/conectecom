import { Button } from "@/components/ui/button"
import { Check, Zap, Palette, Search, TrendingUp } from "lucide-react"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Breadcrumb from "../../../components/breadcrumb"

const includedFeatures = [
  {
    icon: Zap,
    title: "Otimização de Velocidade",
    description:
      "Melhoramos o tempo de carregamento da sua loja para reduzir a taxa de abandono e melhorar a experiência.",
  },
  {
    icon: Palette,
    title: "Melhorias de UX/UI",
    description:
      "Aprimoramos a interface e experiência do usuário para facilitar a navegação e aumentar as conversões.",
  },
  {
    icon: Search,
    title: "Revisão Técnica de SEO",
    description: "Otimizamos sua loja para os mecanismos de busca, melhorando o posicionamento orgânico.",
  },
  {
    icon: TrendingUp,
    title: "Análise do Funil de Compra",
    description: "Identificamos e corrigimos pontos de abandono no processo de compra para aumentar as vendas.",
  },
]

export default function OtimizacaoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }, { label: "Otimização da Loja" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Loja Pode <span className="text-blue-500">Vender Muito Mais</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A otimização de loja virtual é crucial para melhorar o desempenho, a experiência do usuário e as taxas de
              conversão.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Solicitar Diagnóstico Gratuito
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
                    <strong>Lojas existentes</strong> com baixa taxa de conversão
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>E-commerces</strong> com problemas de performance e velocidade
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Empresas</strong> que querem melhorar o posicionamento no Google
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Negócios</strong> que têm tráfego mas não convertem vendas
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-8" style={{ backgroundColor: "#b5e8d7" }}>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ideal para quem quer resultados</h3>
                <p className="text-gray-600">
                  Transformamos lojas com baixa performance em máquinas de vendas otimizadas.
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
              Análise completa e otimizações estratégicas para maximizar seus resultados
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
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Realizamos um diagnóstico completo e gratuito da sua loja antes de apresentar o orçamento personalizado.
            Assim, você investe apenas no que realmente precisa.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnóstico Gratuito</h3>
            <p className="text-gray-600 mb-6">
              Analisamos sua loja atual, identificamos oportunidades de melhoria e apresentamos um plano de otimização
              personalizado.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Solicitar Diagnóstico
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Vamos turbinar sua loja?</h2>
          <p className="text-xl text-green-100 mb-8">
            Cada dia sem otimização é dinheiro deixado na mesa. Comece hoje mesmo!
          </p>
          <Button className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-medium">
            Solicitar Diagnóstico Gratuito
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
