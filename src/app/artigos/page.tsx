'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home as HomeIcon } from "lucide-react";

export default function Artigos() {
  const pathname = usePathname() ?? "/";

  function normalizePath(p: string) {
    if (!p) return "/";
    const url = p.split(/[?#]/)[0];
    return url === "/" ? "/" : url.replace(/\/+$/, "");
  }

  const current = normalizePath(pathname);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-gray-900 px-6 py-4 flex space-x-8 items-center">
        <Link
          href="/"
          className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition duration-300 ${
            normalizePath("/") === current ? "text-yellow-400 font-semibold shadow-md" : "text-gray-300 hover:text-yellow-400 hover:shadow-md"
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/artigos"
          className={`px-3 py-1 rounded-lg transition duration-300 ${
            normalizePath("/artigos") === current ? "text-yellow-400 font-semibold shadow-md" : "text-gray-300 hover:text-yellow-400 hover:shadow-md"
          }`}
        >
          Artigos
        </Link>
      </nav>

      {/* Conteúdo da página Artigos */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Artigos</h1>

        <article className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">A Importância de Oficializar a Separação por Meio do Divórcio</h2>
          <p className="text-gray-700 leading-relaxed">
            Muitas pessoas acreditam que a simples separação de corpos já é suficiente para encerrar
            um casamento, mas isso não é verdade do ponto de vista jurídico. O divórcio é o único
            meio legal de dissolver o vínculo matrimonial, garantindo segurança jurídica e permitindo
            que as partes reorganizem suas vidas de forma plena, inclusive em relação a patrimônio e
            novas uniões. Além disso, evita problemas futuros em questões sucessórias e patrimoniais.
          </p>
        </article>
      </main>
    </div>
  );
}