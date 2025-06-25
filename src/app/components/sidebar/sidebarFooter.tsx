'use client';

function SidebarFooter() {
  return (
    <footer className="mt-auto pt-6 border-t text-xs text-gray-500">
      <p className="mb-2">&copy; {new Date().getFullYear()} FreelaFlow</p>
      <p className="text-[11px]">Versão 1.0.0 - Desenvolvido com</p>
      <p className="text-[11px]">By @leonelcesar62gmail.com</p>
    </footer>
  );
}

export default SidebarFooter;
