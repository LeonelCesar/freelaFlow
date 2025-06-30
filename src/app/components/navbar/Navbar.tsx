"use client";

import { Menu, UserCircle2, Bell } from "lucide-react";
import { useSidebarStore } from "@/app/lib/sidbarStore";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const { toggle } = useSidebarStore();

  return (
    <header className="w-full bg-white px-6 py-4 shadow flex items-center justify-between border-b sticky top-0 z-10">
      <button
        className="md:hidden block text-gray-600 hover:text-blue-600"
        onClick={toggle}
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="hidden md:block">
        <h1 className="text-2xl font-semibold">Painel do Usuário</h1>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative text-gray-600 hover:text-blue-600 focus:outline-none">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
                3
              </span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>📌 Tarefa pendente a revisar</DropdownMenuItem>
            <DropdownMenuItem>📩 Nova mensagem recebida</DropdownMenuItem>
            <DropdownMenuItem>✅ Projeto concluído</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-blue-600">
              Ver todas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-4">
          <UserCircle2 className="w-7 h-7 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Olá, Leonel César
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
