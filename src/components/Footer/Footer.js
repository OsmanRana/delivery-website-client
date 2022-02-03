import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          textAlign="left"
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom component="div" color="red">
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
            <Typography variant="h6" gutterBottom component="div" color="red">
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
            <Item>2</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
