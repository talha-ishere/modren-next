import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { Stack } from "@mui/system";
import { useState } from "react";

import { validateForm } from "./validation";

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  ////// Addition For Error Handling
  const [registerValues, setRegisterValues] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const handleBlur = (field: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validateForm(registerValues, field), // Validate only the specific field
    }));
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newValues = { ...registerValues, [id]: value };
    setRegisterValues(newValues);
    setErrors(validateForm(newValues)); // Validate on change
  };

  // Check if form is valid
  const isFormValid =
    Object.values(errors).every((err) => err === "") &&
    Object.values(registerValues).every((val) => val !== "");

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box>
        <Stack mb={3}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="name"
            mb="5px"
          >
            Name
          </Typography>
          {/* Name input Field */}
          <CustomTextField
            id="name"
            variant="outlined"
            fullWidth
            value={registerValues.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")} // Updated onBlur
            error={!!errors.name}
            helperText={
              <Typography
                component="span"
                variant="body2"
                sx={{ minHeight: "20px", display: "block" }} // Ensures fixed height
              >
                {errors.name || " "}
              </Typography>
            }
          />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="email"
            mb="5px"
          >
            Email Address
          </Typography>
          {/* Email input Field */}
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            value={registerValues.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")} // Updated onBlur
            error={!!errors.email}
            helperText={
              <Typography
                component="span"
                variant="body2"
                sx={{ minHeight: "20px", display: "block" }} // Ensures fixed height
              >
                {errors.email || " "}
              </Typography>
            }
          />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          {/* Password input Field */}
          <CustomTextField
            id="password"
            type="password"
            variant="outlined"
            fullWidth
            value={registerValues.password}
            onChange={handleChange}
            onBlur={() => handleBlur("password")} // Updated onBlur
            error={!!errors.password}
            helperText={
              <Typography
                component="span"
                variant="body2"
                sx={{ minHeight: "20px", display: "block" }} // Ensures fixed height
              >
                {errors.password || " "}
              </Typography>
            }
          />
        </Stack>
        {/* Sign Up Button */}
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/authentication/login"
          disabled={!isFormValid}
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;
