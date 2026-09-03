export interface SeveranceInput { annualGross: number; startDate: string; endDate: string; reason: 'unfair' | 'objective' | 'temporary' | 'voluntary'; vacationDays: number; extraPayments: 'prorated' | 'separate'; }
export interface SeveranceResult { total: number; severance: number; vacationPay: number; extraPay: number; yearsWorked: number; daysWorked: number; }
export function calculateSeverance(input: SeveranceInput): SeveranceResult {
  const start = new Date(input.startDate);
  const end = new Date(input.endDate);
  const daysWorked = Math.ceil(Math.abs(end.getTime() - start.getTime()) / 86400000);
  const dailySalary = input.annualGross / 365;
  const daysPerYear = input.reason === 'unfair' ? 33 : input.reason === 'objective' ? 20 : input.reason === 'temporary' ? 12 : 0;
  const maxMonths = input.reason === 'unfair' ? 24 : 12;
  const yearsWorked = daysWorked / 365;
  const severance = Math.min(dailySalary * daysPerYear * yearsWorked, (input.annualGross / 12) * maxMonths);
  const vacationPay = dailySalary * input.vacationDays;
  const monthsAccrued = (end.getMonth() % 6) + 1;
  const extraPay = input.extraPayments === 'separate' ? (input.annualGross / 14) * (monthsAccrued / 6) : 0;
  return { total: severance + vacationPay + extraPay, severance, vacationPay, extraPay, yearsWorked, daysWorked };
}
