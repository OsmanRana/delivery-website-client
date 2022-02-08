import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Bookings from "./Bookings/Bookings";
import Services from "./Services/Services";

const AdminDashboardOptions = () => {
  const [alignment, setAlignment] = useState("bookings");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container sx={{ height: "100%" }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        sx={{
          my: 4,
          display: { xs: "flex", md: "block" },
          flexDirection: { xs: "column", md: "block" },
          border: { xs: 1, md: 0 },
        }}
      >
        <ToggleButton value="bookings">Bookings</ToggleButton>
        <ToggleButton value="services">Services</ToggleButton>
        <ToggleButton value="addServices">Add Service</ToggleButton>
        <ToggleButton value="admin">Make Admin</ToggleButton>
      </ToggleButtonGroup>
      <Box>
        {alignment === "bookings" && <Bookings></Bookings>}
        {alignment === "services" && <Services></Services>}
      </Box>
    </Container>
  );
};

export default AdminDashboardOptions;
