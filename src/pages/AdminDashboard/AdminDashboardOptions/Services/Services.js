import React from "react";
import useServices from "../../../../hooks/useServices/useServices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const Services = () => {
  const { services } = useServices();
  console.log(services);
  return (
    <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow
              key={service._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {service.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  sx={{
                    px: 2,
                    color: "#d21d24",
                    display: "block",
                    border: 1,
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Services;
