/** @format */

import { Theme } from "@mui/material";

// ==============================|| OVERRIDES - BUTTON ||============================== //
export default function Button(theme: Theme): any {
  const disabledStyle = {
    "&.Mui-disabled": {
      backgroundColor: theme.palette?.buttonAction?.disabled,
      color: "inherit"
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: `${theme.shape?.borderRadius}px`,
          backgroundColor: theme.palette?.customBg?.button,
          fontFamily:theme.typography.fontFamily,
          boxShadow: theme.shadows?.[1],
          color: theme.palette.text.primary,
          "&:hover": {
            color: theme.palette.buttonAction?.hover,
            backgroundColor: theme.palette.buttonAction?.hoverBackground,
          },
          contained: {
            ...disabledStyle,
          },
          outlined: {
            ...disabledStyle,
          },
        },
      },
    }
  }
}