/** @format */

// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme:any):any {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: theme.palette.text.primary,
          boxShadow:
            " 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15)",
          transition: " all .20s ease-in",
          "&.Mui-selected": {
            color: theme.palette.text.anty,
            transition: "all .15s ease-in",
            backgroundColor: theme.palette.customBg.tab,
            borderRadius: theme.shape.borderRadius,
          },
        },

        textColorSecondary: {
          "&.Mui-selected": {
            color: theme.palette.text.light,
          },
        },
      },
    },
  };
}
