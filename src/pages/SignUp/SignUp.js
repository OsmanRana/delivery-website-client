import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Alert, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useServices/useAuth";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const { signUpNewUserWithEmailandPassword, authError, user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };

  const handleOnSubmit = (e) => {
    signUpNewUserWithEmailandPassword(
      signUpData.email,
      signUpData.password,
      signUpData.name,
      location,
      history
    );
    e.preventDefault();
  };
  return (
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
        {user?.email && <Alert>Signed Up successsfully</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
        <form onSubmit={handleOnSubmit}>
          <TextField
            id="name"
            label="Name"
            name="name"
            type="name"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500, my: 4 }}
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500 }}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500, my: 4 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              fullWidth
              type="submit"
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
              Sign up
            </Button>
          </Box>
        </form>
        <Typography variant="caption" display="block" gutterBottom>
          Already have an account? <Link to="/signin">Sign In</Link> now
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
