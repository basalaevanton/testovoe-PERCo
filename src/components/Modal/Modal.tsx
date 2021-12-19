import React from "react";
import { ModalProps } from "./Modal.props";
import { Box, Modal, TextField } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 1000,
  borderRadius: "15px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalComponent = ({
  modal,
  handleClose,
  setLike,
  ...props
}: ModalProps): JSX.Element => {
  return (
    <>
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={modal.download_url}
            alt=""
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: "15px",
            }}
          />

          <Box
            component="form"
            sx={{
              display: "flex",
              p: 1,

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              fullWidth
              label="Comment"
              variant="outlined"
              multiline
              rows={2}
              sx={{ paddingRight: "20px" }}
            />

            {modal.like ? (
              <FavoriteIcon
                sx={{ fontSize: 40, color: "red", cursor: "pointer" }}
                onClick={setLike}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{ fontSize: 40, color: "red", cursor: "pointer" }}
                onClick={setLike}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
