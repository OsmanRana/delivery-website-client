import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDeleteBooking = (id) => {
    const proced = window.confirm("Confirm Delete");
    if (proced) {
      fetch(`http://localhost:5000/officeBookings/${id}`, {
        method: "DELETE",
      })
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
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Status Updated");
        }
      });
  };
  return (
    <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking Details</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow
              key={booking._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                  onClick={() => handleStatusUpdate(booking._id)}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bookings;
