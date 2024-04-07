import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Input from "../reusable/Form/Input";
import styles from "@/styles/profile.module.css";
import SimpleButton from "../reusable/Button";
import { createProfile } from "@/utils/fetchProfile";

const ProfileForm = ({ open, handleClose, userId }) => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const handleSub = async (data) => {
    try {
      await createProfile(
        data.name,
        parseInt(data.phone),
        data.address,
        userId
      );
      window.location.reload();
      reset();
      setError("");
    } catch (e) {
      setError(e?.response?.data?.error?.message);
      console.log(e?.response?.data?.error?.message);
    }
  };

  if (error) {
    return <h6>{error}</h6>;
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(handleSub),
      }}
    >
      <Box className={styles.dialog}>
        <DialogTitle textAlign={"center"}>Create Your Profile</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <Input type="text" label="name" register={register} />
          {errors?.name && (
            <Alert
              severity="error"
              onClose={() => {
                clearErrors("name");
              }}
              className={styles.error}
            >
              {errors?.name?.message}
            </Alert>
          )}

          <Input type="number" label="phone" register={register} />
          {errors?.phone && (
            <Alert
              severity="error"
              onClose={() => {
                clearErrors("phone");
              }}
              className={styles.error}
            >
              {errors?.phone?.message}
            </Alert>
          )}

          <Input type="text" label="address" register={register} />
          {errors?.address && (
            <Alert
              severity="error"
              onClose={() => {
                clearErrors("address");
              }}
              className={styles.error}
            >
              {errors?.address?.message}
            </Alert>
          )}
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <SimpleButton
            type={"submit"}
            variant={"contained"}
            value={"CREATE"}
            className={styles.createBTN}
            onClick={handleClose}
          />
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ProfileForm;
