import { hexToRGBA } from "../../utils/hex-to-rgba";

export default function Tooltip(theme:any):any {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: hexToRGBA(theme.palette.grey[500], 0.9),
          color: theme.palette.text.primary,
          width: "100%",
        },
        arrow: {
          color: hexToRGBA(theme.palette.grey[700], 0.9),
        },
      },
    },
  };
}
