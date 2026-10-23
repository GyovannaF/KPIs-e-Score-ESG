export interface Kpi {
  title: string;
  value: string;
  variation: string;
  description: string;
}

export interface EsgIndicator {
  label: string;
  score: number;
}

export interface ImpactTrend {
  month: string;
  value: number;
}

// All figures below are fictional demonstration data, not real platform metrics.
export const dashboardKpis: Kpi[] = [
  {
    title: "Organizações ativas",
    value: "1.248",
    variation: "+12,5%",
    description: "Organizações conectadas à plataforma",
  },
  {
    title: "Recursos captados",
    value: "R$ 48,7 mi",
    variation: "+18,2%",
    description: "Em projetos de impacto social",
  },
  {
    title: "Pessoas beneficiadas",
    value: "486 mil",
    variation: "+8,4%",
    description: "Alcançadas por iniciativas apoiadas",
  },
  {
    title: "Retorno social por R$ investido",
    value: "R$ 4,80",
    variation: "+5,7%",
    description: "Valor social gerado por real investido",
  },
];

export const esgIndicators: EsgIndicator[] = [
  { label: "Ambiental", score: 82 },
  { label: "Social", score: 76 },
  { label: "Governança", score: 71 },
];

export const overallEsgScore = "B+";

export const impactTrend: ImpactTrend[] = [
  { month: "Jan", value: 38 },
  { month: "Fev", value: 45 },
  { month: "Mar", value: 42 },
  { month: "Abr", value: 56 },
  { month: "Mai", value: 53 },
  { month: "Jun", value: 68 },
  { month: "Jul", value: 64 },
  { month: "Ago", value: 77 },
  { month: "Set", value: 73 },
  { month: "Out", value: 86 },
  { month: "Nov", value: 82 },
  { month: "Dez", value: 94 },
];
