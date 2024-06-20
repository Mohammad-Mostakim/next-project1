/** @format */


// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function listItemButton(theme:any):any {
  // this is very importent for drawer menu and nav menu view
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.customBg.listitem,
          color:theme.palette.text.primary,
          "&:hover": {
            color: theme.palette.buttonAction.hover,
            backgroundColor: theme.palette.buttonAction.hoverBackground,
            "& .MuiListItemIcon-root": {
              color: theme.palette.customBg.icon, // Ensure theme.palette.secondary.dark exists
            },
          },
          "&.Mui-selected": {
            color: theme.palette.text.title,
            backgroundColor: theme.palette.action.active,
            "& .MuiListItemIcon-root": {
              color: "#000000", // Ensure theme.palette.secondary.dark exists
            },
            "&:hover": {
              color: theme.palette.text.secondary,
            },
          },
        },
      },
    },
  };
}
