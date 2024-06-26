
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
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    if (!downXl) dispatch(setDrawerOpen());
  }, [dispatch, downXl]);

  return (
    <aside>
      <Drawer
        variant={downXl ? "temporary" : "permanent"}
        container={container}
        open={drawerOpen || false}
        ModalProps={{ keepMounted: downXl ? true : false }}
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
