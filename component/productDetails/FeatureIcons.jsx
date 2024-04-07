import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/productDetails.module.css";
import display from "@/public/Icons/display.webp";
import bluetooth from "@/public/Icons/bluetooth.webp";
import o2 from "@/public/Icons/o2.webp";
import sport from "@/public/Icons/sport.webp";
import water from "@/public/Icons/waterproof.webp";
import mic from "@/public/Icons/mic.webp";

const icons = [
  { id: 1, url: display, text: '2.1" HD DISPLAY' },
  { id: 2, url: bluetooth, text: "BLUETOOTH CALLING" },
  { id: 4, url: sport, text: "SPO2 MONITORING" },
  { id: 3, url: o2, text: "100+ SPORTS MODE" },
  { id: 5, url: water, text: "IP67 WATER RESISTANT" },
  { id: 6, url: mic, text: "VOICE ASSISTANT" },
];

const FeatureIcons = () => {
  return (
    <Box className={styles.featureIcon_container}>
      {icons.map((item) => (
        <Box key={item.id} className={styles.featureIcon_holder}>
          <Image src={item.url} alt="Feature_Icon" />
          <Typography
            variant="body1"
            className={styles.featureIcon_featureText}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FeatureIcons;
