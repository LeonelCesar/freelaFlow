// app/components/Sidebar.tsx
'use client';

import Link from "next/link";
import {
  Home,
  Info,
  LayoutDashboard,
  Settings,
  FolderKanban,
  Wallet,
  ListTodo,
  X,
} from "lucide-react";
import { useSidebarStore } from "@/app/lib/sidbarStore";

export default function Sidebar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <>
      {/* MOBILE: Sidebar com overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={toggle}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Título e botão de fechar */}
          <div className="flex items-center justify-between mb-6 md:mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">FreelaFlow</h2>
            <button onClick={toggle} className="md:hidden text-gray-600">
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <ul className="space-y-4">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-blue-600">
                <Home size={18} /> Home
              </Link>
            </li>
            <li>
              <Link href="/sobrePage" className="flex items-center gap-2 hover:text-blue-600">
                <Info size={18} /> Sobre
              </Link>
            </li>
            <li>
              <Link href="/tarefasPage" className="flex items-center gap-2 hover:text-blue-600">
                <ListTodo size={18} /> Tarefas
              </Link>
            </li>
            <li>
              <Link href="/dashboardPage" className="flex items-center gap-2 hover:text-blue-600">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/projectsPage" className="flex items-center gap-2 hover:text-blue-600">
                <FolderKanban size={18} /> Projetos
              </Link>
            </li>
            <li>
              <Link href="/financasPage" className="flex items-center gap-2 hover:text-blue-600">
                <Wallet size={18} /> Finanças
              </Link>
            </li>
            <li>
              <Link href="/configuracaoPage" className="flex items-center gap-2 hover:text-blue-600">
                <Settings size={18} /> Configurações
              </Link>
            </li>
          </ul>

          {/* Rodapé */}
          <footer className="mt-auto pt-6 border-t text-xs text-gray-500">
            <p className="mb-2">&copy; {new Date().getFullYear()} FreelaFlow</p>
            <p className="text-[11px]">Versão 1.0.0 - Desenvolvido com</p>
            <p className="text-[11px]">By @leonelcesar62gmail.com</p>
          </footer>
        </div>
      </aside>
    </>
  );
}

