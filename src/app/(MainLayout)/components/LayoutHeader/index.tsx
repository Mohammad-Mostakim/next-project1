"use client"
import React from 'react';
import { CustomToolbar } from '@/@core/components/CustomToolbar';
import { useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { useAppTheme } from '@/lib/Theme/hooks';
import { AppBar, styled, useMediaQuery, Theme } from '@mui/material';
import HeaderContent from './HeaderContent';

// Styled
interface AppBarStyledProps {
  open?: boolean;
  theme?: Theme;
  isupmd?: any;
  themeconfig: {
    closeDrawerWidth: number;
    drawerWidth: number;
  };
}

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, isupmd, open, themeconfig }: AppBarStyledProps) => ({

    boxShadow: theme?.shadows[1],
    width: isupmd ?`calc(100% - ${themeconfig?.closeDrawerWidth}px)`:"100%",
    transition: theme?.transitions.create(['width', 'margin'], {
      easing: theme?.transitions.easing.sharp,
      duration: theme?.transitions.duration.leavingScreen + 20,
    }),
    ...(open && {
      marginLeft: themeconfig?.drawerWidth,
      width: `calc(100% - ${themeconfig?.drawerWidth}px)`,
      transition: theme?.transitions.create(['width', 'margin'], {
        easing: theme?.transitions.easing.sharp,
        duration: theme?.transitions.duration.enteringScreen + 20,
      }),
    }),
}));

const LayoutHeader: React.FC = () => {
  const theme = useAppTheme();
  const underMdDevice = useMediaQuery(theme.breakpoints.down('md'));
  const { drawerOpen, themeConfig } = useAppSelector((state) => state.theme);
  const isDrawerOpen:boolean = drawerOpen;
  return (
    <React.Fragment>
      <AppBarStyled isupmd={underMdDevice?undefined:underMdDevice.toString()} open={isDrawerOpen && !underMdDevice} themeconfig={themeConfig}>
        <CustomToolbar deviceDownMd={underMdDevice} drawerOpen={isDrawerOpen} themeConfig={themeConfig}>
          <HeaderContent />
        </CustomToolbar>
      </AppBarStyled>
    </React.Fragment>
  );
};

export default LayoutHeader;
