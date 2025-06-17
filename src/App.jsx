import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  Camera, 
  Shield, 
  Eye, 
  FileText, 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle,
  Play,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Clock,
  Calendar
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui seria implementada a lógica de envio do formulário
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-primary">NewSpace360</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-foreground hover:text-accent transition-colors">Como Funciona</a>
              <a href="#vantagens" className="text-foreground hover:text-accent transition-colors">Vantagens</a>
              <a href="#contato" className="text-foreground hover:text-accent transition-colors">Contato</a>
            </nav>
            <Button className="btn-primary">
              <Phone className="h-4 w-4 mr-2" />
              Agende seu Tour
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-24 pb-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-shadow leading-tight">
                  <span className="text-accent">NewSpace360</span>
                  <br />
                  Tours 3D para Obras
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Documente e mostre para seus clientes o que está escondido dentro das paredes: 
                  tubulações, fios e estrutura antes da instalação do drywall.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agende seu Tour
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  <Play className="h-5 w-5 mr-2" />
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Câmera 360° Profissional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Compartilhamento Fácil</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Documentação Completa</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Camera className="h-16 w-16 text-accent mx-auto" />
                    <p className="text-lg font-semibold">Tour 3D Interativo</p>
                    <p className="text-sm text-gray-300">Visualização completa da estrutura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-primary">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo simples e eficiente para documentar sua obra com tecnologia 360°
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">1. Captura 360°</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe visita sua obra e captura imagens 360° de alta qualidade 
                  antes da instalação do drywall, documentando toda a estrutura interna.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">2. Processamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Processamos as imagens criando um tour virtual interativo que permite 
                  navegação completa pelo ambiente e visualização de todos os detalhes.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">3. Compartilhamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você recebe um link para compartilhar com seus clientes, permitindo 
                  acesso fácil ao tour 3D em qualquer dispositivo, a qualquer momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-primary">Veja um Exemplo</h2>
            <p className="text-xl text-muted-foreground">
              Demonstração de um tour 3D real de uma obra
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="NewSpace360 - Demonstração de Tour 3D"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section id="vantagens" className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-primary">Vantagens para Contratistas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Benefícios que fazem a diferença no seu negócio e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Segurança</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Proteja-se contra reclamações futuras documentando completamente 
                  a instalação de tubulações, fios e estruturas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Evidência visual completa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Redução de disputas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Proteção legal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Transparência</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mostre aos clientes exatamente o que foi feito, construindo 
                  confiança e demonstrando qualidade do trabalho.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Comunicação clara</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Confiança do cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Diferencial competitivo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Organização</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mantenha registros organizados de todas as suas obras para 
                  referência futura e manutenções.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Arquivo digital permanente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Acesso fácil e rápido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Histórico completo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">Entre em Contato</h2>
                <p className="text-xl text-muted-foreground">
                  Pronto para documentar sua próxima obra? Fale conosco e agende seu tour 3D.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Resposta Rápida</h3>
                    <p className="text-muted-foreground">Retornamos em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Camera className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Equipamento Profissional</h3>
                    <p className="text-muted-foreground">Câmeras 360° de alta qualidade</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Equipe Especializada</h3>
                    <p className="text-muted-foreground">Profissionais experientes em construção</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato para agendar seu tour 3D
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de Obra</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de obra" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residencial">Residencial</SelectItem>
                        <SelectItem value="comercial">Comercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="reforma">Reforma</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos mais sobre seu projeto..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="py-12 grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Camera className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">NewSpace360</span>
              </div>
              <p className="text-gray-300">
                Tours 3D profissionais para documentação de obras antes do drywall. 
                Transparência e segurança para contratistas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Tours 3D para Obras</li>
                <li>Documentação Pré-Drywall</li>
                <li>Registro de Instalações</li>
                <li>Compartilhamento Digital</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="https://instagram.com/newspace360" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@newspace360</span>
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="mailto:contato@newspace360.com" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>contato@newspace360.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 py-6 text-center text-gray-300">
            <p>&copy; 2024 NewSpace360. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

