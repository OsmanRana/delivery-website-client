import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useServices/useAuth";

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://infinite-headland-54248.herokuapp.com/officeBookings?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
    const procced = window.confirm("Confirm Delete");
    if (procced) {
      fetch(
        `https://infinite-headland-54248.herokuapp.com/officeBookings/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking deleted successfully");
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(remainingBookings);
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
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          fontWeight="bold"
          sx={{ fontSize: { xs: 18, sm: 36 } }}
        >
          Welcome {user?.displayName}
        </Typography>
        {bookings?.length > 0 &&
          bookings?.map((booking) => {
            return (
              <TableContainer
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Booking Details</TableCell>
                      <TableCell align="left">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      key={booking._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <span style={{ wordBreak: "break-all" }}>
                          Email: {booking.senderEmail}
                        </span>
                        <br />
                        Tracking: {booking.tracking}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button
                          onClick={() => handleDeleteBooking(booking._id)}
                          sx={{
                            px: 2,
                            color: "#d21d24",
                            display: "block",
                            border: 1,
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          sx={{
                            mt: 2,
                            px: 2,
                            color: "#d21d24",
                            display: "block",
                            border: 1,
                          }}
                        >
                          {booking.bookingStatus}
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            );
          })}
      </Paper>
    </Box>
  );
};

export default UserDashboard;
