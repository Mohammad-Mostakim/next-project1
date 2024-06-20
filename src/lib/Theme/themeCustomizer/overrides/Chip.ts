// ==============================|| OVERRIDES - CHIP ||============================== //

export default function Chip(theme:any):any {
    return {
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    '&:active': {
                        boxShadow: theme.shadows?.[2]
                    }
                },
                sizeLarge: {
                    fontSize: '.5rem',
                    height: 20
                },
                light: {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.light,
                    borderColor: theme.palette.primary.light,
                    '&.MuiChip-lightError': {
                        color: theme.palette.error.main,
                        backgroundColor: theme.palette.error.light,
                        borderColor: theme.palette.error.contrastText
                    },
                    '&.MuiChip-lightSuccess': {
                        color: theme.palette.success.main,
                        backgroundColor: theme.palette.success.light,
                        borderColor: theme.palette.success.contrastText
                    },
                    '&.MuiChip-lightWarning': {
                        color: theme.palette.warning.main,
                        backgroundColor: theme.palette.warning.light,
                        borderColor: theme.palette.warning.contrastText
                    }
                }
            }
        }
    };
}
