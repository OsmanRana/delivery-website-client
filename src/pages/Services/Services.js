import { Container, Grid, Typography } from "@mui/material";
import useServices from "../../hooks/useServices/useServices";
import ServiceDetail from "./SeviceDetail/ServiceDetail";
import CircularProgress from "@mui/material/CircularProgress";

const Services = () => {
  const { services } = useServices();

  return (
    <Container sx={{ flexGrow: 1, mb: 16 }}>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        textAlign="left"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 36 },
          my: 16,
          pl: { xs: "none", md: 4 },
          borderLeft: { xs: "none", md: 5 },
        }}
      >
        We provide services that <br />
        you can <span className="special">rely</span> on
      </Typography>
      {services.length === 0 ? (
        <CircularProgress sx={{ color: "#d21d24" }} />
      ) : (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {services.map((service) => (
            <ServiceDetail key={service._id} service={service}></ServiceDetail>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Services;
