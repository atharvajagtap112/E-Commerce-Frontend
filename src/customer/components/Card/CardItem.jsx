import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const CardItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[8rem] h-[8rem] lg:w-[9rem] lg:h[9rem">
          <img
            className="w-full h-full object-cover object-top "
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-3 space-y-1 text-left">
          <p className="font-semibold">Mens Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L,White </p>
          <p className="opacty-70 mt-2">Seller: xyz</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
          <p className="font-semibold">₹ 1,999</p>
          <p className="opacity-50 line-through">₹ 2,999</p>
          <p className="font-semibold text-green-600">33% off</p>
          </div>
        </div> 
        </div>

           <div className="lg:flex items-center lg:space-x-2 pt-4 align-left">
             <div className="flex item-center space-x-2"></div>
              <IconButton>
                <RemoveCircleOutlineIcon className="text-gray-500" />
              </IconButton>
              <span className="py-1 px-5 border rounded-sm"> 3</span>
                 <IconButton sx={{ color: "RGB(145 85 253)" }}>
                  <AddCircleOutlineIcon></AddCircleOutlineIcon>
                 </IconButton>
              <div>
                  <Button sx={{ color: "RGB(145 85 253)"}}>
                     Remove
                  </Button>
                </div>
            </div>  

               


     
    </div>
  );
};

export default CardItem;
