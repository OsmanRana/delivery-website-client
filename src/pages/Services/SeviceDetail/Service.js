import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://infinite-headland-54248.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
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
            sx={{ fontSize: { xs: 18 }, mb: 2 }}
          >
            {slogan}
          </Typography>
          <img src={image} alt="Delivery" width="100%" height="400px" />
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: 36 }, my: 4 }}
          >
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom textAlign="left">
            {description}
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

export default Service;
