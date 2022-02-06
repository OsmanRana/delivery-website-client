import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useServices/useAuth";

const UserDashboard = () => {
  const [bookings, setBookings] = useState();
  const { user } = useAuth();
  console.log(bookings);
  useEffect(() => {
    fetch("https://infinite-headland-54248.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

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
        {bookings?.map((booking) => {
          return (
            <Box key={booking._id}>
              {booking.senderEmail === user?.email && (
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body1" gutterBottom>
                    {booking.serviceName}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {booking.bookingStatus}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
};

export default UserDashboard;
