const Card = (theme:any):any => {
    return {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: theme.shadows?.[6],
            backgroundColor:theme.palette?.customBg?.card,
            borderRadius:theme.shape.borderRadius-5,
            '& .card-more-options': {
              marginTop: theme.spacing(-1),
              marginRight: theme.spacing(-3)
            }
          }
        }
      },

    }
  }
  
  export default Card
  