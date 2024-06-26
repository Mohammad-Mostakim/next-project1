import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useMediaQuery, useTheme, Theme } from "@mui/material";
import { ThemeConfigProps } from "../../config";
import { CSSObject } from '@emotion/react';

// ==============================|| OVERRIDES - DRAWER ||============================== //

const bigDevice = (theme: Theme, themeConfig: ThemeConfigProps, drawerOpen: boolean): CSSObject => ({
  overflowX: "hidden",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  width: drawerOpen ? themeConfig.drawerWidth : themeConfig.closeDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: drawerOpen ? theme.transitions.duration.enteringScreen + 20 : theme.transitions.duration.leavingScreen + 20,
  }),
});

const smallDevice = (themeConfig: ThemeConfigProps): CSSObject => ({
  boxSizing: "border-box",
  width: themeConfig.drawerWidth,
});

interface CustomTheme {
  palette: {
    customBg: {
      drawer: string;
    };
  };
}

export default function Drawer(customTheme: CustomTheme) {
  const theme = useTheme();
  const { drawerOpen, themeConfig } = useAppSelector((state: any) => state.theme);
  const upLg: boolean = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          overflowX: "hidden",
          whiteSpace: "nowrap",
          ...(upLg && {
            overflowX: "hidden",
            width: drawerOpen ? themeConfig.drawerWidth : themeConfig.closeDrawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            "& .MuiDrawer-paper": bigDevice(theme, themeConfig, drawerOpen),
          }),
          ...(!upLg && {
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": smallDevice(themeConfig),
          }),
        },
        docked: {
          backgroundColor: customTheme.palette.customBg.drawer,
          boxShadow: theme.shadows[1],
        },
        paper: {
          overflowX: "hidden",
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          backgroundColor: customTheme.palette.customBg.drawer,
          border: "none",
        },
      },
    },
  };
}
