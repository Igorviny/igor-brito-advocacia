'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Scale, Mail, Phone, Users, FileText } from "lucide-react";

export default function Home() {
  const areas = [
    { title: "Direito Contratual", description: "Elaboração e revisão de contratos para garantir segurança jurídica e minimizar riscos.", icon: FileText },
    { title: "Responsabilidade Civil", description: "Atuação em indenizações, danos morais e materiais, buscando proteção e reparação ao cliente.", icon: Scale },
    { title: "Família e Sucessões", description: "Assessoria em divórcios, guarda, pensão, inventários e planejamento sucessório.", icon: Users },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-600 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-600">
        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Igor Brito Advocacia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
            Excelência em Direito Civil. Defesa estratégica, soluções modernas e foco em resultados.
          </p>
          <a href="#contato">
            <Button className="text-lg px-8 py-6 rounded-2xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transition">
              Entre em Contato
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Advogado"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Sobre o Escritório</h2>
            <p className="text-lg text-gray-700 mb-6">
              O escritório <strong>Igor Brito Advocacia</strong> é especializado em Direito Civil, atuando de forma personalizada em demandas contratuais, responsabilidade civil, direito de família e sucessões. Nosso compromisso é entregar resultados concretos e soluções jurídicas modernas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Áreas de Atuação</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Atuamos de forma moderna e estratégica em diversas áreas do Direito Civil, garantindo os melhores resultados aos clientes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 h-full">
                    <CardContent className="flex flex-col items-center">
                      <Icon className="w-12 h-12 text-yellow-500 mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mb-8">
            Estamos prontos para ouvir seu caso e oferecer a melhor solução.
          </p>

          <motion.form
            className="grid gap-6 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Nome</label>
              <Input type="text" placeholder="Digite seu nome" className="rounded-xl" />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">E-mail</label>
              <Input type="email" placeholder="Digite seu e-mail" className="rounded-xl" />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Telefone</label>
              <Input type="tel" placeholder="(00) 00000-0000" className="rounded-xl" />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Mensagem</label>
              <Textarea placeholder="Escreva sua mensagem" className="rounded-xl" rows={5} />
            </div>
            <Button type="submit" className="w-full py-6 text-lg rounded-2xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transition">
              Enviar Mensagem
            </Button>
          </motion.form>

          {/* Cards de contato */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            {/* Card de E-mail */}
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 cursor-pointer">
              <a href="mailto:ivbsantos@outlook.com" className="flex flex-col items-center w-full h-full">
                <Mail className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">E-mail</h3>
                <span className="text-gray-700">ivbsantos@outlook.com</span>
              </a>
            </Card>

            {/* Card de Telefone / WhatsApp */}
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 cursor-pointer">
              <a href="https://wa.me/5511982227149" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <Phone className="w-12 h-12 text-green-600 mb-2" />
                <h3 className="text-2xl font-semibold mb-2">Telefone / WhatsApp</h3>
                <span className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  +55 11 98222-7149
                </span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} Igor Brito Advocacia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}