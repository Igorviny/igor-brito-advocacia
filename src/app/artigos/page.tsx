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

        <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">A Importância de Oficializar a Separação por Meio do Divórcio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Muitas pessoas acreditam que a simples separação de corpos já é suficiente para encerrar
            um casamento. No entanto, do ponto de vista jurídico, apenas o divórcio tem o poder legal
            de dissolver formalmente o vínculo matrimonial. Oficializar a separação por meio do divórcio
            não é apenas uma formalidade burocrática, mas uma medida essencial para garantir segurança
            jurídica, estabilidade patrimonial e proteção dos direitos de ambas as partes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ao optar por não oficializar a separação, os ex-cônjuges permanecem legalmente casados,
            o que pode gerar diversas complicações. Questões relacionadas a herança, pensão, direitos
            sobre bens adquiridos durante o casamento e responsabilidades fiscais podem se tornar
            complexas e até litigiosas. A ausência de um divórcio formal impede que cada parte
            organize sua vida financeira e pessoal de maneira independente, além de gerar incertezas
            em relação a novos relacionamentos ou uniões.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            O divórcio, ao ser registrado oficialmente, também protege filhos e dependentes. A
            formalização do término do casamento permite que sejam definidos direitos e deveres quanto
            à guarda, visitas e pensão alimentícia. Isso cria um ambiente mais seguro para as crianças
            e adolescentes, garantindo que ambas as partes cumpram suas responsabilidades de forma justa
            e legalmente reconhecida. Além disso, evita futuros conflitos judiciais que poderiam surgir
            caso os termos da separação não fossem formalmente estabelecidos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Outro ponto relevante é a segurança jurídica para futuras transações patrimoniais. Com
            o divórcio oficializado, cada ex-cônjuge tem garantido o direito de administrar, vender
            ou transferir bens adquiridos após a dissolução do casamento sem risco de disputas legais
            sobre propriedade conjunta. Isso é especialmente importante em casos de imóveis, investimentos
            ou empresas, onde a falta de formalização pode gerar longas disputas judiciais e prejuízos
            financeiros.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Além disso, oficializar a separação oferece clareza e encerramento emocional. Embora o
            aspecto jurídico seja central, a formalização também ajuda a estabelecer um marco definitivo,
            auxiliando na reconstrução da vida pessoal e afetiva de cada indivíduo. Ao ter o divórcio
            reconhecido legalmente, os ex-cônjuges podem seguir em frente sem amarras legais e
            psicológicas, promovendo um processo de adaptação mais saudável.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Em resumo, oficializar a separação por meio do divórcio é indispensável para assegurar
            direitos, evitar problemas legais e patrimoniais, proteger filhos e dependentes, e oferecer
            um encerramento claro da união. É uma medida que combina aspectos legais, financeiros e
            emocionais, promovendo segurança e tranquilidade para todos os envolvidos.
          </p>
        </article>
      </main>
    </div>
  );
}