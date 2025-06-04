"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
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

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Contato" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Vamos conversar sobre sua <span className="text-[#3b82f6]">loja virtual</span>?
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
            Envie sua mensagem, tire suas dúvidas ou fale com a gente agora mesmo.
          </p>
        </div>
      </section>

      {/* Formulário e Contato */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl md:text-3xl font-inter font-medium text-[#1f2937] mb-8">Envie sua mensagem</h2>

              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#10b981] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-4">Mensagem enviada!</h3>
                  <p className="text-[#6b7280] font-lato">
                    Recebemos sua mensagem e retornaremos em breve. Obrigado pelo contato!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Nome completo *
                    </Label>
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
                    <Label htmlFor="email" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      E-mail *
                    </Label>
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
                    <Label htmlFor="mensagem" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                      placeholder="Conte sobre seu projeto, dúvidas ou como podemos ajudar..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-4 text-lg font-inter rounded-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              )}
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl md:text-3xl font-inter font-medium text-[#1f2937] mb-8">
                Outras formas de contato
              </h2>

              <div className="space-y-6">
                {/* E-mail */}
                <div className="flex items-start gap-4 p-6 bg-[#f9fafb] rounded-2xl">
                  <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-2">E-mail</h3>
                    <a href="mailto:agenciaconectecom@gmail.com" className="text-[#3b82f6] font-lato hover:underline">
                      agenciaconectecom@gmail.com
                    </a>
                    <p className="text-[#6b7280] font-lato text-sm mt-1">Respondemos em até 24 horas</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-6 bg-[#f9fafb] rounded-2xl">
                  <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-2">WhatsApp</h3>
                    <a href="https://wa.me/5511999999999" className="text-[#10b981] font-lato hover:underline">
                      (11) 99999-9999
                    </a>
                    <p className="text-[#6b7280] font-lato text-sm mt-1">Atendimento de segunda a sexta, 9h às 18h</p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="p-6 bg-[#f9fafb] rounded-2xl">
                  <h3 className="text-lg font-inter font-medium text-[#1f2937] mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/conectecom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/company/conectecom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0077b5] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <p className="text-[#6b7280] font-lato text-sm mt-3">
                    Siga-nos para dicas e novidades sobre e-commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#1f2937] mb-8">
            Ainda não sabe por onde começar?
          </h2>

          <Button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Agendar Consultoria Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
