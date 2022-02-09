import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Trackingdetails = ({ bookingInfo }) => {
  return (
    <>
      {bookingInfo?.map((info) => (
        <Box textAlign="left" key={info._id} sx={{ ml: { xs: 2 } }}>
          <Typography variant="body1" gutterBottom>
            Service Name: {info.serviceName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Service Id: {info._id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Status:{" "}
            <span style={{ color: "#d21d24", fontWeight: 'bold' }}>{info.bookingStatus}</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Name: {info.senderName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {info.senderEmail}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Mobile Phone: {info.senderMobile}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Trackingdetails;
