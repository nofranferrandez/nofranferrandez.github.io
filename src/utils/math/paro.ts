export interface UnemploymentInput { contributionBase: number; contributionDays: number; dependents: 0 | 1 | 2; }
export interface UnemploymentResult { firstPhase: number; secondPhase: number; months: number; capped: boolean; }
export function calculateUnemployment(input: UnemploymentInput): UnemploymentResult {
  const scale: [number, number][] = [[2160, 24], [1980, 22], [1800, 20], [1620, 18], [1440, 16], [1260, 14], [1080, 12], [900, 10], [720, 8], [540, 6], [360, 4]];
  const months = scale.find(([days]) => input.contributionDays >= days)?.[1] ?? 0;
  const minimum = input.dependents === 0 ? 560 : 749;
  const maximum = input.dependents === 0 ? 1225 : input.dependents === 1 ? 1400 : 1575;
  const rawFirst = input.contributionBase * 0.70;
  const rawSecond = input.contributionBase * 0.60;
  const firstPhase = Math.min(Math.max(rawFirst, minimum), maximum);
  const secondPhase = Math.min(Math.max(rawSecond, minimum), maximum);
  return { firstPhase, secondPhase, months, capped: rawFirst !== firstPhase || rawSecond !== secondPhase };
}
