import { Button } from "@/components/ui/button"
import { Check, RefreshCw, Bug, Shield, Headphones, Activity } from "lucide-react"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Breadcrumb from "../../../components/breadcrumb"

const includedFeatures = [
  {
    icon: RefreshCw,
    title: "Atualizações Mensais",
    description: "Mantemos sua loja sempre atualizada com as últimas versões de segurança e funcionalidades.",
  },
  {
    icon: Bug,
    title: "Correção de Bugs e Erros",
    description: "Identificamos e corrigimos rapidamente qualquer problema que possa afetar sua loja.",
  },
  {
    icon: Shield,
    title: "Backups Regulares",
    description: "Realizamos backups automáticos para garantir que seus dados estejam sempre seguros.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Prioritário",
    description: "Atendimento especializado com prioridade para resolver qualquer questão técnica.",
  },
  {
    icon: Activity,
    title: "Monitoramento de Performance",
    description: "Acompanhamos constantemente a performance da sua loja para garantir o melhor funcionamento.",
  },
]

export default function ManutencaoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }, { label: "Manutenção da Loja" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Loja Sempre <span className="text-blue-500">Online e Otimizada</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Garanta a performance e segurança da sua loja virtual com nossa manutenção especializada.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Quero Garantir Suporte Contínuo
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
                    <strong>Empresários</strong> que querem focar no negócio, não na tecnologia
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Lojas virtuais</strong> que precisam de estabilidade e confiabilidade
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>E-commerces</strong> que não podem ficar offline nem por um minuto
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Negócios</strong> que valorizam suporte técnico especializado
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-8" style={{ backgroundColor: "#e6e8e9" }}>
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#1f2937" }}
                >
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ideal para quem quer tranquilidade</h3>
                <p className="text-gray-600">
                  Durma tranquilo sabendo que sua loja está sendo cuidada por especialistas.
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
              Cuidado completo para manter sua loja sempre funcionando perfeitamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            Oferecemos um plano mensal de manutenção exclusivo para lojas criadas ou otimizadas pela nossa equipe. Uma
            solução contínua para garantir desempenho, segurança e vendas sempre ativas.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Manutenção especializada para quem já é nosso cliente
            </h3>
            <p className="text-gray-600 mb-6">
              Manutenção contínua com todos os serviços inclusos para máxima tranquilidade.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
              Solicitar proposta de manutenção
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#e6e8e9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quero Garantir Suporte Contínuo</h2>
          <p className="text-xl text-gray-600 mb-8">Não deixe sua loja na mão. Garanta suporte especializado 24/7.</p>
          <Button className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-4 rounded-md text-lg font-medium">
            Contratar Manutenção
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
