

export default function Divider(theme:any):any {
  return {
    MuiDivider:{
        styleOverrides: {
            root: {
              borderColor: theme.palette.grey[200],
              opacity: 1,
            },
          }
    }
  }
}
