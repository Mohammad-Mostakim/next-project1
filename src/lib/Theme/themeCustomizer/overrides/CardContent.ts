// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function CardContent(theme:any):any {
    return {
        MuiCardContent: {
            styleOverrides: {
              root: {
                padding: theme.spacing(5),
                '& + .MuiCardContent-root': {
                  paddingTop: 0
                },
                '&:last-of-type': {
                  paddingBottom: theme.spacing(5)
                },
                '& + .MuiCardActions-root': {
                  paddingTop: 0
                }
              }
            }
          },
    };
}
