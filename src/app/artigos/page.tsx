'use client';

import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

export default function Artigos() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-6 py-20">
      
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

      {/* Artigos content */}
      <main className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Artigos</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Em breve você encontrará artigos jurídicos aqui, preparados para esclarecer dúvidas e orientar sobre temas importantes do Direito Civil.
        </p>
      </main>
    </div>
  );
}