"use client";

/** @format */
import React, { memo, useEffect } from "react";
import { styled, Drawer, useMediaQuery, Theme } from "@mui/material";
// project import
import { setDrawerOpen } from "@/lib/Theme/ThemeSlice";
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
// hooks
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";

import ContactToolkit from "@core/toolkit/ContactToolkit";

interface DrawerProps {
  open: boolean;
  sx?: any;
  themeconfig: any;
  theme?: Theme;
}

const openedMixin = (theme: any, themeconfig: any) => ({
  width: themeconfig.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen + 20,
  }),
});

const closedMixin = (theme: any, themeconfig: any) => ({
  width: themeconfig.closeDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen + 20,
  }),
});

const DrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, sx, themeconfig }: DrawerProps) => ({
  ...sx,
  overflowX: "hidden",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, themeconfig),
    "& .MuiDrawer-paper": openedMixin(theme, themeconfig),
  }),
  ...(!open && {
    ...closedMixin(theme, themeconfig),
    "& .MuiDrawer-paper": closedMixin(theme, themeconfig),
  }),
}));

const DRAWER: React.FC<{ window?: () => Window }> = ({ window }) => {
  const theme = useAppTheme();
  const { drawerOpen, themeConfig } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const deviceUnderMd = useMediaQuery(theme.breakpoints.down("md"));
  const deviceUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    if (deviceUpLg) dispatch(setDrawerOpen());
  }, [dispatch, deviceUpLg]);

  if (deviceUnderMd) {
    return (
      <Drawer
        variant="temporary"
        container={container}
        open={drawerOpen || false}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: themeConfig.drawerWidth,
          },
        }}
      >
        <DrawerHeader openDrawer={drawerOpen} />
        <DrawerContent />
        <ContactToolkit/>
      </Drawer>
    );
  }
  
  return (
    <aside>
      <DrawerStyled
        variant="permanent"
        open={drawerOpen}
        themeconfig={themeConfig}
      >
        <DrawerHeader openDrawer={drawerOpen} />
        <DrawerContent />
        <ContactToolkit/>
      </DrawerStyled>
    </aside>
  );
};

const LayoutDrawer = memo(DRAWER);
export default LayoutDrawer;
