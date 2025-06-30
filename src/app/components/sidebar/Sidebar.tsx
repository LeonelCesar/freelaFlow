"use client";

import Link from "next/link";
import {
  Home,
  Info,
  LayoutDashboard,
  Settings,
  FolderKanban,
  Wallet,
  Mail,
  ListTodo,
  X,
} from "lucide-react";
import { useSidebarStore } from "@/app/lib/sidbarStore";
import SidebarFooter from "./sidebarFooter";

function Sidebar() {
  const { isOpen, toggle } = useSidebarStore();

  // Fecha o sidebar se for mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggle();
    }
  };

  return (
    <>
      {/* MOBILE: Sidebar com overlay */}
      <div
        className={`fixed inset-0 bg-gray-300 bg-opacity-40 z-30 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={toggle}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:flex`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Título e botão de fechar */}
          <div className="flex items-center justify-between mb-6 md:mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">FreelaFlow</h2>
            <button onClick={toggle} className="md:hidden text-gray-600">
              <X size={20} />
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Home size={18} /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobrePage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Info size={18} /> Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/tarefasPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <ListTodo size={18} /> Tarefas
              </Link>
            </li>
            <li>
              <Link
                href="/dashboardPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/contatoPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Mail size={18} /> Contatos
              </Link>
            </li>
            <li>
              <Link
                href="/projectsPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <FolderKanban size={18} /> Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/financasPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Wallet size={18} /> Finanças
              </Link>
            </li>
            <li>
              <Link
                href="/configuracaoPage"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Settings size={18} /> Configurações
              </Link>
            </li>
          </ul>
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
