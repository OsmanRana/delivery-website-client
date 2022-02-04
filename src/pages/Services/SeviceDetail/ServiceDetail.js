import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./ServicesDetails.css";

const ServiceDetail = ({ service }) => {
  const { _id, name, description, image } = service;
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ display: { xs: "flex", justifyContent: "center" } }}
    >
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ p: 4 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="left"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {description.slice(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            // onClick={handleCloseNavMenu}
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
                boxShadow: "none",
              },
            }}
          >
            Book Now
          </Button>
          <Link className="text-decoration" to={`/services/${_id}`}>
            <Button
              sx={{
                m: 2,
                px: 2,
                color: "#d21d24",
                display: "block",
                border: 1,
              }}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ServiceDetail;
