import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";

const Tracking = () => {
  const [customerTracking, setCustomerTracking] = useState();
  const [bookingStatus, setBookingStatus] = useState([])
  const handleOnBlur = (e) => {
    const customerTracking = e.target.value;
    setCustomerTracking(customerTracking);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/officeBookings/tracking?tracking=${customerTracking}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [customerTracking]);

  const handleOnsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          m: { xs: 0, md: 16 },
          width: { xs: "100%", md: 800 },
          height: 800,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="./logo.png" alt="logo" width="100px" />
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          fontWeight="bold"
          sx={{ fontSize: { xs: 18, sm: 36 } }}
        >
          Track your delivery
        </Typography>
        <form onSubmit={handleOnsubmit}>
          <TextField
            id="tracking"
            label="Please enter your tracking number."
            type="tracking"
            name="tracking"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500, my: 4 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              fullWidth
              type="submit"
              sx={{
                m: 2,
                p: 2,
                color: "white",
                display: "block",
                backgroundColor: "#d21d24",
                maxWidth: 180,
                border: 1,
                "&:hover": {
                  backgroundColor: "white",
                  color: "#d21d24",
                  borderColor: "#d21d24",
                  boxShadow: "none",
                },
              }}
            >
              Track
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Tracking;
