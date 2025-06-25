import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../State/Order/Action'
const orderStatus=[
    {label:"On The Way", value:"on_the_way"},
    {label:"Delivered", value:"delivered"},
    {label:"Cancelled",value:"cancelled"},
    {label:"Retuen", value:"Retuen"}
 ]

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
   
  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <div className='px-5 lg:px-20 py-8 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl font-bold mb-8 text-gray-800'>My Orders</h1>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}></Grid>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
             
             <Grid item xs={2.5}  flex={0.25}>  
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5 text-left'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1> 
                         
                         {orderStatus.map((option)=>  
                        <div className='flex items-center'> 
                          <input type="checkbox" defaultValue={option.value}  
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                            <label className='ml-3 text-sm text-gray-600'>{option.label}</label>
                        </div>
                        )}
                    </div>

                </div>
             </Grid>
             <Grid item xs={9} flex={0.9} spacing={1} margin={2} >
              <div className='space-y-5'>
               {order.orders?.map((item)=>  <OrderCard order={item} />
             )}
               </div>
              
             </Grid>
            
            </Grid>
    </div>
  )
}

export default Order