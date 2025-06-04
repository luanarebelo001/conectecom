"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, Video } from "lucide-react"
import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

export default function Consultoria() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    instagram: "",
    site: "",
    desafio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Consultoria Gratuita" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Receba um <span className="text-[#3b82f6]">diagnóstico gratuito</span> da sua loja virtual
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto mb-12">
            Entenda o que está travando suas vendas e descubra como estruturar sua loja para crescer com segurança.
          </p>

          <Button
            onClick={scrollToForm}
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-6 text-lg font-inter rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Consultoria Gratuita
          </Button>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] text-center mb-16">
            Como funciona a consultoria gratuita
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Passo 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Você preenche o formulário abaixo</h3>
              <p className="text-[#6b7280] font-lato leading-relaxed">
                Conte sobre sua loja atual ou projeto que deseja criar. Quanto mais detalhes, melhor será nossa análise.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Recebe um e-mail com as instruções</h3>
              <p className="text-[#6b7280] font-lato leading-relaxed">
                Enviaremos um e-mail com o link para agendamento e algumas orientações para aproveitar melhor a
                consultoria.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3b82f6] rounded-2xl flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">
                Agendamos uma videochamada de 45 min
              </h3>
              <p className="text-[#6b7280] font-lato leading-relaxed">
                Conversamos sobre sua loja, identificamos oportunidades e damos orientações práticas para melhorar suas
                vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] text-center mb-12">
            Preencha o formulário para agendar
          </h2>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-medium text-[#1f2937] mb-4">Obrigado!</h3>
              <p className="text-[#6b7280] font-lato">
                Em breve você receberá um e-mail com as instruções para agendar sua consultoria gratuita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-inter font-medium text-[#1f2937] mb-2">
                  Nome completo *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-[#1f2937] mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-inter font-medium text-[#1f2937] mb-2">
                  Instagram da loja
                </label>
                <Input
                  id="instagram"
                  name="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="@sualojavirtual"
                />
              </div>

              <div>
                <label htmlFor="site" className="block text-sm font-inter font-medium text-[#1f2937] mb-2">
                  Link do site (se houver)
                </label>
                <Input
                  id="site"
                  name="site"
                  type="url"
                  value={formData.site}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="https://suasite.com.br"
                />
              </div>

              <div>
                <label htmlFor="desafio" className="block text-sm font-inter font-medium text-[#1f2937] mb-2">
                  Descreva o problema ou desafio atual
                </label>
                <Textarea
                  id="desafio"
                  name="desafio"
                  rows={4}
                  value={formData.desafio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                  placeholder="Conte sobre os principais desafios da sua loja virtual ou projeto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-4 text-lg font-inter rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Quero Agendar Agora"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Seção final */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg font-lato text-[#6b7280] mb-8 max-w-2xl mx-auto">
            Mesmo que você ainda não tenha loja virtual, a consultoria pode te ajudar a dar os primeiros passos com
            segurança.
          </p>

          <Button
            variant="outline"
            className="border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
          >
            Preencher Briefing
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
