import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useServices/useAuth";

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/officeBookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
    const procced = window.confirm("Confirm Delete");
    if (procced) {
      fetch(`http://localhost:5000/officeBookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking deleted successfully");
            window.location.reload();
          }
        });
    }
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
          minHeight: 800,
          maxHeight: 2500,
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
        {bookings?.length > 0 &&
          bookings?.map((booking) => {
            return (
              <Box key={booking._id}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body1" gutterBottom>
                    {booking.serviceName}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {booking.bookingStatus}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {booking.tracking}
                  </Typography>
                  <Button onClick={() => handleDeleteBooking(booking._id)}>
                    Delete
                  </Button>
                </Box>
              </Box>
            );
          })}
      </Paper>
    </Box>
  );
};

export default UserDashboard;
