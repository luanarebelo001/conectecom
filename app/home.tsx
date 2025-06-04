import { Button } from "@/components/ui/button"
import { HomeIcon, Search, Settings, ShoppingCart, Phone, TrendingUp } from "lucide-react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner-fundo-home.jpeg')",
          }}
        />
        {/* Overlay para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#1f2937]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                Transformamos sua loja online em um <span className="text-[#3b82f6]">negócio que vende de verdade</span>
              </h1>
              <p className="text-lg md:text-xl font-lato leading-relaxed mb-8 text-[#4b5563]">
                Estrutura, estratégia e suporte contínuo para lojas que desejam crescer no mundo digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300">
                  Ver Serviços
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
                >
                  Agendar Consultoria
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">{/* Espaço vazio para dar equilíbrio visual */}</div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] text-center mb-16">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Construção */}
            <div className="text-center p-8 bg-[#f9fafb] rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Construção</h3>
              <p className="text-[#6b7280] font-lato leading-relaxed mb-6">
                Criamos lojas virtuais personalizadas e de alta performance, focadas em conversão e experiência do
                usuário.
              </p>
              <Button
                variant="outline"
                className="border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Otimização */}
            <div className="text-center p-8 bg-[#f9fafb] rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Otimização</h3>
              <p className="text-[#6b7280] font-lato leading-relaxed mb-6">
                Aumentamos a velocidade e a visibilidade da sua loja nos mecanismos de busca através de técnicas
                qualificadas.
              </p>
              <Button
                variant="outline"
                className="border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Manutenção */}
            <div className="text-center p-8 bg-[#f9fafb] rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Manutenção</h3>
              <p className="text-[#6b7280] font-lato leading-relaxed mb-6">
                Garantimos que sua loja virtual esteja sempre atualizada, segura e funcionando perfeitamente.
              </p>
              <Button
                variant="outline"
                className="border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Conect Ecom? */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-16">
            Por que escolher a Conect Ecom?
          </h2>

          <div className="space-y-20">
            {/* Aumente suas vendas */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-inter font-medium text-[#1f2937] mb-6">
                  Aumente suas vendas com nossa expertise
                </h3>
                <p className="text-lg font-lato text-[#6b7280] leading-relaxed">
                  Nossa abordagem é focada em resultados tangíveis, desenvolvendo estratégias personalizadas que
                  potencializam o crescimento das suas vendas.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/aumente-vendas.png"
                  alt="Ilustração de crescimento de vendas e analytics"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>

            {/* Parceria e suporte */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <Image
                  src="/images/suporte-humanizado.png"
                  alt="Ilustração de parceria e atendimento humanizado"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto shadow-lg rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-inter font-medium text-[#1f2937] mb-6">
                  Parceria e suporte em cada etapa
                </h3>
                <p className="text-lg font-lato text-[#6b7280] leading-relaxed">
                  Oferecemos um atendimento próximo, acompanhando seu crescimento e garantindo que você tenha todo o
                  suporte necessário.
                </p>
              </div>
            </div>

            {/* Tranquilidade */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-inter font-medium text-[#1f2937] mb-6">
                  Tranquilidade para focar no seu negócio
                </h3>
                <p className="text-lg font-lato text-[#6b7280] leading-relaxed">
                  Cuide com menos stress sobre os técnicos especializados para resolver qualquer problema e garantir o
                  bom funcionamento da sua loja.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/conforto-praticidade.png"
                  alt="Ilustração de pessoa trabalhando confortavelmente com sua loja online"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seu negócio está estagnado? */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-4">
              Seu negócio está <span className="text-[#3b82f6]">estagnado</span>?
            </h2>
            <p className="text-lg font-lato text-[#6b7280] max-w-3xl mx-auto">
              Identificamos os principais desafios enfrentados por lojas digitais e desenvolvemos soluções específicas
              para cada um deles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Falta de estrutura digital */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Falta de estrutura digital</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Lojas sem elementos básicos de navegação têm dificuldade para crescer e profissionalizar a operação.
              </p>
            </div>

            {/* Site que não converte */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Site que não converte</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Muitos e-commerces têm tráfego mas não conseguem converter visitantes em vendas efetivas.
              </p>
            </div>

            {/* Poucas visitas */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Poucas visitas</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Sem estratégia de tráfego adequada, sua loja fica perdida entre milhões de sites.
              </p>
            </div>

            {/* Abandono do carrinho */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Abandono do carrinho</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Clientes que chegam até o checkout mas desistem da compra por problemas no processo de finalização.
              </p>
            </div>

            {/* Marca sem identidade */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Marca sem identidade</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Falta de identidade visual prejudica a percepção de qualidade e confiança do cliente.
              </p>
            </div>

            {/* Dificuldades em escalar */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Dificuldades em escalar</h3>
              <p className="text-[#6b7280] font-lato text-sm">
                Problemas estruturais limitam o crescimento e impedem o desenvolvimento da operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-8">
            Pronto para elevar o nível da sua loja virtual?
          </h2>

          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Agendar Consultoria Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
