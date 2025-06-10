import React, { useState } from "react";
import AddressCard from "../AddressCard/adddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";

const DeliveryAddressForm = () => {
  // Using state to manage form data (recommended approach)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Address data:", formData);
    
    // Here you can handle the form submission logic
    // such as sending the data to an API or updating the state
    
    // Example: Reset form after submission
    // setFormData({
    //   firstName: '', lastName: '', address: '', city: '', state: '', zip: '', phone: ''
    // });
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid 
          item
          flex={0.6}
          xs={12}
          lg={5}
          sx={{ 
            border: 1, 
            borderColor: 'grey.300',
            borderRadius: 1,
            boxShadow: 1,
            height: '30.5rem',
            overflowY: 'scroll'
          }}
        >
          <div 
          style={{ padding: '20px', paddingTop: '28px', borderBottom: '1px solid #e0e0e0', cursor: 'pointer' }}>
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145, 85, 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid 
        flex={0.8}
        item xs={12} lg={7}>
          <Box sx={{ 
            border: 1, 
            borderColor: 'grey.300',
            borderRadius: 1,
            boxShadow: 1,
            p: 2
          }}>
            <div style={{ padding: '8px', backgroundColor: 'white' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ maxWidth: '100%' }}>
                  {/* First Row */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <TextField
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                    <TextField
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      autoComplete="family-name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      size="medium"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Second Row */}
                  <div style={{ marginBottom: '16px' }}>
                    <TextField
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      autoComplete="street-address"
                      label="Address"
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Third Row */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <TextField
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      label="City"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                    <TextField
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      label="State/Province/Region"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Fourth Row */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <TextField
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      label="Zip / Postal Code"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                    <TextField
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f9fafb',
                          '&:hover fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'rgb(145, 85, 253)',
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    sx={{ 
                      mt: 2, 
                      bgcolor: "rgb(145, 85, 253)",
                      '&:hover': {
                        bgcolor: "rgb(125, 65, 233)",
                      }
                    }}
                    size="large"
                    variant="contained"
                    fullWidth
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