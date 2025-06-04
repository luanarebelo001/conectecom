"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

interface BlogPost {
  id: number
  title: string
  summary: string
  category: string
  image: string
  date: string
  readTime: string
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Estratégia", "Otimização", "Design", "SEO", "Dicas Rápidas"]

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Como preparar sua loja virtual para grandes picos de tráfego",
      summary:
        "Dicas práticas para garantir estabilidade e performance em datas importantes como Black Friday. Aprenda a otimizar sua infraestrutura.",
      category: "Otimização",
      image: "/images/grandes-picos-de-trafego.png",
      date: "15 Jan 2025",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Design estratégico: como o layout impacta nas vendas",
      summary:
        "Entenda como a experiência visual influencia na confiança e na conversão do seu e-commerce. Elementos que fazem a diferença.",
      category: "Design",
      image: "/images/design-estrategico.png",
      date: "12 Jan 2025",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "SEO para lojas virtuais: por onde começar?",
      summary:
        "Aprenda os fundamentos de otimização para mecanismos de busca aplicados ao comércio eletrônico. Guia prático para iniciantes.",
      category: "SEO",
      image: "/images/seo-para-lojas-virtuais.png",
      date: "10 Jan 2025",
      readTime: "6 min",
    },
  ]

  const filteredPosts =
    selectedCategory === "Todos" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Conteúdo estratégico para quem <span className="text-[#3b82f6]">vende online</span>
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
            Dicas, insights e estratégias para lojas virtuais que querem crescer com estrutura.
          </p>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#3b82f6] text-white shadow-lg"
                    : "bg-white text-[#6b7280] border border-[#e5e7eb] hover:border-[#3b82f6] hover:text-[#3b82f6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listagem de Posts */}
      <section className="pb-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 shadow-md"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-lato">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-lato">{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-3 line-clamp-2 group-hover:text-[#3b82f6] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[#6b7280] font-lato leading-relaxed mb-6 line-clamp-3">{post.summary}</p>

                    <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3 font-inter rounded-xl transition-all duration-300">
                      Ler mais
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#6b7280] font-lato text-lg">
                Nenhum post encontrado para a categoria "{selectedCategory}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-8">
            Pronto para estruturar sua loja com quem entende do assunto?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Ver Serviços
            </Button>
            <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
