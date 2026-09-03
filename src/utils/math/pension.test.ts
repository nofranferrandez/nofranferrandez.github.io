import { describe, expect, it } from 'vitest';
import { calculatePension } from './pension';

describe('calculatePension', () => {
  it('reconoce el 50% con 15 años cotizados', () => {
    const result = calculatePension({ age: 67, yearsContributed: 15, monthlyGross: 2100 });
    expect(result).toEqual({ monthlyPension: 1050, annualPension: 14700, percentage: 50, legalAge: '66 años y 10 meses', hasEntitlement: true });
  });

  it('devuelve cero con menos de 15 años cotizados', () => {
    const result = calculatePension({ age: 60, yearsContributed: 14.99, monthlyGross: 3000 });
    expect(result.monthlyPension).toBe(0);
    expect(result.annualPension).toBe(0);
    expect(result.hasEntitlement).toBe(false);
  });

  it('aplica edad legal de 65 años desde 38,25 años cotizados', () => {
    const result = calculatePension({ age: 65, yearsContributed: 38.25, monthlyGross: 2100 });
    expect(result.legalAge).toBe('65 años');
    expect(result.percentage).toBe(100);
    expect(result.monthlyPension).toBe(2100);
  });

  it('limita la pensión al tope máximo legal configurado', () => {
    const result = calculatePension({ age: 66, yearsContributed: 40, monthlyGross: 4000 });
    expect(result.monthlyPension).toBe(3175);
    expect(result.annualPension).toBe(44450);
  });
});
