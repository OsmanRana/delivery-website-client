import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);
  const { name, description, image, slogan } = service;
  const { serviceId } = useParams();
  console.log(service);
  useEffect(() => {
    fetch(`https://obscure-hamlet-47725.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <Container sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            m: 16,
            width: 800,
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
          <img src={image} alt="Delivery" width="100%" />
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: 18 } }}
          >
            {slogan}
          </Typography>

          <Button
            fullWidth
            sx={{
              m: 2,
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
            Book Now
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Service;
