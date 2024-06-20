// Import necessary dependencies and types
import { colors, PaletteOptions } from "@mui/material";
import { ThemeConfigProps } from "../../config";
import { hexToRGBA } from "@/lib/Theme/utils/hex-to-rgba";

// Helper function to determine color values based on mode
function getBgColorByMode(colorsArray: { [key: string]: { light: string, dark: string } }, mode: "light" | "dark" = "light"): { [key: string]: string } {
  return Object.keys(colorsArray).reduce((acc, key) => {
    acc[key] = colorsArray[key][mode];
    return acc;
  }, {} as { [key: string]: string });
}

// Main function to create a custom palette
export default function CustomPalette(customOptions: ThemeConfigProps): PaletteOptions {
  const { mode, bgcolors } = customOptions;
  const customBackgroundColors = getBgColorByMode(bgcolors, mode);
  const mainColor = customBackgroundColors?.main;
  const textColor = customBackgroundColors?.text;
  const buttonColor = customBackgroundColors?.button;
  return {
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode: mode,
    primary: {
      main: "#90caf9",
      light: "#9E69FD",
      dark: "#804BDF",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ce93d8",
      light: "#9C9FA4",
      dark: "#777B82",
      contrastText: "#FFF",
    },
    success: {
      light: "#6AD01F",
      main: "#56CA00",
      dark: "#4CB200",
      contrastText: "#FFF",
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: "#FFF",
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: "#FFF",
    },
    info: {
      light: "#32BAFF",
      main: "#16B1FF",
      dark: "#139CE0",
      contrastText: "#FFF",
    },
    grey: colors.grey,
    text: {
      primary: hexToRGBA(textColor, 0.87),
      secondary: hexToRGBA(textColor, 0.54),
      disabled: hexToRGBA(textColor, 0.38),
    },
    divider: hexToRGBA(mainColor, 0.12),
    background: { paper: customBackgroundColors.paper, default: customBackgroundColors.default },
    customBg: {...customBackgroundColors},
    action: {
      active: hexToRGBA(mainColor, 0.54),
      hover: hexToRGBA(mainColor, 0.04),
      selected: hexToRGBA(mainColor, 0.08),
      disabled: hexToRGBA(mainColor, 0.26),
      disabledBackground: hexToRGBA(mainColor, 0.12),
      focus: hexToRGBA(mainColor, 0.12),
    },
    buttonAction: {
      active: hexToRGBA(buttonColor, 0.54),
      hover: hexToRGBA(textColor, 1),
      hoverBackground: hexToRGBA(buttonColor, 0.54),
      selected: hexToRGBA(buttonColor, 0.08),
      disabled: hexToRGBA(buttonColor, 0.26),
      disabledBackground: hexToRGBA(buttonColor, 0.12),
      focus: hexToRGBA(buttonColor, 0.12),
    },
  };
};
