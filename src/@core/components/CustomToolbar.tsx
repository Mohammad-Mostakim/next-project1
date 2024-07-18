
"use client"
import React from 'react';
import Box from '@mui/material/Box'; // Import the Box component
import Toolbar from '@mui/material/Toolbar'; // Import the Material-UI Toolbar component
import DrawerToggler from '../toolkit/DrawerToggler';
import Logo from '../ui/ui-toolkit/logo';
import { useMediaQuery, useTheme } from '@mui/material';
import { useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { SearchToolkit } from '../ui/ui-toolkit/search';


type CustomToolbarProps = {
  children: React.ReactNode;
}

export const CustomToolbar: React.FC<CustomToolbarProps> = ({ children }) => {
  const theme = useTheme()
  const { drawerOpen } = useAppSelector(state => state.theme);
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
  return (
    <Toolbar component="nav">
      {!drawerOpen && <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 2,
        }}
      >
        {downXl && <DrawerToggler />}
        <Logo />
      </Box>}

      <Box sx={style}>
        <SearchToolkit />
        {children}
      </Box>
    </Toolbar>
  )
}
