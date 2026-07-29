"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <header className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">RG Assets</h1>
            <span className="text-xs text-accent uppercase tracking-wider">
              Cotizador
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">{session?.user?.email}</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative"
            >
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-navy font-bold">
                {session?.user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-navy rounded shadow-lg py-2 z-50">
                  <button
                    onClick={() => signOut({ callbackUrl: "/auth/login" })}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-navy-light text-white min-h-screen p-4">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/clients"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Clientes
            </Link>
            <Link
              href="/dashboard/loans"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Préstamos
            </Link>
            <Link
              href="/dashboard/leases"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Arrendamientos
            </Link>
            <Link
              href="/dashboard/calculator"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Calculadora
            </Link>
            <Link
              href="/dashboard/payments"
              className="block px-4 py-2 rounded hover:bg-navy transition"
            >
              Pagos
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
