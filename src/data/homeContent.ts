export type CardDetail = {
  icon: string;
  eyebrow: string;
  shortTitle: string;
  action: string;
  outcome: string;
  iconClass: string;
  eyebrowClass: string;
  blobClass: string;
  hoverClass: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export const cardDetails: Record<string, CardDetail> = {
  irpf: {
    icon: '€',
    eyebrow: 'Nómina · Hacienda',
    shortTitle: '¿Cuánto cobraré en neto?',
    action: 'Estimar mi sueldo',
    outcome: 'Retención y sueldo neto',
    iconClass: 'bg-blue-100 text-blue-700',
    eyebrowClass: 'text-blue-700',
    blobClass: 'bg-blue-50',
    hoverClass: 'hover:border-blue-300',
  },
  pension: {
    icon: '◷',
    eyebrow: 'Jubilación · Seguridad Social',
    shortTitle: 'Planifica tu jubilación',
    action: 'Estimar mi pensión',
    outcome: 'Pensión mensual orientativa',
    iconClass: 'bg-emerald-100 text-emerald-700',
    eyebrowClass: 'text-emerald-700',
    blobClass: 'bg-emerald-50',
    hoverClass: 'hover:border-emerald-300',
  },
  finiquito: {
    icon: '✓',
    eyebrow: 'Trabajo · Despido',
    shortTitle: 'Comprueba tu finiquito',
    action: 'Calcular mi liquidación',
    outcome: 'Finiquito e indemnización',
    iconClass: 'bg-amber-100 text-amber-700',
    eyebrowClass: 'text-amber-700',
    blobClass: 'bg-amber-50',
    hoverClass: 'hover:border-amber-300',
  },
  paro: {
    icon: '↗',
    eyebrow: 'Desempleo · SEPE',
    shortTitle: '¿Cuánto paro me queda?',
    action: 'Simular mi prestación',
    outcome: 'Importe y meses de paro',
    iconClass: 'bg-violet-100 text-violet-700',
    eyebrowClass: 'text-violet-700',
    blobClass: 'bg-violet-50',
    hoverClass: 'hover:border-violet-300',
  },
  vivienda: {
    icon: '⌂',
    eyebrow: 'Vivienda · Impuestos',
    shortTitle: 'Calcula los gastos de tu casa',
    action: 'Ver gastos de compra',
    outcome: 'Impuestos y gastos extra',
    iconClass: 'bg-rose-100 text-rose-700',
    eyebrowClass: 'text-rose-700',
    blobClass: 'bg-rose-50',
    hoverClass: 'hover:border-rose-300',
  },
  coche: {
    icon: '↔',
    eyebrow: 'Motor · DGT',
    shortTitle: 'Cambia el coche de nombre',
    action: 'Calcular transferencia',
    outcome: 'ITP, DGT y gestoría',
    iconClass: 'bg-slate-100 text-slate-700',
    eyebrowClass: 'text-slate-700',
    blobClass: 'bg-slate-50',
    hoverClass: 'hover:border-slate-300',
  },
};

export const homeFaqs: HomeFaq[] = [
  {
    question: '¿Qué puedo calcular en CALCULA.ES?',
    answer:
      'Puedes estimar tu retención de IRPF y sueldo neto, así como tu pensión de jubilación. La plataforma se ampliará con más herramientas fiscales y laborales.',
  },
  {
    question: '¿Las calculadoras guardan mis datos?',
    answer:
      'No. Los cálculos se realizan en tu navegador y no necesitas registrarte ni introducir datos personales.',
  },
  {
    question: '¿Los resultados son oficiales?',
    answer:
      'No. Son estimaciones informativas basadas en los parámetros publicados para 2026 y no sustituyen el asesoramiento de la Agencia Tributaria, la Seguridad Social o un profesional.',
  },
];
