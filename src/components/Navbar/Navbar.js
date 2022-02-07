import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useServices/useAuth";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logOut } = useAuth();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logOut();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
    },
  });

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
                <Link to="/">
                  <img src="./logo.png" alt="logo" width="100px" />
                </Link>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Home</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/tracking"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Tracking</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/services"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Services</Typography>
                    </Link>
                  </MenuItem>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 2,
                      px: 2,
                      color: "#d21d24",
                      display: "block",
                      border: 1,
                    }}
                  >
                    Register
                  </Button>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Link to="/">
                  <img src="./logo.png" alt="logo" width="100px" />
                </Link>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "end" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#d21d24",
                  }}
                >
                  <Typography
                    sx={{
                      m: 3,
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link
                  to="/tracking"
                  style={{
                    textDecoration: "none",
                    color: "#d21d24",
                  }}
                >
                  <Typography
                    sx={{
                      m: 3,
                      fontWeight: "bold",
                    }}
                  >
                    Tracking
                  </Typography>
                </Link>
                <Link
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: "#d21d24",
                  }}
                >
                  <Typography
                    sx={{
                      m: 3,
                      fontWeight: "bold",
                    }}
                  >
                    Services
                  </Typography>
                </Link>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    px: 2,
                    color: "#d21d24",
                    display: "block",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "#d21d24",
                      color: "white",
                      borderColor: "#d21d24",
                    },
                  }}
                >
                  Register
                </Button>
              </Box>

              {user?.email ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/userDeshboard"
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Dashboard</Typography>
                      </MenuItem>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/signin"
                      onClick={handleCloseUserMenu}
                    >
                      <Button
                        onClick={handleLogOut}
                        sx={{
                          m: 2,
                          px: 2,
                          color: "white",
                          display: "block",
                          backgroundColor: "#d21d24",
                          border: 1,
                          "&:hover": {
                            backgroundColor: "white",
                            color: "#d21d24",
                            borderColor: "#d21d24",
                          },
                        }}
                      >
                        Logout
                      </Button>
                    </Link>
                  </Menu>
                </Box>
              ) : (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/signin"
                  onClick={handleCloseUserMenu}
                >
                  <Button
                    sx={{
                      m: 2,
                      px: 2,
                      color: "white",
                      display: "block",
                      backgroundColor: "#d21d24",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#d21d24",
                        borderColor: "#d21d24",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Container>
  );
};
export default Navbar;
