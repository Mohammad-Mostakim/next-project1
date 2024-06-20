/** @format */

// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemText(theme:any):any {
  return {
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: "0 !importent",
        },
        primary: {
          color: theme.palette.text.primary,
        },
      },
    },
  };
}
