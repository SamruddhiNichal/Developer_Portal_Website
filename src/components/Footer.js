import React from 'react';
import { Box, Grid, TextField, Button, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <Box sx={{ padding: '20px', marginTop:"50px" }}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4">Get In Touch</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' style={{marginTop:"4px"}}>Enter your email and look for a message from CheckAlt</Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Enter Your Email"
              required
              sx={{ width: '400px',marginTop:"20px" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{marginTop:"30px"}} color="success">Contact Me</Button>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ backgroundColor: '#303482', color: '#FFFFFF', padding: '20px', marginTop: '20px' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Link href="#" color="inherit" underline="none">CheckAlt Global Sites</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">CheckAlt Partner</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">Privacy Notice</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">Cookie Preferences</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">Terms of Use</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">Security Teams</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">Adjust Ad Preferences</Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit" underline="none">CheckAlt Ready</Link>
          </Grid>
        </Grid>
      <hr></hr>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '20px' }}>
      <Grid item>
        <Link href="#" color="inherit" underline="none">
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '2rem', color: '#1DA1F2' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" underline="none">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem', color: '#0077B5' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" underline="none">
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2rem', color: '#1877F2' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" underline="none">
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '2rem', color: '#FF0000' }} />
        </Link>
      </Grid>
    </Grid>
      </Box>
    </>
  );
}

export default Footer;

