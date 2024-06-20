// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function CardActions(theme:any):any {
    return {
        MuiCardActions: {
            styleOverrides: {
              root: {
                padding: theme.spacing(5),
                '&.card-action-dense': {
                  padding: theme.spacing(0, 2.5, 2.5),
                  '.MuiCard-root .MuiCardMedia-root + &': {
                    paddingTop: theme.spacing(2.5)
                  },
                  '.MuiCard-root &:first-of-type': {
                    paddingTop: theme.spacing(5),
                    paddingBottom: theme.spacing(5),
                    '& + .MuiCardContent-root': {
                      paddingTop: 0
                    },
                    '& + .MuiCardHeader-root': {
                      paddingTop: 0
                    }
                  }
                },
                '& .MuiButton-text': {
                  paddingLeft: theme.spacing(2.5),
                  paddingRight: theme.spacing(2.5)
                }
              }
            }
          }
    };
}
