import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [addEmail, setEmail] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...addEmail };
    newService[field] = value;
    setEmail(newService);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="email"
          label="Email"
          name="email"
          type="email"
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
            mb: 2,
          }}
        >
          <Button
            fullWidth
            type="submit"
            sx={{
              m: { xs: 0, md: 2 },
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
            Add
          </Button>
        </Box>
      </form>
    </>
  );
};

export default MakeAdmin;
