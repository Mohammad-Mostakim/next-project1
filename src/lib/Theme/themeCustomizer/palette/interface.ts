// theme.d.ts
import { Palette, PaletteOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    buttonAction?: PaletteButtonAction;
    customBg?: BackgroundColorsProps;  // Use the corrected BackgroundColorsProps
  }

  interface PaletteOptions {
    buttonAction?: PaletteButtonAction;
    customBg?: BackgroundColorsProps;  // Use the corrected BackgroundColorsProps
  }

  interface PaletteButtonAction {
    active?: string;
    hover?: string;
    hoverBackground?: string;

    selected?: string;
    disabled?: string;
    disabledBackground?: string;
    focus?: string;
  }

  // Corrected BackgroundColorsProps interface
  interface BackgroundColorsProps {
    default?: string;
    main?: string;
    navbar?: string;
    drawer?: string;
    paper?: string;
    button?: string;
    card?: string;
    tab?: string;
    listitem?: string;
    icon?: string;
    text?: string;
  }
}
