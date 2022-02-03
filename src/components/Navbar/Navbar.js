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

const pages = ["Home", "Tracking", "Services"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                <img src="./logo.png" alt="logo" width="100px" />
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 2,
                      px: 2,
                      color: "red",
                      display: "block",
                      border: 1,
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 2,
                      px: 2,
                      color: "white",
                      display: "block",
                      backgroundColor: "red",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "red",
                        borderColor: "red",
                        boxShadow: "none",
                        border: 1,
                      },
                    }}
                  >
                    Login
                  </Button>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <img src="./logo.png" alt="logo" width="100px" />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "end" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 2,
                      color: "red",
                      display: "block",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    px: 2,
                    color: "red",
                    display: "block",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "red",
                      color: "white",
                      borderColor: "red",
                    },
                  }}
                >
                  Register
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    px: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "red",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "red",
                      borderColor: "red",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>

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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Container>
  );
};
export default Navbar;
