import { Container } from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/system";
import PersonToPerson from "./PersonToPerson";
import Corporate from "./Corporate";

const ServiceOption = ({ handleOnBlur }) => {
  const [bookingName, setbookingName] = useState("select");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newBooking) => {
    setbookingName(newBooking);
  };
  return (
    <Container sx={{ height: "100%", mt: 4 }}>
      <Box>
        <ToggleButtonGroup
          sx={{
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "column", md: "block" },
            border: { xs: 1, md: 0 },
          }}
          color="primary"
          value={bookingName}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="p2p"
          >
            P2P
          </ToggleButton>
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="marchant"
          >
            Marchant
          </ToggleButton>
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="air"
          >
            Air Parcel
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <ToggleButtonGroup
          sx={{
            my: 4,
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "column", md: "block" },
            border: { xs: 1, md: 0 },
          }}
          color="primary"
          value={bookingName}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="corporate"
            onClick={handleOpen}
          >
            Corporate
          </ToggleButton>
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="line"
            onClick={handleOpen}
          >
            Line Haul
          </ToggleButton>
          <ToggleButton
            sx={{ fontWeight: "bold", color: "#d21d24" }}
            value="warehouse"
            onClick={handleOpen}
          >
            Warehouse
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {bookingName === "p2p" && (
        <PersonToPerson
          name={bookingName}
          handleOnBlur={handleOnBlur}
        ></PersonToPerson>
      )}
      {bookingName === "marchant" && (
        <PersonToPerson
          name={bookingName}
          handleOnBlur={handleOnBlur}
        ></PersonToPerson>
      )}
      {bookingName === "air" && (
        <PersonToPerson
          name={bookingName}
          handleOnBlur={handleOnBlur}
        ></PersonToPerson>
      )}
      {bookingName === "corporate" && (
        <Corporate
          open={open}
          handleClose={handleClose}
          handleOnBlur={handleOnBlur}
        />
      )}
      {bookingName === "line" && (
        <Corporate
          open={open}
          handleClose={handleClose}
          handleOnBlur={handleOnBlur}
        />
      )}
      {bookingName === "warehouse" && (
        <Corporate
          open={open}
          handleClose={handleClose}
          handleOnBlur={handleOnBlur}
        />
      )}
    </Container>
  );
};

export default ServiceOption;
