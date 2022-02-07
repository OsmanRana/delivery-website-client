import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Corporate = ({ open, handleClose, handleOnBlur }) => {
  return (
    <div>
      <TextField
        id="query"
        label="Your requirements?"
        name="query"
        type="query"
        variant="outlined"
        fullWidth
        required
        onBlur={handleOnBlur}
        sx={{ maxWidth: 500, my: 4 }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#d21d24" }}
            >
              You are special! Please follow the instructions.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Please fill in the general information and your requirements form.
              One of our sales representatives will contact you soon.
            </Typography>
            <Button
              onClick={handleClose}
              fullWidth
              type="submit"
              sx={{
                my: 4,
                p: 2,
                backgroundColor: "white",
                color: "#d21d24",
                borderColor: "#d21d24",
                boxShadow: "none",

                border: 1,
                "&:hover": {
                  color: "white",
                  display: "block",
                  backgroundColor: "#d21d24",
                },
              }}
            >
              Thanks
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Corporate;
