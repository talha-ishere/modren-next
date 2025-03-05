export const validateForm = (
  values: { name: string; email: string; password: string },
  field?: string
) => {
  const errors: { name?: string; email?: string; password?: string } = {};

  if (!field || field === "name") {
    if (values.name.trim() === "") {
      errors.name = "Name cannot be empty";
    }
  }

  if (!field || field === "email") {
    if (values.email.trim() === "") {
      errors.email = "Email cannot be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
  }

  if (!field || field === "password") {
    if (values.password.trim() === "") {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  return errors;
};
