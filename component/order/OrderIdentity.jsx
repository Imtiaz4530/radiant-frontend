"use client";
import { Box, Typography } from "@mui/material";
import { Email, Person, Phone } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";

import styles from "@/styles/order.module.css";
import GlobalLoading from "../reusable/loading/GlobalLoading";
import ProfileForm from "../profile/ProfileModal";
import SimpleButton from "../reusable/Button";

const OrderIdentity = ({ setProfileID, loading, profile, user }) => {
  const [open, setOpen] = useState(false);

  const name = profile?.profileData?.name || "";
  const address = profile?.profileData?.address || "";
  const phone = profile?.profileData?.phone || "";
  const email =
    profile?.profileData?.users_permissions_user?.data?.attributes?.email || "";

  useEffect(() => {
    setProfileID(profile.profileId);
  }, [profile]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    <GlobalLoading isLoading={loading} />;
  }
  return (
    <Box
      className={`${styles.order_identity} ${!name ? styles.no_identity : ""}`}
    >
      {name || email ? (
        <>
          <Box className={styles.order_identityBox}>
            <Box className={styles.order_identityBoxIcon}>
              <Person className={styles.order_identityIcon} fontSize="large" />
            </Box>
            <Typography variant="h6" className={styles.order_identityName}>
              {name}
            </Typography>
          </Box>
          <Box className={styles.order_identityBox}>
            <Box className={styles.order_identityBoxIcon}>
              <Email className={styles.order_identityIcon} fontSize="large" />
            </Box>
            <Typography variant="h6" className={styles.order_identityName}>
              {email}
            </Typography>
          </Box>
          <Box className={styles.order_identityBox}>
            <Box className={styles.order_identityBoxIcon}>
              <Phone className={styles.order_identityIcon} fontSize="large" />
            </Box>
            <Typography variant="h6" className={styles.order_identityName}>
              {phone}
            </Typography>
          </Box>
          <Box className={styles.order_identityBox}>
            <Box className={styles.order_identityBoxIcon}>
              <LocationOnIcon
                className={styles.order_identityIcon}
                fontSize="large"
              />
            </Box>
            <Typography variant="h6" className={styles.order_identityName}>
              {address.toLowerCase()}
            </Typography>
          </Box>
        </>
      ) : (
        <Box className={styles.noprofile}>
          <Typography
            variant="h5"
            className={styles.textt}
            textAlign={"center"}
          >
            For make an order, you should have a profile.
          </Typography>
          <SimpleButton
            value={"Create Full Profile"}
            variant={"contained"}
            className={styles.createBTN}
            onClick={handleClickOpen}
          />
          <ProfileForm
            open={open}
            handleClose={handleClose}
            userId={user?.id}
          />
        </Box>
      )}
    </Box>
  );
};

export default OrderIdentity;
