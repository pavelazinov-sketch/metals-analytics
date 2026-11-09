import type { PeriodConfig } from '@/types/market';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

export const PERIODS: PeriodConfig[] = [
  { key: '1D', label: '1Д', points: 24, stepMs: HOUR, volatilityScale: 0.35 },
  { key: '1W', label: '1Н', points: 42, stepMs: 4 * HOUR, volatilityScale: 0.7 },
  { key: '1M', label: '1М', points: 30, stepMs: DAY, volatilityScale: 1 },
  { key: '3M', label: '3М', points: 45, stepMs: 2 * DAY, volatilityScale: 1.6 },
  { key: '1Y', label: '1Г', points: 52, stepMs: 7 * DAY, volatilityScale: 3 },
];
