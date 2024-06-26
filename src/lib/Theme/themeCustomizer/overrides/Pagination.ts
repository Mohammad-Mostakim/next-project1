// ** Util Import
import { hexToRGBA } from "../../utils/hex-to-rgba"

const Pagination = (theme:any):any => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
            {
              backgroundColor: `rgba(${theme.palette.background.default}, 0.12)`
            }
        },
        outlined: {
          borderColor: `rgba(${theme.palette.divider}, 0.22)`
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.2)} !important`
            }
          }
        },
        outlinedSecondary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.2)} !important`
            }
          }
        }
      }
    }
  }
}

export default Pagination
