import { Box, Typography } from "@mui/material";

import ProtectedRoute from "@/component/protectRoute/ProtectedRoute";
import ProfileContent from "@/component/profile/ProfileContent";

const Profile = () => {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
};

export default Profile;
