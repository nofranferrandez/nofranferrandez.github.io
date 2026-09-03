import { describe, expect, it } from 'vitest';
import { calculateCarTransfer } from './coche';

describe('calculateCarTransfer', () => {
  it('calcula una transferencia de coche con gestoría', () => {
    expect(calculateCarTransfer({ vehicleType: 'car', purchaseValue: 8500, itpRate: 6, includesAgency: true })).toEqual({ dgtFee: 55.7, itp: 510, agency: 60, total: 625.7 });
  });

  it('usa la tasa reducida para ciclomotores', () => {
    const result = calculateCarTransfer({ vehicleType: 'moped', purchaseValue: 1000, itpRate: 4, includesAgency: false });
    expect(result.dgtFee).toBe(27.85);
    expect(result.total).toBeCloseTo(67.85, 10);
  });

  it('permite un ITP del cero por ciento sin costes de gestoría', () => {
    const result = calculateCarTransfer({ vehicleType: 'car', purchaseValue: 12000, itpRate: 0, includesAgency: false });
    expect(result.itp).toBe(0);
    expect(result.total).toBe(55.7);
  });
});
