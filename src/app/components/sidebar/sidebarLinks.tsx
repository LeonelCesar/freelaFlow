'use client';

import { Home, Info, LayoutDashboard, FolderKanban, Wallet, Settings, ListTodo } from "lucide-react";

export const sidebarLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/sobrePage", label: "Sobre", icon: Info },
  { href: "/tarefasPage", label: "Tarefas", icon: ListTodo },
  { href: "/dashboardPage", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projectsPage", label: "Projetos", icon: FolderKanban },
  { href: "/financasPage", label: "Finanças", icon: Wallet },
  { href: "/configuracaoPage", label: "Configurações", icon: Settings },
];