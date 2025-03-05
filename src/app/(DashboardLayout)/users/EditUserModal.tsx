import React from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import CustomTextField from "../components/forms/theme-elements/CustomTextField";
import { useTheme } from "@mui/material/styles";

interface MyModalProps {
  open: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
        }}
      >
        <Typography variant="h6" component="h2">
          Edit User Details
        </Typography>
        <Stack>
          {/* Username box /////////////////////// */}
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"
            >
              Username
            </Typography>
            {/* Username input field */}
            <CustomTextField id="Username" variant="outlined" fullWidth />
          </Box>
          {/* Email box /////////////////////// */}

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
            >
              Eamil
            </Typography>
            {/* Email input field */}
            <CustomTextField id="email" variant="outlined" fullWidth />
          </Box>
          {/* Password box /////////////////////// */}

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            {/* Password input field */}
            <CustomTextField id="password" variant="outlined" fullWidth />
          </Box>
          {/* Api Provider box /////////////////////// */}

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="apiProvider"
              mb="5px"
            >
              Api Provider
            </Typography>
            {/*api Provider input field */}
            <CustomTextField id="apiProvider" variant="outlined" fullWidth />
          </Box>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 2 }}>
          <Button variant="contained" onClick={onClose}>
            OK
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: theme.palette.error.main,
              "&:hover": { backgroundColor: theme.palette.error.dark },
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;
