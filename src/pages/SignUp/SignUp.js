import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          m: 1,
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
        <img src="./logo.png" alt="logo" width="100px" />
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          fontWeight="bold"
          sx={{ fontSize: { xs: 36, sm: 72 } }}
        >
          Sign Up
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 500, my: 4 }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 500 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 500, my: 4 }}
        />
        <Button
          //   onClick={handleCloseNavMenu}
          fullWidth
          sx={{
            m: 2,
            p: 2,
            color: "white",
            display: "block",
            backgroundColor: "red",
            maxWidth: 180,
            border: 1,
            "&:hover": {
              backgroundColor: "white",
              color: "red",
              borderColor: "red",
              boxShadow: "none",
            },
          }}
        >
          Sign up
        </Button>
        <Typography variant="caption" display="block" gutterBottom>
          Already have an account? Sign In now
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
