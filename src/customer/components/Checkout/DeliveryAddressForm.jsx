import React from "react";
import AddressCard from "../AddressCard/adddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";

const DeliveryAddressForm = () => {
  const handleSubmit = (e)=> {
    e.preventDefault();
// Here you can handle the form submission logic, such as sending the data to an API or updating the state.
console.log("address");  
}
  return (
    <div>
      <Grid container  spacing={4}>
        <Grid flex={1.2}
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py- 7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
              size="large"
              variant="contained"
            >
              
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid flex={2} item xs={12} lg={7}>
          <Box className="Border rounded-s-md shadow-md p-2">
             <div className="flex-1  p-2 bg-white">
                <form onSubmit={handleSubmit}>
        <div className="max-w-4xl">
          {/* First Row */}
          <div className="flex gap-4 mb-4">
            <TextField
              type="text"
              placeholder="First Name *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <TextField
              type="text"
              placeholder="last Name *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Second Row */}
          <div className="mb-4">
            <TextField
              placeholder="Address *"
              rows={3}
              multiline
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Third Row */}
          <div className="flex gap-4 mb-4">
            <TextField
              type="text"
              placeholder="city *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <TextField
              type="text"
              placeholder="State/Province/Region *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Fourth Row */}
          <div className="flex gap-4 mb-6">
            <TextField
              type="text"
              placeholder="Zip / Postal code *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <TextField
              type="text"
              placeholder="Phone Number *"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Bottom Button */}
          <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
              size="large"
              variant="contained"
            >
              
              Deliver Here
            </Button>
        </div>
        </form>
      </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
