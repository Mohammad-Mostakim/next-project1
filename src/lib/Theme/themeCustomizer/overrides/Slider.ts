

export default function Slider(theme:any):any {
  return{
    MuiSlider:{
        styleOverrides: {
            root: {
              "&.Mui-disabled": {
                color: theme.palette.grey[300],
              },
            },
            mark: {
              backgroundColor: theme.palette.background.paper,
              width: "4px",
            },
            valueLabel: {
              color: theme?.palette.primary.light,
            },
          },
    }
  }
}
