"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import styles from "@/styles/greeting.module.css";
import SimpleButton from "@/component/reusable/Button";
import { useGetUserFromStorage } from "@/hooks/useProfile";
import GlobalLoading from "@/component/reusable/loading/GlobalLoading";
import ProtectedRoute from "@/component/protectRoute/ProtectedRoute";

const Greeting = () => {
  const router = useRouter();
  const { loading, user } = useGetUserFromStorage();

  if (loading) {
    return <GlobalLoading isLoading={loading} />;
  }

  return (
    <ProtectedRoute>
      <Box className={styles.greetingContainer}>
        <Typography variant="h4" className={styles.name}>
          Hey, {user?.username}
        </Typography>
        <Typography variant="h3" className={styles.greetingText}>
          Your order is completed.❤
        </Typography>
        <Box className={styles.buttonBox}>
          <SimpleButton
            value={"Go Back To Home"}
            variant={"contained"}
            className={styles.goback}
            onClick={() => {
              router.push("/");
            }}
          />
        </Box>
      </Box>
    </ProtectedRoute>
  );
};

export default Greeting;
