import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/adddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../State/Order/Action'
import { store } from '../../../State/store'

const OrderDetails = () => {


  return (
    <div className='px:5 lg:px-20'> 
    <div>
      <h1 className='font-bold text-xl text-left py-7'>Delivery Address</h1>
           <AddressCard/>
    </div>
    <div className='py-20'> 
       <OrderTracker activeStep={3}/>
    </div>

    <div className='space-y-5'    >
      {
        [1,2,3,4,5].map((index)=>
        <Grid item container  className='shadow-xl rounded-md p-5 border'  sx={{alignItems:"center", justifyContent:"space-between"}} >
          <Grid item xs={6}>
             <div className='flex item-center space-x-4'>
              <img className='w-[5rem] h-[5rem] object-cover object-top'
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
              alt="" />
             

             <div className='text-left space-y-2 ml-5'>
              <p className='font-semibold'>Mens Slim Mid Rise Black Jeans</p>
              <p className='space-x-5 opacity-50 text-xs'> <span>Color : Pink</span> <span>Size : M</span></p>
              <p> Seller: Linaria</p>
              <p>₹1999</p>
             </div>
             </div>
            </Grid>  
              
              <Grid item xs={6} >
                <Box sx={{color:deepPurple[500]}} >

                  <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 ' />
                      <span>Rate & Review Product</span>
                  
                </Box>
              </Grid>

      </Grid>
      
        )
      }

      
    </div>
    </div>
  )
}

export default OrderDetails