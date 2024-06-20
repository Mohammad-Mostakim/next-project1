// src/hooks/useCustomTheme.ts

import { useTheme as useDefaultTheme } from '@mui/material/styles';
import { CustomTheme } from '../themeCustomizer';

export const useAppTheme = (): CustomTheme => {
  return useDefaultTheme<CustomTheme>();
};
