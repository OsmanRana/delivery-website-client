import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
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
          Please Confirm Payment
        </Typography>
        <Typography variant="body1" gutterBottom>
          Payment method will be added soon
        </Typography>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Button
            onClick={() => alert("Thank you")}
            sx={{
              px: 2,
              color: "#d21d24",
              display: "block",
              border: 1,
            }}
          >
            Payment
          </Button>
        </Link>
      </Paper>
    </Box>
  );
};

export default Payment;
