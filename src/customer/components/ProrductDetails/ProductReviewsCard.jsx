import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewsCard() {
  return (
    <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
            <Avatar sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>A</Avatar>
            </Box>
        </Grid>

        <Grid xs={9} item textAlign={'left'} >

            <div className='space-y-2'>
            <p className='font-semibold text-lg'>Atharva</p>
            <p className='opacity-70'>April 5 2025</p>
            </div>

            <Rating name="read-only" value={4} readOnly precision={.5}/>
            <p>
                nice product, i love this shirt
            </p>
        </Grid>
    </Grid>
  )
}

export default ProductReviewsCard