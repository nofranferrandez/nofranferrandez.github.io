export interface IrpfInput {
  annualGross: number;
  payments: 12 | 14;
  familySituation: 'single' | 'children';
}

export interface IrpfResult {
  effectiveRate: number;
  annualNet: number;
  monthlyNet: number;
  annualWithholding: number;
}

export function calculateIrpf(input: IrpfInput): IrpfResult {
  const socialSecurity = input.annualGross * 0.0635;
  let personalMinimum = 5550;
  if (input.familySituation === 'children') personalMinimum += 2400;

  let taxableBase = input.annualGross - socialSecurity - personalMinimum;
  if (taxableBase < 0) taxableBase = 0;

  let withholding = 0;
  let remaining = taxableBase;
  const brackets = [
    [12450, 0.19],
    [7750, 0.24],
    [15000, 0.30],
    [24800, 0.37],
    [Infinity, 0.45],
  ] as const;

  for (const [limit, rate] of brackets) {
    if (remaining <= 0) break;
    const amount = Math.min(remaining, limit);
    withholding += amount * rate;
    remaining -= amount;
  }

  const effectiveRate = Math.max(0, (withholding / input.annualGross) * 100);
  const annualNet = input.annualGross - socialSecurity - withholding;
  return {
    effectiveRate,
    annualNet,
    monthlyNet: annualNet / input.payments,
    annualWithholding: withholding,
  };
}
