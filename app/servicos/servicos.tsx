import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import Breadcrumb from "../../components/breadcrumb"

export default function Servicos() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Serviços" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Soluções para sua <span className="text-[#3b82f6]">Loja Online</span>
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
            Ajudamos negócios digitais a alcançarem mais vendas com lojas virtuais bem estruturadas, otimizadas e sempre
            ativas.
          </p>
        </div>
      </section>

      {/* Construção de Loja Virtual */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-8">
                Construção de Loja Virtual
              </h2>
              <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed mb-8">
                Criamos lojas virtuais personalizadas e de alta performance, focadas em conversão e experiência do
                usuário.
              </p>
              <Button
                asChild
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
              >
                <Link href="/servicos/construcao">Ver detalhes</Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  src="/images/construcao-da-loja.png"
                  width={500}
                  height={400}
                  alt="Ilustração de construção de loja virtual com monitor, elementos de e-commerce e automação"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otimização da Loja */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <Image
                  src="/images/otimizacao-da-loja.png"
                  width={500}
                  height={400}
                  alt="Ilustração de otimização com laptop, gráficos de performance, métricas e análises"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-8">Otimização da Loja</h2>
              <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed mb-8">
                Melhoramos a performance da sua loja virtual, aumentando a velocidade, usabilidade e visibilidade nos
                motores de busca.
              </p>
              <Button
                asChild
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
              >
                <Link href="/servicos/otimizacao">Ver detalhes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manutenção da Loja */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-8">Manutenção da Loja</h2>
              <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed mb-8">
                Garantimos que sua loja virtual esteja sempre atualizada, segura e funcionando perfeitamente, com
                suporte contínuo.
              </p>
              <Button
                asChild
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
              >
                <Link href="/servicos/manutencao">Ver detalhes</Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  src="/images/manutencao-da-loja.png"
                  width={500}
                  height={400}
                  alt="Ilustração de manutenção com escudos de segurança, laptop, headset de suporte e proteção"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
