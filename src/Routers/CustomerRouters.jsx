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
import Product from '../customer/components/Product/Product'

const CustomerRouters = () => {
  return (
   
    <div>
        <div>
             <Navigation/>
        </div>
       <Routes>
          <Route path='/login' element={<HomePage/> } > </Route> 
          <Route path='/register' element={<HomePage/> } > </Route> 
        <Route path='/' element={<HomePage/> } > </Route> 
        <Route path='/cart' element={ <CartCard/>} > </Route> 
        <Route path='/:levelOne/:levelTwo/:levelThree' element={ <Product/>} > </Route> 
        <Route path='/Product/:productId' element={ <ProductDetails/>} > </Route>
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