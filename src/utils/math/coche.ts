export interface CarTransferInput { vehicleType: 'car' | 'moped'; purchaseValue: number; itpRate: number; includesAgency: boolean; }
export interface CarTransferResult { dgtFee: number; itp: number; agency: number; total: number; }
export function calculateCarTransfer(input: CarTransferInput): CarTransferResult {
  const dgtFee = input.vehicleType === 'car' ? 55.70 : 27.85;
  const itp = input.purchaseValue * (input.itpRate / 100);
  const agency = input.includesAgency ? 60 : 0;
  return { dgtFee, itp, agency, total: dgtFee + itp + agency };
}
