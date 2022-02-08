import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../hooks/useServices/useAuth";
import AdminDashboardOptions from "./AdminDashboardOptions/AdminDashboardOptions";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          m: { xs: 0, md: 16 },
          p: { xs: 0, md: 4 },
          width: { xs: "100%", md: 800 },
          minHeight: 800,
          maxHeight: "100%",
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
          Welcome {user?.displayName}
        </Typography>
        <AdminDashboardOptions></AdminDashboardOptions>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
