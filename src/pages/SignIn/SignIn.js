import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const SignIn = () => {
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
          Sign In
        </Typography>
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
          Log in
        </Button>
        <Typography variant="caption" display="block" gutterBottom>
          If you are not sign up yet Sign Up now
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
