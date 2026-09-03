import IrpfCalculator from "@/components/calculators/IrpfCalculator.astro";
import PensionCalculator from "@/components/calculators/PensionCalculator.astro";
import CocheCalculator from "@/components/calculators/CocheCalculator.astro";
import FiniquitoCalculator from "@/components/calculators/FiniquitoCalculator.astro";
import ParoCalculator from "@/components/calculators/ParoCalculator.astro";
import ViviendaCalculator from "@/components/calculators/ViviendaCalculator.astro";

export const CALCULATOR_COMPONENTS: Record<string, any> = {
  irpf: IrpfCalculator,
  pension: PensionCalculator,
  coche: CocheCalculator,
  finiquito: FiniquitoCalculator,
  paro: ParoCalculator,
  vivienda: ViviendaCalculator,
};
