import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate =useNavigate();
return (
    <div  onClick={()=>navigate(`/account/order/${5}`) }className=" shadow-md border shadow-black hover:shadow-2xl item-center ">
        <Grid container padding={2} spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={6}>
                <div className="flex cursor-pointer">
                    <img
                        className="w-[5rem] h-[5rem] object-cover object-top"
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                        alt=""
                    />
                    <div className="ml-5 space-y-2">
                        <p>Men Slim Mid Rise Black Jeans</p>
                        <p className="opacity-50 text-xs font-semibold">Size: M</p>
                        <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                    </div>
                </div>
            </Grid>

            <Grid sx={2}>
                    <p>₹1999</p> 
            </Grid>

            <Grid item xs={4}>
                {true&& <div className="mr-8">
              
               <p> 
                  < AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm" />
                <span>Deliver on march 03</span>
               </p>
               <p className="text-xs" >Your Item Has Been Deliver</p>
               </div>
               }
               {false&&
               <p> 
                <span>Deliver on june 03</span>
               </p>
               }
                </Grid>
        </Grid>
    </div>
);
};

export default OrderCard;
