"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumb from "../../components/breadcrumb"

export default function FormularioInteresse() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    descricaoNegocio: "",
    tipoPessoa: "",
    temIdentidade: "",
    linkIdentidade: "",
    preferenciaCores: "",
    referencia1: "",
    referencia2: "",
    referencia3: "",
    funcionalidades: [] as string[],
    outrasFuncionalidades: "",
    dominioHospedagem: "",
    manutencao: "",
    prazo: "",
    observacoes: "",
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

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (funcionalidade: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        funcionalidades: [...formData.funcionalidades, funcionalidade],
      })
    } else {
      setFormData({
        ...formData,
        funcionalidades: formData.funcionalidades.filter((f) => f !== funcionalidade),
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <Breadcrumb items={[{ label: "Formulário de Interesse" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1f2937] leading-tight mb-8">
            Vamos planejar sua <span className="text-[#3b82f6]">loja virtual</span>?
          </h1>
          <p className="text-lg md:text-xl font-lato text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
            Preencha o formulário abaixo com o máximo de informações. Quanto mais detalhes você fornecer, mais eficiente
            será o planejamento da sua loja virtual. Se preferir, agende uma consultoria gratuita.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-medium text-[#1f2937] mb-4">Obrigado!</h3>
              <p className="text-[#6b7280] font-lato">Recebemos seu briefing e em breve entraremos em contato.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dados Pessoais */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nome" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Nome completo *
                    </Label>
                    <Input
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
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
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Nome da empresa ou marca
                    </Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleChange("empresa", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="Nome da sua marca"
                    />
                  </div>
                </div>
              </div>

              {/* Sobre o Negócio */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Sobre o Negócio</h3>
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="descricaoNegocio"
                      className="text-sm font-inter font-medium text-[#1f2937] mb-2 block"
                    >
                      Descrição do negócio e dos produtos *
                    </Label>
                    <Textarea
                      id="descricaoNegocio"
                      required
                      rows={4}
                      value={formData.descricaoNegocio}
                      onChange={(e) => handleChange("descricaoNegocio", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                      placeholder="Descreva seu negócio, produtos que vende ou pretende vender..."
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-inter font-medium text-[#1f2937] mb-3 block">
                      Já possui CNPJ ou venderá como pessoa física? *
                    </Label>
                    <RadioGroup
                      value={formData.tipoPessoa}
                      onValueChange={(value) => handleChange("tipoPessoa", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cnpj" id="cnpj" />
                        <Label htmlFor="cnpj">CNPJ</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pf" id="pf" />
                        <Label htmlFor="pf">Pessoa Física</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Identidade Visual */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Identidade Visual</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-inter font-medium text-[#1f2937] mb-3 block">
                      Já possui identidade visual? *
                    </Label>
                    <RadioGroup
                      value={formData.temIdentidade}
                      onValueChange={(value) => handleChange("temIdentidade", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="sim-identidade" />
                        <Label htmlFor="sim-identidade">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="nao-identidade" />
                        <Label htmlFor="nao-identidade">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.temIdentidade === "sim" && (
                    <div>
                      <Label
                        htmlFor="linkIdentidade"
                        className="text-sm font-inter font-medium text-[#1f2937] mb-2 block"
                      >
                        Link ou descrição da identidade visual
                      </Label>
                      <Input
                        id="linkIdentidade"
                        value={formData.linkIdentidade}
                        onChange={(e) => handleChange("linkIdentidade", e.target.value)}
                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                        placeholder="Link do drive, behance ou descrição"
                      />
                    </div>
                  )}

                  <div>
                    <Label
                      htmlFor="preferenciaCores"
                      className="text-sm font-inter font-medium text-[#1f2937] mb-2 block"
                    >
                      Tem preferência de cores ou estilo para o site?
                    </Label>
                    <Textarea
                      id="preferenciaCores"
                      rows={3}
                      value={formData.preferenciaCores}
                      onChange={(e) => handleChange("preferenciaCores", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                      placeholder="Ex: cores azul e branco, estilo minimalista, moderno..."
                    />
                  </div>
                </div>
              </div>

              {/* Referências */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Sites de Referência</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="referencia1" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Referência 1
                    </Label>
                    <Input
                      id="referencia1"
                      type="url"
                      value={formData.referencia1}
                      onChange={(e) => handleChange("referencia1", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="https://exemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="referencia2" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Referência 2
                    </Label>
                    <Input
                      id="referencia2"
                      type="url"
                      value={formData.referencia2}
                      onChange={(e) => handleChange("referencia2", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="https://exemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="referencia3" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Referência 3
                    </Label>
                    <Input
                      id="referencia3"
                      type="url"
                      value={formData.referencia3}
                      onChange={(e) => handleChange("referencia3", e.target.value)}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="https://exemplo.com"
                    />
                  </div>
                </div>
              </div>

              {/* Funcionalidades */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Funcionalidades Desejadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Página de produtos",
                    "Carrinho e Checkout",
                    "Cupom de desconto",
                    "Chat com WhatsApp",
                    "Blog",
                    "Integração com redes sociais",
                  ].map((funcionalidade) => (
                    <div key={funcionalidade} className="flex items-center space-x-2">
                      <Checkbox
                        id={funcionalidade}
                        checked={formData.funcionalidades.includes(funcionalidade)}
                        onCheckedChange={(checked) => handleCheckboxChange(funcionalidade, checked as boolean)}
                      />
                      <Label htmlFor={funcionalidade} className="text-sm font-lato text-[#1f2937]">
                        {funcionalidade}
                      </Label>
                    </div>
                  ))}
                </div>
                <div>
                  <Label
                    htmlFor="outrasFuncionalidades"
                    className="text-sm font-inter font-medium text-[#1f2937] mb-2 block"
                  >
                    Outras funcionalidades
                  </Label>
                  <Input
                    id="outrasFuncionalidades"
                    value={formData.outrasFuncionalidades}
                    onChange={(e) => handleChange("outrasFuncionalidades", e.target.value)}
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Descreva outras funcionalidades que deseja"
                  />
                </div>
              </div>

              {/* Técnico */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Informações Técnicas</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-inter font-medium text-[#1f2937] mb-3 block">
                      Já tem domínio e hospedagem? *
                    </Label>
                    <RadioGroup
                      value={formData.dominioHospedagem}
                      onValueChange={(value) => handleChange("dominioHospedagem", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ambos" id="ambos" />
                        <Label htmlFor="ambos">Tenho ambos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dominio" id="dominio" />
                        <Label htmlFor="dominio">Tenho apenas domínio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hospedagem" id="hospedagem" />
                        <Label htmlFor="hospedagem">Tenho apenas hospedagem</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nenhum" id="nenhum" />
                        <Label htmlFor="nenhum">Não tenho nenhum</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-inter font-medium text-[#1f2937] mb-3 block">
                      Deseja contratar manutenção mensal após a entrega? *
                    </Label>
                    <RadioGroup
                      value={formData.manutencao}
                      onValueChange={(value) => handleChange("manutencao", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="sim-manutencao" />
                        <Label htmlFor="sim-manutencao">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="nao-manutencao" />
                        <Label htmlFor="nao-manutencao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="prazo" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                      Qual o prazo ideal para colocar sua loja no ar?
                    </Label>
                    <Select value={formData.prazo} onValueChange={(value) => handleChange("prazo", value)}>
                      <SelectTrigger className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent">
                        <SelectValue placeholder="Selecione o prazo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgente">Urgente (até 15 dias)</SelectItem>
                        <SelectItem value="1mes">1 mês</SelectItem>
                        <SelectItem value="2meses">2 meses</SelectItem>
                        <SelectItem value="3meses">3 meses ou mais</SelectItem>
                        <SelectItem value="flexivel">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-inter font-medium text-[#1f2937] mb-6">Observações Finais</h3>
                <div>
                  <Label htmlFor="observacoes" className="text-sm font-inter font-medium text-[#1f2937] mb-2 block">
                    Observações ou algo que queira destacar?
                  </Label>
                  <Textarea
                    id="observacoes"
                    rows={4}
                    value={formData.observacoes}
                    onChange={(e) => handleChange("observacoes", e.target.value)}
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                    placeholder="Conte sobre expectativas, dúvidas ou qualquer informação adicional..."
                  />
                </div>
              </div>

              {/* Botão de Envio */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-12 py-4 text-lg font-inter rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Briefing"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CTA Secundário */}
      <section className="py-20 px-4 md:px-6 bg-[#f9fafb]">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg font-lato text-[#6b7280] mb-8">
            Ainda com dúvidas? Fale com a gente ou agende uma consultoria gratuita.
          </p>

          <Button
            variant="outline"
            className="border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 text-lg font-inter rounded-xl transition-all duration-300"
          >
            Agendar Consultoria
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
