// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function CardHeader(theme:any):any {
    return {
        MuiCardHeader: {
            styleOverrides: {
              root: {
                padding: theme.spacing(5),
                '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
                  paddingTop: 0
                },
                '& .MuiCardHeader-subheader': {
                  fontSize: '0.875rem'
                }
              },
              title: {
                lineHeight: 1,
                fontWeight: 500,
                fontSize: '1.25rem',
                letterSpacing: '0.0125em'
              },
              action: {
                marginTop: 0,
                marginRight: 0
              }
            }
          },
    };
}
