"use client";

export const dynamic = 'force-dynamic';

export default function LoansPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-navy">Gestión de Préstamos</h1>
        <button className="bg-accent hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded transition">
          + Nuevo Préstamo
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-600">
        <p>En desarrollo...</p>
      </div>
    </div>
  );
}
