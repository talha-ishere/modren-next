import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { validateLoginForm } from "./validation"; // Import validation function

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [loginValues, setLoginValues] = useState({
    email: "", // ✅ Changed from username to email
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleBlur = (field: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validateLoginForm(loginValues, field), // Validate only the specific field
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newValues = { ...loginValues, [id]: value };
    setLoginValues(newValues);
    setErrors(validateLoginForm(newValues)); // Validate on change
  };

  // Ensure form is valid before submission
  const isFormValid =
    Object.values(errors).every((err) => err === undefined) &&
    Object.values(loginValues).every((val) => val !== "");
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Username or Email
          </Typography>
          {/* Username or Email input field */}
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            value={loginValues.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            error={!!errors.email}
            helperText={errors.email || " "} // Keeps space reserved
          />
        </Box>
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
          <CustomTextField
            id="password"
            type="password"
            variant="outlined"
            fullWidth
            value={loginValues.password}
            onChange={handleChange}
            onBlur={() => handleBlur("password")}
            error={!!errors.password}
            helperText={errors.password || " "} // Keeps space reserved
          />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/"
          type="submit"
        >
          Sign In
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;
