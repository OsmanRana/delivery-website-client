import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useServices/useAuth";
import ServiceOption from "./ServiceOption";

const OfficeDelivery = () => {
  const { user } = useAuth();
  const [officeBookings, setOfficeBookings] = useState({});
  const [booking, setBooking] = useState();
  const { bookingId } = useParams();

  useEffect(() => {
    fetch(`https://infinite-headland-54248.herokuapp.com/booking/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [bookingId]);

  const tracking = (Math.random().toFixed(4) * 10000).toString();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOfficeBookings = { ...officeBookings };
    newOfficeBookings[field] = value;
    setOfficeBookings(newOfficeBookings);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const status = "Pending";
    officeBookings.bookingStatus = status;
    officeBookings.serviceName = booking?.name;

    // officeBookings.cost = cost;
    officeBookings.tracking = tracking;
    // officeBookings.bookingDate = bookingDate;
    // deliveryDate.bookingDate = bookingDate;
    fetch("https://infinite-headland-54248.herokuapp.com/officeBookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(officeBookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`Booking placed successfully. Tracking ${tracking}`);
          window.location.reload();
        }
      });
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
          width: 800,
          maxHeight: 2000,
        },
      }}
      fullWidth
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          fontWeight="bold"
          sx={{ fontSize: { xs: 36 }, my: 4 }}
        >
          {booking?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Tracking Number: {tracking}
        </Typography>
        <form onSubmit={handleOnSubmit}>
          <Typography variant="body1" gutterBottom>
            General Information
          </Typography>
          <TextField
            id="name"
            label="Name"
            name="senderName"
            type="name"
            value={user?.displayName}
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500, my: 4 }}
          />
          <TextField
            id="email"
            label="Email"
            name="senderEmail"
            type="email"
            value={user.email}
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500 }}
          />
          <TextField
            id="password"
            label="Mobile Phone Number"
            name="senderMobile"
            type="number"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500, my: 4 }}
          />

          <ServiceOption handleOnBlur={handleOnBlur}></ServiceOption>
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
                m: { xs: 0, md: 2 },
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
              Confirm Booking
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default OfficeDelivery;
