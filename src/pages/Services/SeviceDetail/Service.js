import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <Container sx={{ height: "100%" }}>
      <Box sx={{my: 16}}>
        <h1>Single Service{serviceId}</h1>
      </Box>
    </Container>
  );
};

export default Service;
