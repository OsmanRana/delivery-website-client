import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../hooks/useServices/useAuth";
import UserBookings from "./UserBookings/UserBookings";

const UserDashboard = () => {
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
          Welcome {user?.displayName}
        </Typography>
        <UserBookings></UserBookings>
      </Paper>
    </Box>
  );
};

export default UserDashboard;
