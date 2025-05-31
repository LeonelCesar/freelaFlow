"use client";

import { Menu, UserCircle2, Bell } from "lucide-react";
import { useSidebarStore } from "@/app/lib/sidbarStore";

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
        <h1 className="text-lg font-semibold">Painel do Usuário</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-blue-600">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            3
          </span>
        </button>

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
