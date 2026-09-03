import { describe, expect, it } from 'vitest';
import { calculateHousing } from './vivienda';

describe('calculateHousing', () => {
  it('calcula una vivienda usada estándar', () => {
    const result = calculateHousing({ price: 180000, propertyType: 'used', itpRate: 10, youngBuyer: false });
    expect(result.tax).toBe(18000);
    expect(result.notary).toBe(600);
    expect(result.registry).toBe(350);
    expect(result.agency).toBe(350);
    expect(result.total).toBe(19300);
  });

  it('calcula IVA y AJD para obra nueva', () => {
    const result = calculateHousing({ price: 180000, propertyType: 'new', itpRate: 10, youngBuyer: false });
    expect(result.tax).toBe(20700);
    expect(result.taxLabel).toContain('IVA');
    expect(result.total).toBe(22000);
  });

  it('aplica la bonificación joven sin bajar del cuatro por ciento', () => {
    const result = calculateHousing({ price: 100000, propertyType: 'used', itpRate: 10, youngBuyer: true });
    expect(result.tax).toBe(8000);
    expect(result.percentage).toBe(9.3);
  });
});
