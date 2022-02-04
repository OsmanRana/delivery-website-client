import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Speciality = () => {
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
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          textAlign="left"
          fontWeight="bold"
          sx={{
            fontSize: { xs: 36 },
            textAlign: { xs: "center", md: "left" },
            my: 8,
            pl: 4,
            borderLeft: { xs: "none", md: 5 },
          }}
        >
          Why express delivery
        </Typography>
        <Grid
          container
          rowSpacing={3}
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
              fontWeight="bold"
            >
              One Stop Solution
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              We understand how to make logistics work for our merchant
              partners. Our job is to let our partners focus on their core
              business while we take care of the rest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
              fontWeight="bold"
            >
              Wide Coverage
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              We have a dedicated delivery channel of 350+ delivery agents in
              Dhaka and Chattogram. We have partnered with 50+ franchises all
              over the country as well.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
              fontWeight="bold"
            >
              Full Tracking
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Merchants have full access of tracking every step of the delivery.
              We provide end to end real time tracking facilities through email,
              sms and QR code.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
              fontWeight="bold"
            >
              Delivery confirmation with OTP
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Two factor authentications - OTP verification is implemented at
              the time of delivery to ensure an additional layer of security to
              the delivered package.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
              fontWeight="bold"
            >
              Fastest Service
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Our team works round the clock to ensure fastest delivery and
              minimize cancellation ratio so that we, as a business partner, can
              ensure our customer’s growth.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="#d21d24"
              fontWeight="bold"
            >
              Cash on Delivery (COD)
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              We collect cash from your customer and transfer it to you on time
              through a formal banking channel, and of course with all the
              detailed supporting information.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Speciality;
