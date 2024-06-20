// ==============================|| OVERRIDES - BADGE ||============================== //

export default function Badge(theme:any):any {
    return {
        MuiBadge: {
            styleOverrides: {
                root:{
                color:theme.palette?.customBg?.icon
                },
                standard: {
                    minWidth: theme.spacing(2),
                    height: theme.spacing(2),
                    padding: theme.spacing(0.5),
                }
            }
        }
    };
}
