"use client"
import React from "react";

// material-ui
import { styled } from "@mui/material/styles";
import { Box, Theme, useMediaQuery } from "@mui/material";
// project import
import Logo from "@/@core/ui/ui-toolkit/logo";
import DrawerToggler from "@/@core/toolkit/DrawerToggler";
// hooks 
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";
// ==============================|| DRAWER HEADER ||============================== //

// ==============================|| DRAWER HEADER - STYLED ||============================== //
interface HeaderProps {
    open: boolean;
    sx?: any;
    themeconfig: any;
    theme:Theme
  }
  
const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, themeconfig }: HeaderProps) => ({
  ...theme?.mixins.toolbar,
  display: "flex",
  height: themeconfig.navbarHeight,
  alignItems: "center",
  justifyContent: open ? "space-between" : "center",
  boxShadow: theme?.shadows[1],
}));

interface DrawerHeaderProps {
  openDrawer: boolean ;
}

const DrawerHeader = ({ openDrawer=false}: DrawerHeaderProps) => {
  const { themeConfig } = useAppSelector((state) => state.theme);
  const theme = useAppTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <DrawerHeaderStyled
      theme={theme}
      open={openDrawer}
      themeconfig={themeConfig}
    >
      {matchUpMd && !openDrawer ? (
        <DrawerToggler />
      ) : (
        <React.Fragment>
          <Logo />
          <DrawerToggler />
        </React.Fragment>
      )}
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
