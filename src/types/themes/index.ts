import { Theme } from '../core';
import { BASE_THEMES } from './basic';
import { SPECIAL_THEMES } from './special';
import { PREMIUM_THEMES } from './premium';

export { BASE_THEMES, SPECIAL_THEMES, PREMIUM_THEMES };

export const THEMES: Theme[] = [
  ...BASE_THEMES,
  ...SPECIAL_THEMES,
  ...PREMIUM_THEMES
];