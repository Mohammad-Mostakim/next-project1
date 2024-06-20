/** @format */


// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function List(theme:any):any {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          "&:hover": {
            "& .MuiListIcon-root": {
              color: theme.palette.secondary.dark,
            },
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color:"red"
        },
      },
    },
  };
}
