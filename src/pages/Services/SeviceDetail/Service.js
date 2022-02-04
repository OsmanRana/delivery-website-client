import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);
  const { serviceId } = useParams();
  console.log(service)
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <Container sx={{ height: "100%" }}>
      <Box sx={{ my: 16 }}>
        <h1>Single Service{serviceId}</h1>
      </Box>
    </Container>
  );
};

export default Service;
