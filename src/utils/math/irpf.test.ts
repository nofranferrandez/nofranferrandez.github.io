import { describe, expect, it } from 'vitest';
import { calculateIrpf } from './irpf';

describe('calculateIrpf', () => {
  it('calcula una nómina estándar de 28.000 euros en 14 pagas', () => {
    const result = calculateIrpf({ annualGross: 28000, payments: 14, familySituation: 'single' });
    expect(result.annualWithholding).toBeCloseTo(4367.1, 10);
    expect(result.annualNet).toBeCloseTo(21854.9, 10);
    expect(result.monthlyNet).toBeCloseTo(1561.0642857142857, 10);
    expect(result.effectiveRate).toBeCloseTo(15.596785714285715, 10);
  });

  it('no aplica retención cuando el mínimo personal supera la base', () => {
    const result = calculateIrpf({ annualGross: 1000, payments: 12, familySituation: 'single' });
    expect(result.annualWithholding).toBe(0);
    expect(result.annualNet).toBeCloseTo(936.5, 10);
    expect(result.effectiveRate).toBe(0);
  });

  it('aplica el mínimo adicional estimado por hijos', () => {
    const result = calculateIrpf({ annualGross: 28000, payments: 12, familySituation: 'children' });
    expect(result.annualWithholding).toBeCloseTo(3762.78, 10);
    expect(result.monthlyNet).toBeCloseTo(1871.6016666666667, 10);
  });

  it('salta al tramo superior para salarios altos', () => {
    const result = calculateIrpf({ annualGross: 100000, payments: 14, familySituation: 'single' });
    expect(result.annualWithholding).toBeCloseTo(30546.5, 10);
    expect(result.effectiveRate).toBeCloseTo(30.5465, 10);
  });
});
