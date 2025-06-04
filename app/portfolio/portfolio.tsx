import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Loja de Brinquedos Educativos",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce Infantil",
    },
    {
      id: 2,
      title: "Moda Feminina Consciente",
      image: "/placeholder.svg?height=300&width=400",
      category: "Moda Sustentável",
    },
    {
      id: 3,
      title: "Produtos Naturais e Orgânicos",
      image: "/placeholder.svg?height=300&width=400",
      category: "Saúde e Bem-estar",
    },
    {
      id: 4,
      title: "Acessórios Pet Premium",
      image: "/placeholder.svg?height=300&width=400",
      category: "Pet Shop",
    },
    {
      id: 5,
      title: "Livraria Infantil Criativa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Educação",
    },
    {
      id: 6,
      title: "Cafeteria e Grãos Especiais",
      image: "/placeholder.svg?height=300&width=400",
      category: "Alimentação",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Portfólio" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Projetos que conectam <span className="text-[#3b82f6]">identidade</span> com{" "}
            <span className="text-[#3b82f6]">performance</span>
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
            Conheça alguns dos projetos de lojas online criados pela Conect Ecom. Cada layout foi desenvolvido com foco
            em performance, experiência do usuário e identidade única para o negócio. Clique nas imagens para ampliar.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ExternalLink className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-inter font-medium text-[#3b82f6] mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-3">{project.title}</h3>
                  <p className="text-[#6b7280] font-lato text-sm">
                    Layout personalizado com foco em conversão e experiência do usuário.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-6">Gostou de algum estilo?</h2>
          <p className="text-lg font-lato text-[#6b7280] mb-12 max-w-2xl mx-auto">
            Entre em contato e vamos criar a loja ideal para o seu negócio.
          </p>

          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-6 text-lg font-inter rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
            Abrir Formulário de Interesse
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
