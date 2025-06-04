import { Button } from "@/components/ui/button"
import { Target, Users, Palette, HeadphonesIcon } from "lucide-react"
import Image from "next/image"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Quem Somos" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Mais do que uma <span className="text-[#3b82f6]">agência</span>. Somos parceiros na evolução da sua{" "}
            <span className="text-[#3b82f6]">loja online</span>.
          </h1>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-8">Nossa missão</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl font-lato text-[#1f2937] leading-relaxed">
                Ajudar negócios digitais a construírem lojas virtuais com estrutura profissional, identidade forte e
                desempenho de verdade. Queremos que cada cliente cresça com mais segurança e previsibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Conect Ecom */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-8">
                Quem está por trás da Conect Ecom?
              </h2>
              <p className="text-lg md:text-xl font-lato text-[#1f2937] leading-relaxed">
                Com experiência em e-commerce e design digital, criamos a Conect Ecom para oferecer soluções completas,
                de forma acessível e personalizada. Aqui, cada loja é tratada como única.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  src="/images/equipe-conect-ecom-nova.png"
                  width={500}
                  height={500}
                  alt="Equipe de profissionais da Conect Ecom"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] text-center mb-16">
            Nossos diferenciais
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Compromisso com resultados */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Compromisso com resultados</h3>
            </div>

            {/* Atendimento humanizado */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Atendimento humanizado</h3>
            </div>

            {/* Design estratégico */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Design estratégico</h3>
            </div>

            {/* Suporte contínuo */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-3">Suporte contínuo</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-12">
            Vamos construir algo incrível juntos?
          </h2>

          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-lg font-inter rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
            Agendar Consultoria Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
