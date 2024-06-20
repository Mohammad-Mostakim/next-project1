import { hexToRGBA } from "../../utils/hex-to-rgba";


export default function TouchRipple(theme:any):any {
  return {
    MuiTouchRipple: {
      styleOverrides: {
        root:{
             color:hexToRGBA(theme.palette.buttonAction.selected, 2),
        }
      },
    },
  };
}
