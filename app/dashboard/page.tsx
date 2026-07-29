"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-4xl font-bold text-navy mb-2">
        Bienvenido, {session?.user?.name}
      </h1>
      <p className="text-gray-600 mb-8">
        Gestiona tus préstamos, arrendamientos y cotizaciones desde aquí
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-accent">
          <h3 className="text-gray-600 text-sm font-semibold uppercase mb-2">
            Clientes Activos
          </h3>
          <p className="text-3xl font-bold text-navy">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-accent">
          <h3 className="text-gray-600 text-sm font-semibold uppercase mb-2">
            Préstamos Activos
          </h3>
          <p className="text-3xl font-bold text-navy">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-accent">
          <h3 className="text-gray-600 text-sm font-semibold uppercase mb-2">
            Arrendamientos Activos
          </h3>
          <p className="text-3xl font-bold text-navy">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-accent">
          <h3 className="text-gray-600 text-sm font-semibold uppercase mb-2">
            Pagos Pendientes
          </h3>
          <p className="text-3xl font-bold text-navy">—</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-navy mb-4">Acciones Rápidas</h2>
          <div className="space-y-2">
            <Link href="/dashboard/clients">
              <button className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 rounded transition">
                Agregar Cliente
              </button>
            </Link>
            <Link href="/dashboard/loans">
              <button className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 rounded transition">
                Registrar Préstamo
              </button>
            </Link>
            <Link href="/dashboard/calculator">
              <button className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 rounded transition">
                Ir a Calculadora
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-navy mb-4">Información</h2>
          <p className="text-gray-600 text-sm mb-4">
            Esta es la plataforma privada de RG Assets para gestión de créditos, arrendamientos y cotizaciones.
          </p>
          <p className="text-gray-600 text-sm">
            Contacta a <span className="font-semibold text-accent">hola@gruporg.mx</span> para soporte.
          </p>
        </div>
      </div>
    </div>
  );
}
