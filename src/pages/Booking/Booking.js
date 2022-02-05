import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useSingleService from "../../hooks/useSingleService";

const Booking = () => {
  const { service } = useSingleService();
  const { _id, name, description, image, slogan } = service;
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
        fullWidth
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
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
            sx={{ fontSize: { xs: 36 }, my: 4 }}
          >
            {name}
          </Typography>
          <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
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
          </Link>
        </Paper>
      </Box>
    </Container>
  );
};

export default Booking;
