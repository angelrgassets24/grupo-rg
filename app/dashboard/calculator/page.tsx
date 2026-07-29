"use client";

import { useState } from "react";
import { calculateLoanPayments, calculateLeaseRate, formatCurrency } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<"loan" | "lease">("loan");

  // Loan tab state
  const [loanCapital, setLoanCapital] = useState(100000);
  const [loanRate, setLoanRate] = useState(2.5);
  const [loanIva, setLoanIva] = useState(16);
  const [loanTerm, setLoanTerm] = useState(12);
  const [loanClient, setLoanClient] = useState("");
  const [loanResult, setLoanResult] = useState<any>(null);

  // Lease tab state
  const [leaseValue, setLeaseValue] = useState(488800);
  const [leaseFirstRent, setLeaseFirstRent] = useState(172413.79);
  const [leaseMonthlyRent, setLeaseMonthlyRent] = useState(13831.42);
  const [leaseIva, setLeaseIva] = useState(16);
  const [leaseTerm, setLeaseTerm] = useState(24);
  const [leaseResidual, setLeaseResidual] = useState(42137.93);
  const [leaseClient, setLeaseClient] = useState("");
  const [leaseResult, setLeaseResult] = useState<any>(null);

  const calculateLoan = () => {
    const result = calculateLoanPayments(
      loanCapital,
      loanRate,
      loanIva,
      loanTerm
    );
    setLoanResult({ ...result, client: loanClient || "—" });
  };

  const calculateLease = () => {
    const result = calculateLeaseRate(
      leaseValue,
      leaseFirstRent,
      leaseMonthlyRent,
      leaseIva,
      leaseTerm,
      leaseResidual
    );
    setLeaseResult({ ...result, client: leaseClient || "—" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy mb-6">Calculadora Financiera</h1>

      <div className="bg-white rounded-lg shadow">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("loan")}
            className={`flex-1 px-6 py-3 font-semibold text-center transition ${
              activeTab === "loan"
                ? "bg-navy text-white border-b-2 border-accent"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Crédito Simple (Bullet)
          </button>
          <button
            onClick={() => setActiveTab("lease")}
            className={`flex-1 px-6 py-3 font-semibold text-center transition ${
              activeTab === "lease"
                ? "bg-navy text-white border-b-2 border-accent"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Arrendamiento (Tasa Efectiva)
          </button>
        </div>

        {/* Loan Tab */}
        {activeTab === "loan" && (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Capital (principal)
                </label>
                <input
                  type="number"
                  value={loanCapital}
                  onChange={(e) => setLoanCapital(parseFloat(e.target.value))}
                  step="1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tasa mensual sin IVA (%)
                </label>
                <input
                  type="number"
                  value={loanRate}
                  onChange={(e) => setLoanRate(parseFloat(e.target.value))}
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  IVA (%)
                </label>
                <input
                  type="number"
                  value={loanIva}
                  onChange={(e) => setLoanIva(parseFloat(e.target.value))}
                  step="0.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Plazo (meses)
                </label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                  step="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cliente / referencia
                </label>
                <input
                  type="text"
                  value={loanClient}
                  onChange={(e) => setLoanClient(e.target.value)}
                  placeholder="Nombre del cliente o folio"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>

            <button
              onClick={calculateLoan}
              className="bg-navy hover:bg-navy-light text-white font-semibold py-2 px-6 rounded transition"
            >
              Calcular
            </button>

            {loanResult && (
              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Cliente
                    </p>
                    <p className="text-lg font-bold text-navy">{loanResult.client}</p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Pago Mensual
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {formatCurrency(loanResult.monthlyPayment)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Total Intereses
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {formatCurrency(loanResult.totalInterest)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Total IVA
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {formatCurrency(loanResult.totalIva)}
                    </p>
                  </div>
                  <div className="bg-navy rounded p-4 col-span-2 md:col-span-1">
                    <p className="text-xs font-semibold text-gray-300 uppercase mb-1">
                      Pago Final (Mes {loanTerm})
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {formatCurrency(loanResult.finalPayment)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Rendimiento Anual
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {loanResult.annualRate.toFixed(2)}%
                    </p>
                  </div>
                </div>

                {/* Tabla de pagos */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-2 text-center">Mes</th>
                        <th className="px-4 py-2 text-right">Interés</th>
                        <th className="px-4 py-2 text-right">IVA</th>
                        <th className="px-4 py-2 text-right">Pago Mensual</th>
                        <th className="px-4 py-2 text-right">Capital</th>
                        <th className="px-4 py-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanResult.payments.map((payment: any) => (
                        <tr
                          key={payment.month}
                          className={
                            payment.month === loanTerm
                              ? "bg-gray-100 font-bold"
                              : "border-b"
                          }
                        >
                          <td className="px-4 py-2 text-center">{payment.month}</td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.interest)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.iva)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.payment)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {payment.principal > 0
                              ? formatCurrency(payment.principal)
                              : "—"}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.total)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600">
                  Modalidad bullet: solo se paga interés + IVA cada mes; el capital se
                  liquida íntegro en el mes {loanTerm}, junto con el último pago de
                  interés.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Lease Tab */}
        {activeTab === "lease" && (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor del activo (con IVA)
                </label>
                <input
                  type="number"
                  value={leaseValue}
                  onChange={(e) => setLeaseValue(parseFloat(e.target.value))}
                  step="1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Retardador / primera renta (con IVA)
                </label>
                <input
                  type="number"
                  value={leaseFirstRent}
                  onChange={(e) => setLeaseFirstRent(parseFloat(e.target.value))}
                  step="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Renta mensual (sin IVA)
                </label>
                <input
                  type="number"
                  value={leaseMonthlyRent}
                  onChange={(e) => setLeaseMonthlyRent(parseFloat(e.target.value))}
                  step="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  IVA (%)
                </label>
                <input
                  type="number"
                  value={leaseIva}
                  onChange={(e) => setLeaseIva(parseFloat(e.target.value))}
                  step="0.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Plazo (meses)
                </label>
                <input
                  type="number"
                  value={leaseTerm}
                  onChange={(e) => setLeaseTerm(parseInt(e.target.value))}
                  step="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor residual (sin IVA)
                </label>
                <input
                  type="number"
                  value={leaseResidual}
                  onChange={(e) => setLeaseResidual(parseFloat(e.target.value))}
                  step="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cliente / referencia
                </label>
                <input
                  type="text"
                  value={leaseClient}
                  onChange={(e) => setLeaseClient(e.target.value)}
                  placeholder="Nombre del cliente o folio"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>

            <button
              onClick={calculateLease}
              className="bg-navy hover:bg-navy-light text-white font-semibold py-2 px-6 rounded transition"
            >
              Calcular
            </button>

            {leaseResult && (
              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Cliente
                    </p>
                    <p className="text-lg font-bold text-navy">{leaseResult.client}</p>
                  </div>
                  <div className="bg-navy rounded p-4">
                    <p className="text-xs font-semibold text-gray-300 uppercase mb-1">
                      Tasa Efectiva Anual
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {leaseResult.effectiveAnnualRate.toFixed(2)}%
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Tasa Mensual
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {leaseResult.monthlyRatePercent.toFixed(3)}%
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Tasa Nominal Anual
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {leaseResult.nominalAnnualRate.toFixed(2)}%
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Capital Neto
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {formatCurrency(leaseResult.netCapital)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Residual (con IVA)
                    </p>
                    <p className="text-lg font-bold text-navy">
                      {formatCurrency(leaseResult.residualWithIva)}
                    </p>
                  </div>
                </div>

                {/* Tabla de flujos */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-2 text-center">Mes</th>
                        <th className="px-4 py-2 text-center">Concepto</th>
                        <th className="px-4 py-2 text-right">Monto (sin IVA)</th>
                        <th className="px-4 py-2 text-right">IVA</th>
                        <th className="px-4 py-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaseResult.payments.map((payment: any) => (
                        <tr key={payment.month} className="border-b">
                          <td className="px-4 py-2 text-center">{payment.month}</td>
                          <td className="px-4 py-2 text-center">{payment.concept}</td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.amountNoIva)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.iva)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(payment.total)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600">
                  Estructura: arrendamiento puro. El retardador de primera renta funciona
                  como abono a capital. La tasa efectiva anual se deriva por ingeniería
                  inversa del flujo.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
