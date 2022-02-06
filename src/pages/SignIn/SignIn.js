import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useServices/useAuth";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const [loginData, setLoginData] = useState({});
  const { signInEmailAndPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const hanldeOnSubmit = (e) => {
    signInEmailAndPassword(
      loginData.email,
      loginData.password,
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
          m: { xs: 0, md: 16 },
          width: { xs: "100%", md: 800 },
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
        <form onSubmit={hanldeOnSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            required
            onBlur={handleOnBlur}
            sx={{ maxWidth: 500 }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
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
              Log in
            </Button>
          </Box>
        </form>
        <Typography variant="caption" display="block" gutterBottom>
          If you are not sign up yet <Link to="/signup">Sign Up</Link> now
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;
