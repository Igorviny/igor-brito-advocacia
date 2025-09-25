'use client';

import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

export default function Artigos() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-start px-6 py-20">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-gray-900 px-6 py-4 flex space-x-8 items-center">
        <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition">
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link href="/artigos" className="text-gray-300 hover:text-yellow-400 transition">
          Artigos
        </Link>
      </nav>

      {/* Artigo */}
      <main className="max-w-4xl mx-auto text-left">
        <h1 className="text-5xl font-bold mb-6">A Importância de Oficializar a Separação por Meio do Divórcio</h1>
        <p className="text-lg text-gray-700 mb-4">
          Quando um casal decide se separar, é fundamental formalizar legalmente a dissolução do casamento por meio do divórcio. Mesmo que o término da relação seja amigável, oficializar o divórcio garante direitos legais, como a partilha de bens, pensão alimentícia e a regularização de documentos civis.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Além disso, o divórcio evita problemas futuros, prevenindo disputas judiciais sobre herança, propriedades ou responsabilidades financeiras. A oficialização também proporciona segurança jurídica para ambos os ex-cônjuges e para os filhos, se houver, assegurando que todos os direitos e deveres estejam claramente definidos.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Por isso, mesmo que a separação seja amigável, é altamente recomendável contar com a orientação de um advogado especializado para conduzir todo o processo de divórcio, garantindo que todos os procedimentos legais sejam cumpridos corretamente.
        </p>
      </main>
    </div>
  );
}