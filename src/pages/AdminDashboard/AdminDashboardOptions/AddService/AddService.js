import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddServices = () => {
  const [addService, setAddService] = useState({});
  console.log(addService);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...addService };
    newService[field] = value;
    setAddService(newService);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // fetch(`https://infinite-headland-54248.herokuapp.com/services`, {
    //   method: "POST",
    //   heards: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(addService),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="name"
          label="Name"
          name="name"
          type="name"
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500, my: 4 }}
        />
        <TextField
          id="slogan"
          label="Slogan"
          name="slogan"
          type="slogan"
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500 }}
        />
        <TextField
          id="description"
          label="Description"
          name="description"
          type="description"
          variant="outlined"
          fullWidth
          required
          onBlur={handleOnBlur}
          sx={{ maxWidth: 500, my: 4 }}
        />
        <TextField
          id="image"
          label="Image URL"
          name="image"
          type="text"
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

export default AddServices;
