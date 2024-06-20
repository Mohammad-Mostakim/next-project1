// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemIcon(theme:any):any {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 9,
                    padding:0,
                    margin:1,
                    color: theme.palette.customBg.icon,
                }
            }
        }
    };
}
