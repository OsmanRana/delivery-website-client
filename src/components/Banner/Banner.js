import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import "./Banner.css";

const Banner = () => {
  return (
    <Container sx={{ mt: { xs: 12, md: 11 } }}>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderBottom: { xs: 0, md: 64 },
          borderTop: { xs: 0, md: 64 },
          borderColor: { md: "#d21d24" },
          borderRadius: 16,
        }}
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
            src="https://i.ibb.co/gFD6rGQ/banner.png"
            alt="Delivery Women"
            width="95%"
            className="bannerImage"
            style={{
              marginBottom: "-5px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
