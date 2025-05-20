import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
    
        <Grid
          className="text-center text-white bg-black mt-10"
          container
         
            justifyContent="center"
             spacing={30}
          sx={{ bgcolor: "black", color: "white", py: 3 }}
        >
           
          <Grid item xs={12} sm={6} md={6}>
            <div >
              {" "}
              <Typography className="pb-5" variant="h6">
                {" "}
                Company{" "}
              </Typography>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                About{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Blog{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Press{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Jobs{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Partners{" "}
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div>
              {" "}
              <Typography className="pb-5" variant="h6">
                {" "}
                Solutions{" "}
              </Typography>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Marketing{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Analytics{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Commerce
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Insights
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Supports{" "}
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div>
              {" "}
              <Typography className="pb-5" variant="h6">
                {" "}
                Documentions{" "}
              </Typography>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Guides{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Api Status{" "}
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div>
              {" "}
              <Typography className="pb-5" variant="h6">
                {" "}
                Legal{" "}
              </Typography>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Claims{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Privacy{" "}
              </Button>
            </div>
            <div>
              <Button className="py-5" variant="h6" gutterBottom>
                {" "}
                Terms{" "}
              </Button>
            </div>
       
          </Grid>
           </Grid>
                 

              
                    
        <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center" className="text-white">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center" className="text-white">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center" className="text-white">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.flaticon.com/"
            color="inherit"
            underline="always"
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
       </div>
     
   
      
  
  );
};

export default Footer;
