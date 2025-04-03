export type ColorScheme = {
  name: string;
  background: string;
  text: string;
  title?: string;
  subtitle?: string;
  footer?: string;
  primaryAccent?: string;
  secondaryAccent?: string;
  useGradient?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  gradientAngle?: number;
};

export type Theme = {
  id: string;
  name: string;
  template: string;
};

export type LandingPageConfig = {
  colorScheme: string;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  textColor: string;
  footerColor: string;
  useGradient: boolean;
  gradientStartColor: string;
  gradientEndColor: string;
  gradientAngle: number;
  useSameFont: boolean;
  titleFont: string;
  subtitleFont: string;
  textFont: string;
  footerFont: string;
  language: string;
  includeCountdown: boolean;
  countdownDate?: string;
  countdownStyle: 'minimal' | 'boxed' | 'circles' | 'flip' | 'neon';
  theme: string;
  title: string;
  subtitle: string;
  mainContent: string;
  footerText: string;
};