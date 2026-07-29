"use client";

import { useState } from "react";

export const dynamic = 'force-dynamic';

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rfc: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to database
    setClients([...clients, { id: Date.now(), ...formData }]);
    setFormData({ name: "", email: "", phone: "", rfc: "", address: "" });
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-navy">Gestión de Clientes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-accent hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded transition"
        >
          + Nuevo Cliente
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-navy mb-4">Agregar Cliente</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <input
              type="text"
              placeholder="RFC"
              value={formData.rfc}
              onChange={(e) =>
                setFormData({ ...formData, rfc: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <input
              type="text"
              placeholder="Dirección"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy md:col-span-2"
            />
            <div className="md:col-span-2 flex gap-2">
              <button
                type="submit"
                className="bg-navy hover:bg-navy-light text-white font-semibold py-2 px-6 rounded transition"
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded transition"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        {clients.length === 0 ? (
          <div className="p-8 text-center text-gray-600">
            <p>No hay clientes registrados</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Nombre</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Teléfono</th>
                  <th className="px-6 py-3 text-left">RFC</th>
                  <th className="px-6 py-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3">{client.name}</td>
                    <td className="px-6 py-3">{client.email}</td>
                    <td className="px-6 py-3">{client.phone}</td>
                    <td className="px-6 py-3">{client.rfc}</td>
                    <td className="px-6 py-3 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-800 ml-3">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
