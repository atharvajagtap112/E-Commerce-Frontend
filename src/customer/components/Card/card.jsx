import React from "react";
import CardItem from "./CardItem";
import { Button } from "@mui/material";

const CartCard = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
         {[1,1,1,1].map((item)=> <CardItem />) }
        </div>
        <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>4568</span>
              </div>
            

           
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-568</span>
              </div>
           

          
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
          

           
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">1278</span>
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
  );
};

export default CartCard;
