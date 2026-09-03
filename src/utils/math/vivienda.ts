export interface HousingInput { price: number; propertyType: 'used' | 'new'; itpRate: number; youngBuyer: boolean; }
export interface HousingResult { tax: number; notary: number; registry: number; agency: number; total: number; percentage: number; taxLabel: string; }
export function calculateHousing(input: HousingInput): HousingResult {
  let tax: number;
  let taxLabel: string;
  if (input.propertyType === 'used') {
    const effectiveRate = input.youngBuyer && input.itpRate > 6 ? Math.max(4, input.itpRate - 2) : input.itpRate;
    tax = input.price * (effectiveRate / 100);
    taxLabel = `Impuesto ITP (${effectiveRate}%):`;
  } else {
    tax = input.price * 0.10 + input.price * 0.015;
    taxLabel = 'Impuestos (10% IVA + 1.5% AJD):';
  }
  const notary = Math.min(Math.max(input.price * 0.003, 600), 1100);
  const registry = Math.min(Math.max(input.price * 0.0018, 350), 650);
  const agency = 350;
  const total = tax + notary + registry + agency;
  return { tax, notary, registry, agency, total, percentage: (total / input.price) * 100, taxLabel };
}
