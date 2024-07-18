import ServiceCard from '@core/ui/ui-toolkit/cards/ServiceCard'
import { Grid } from '@mui/material'
import React from 'react'

export default function Services() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i} sx={{display:"flex", justifyContent:"center"}}>
            <ServiceCard key={i} serviceName='Web Development' serviceImageUrl='' />
          </Grid>
        ))}
      </Grid>

    </React.Fragment>
  )
}
