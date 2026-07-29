export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateLoanPayments(
  capital: number,
  monthlyRate: number,
  iva: number,
  term: number
) {
  const monthlyRateDecimal = monthlyRate / 100;
  const ivaDecimal = iva / 100;

  const monthlyInterest = capital * monthlyRateDecimal;
  const monthlyIva = monthlyInterest * ivaDecimal;
  const monthlyPayment = monthlyInterest + monthlyIva;

  const totalInterest = monthlyInterest * term;
  const totalIva = monthlyIva * term;
  const annualRate = monthlyRateDecimal * 12 * 100;

  const payments = [];
  for (let month = 1; month <= term; month++) {
    payments.push({
      month,
      interest: monthlyInterest,
      iva: monthlyIva,
      payment: monthlyPayment,
      principal: month === term ? capital : 0,
      total: month === term ? capital + monthlyInterest + monthlyIva : monthlyPayment,
    });
  }

  return {
    monthlyPayment,
    totalInterest,
    totalIva,
    finalPayment: capital + monthlyInterest + monthlyIva,
    annualRate,
    payments,
  };
}

export function calculateLeaseRate(
  assetValue: number,
  firstRent: number,
  monthlyRent: number,
  iva: number,
  term: number,
  residual: number
) {
  const ivaDecimal = iva / 100;
  const assetValueNoIva = assetValue / (1 + ivaDecimal);
  const firstRentNoIva = firstRent / (1 + ivaDecimal);
  const netCapital = assetValueNoIva - firstRentNoIva;

  const vp = (r: number): number => {
    let v = 0;
    for (let m = 1; m <= term; m++) {
      v += monthlyRent / Math.pow(1 + r, m);
    }
    v += residual / Math.pow(1 + r, term);
    return v;
  };

  let lo = -0.5,
    hi = 1.0,
    r = 0.01;
  for (let i = 0; i < 200; i++) {
    r = (lo + hi) / 2;
    const diff = vp(r) - netCapital;
    if (Math.abs(diff) < 0.0001) break;
    if (diff > 0) lo = r;
    else hi = r;
  }

  const monthlyRatePercent = r * 100;
  const effectiveAnnualRate = (Math.pow(1 + r, 12) - 1) * 100;
  const nominalAnnualRate = r * 12 * 100;

  const rentWithIva = monthlyRent * (1 + ivaDecimal);
  const residualWithIva = residual * (1 + ivaDecimal);

  const payments = [];
  payments.push({
    month: 0,
    concept: "Retardador",
    amountNoIva: firstRentNoIva,
    iva: firstRentNoIva * ivaDecimal,
    total: firstRent,
  });

  for (let m = 1; m <= term; m++) {
    payments.push({
      month: m,
      concept: m < term ? "Renta" : "Renta + Residual",
      amountNoIva: m < term ? monthlyRent : monthlyRent + residual,
      iva: (m < term ? monthlyRent : monthlyRent + residual) * ivaDecimal,
      total: m < term ? rentWithIva : rentWithIva + residualWithIva,
    });
  }

  return {
    monthlyRatePercent,
    effectiveAnnualRate,
    nominalAnnualRate,
    netCapital,
    residualWithIva,
    payments,
  };
}
