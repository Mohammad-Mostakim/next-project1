import { Theme } from "@mui/material";



export default function Avatar(theme:any):any {
  return{
      MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.customBg.main
        },
        rounded: {
          borderRadius: theme.shape?.borderRadius,
        }
      }
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          justifyContent: 'flex-end',
          '.MuiCard-root & .MuiAvatar-root': {
            borderColor: theme.palette.customBg.icon
          }
        }
      }
    },
  }
}
