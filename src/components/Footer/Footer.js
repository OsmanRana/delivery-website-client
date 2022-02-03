import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        height: 800,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <hr />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          textAlign="left"
          sx={{ my: 8 }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
            >
              About Company
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Tracking
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Our Story
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Blog
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Career
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
            >
              Services
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Person 2 Person Delivery (P2P)
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Merchant Delivery Service
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Air Parcel
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Corporate & SME Delivery
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Line Haul
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Warehouse
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="./logo.png" alt="logo" width="100px" />
            <Typography variant="subtitle2" gutterBottom component="div">
              Call Us 09642 000 000
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Email us support@expressdelivery.com
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Typography variant="subtitle2" gutterBottom component="div">
          Copyright © 2022 express delivery. All rights reserved. Privacy Policy
          Terms and Condition Return Policy
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
