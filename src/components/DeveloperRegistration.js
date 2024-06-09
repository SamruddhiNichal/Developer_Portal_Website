import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

function DeveloperRegistration() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    organization: "",
    website: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        errors[key] = "This field is required";
      }
    });
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#F3F3F3",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" , color : "#2024A6" }}>
        <Typography
          variant="h4"
          align="center"
          component="h1"
          justifyContent={"center"}
          gutterBottom
        >
          Developer Registration
        </Typography>
        <Typography variant="h3" align="center"  style={{marginTop:"40px"}}  component="h2" gutterBottom>
          Create Your Account
        </Typography>
        <Typography variant="h6" align="center" component="div" style={{color:"black"}} gutterBottom>
          Already have an account? <Button variant="text">Sign In</Button>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                placeholder="Enter Your First Name"
                fullWidth
                value={formValues.firstName}
                onChange={handleChange}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                placeholder="Enter Your Last Name"
                fullWidth
                value={formValues.lastName}
                onChange={handleChange}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                name="emailAddress"
                placeholder="Enter Your EmailAddress Name"
                fullWidth
                value={formValues.emailAddress}
                onChange={handleChange}
                error={!!formErrors.emailAddress}
                helperText={formErrors.emailAddress}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Organization"
                name="organization"
                placeholder="Enter Your Organization"
                fullWidth
                value={formValues.organization}
                onChange={handleChange}
                error={!!formErrors.organization}
                helperText={formErrors.organization}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Website"
                name="website"
                placeholder="Enter Your Website"
                fullWidth
                value={formValues.website}
                onChange={handleChange}
                error={!!formErrors.website}
                helperText={formErrors.website}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country/Region"
                name="country"
                placeholder="Enter Your Country"
                fullWidth
                value={formValues.country}
                onChange={handleChange}
                error={!!formErrors.country}
                helperText={formErrors.country}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                placeholder="Enter Your Password"
                type="password"
                fullWidth
                value={formValues.password}
                onChange={handleChange}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Enter Your Confirm Password"
                type="password"
                fullWidth
                value={formValues.confirmPassword}
                onChange={handleChange}
                error={!!formErrors.confirmPassword}
                helperText={formErrors.confirmPassword}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", mt: 2 }}
            >
              <Button type="submit" style={{marginTop:"50px"}} variant="contained" color="success">
                Submit
              </Button>
            
            </Grid>
           
          </Grid>
        </form>
        <div style={{paddingBottom:"6rem"}}></div>
      </div>
    </div>
  );
}

export default DeveloperRegistration;


