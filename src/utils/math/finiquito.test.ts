import { describe, expect, it } from 'vitest';
import { calculateSeverance } from './finiquito';

describe('calculateSeverance', () => {
  it('calcula un despido objetivo de un año', () => {
    const result = calculateSeverance({ annualGross: 24000, startDate: '2024-01-01', endDate: '2025-01-01', reason: 'objective', vacationDays: 0, extraPayments: 'prorated' });
    expect(result.daysWorked).toBe(366);
    expect(result.severance).toBeCloseTo((24000 / 365) * 20 * (366 / 365), 10);
    expect(result.total).toBe(result.severance);
  });

  it('calcula vacaciones y pagas extra separadas', () => {
    const result = calculateSeverance({ annualGross: 24000, startDate: '2025-01-01', endDate: '2025-07-01', reason: 'voluntary', vacationDays: 5, extraPayments: 'separate' });
    expect(result.severance).toBe(0);
    expect(result.vacationPay).toBeCloseTo((24000 / 365) * 5, 10);
    expect(result.extraPay).toBeCloseTo(24000 / 14 / 6, 10);
  });

  it('limita la indemnización improcedente al máximo de 24 mensualidades', () => {
    const result = calculateSeverance({ annualGross: 24000, startDate: '2000-01-01', endDate: '2025-01-01', reason: 'unfair', vacationDays: 0, extraPayments: 'prorated' });
    expect(result.severance).toBeLessThanOrEqual(48000);
    expect(result.severance).toBeCloseTo(48000, 10);
  });
});
