import type { Metal } from '@/types/market';

export const METALS: Metal[] = [
  { symbol: 'Nd', name: 'Neodymium', aliases: ['неодим'], atomicNumber: 60, group: 'Лантаноид', basePrice: 82.5, volatility: 0.012, trend: 0.0004 },
  { symbol: 'Pr', name: 'Praseodymium', aliases: ['празеодим'], atomicNumber: 59, group: 'Лантаноид', basePrice: 78.2, volatility: 0.011, trend: 0.0003 },
  { symbol: 'Dy', name: 'Dysprosium', aliases: ['диспрози'], atomicNumber: 66, group: 'Лантаноид', basePrice: 208, volatility: 0.014, trend: -0.0002 },
  { symbol: 'Tb', name: 'Terbium', aliases: ['тербий', 'тербия'], atomicNumber: 65, group: 'Лантаноид', basePrice: 325, volatility: 0.016, trend: 0.0005 },
  { symbol: 'La', name: 'Lanthanum', aliases: ['лантан'], atomicNumber: 57, group: 'Лантаноид', basePrice: 4.15, volatility: 0.008, trend: -0.0001 },
  { symbol: 'Ce', name: 'Cerium', aliases: ['церий', 'церия'], atomicNumber: 58, group: 'Лантаноид', basePrice: 2.35, volatility: 0.009, trend: -0.0002 },
  { symbol: 'Eu', name: 'Europium', aliases: ['европий', 'европия'], atomicNumber: 63, group: 'Лантаноид', basePrice: 285, volatility: 0.02, trend: 0.0002 },
  { symbol: 'Y', name: 'Yttrium', aliases: ['иттрий', 'иттрия'], atomicNumber: 39, group: 'Иттрий и скандий', basePrice: 12.8, volatility: 0.01, trend: 0.0002 },
  { symbol: 'Sc', name: 'Scandium', aliases: ['скандий', 'скандия'], atomicNumber: 21, group: 'Иттрий и скандий', basePrice: 1180, volatility: 0.013, trend: 0.0001 },
  { symbol: 'Gd', name: 'Gadolinium', aliases: ['гадолиний', 'гадолиния'], atomicNumber: 64, group: 'Лантаноид', basePrice: 48.6, volatility: 0.012, trend: 0.0003 },
];
