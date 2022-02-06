import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const PersonToPerson = ({ name, handleOnBlur }) => {
  //   const cost = parseInt(officeBookings.weight) * 50;
  const tracking = Math.random().toFixed(5);
  const bookingDate = new Date().toLocaleString();
  const deliveryDate = new Date().toLocaleString();
  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        Reciever Details
      </Typography>
      <TextField
        id="name"
        label="Name"
        name="recieverName"
        type="name"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500, my: 4 }}
      />
      <TextField
        id="email"
        label="Email"
        name="receiverEmail"
        type="email"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500 }}
      />
      <TextField
        id="receiverMobile"
        label="Mobile Phone Number"
        name="receiverMobile"
        type="number"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500, my: 4 }}
      />
      <TextField
        id="address"
        label="Address"
        name="address"
        type="address"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500, my: 4 }}
      />
      <Typography variant="body1" gutterBottom>
        Parcel Details and Cost
      </Typography>
      <TextField
        id="Parcel Weight"
        label="Parcel Weight"
        name="weight"
        type="number"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500, my: 4 }}
      />
      {"p2p" === name && (
        <TextField
          id="cost"
          label="Cost/kg or Tk 50"
          name="cost"
          type="number"
          // value={cost.toString()}
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500, my: 4 }}
        />
      )}
      {"marchant" === name && (
        <TextField
          id="cost"
          label="Cost/kg or Tk 30"
          name="cost"
          type="number"
          // value={cost.toString()}
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500, my: 4 }}
        />
      )}
      {"air" === name && (
        <TextField
          id="cost"
          label="Cost/kg or Tk 150"
          name="cost"
          type="number"
          // value={cost.toString()}
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500, my: 4 }}
        />
      )}

      <Typography variant="body1" gutterBottom>
        Tracking Number: {tracking}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Booking Date: {bookingDate}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Expected delivery Date: {deliveryDate}
      </Typography>
    </Box>
  );
};

export default PersonToPerson;
