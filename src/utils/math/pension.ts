export interface PensionInput {
  age: number;
  yearsContributed: number;
  monthlyGross: number;
}

export interface PensionResult {
  monthlyPension: number;
  annualPension: number;
  percentage: number;
  legalAge: string;
  hasEntitlement: boolean;
}

export function calculatePension(input: PensionInput): PensionResult {
  if (input.yearsContributed < 15) {
    return {
      monthlyPension: 0,
      annualPension: 0,
      percentage: 0,
      legalAge: '66 años y 10 meses',
      hasEntitlement: false,
    };
  }

  const legalAge = input.yearsContributed >= 38.25 ? '65 años' : '66 años y 10 meses';
  let percentage = 50;
  if (input.yearsContributed > 15) {
    const extraMonths = (input.yearsContributed - 15) * 12;
    const firstBracket = Math.min(extraMonths, 49) * 0.21;
    const secondBracket = extraMonths > 49 ? (extraMonths - 49) * 0.19 : 0;
    percentage += firstBracket + secondBracket;
  }
  if (percentage > 100) percentage = 100;

  const monthlyPension = Math.min(input.monthlyGross * (percentage / 100), 3175);
  return {
    monthlyPension,
    annualPension: monthlyPension * 14,
    percentage,
    legalAge,
    hasEntitlement: true,
  };
}
