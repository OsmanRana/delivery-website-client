import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import "./Banner.css";

const Banner = () => {
  return (
    <Container sx={{ mt: { xs: 12, md: 0 } }}>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            textAlign="left"
            fontWeight="bold"
            sx={{ fontSize: { xs: 36, sm: 72 } }}
          >
            Your parcels are very <span className="special">special</span> to
            us!!!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://images.pexels.com/photos/6868266/pexels-photo-6868266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Delivery Women"
            width="95%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
