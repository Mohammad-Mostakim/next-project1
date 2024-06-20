

import React from 'react';
import Box from '@mui/material/Box'; // Import the Box component
import Toolbar from '@mui/material/Toolbar'; // Import the Material-UI Toolbar component
import DrawerToggler from '../toolkit/DrawerToggler';
import Logo from '../ui/ui-toolkit/logo';
import { SearchToolkit } from '../ui/ui-toolkit/search';

type CustomToolbarProps = {
  drawerOpen: boolean; // You'll need to pass this prop
  deviceDownMd: any; // You'll need to pass this prop
  children:React.ReactNode;
  themeConfig:any;
};

export const CustomToolbar: React.FC<CustomToolbarProps> = ({ drawerOpen, deviceDownMd,children,themeConfig }) => (
  <Toolbar component="nav" sx={{ maxHeight: `${themeConfig.navbarHeight} !important`}}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin:2,
      }}
    >
      {!drawerOpen && deviceDownMd && <DrawerToggler />}
      {!drawerOpen && <Logo />}
    </Box>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SearchToolkit />
     {children}
    </Box>
  </Toolbar>
);
