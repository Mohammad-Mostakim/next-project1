// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Paper(theme:any):any {
    return {
        MuiPaper: {
            defaultProps: {
                elevation:0,
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
                rounded: {
                    borderRadius: `${theme.shape.borderRadius}px`,
                  },
            }
        }
    };
}
