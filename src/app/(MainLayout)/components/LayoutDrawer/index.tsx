
// new code  
"use client";

/** @format */
import React, { memo, useEffect } from "react";
import { Drawer, useMediaQuery } from "@mui/material";
// project import
import { setDrawerOpen } from "@/lib/Theme/ThemeSlice";
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
// hooks
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";

import ContactToolkit from "@core/toolkit/ContactToolkit";

const DRAWER: React.FC<{ window?: () => Window }> = ({ window }) => {
  const theme = useAppTheme();
  const { drawerOpen } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const deviceUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const deviceUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    if (deviceUpLg) dispatch(setDrawerOpen());
  }, [dispatch, deviceUpLg]);

  return (
    <aside>
      <Drawer
        variant={deviceUpMd ? "permanent" : "temporary"}
        container={container}
        open={drawerOpen || false}
        ModalProps={{ keepMounted: deviceUpMd ? false : true }}
      >
        <DrawerHeader />
        <DrawerContent />
        <ContactToolkit />
      </Drawer>
    </aside>
  );
};

const LayoutDrawer = memo(DRAWER);
export default LayoutDrawer;
