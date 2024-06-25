import { useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { useTheme, useMediaQuery } from '@mui/material';

export default function AppBar(customTheme: any): any {
  const theme = useTheme();
  const { drawerOpen, themeConfig } = useAppSelector((state) => state.theme);
  const upMd:boolean = useMediaQuery(theme.breakpoints.up('md'));
  const open:boolean = upMd && drawerOpen;

  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          maxHeight:themeConfig.navbarHeight,
          width: upMd ? `calc(100% - ${themeConfig.closeDrawerWidth}px)` : "100%",
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen + 20,
          }),
          ...(open && {
            marginLeft: themeConfig.drawerWidth,
            width: `calc(100% - ${themeConfig.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen + 20,
            }),
          }),
        },
      },
    },
  };
}
