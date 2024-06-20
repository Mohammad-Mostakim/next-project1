// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme:any):any {
    return {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.main
                }
            }
        }
    };
}
