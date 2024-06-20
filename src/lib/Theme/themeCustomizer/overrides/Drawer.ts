

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Drawer(theme:any):any {
  return {
    MuiDrawer: {
      styleOverrides: {
        docked:{
          backgroundColor: theme.palette.customBg.drawer,
          boxShadow:theme.shadows?.[1]
        },
        paper: {
          overflowX:"hidden",
          color: theme.palette.text.primary,
          boxShadow: theme.shadows?.[1],
          backgroundColor: theme.palette.customBg.drawer,
          border:"none",
        },
      },
    },
  };
}
