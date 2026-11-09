export type PeriodKey = '1D' | '1W' | '1M' | '3M' | '1Y';

export type MetalGroup = 'Лантаноид' | 'Иттрий и скандий';

export interface Metal {
  symbol: string;
  name: string;
  aliases: string[];
  atomicNumber: number;
  group: MetalGroup;
  basePrice: number;
  volatility: number;
  trend: number;
}

export interface PricePoint {
  date: number;
  price: number;
}

export interface MetalQuote {
  metal: Metal;
  price: number;
  change: number;
  changePct: number;
  high: number;
  low: number;
  series: PricePoint[];
}

export interface PeriodConfig {
  key: PeriodKey;
  label: string;
  points: number;
  stepMs: number;
  volatilityScale: number;
}
