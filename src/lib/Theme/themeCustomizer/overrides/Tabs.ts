/** @format */

// ==============================|| OVERRIDES - TABS ||============================== //

export default function Tabs(theme:any):any {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.customBg.navbar,
          boxShadow: theme.shadows?.[2],
          margin: ".1rem",
          padding: ".1rem",
        },
        flexContainer: {
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        vertical: {
          overflow: "visible",
          minWidth: 130,
          marginRight: theme.spacing(4),
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  };
}
