import React, { use, useEffect } from "react";
import CardItem from "./CardItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

const CartCard = () => {
  const navigation=useNavigate();
   
  const handleCheckout = () => {
    // Logic for handling checkout can be added here
    navigation("/checkout?step=2");
  }

  const dispatch=useDispatch();
  const {cart}=useSelector(store=>store)

  useEffect(() => {
    dispatch(getCart())
  },[dispatch,cart.updateCart,cart.deleteItem]

)
  


  return (
    <div >
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
         {cart?.cartItems?.map((item)=> <CardItem item={item}/>) }
        </div>
        <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 text-left">PRICE DETAILS
</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
            

           
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discount}</span>
              </div>
           

          
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
          

           
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">{cart.cart?.totalDiscountPrice}</span>
              </div>
            </div>
         
          <Button 
          onClick={()=>handleCheckout()}
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
  );
};

export default CartCard;
