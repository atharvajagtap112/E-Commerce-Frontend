import React, { use, useEffect } from 'react'
import AddressCard from '../AddressCard/adddressCard'
import CardItem from '../Card/CardItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../State/store'
import { useLocation, useNavigate } from 'react-router-dom'
import { findProductsById } from '../../../State/Product/Action'
import { getOrderById } from '../../../State/Order/Action'

const OrderSummary = () => {

 const {order}=useSelector(store=>store)

const dispatch = useDispatch();
 
const navigate = useNavigate();
const location= useLocation();
const searchParams=new URLSearchParams(location.search);

useEffect(() => {
  dispatch(getOrderById(searchParams.get("order_id")))
},[dispatch])


  return (
    <div className=' space-y-5'> 
      <div className='p-5 shadow-lg rounded-5-md border   '>
          <AddressCard address={order.order?.shippingAddress} />
           
      </div>
        <div>
      <div className="lg:grid grid-cols-3 space-y-5 lg:px-1 relative">
        <div className="col-span-2">
         {order.order?.orderItems?.map((item)=> <CardItem  item={item}/>) }
        </div>
        <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>{order.order?.totalPrice}</span>
              </div>
            

           
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-{order.order?.totalPrice-order.order?.totalDiscountedPrice}</span>
              </div>
           

          
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
          

           
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
         
          <Button
            variant="contained"
            className="w-full"
            sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd ",  alignSelf:"left"}}
          >
            Checkout
          </Button>
           </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary