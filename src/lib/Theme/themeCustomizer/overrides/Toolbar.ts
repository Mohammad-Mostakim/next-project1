

export default function Toolbar(theme:any):any {
  return {
    MuiToolbar: {
    styleOverrides: {
        root: {
          backgroundColor:theme.palette.customBg.navbar,
        },
      },
  }}
}
