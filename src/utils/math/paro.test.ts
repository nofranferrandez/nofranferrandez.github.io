import { describe, expect, it } from 'vitest';
import { calculateUnemployment } from './paro';

describe('calculateUnemployment', () => {
  it('calcula el máximo de duración sin hijos', () => {
    expect(calculateUnemployment({ contributionBase: 1850, contributionDays: 2160, dependents: 0 })).toEqual({ firstPhase: 1225, secondPhase: 1110, months: 24, capped: true });
  });

  it('calcula el tramo mínimo de cotización', () => {
    const result = calculateUnemployment({ contributionBase: 1000, contributionDays: 360, dependents: 0 });
    expect(result.months).toBe(4);
    expect(result.firstPhase).toBe(700);
    expect(result.secondPhase).toBe(600);
  });

  it('aplica los topes de dos o más hijos', () => {
    const result = calculateUnemployment({ contributionBase: 3000, contributionDays: 720, dependents: 2 });
    expect(result.firstPhase).toBe(1575);
    expect(result.secondPhase).toBe(1575);
    expect(result.months).toBe(8);
    expect(result.capped).toBe(true);
  });
});
