import { ColorScheme } from './core';

export const COLOR_SCHEMES: Record<string, ColorScheme> = {
  minimal: {
    name: 'Minimal Elegance',
    background: '#fafafa',
    text: '#2d3436',
    title: '#2d3436',
    subtitle: '#636e72',
    footer: '#b2bec3',
    useGradient: false
  },
  nordic: {
    name: 'Nordic Frost',
    background: '#f0f4f8',
    text: '#334155',
    title: '#1e293b',
    subtitle: '#475569',
    footer: '#94a3b8',
    useGradient: true,
    gradientStart: '#e0f2fe',
    gradientEnd: '#f1f5f9',
    gradientAngle: 165
  },
  desert: {
    name: 'Desert Dusk',
    background: '#fef3c7',
    text: '#78350f',
    title: '#92400e',
    subtitle: '#b45309',
    footer: '#d97706',
    useGradient: true,
    gradientStart: '#fef3c7',
    gradientEnd: '#fde68a',
    gradientAngle: 145
  },
  emerald: {
    name: 'Emerald Garden',
    background: '#ecfdf5',
    text: '#065f46',
    title: '#047857',
    subtitle: '#059669',
    footer: '#34d399',
    useGradient: true,
    gradientStart: '#d1fae5',
    gradientEnd: '#a7f3d0',
    gradientAngle: 120
  },
  midnight: {
    name: 'Midnight Galaxy',
    background: '#0f172a',
    text: '#e2e8f0',
    title: '#38bdf8',
    subtitle: '#7dd3fc',
    footer: '#93c5fd',
    useGradient: true,
    gradientStart: '#1e293b',
    gradientEnd: '#0f172a',
    gradientAngle: 225
  },
  cherry: {
    name: 'Cherry Blossom',
    background: '#fdf2f8',
    text: '#831843',
    title: '#be185d',
    subtitle: '#db2777',
    footer: '#f472b6',
    useGradient: true,
    gradientStart: '#fce7f3',
    gradientEnd: '#fbcfe8',
    gradientAngle: 135
  },
  ocean: {
    name: 'Ocean Depths',
    background: '#1a1a2e',
    text: '#e9ecef',
    title: '#4facfe',
    subtitle: '#00f2fe',
    footer: '#a8e6cf',
    useGradient: true,
    gradientStart: '#4facfe',
    gradientEnd: '#00f2fe',
    gradientAngle: 135
  },
  sunset: {
    name: 'Sunset Vibes',
    background: '#ff6b6b',
    text: '#ffffff',
    title: '#ffd93d',
    subtitle: '#fff3bf',
    footer: '#ffe8cc',
    useGradient: true,
    gradientStart: '#ff6b6b',
    gradientEnd: '#ffa07a',
    gradientAngle: 45
  },
  forest: {
    name: 'Forest Dream',
    background: '#004d40',
    text: '#e0f2f1',
    title: '#80cbc4',
    subtitle: '#4db6ac',
    footer: '#b2dfdb',
    useGradient: true,
    gradientStart: '#004d40',
    gradientEnd: '#00695c',
    gradientAngle: 160
  },
  aurora: {
    name: 'Aurora Nights',
    background: '#2c3e50',
    text: '#ecf0f1',
    title: '#a8e6cf',
    subtitle: '#dcedc1',
    footer: '#ffd3b6',
    useGradient: true,
    gradientStart: '#2c3e50',
    gradientEnd: '#3498db',
    gradientAngle: 315
  }
};