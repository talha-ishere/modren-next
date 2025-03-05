import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface MyModalProps {
  open: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Modal Title
        </Typography>
        <Typography sx={{ mt: 2 }}>This is a modal content.</Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default MyModal;
