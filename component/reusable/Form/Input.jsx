"use client";
import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import styles from "@/styles/form.module.css";

const Input = ({ type, label, register, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validationRequired = {
    required: { value: true, message: `${label} this field is required!` },
  };

  if (label === "password") {
    validationRequired.minLength = {
      value: 8,
      message: `${label} must be at least 8 characters long`,
    };
  } else if (label === "username") {
    validationRequired.minLength = {
      value: 3,
      message: `${label} must be at least 3 characters long`,
    };
  } else if (label === "username") {
    validationRequired.pattern = {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    };
  }

  return (
    <TextField
      className={styles.input}
      type={type === "password" && showPassword ? "text" : type}
      label={label}
      variant="outlined"
      {...register(label, validationRequired)}
      {...props}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
