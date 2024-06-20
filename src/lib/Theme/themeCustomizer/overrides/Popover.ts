const Popover =( theme :any):any=> {
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            boxShadow: theme.shadows?.[1]
          }
        }
      }
    }
  }
}

export default Popover
