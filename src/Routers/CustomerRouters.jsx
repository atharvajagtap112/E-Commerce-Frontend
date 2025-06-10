import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import CartCard from '../customer/components/Card/card'
import Navigation from '../customer/components/Navigations/navigation'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProrductDetails/productsDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
   
    <div>
        <div>
             <Navigation/>
        </div>
       <Routes>
        <Route path='/' element={<HomePage/> } > </Route> 
        <Route path='/cart' element={ <CartCard/>} > </Route> 
        <Route path='/:lavelOne/ :lavelTwo/ :lavelThre' element={ <CartCard/>} > </Route> 
        <Route path='/Product/:ProductId' element={ <ProductDetails/>} > </Route>
        <Route path='/checkout' element={ <Checkout/>} > </Route>
         <Route path='/account/order' element={ <Order/>} > </Route>
          <Route path='/account/order/:orderId' element={ <OrderDetails/>} > </Route> 
         
        </Routes>
          
          <div>
   
      {/* <Order/>  */}
      {/* <OrderDetails/> */}
    </div>
       
       <div>
         <Footer />
       </div>
    </div>
  )
}

export default CustomerRouters