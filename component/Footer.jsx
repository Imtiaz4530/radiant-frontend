import { Box } from "@mui/system";
import styles from "../styles/footer.module.css";
import { Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.contact}>
        <Typography fontSize="18px" fontWeight="bold" marginBottom={3}>
          Contact With Us
        </Typography>
        <Box className={styles.icons}>
          <Instagram />
          <Facebook />
          <YouTube />
          <Twitter />
          <Pinterest />
          <LinkedIn />
        </Box>
        <Typography fontSize="18px" fontWeight="bold" marginTop={2}>
          Contact Us
        </Typography>
        <Typography fontSize="18px" marginTop={2}>
          Email: info@gmail.com
        </Typography>
        <Typography fontSize="18px" marginTop={2}>
          Phone: 01856-489123
        </Typography>
      </Box>
      <Box className={styles.instore}>
        <Typography fontSize="18px" fontWeight="bold" marginBottom={3}>
          In Store
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Shop
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          FAQs
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Exclusive Offers
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Track Your Order
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Affiliate Programme
        </Typography>
      </Box>
      <Box className={styles.radiant}>
        <Typography fontSize="18px" fontWeight="bold" marginBottom={3}>
          Radian
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          About Us
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Contact Us
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Blog
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          News
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Careers
        </Typography>
      </Box>
      <Box className={styles.support}>
        <Typography fontSize="18px" fontWeight="bold" marginBottom={3}>
          Support
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          After Sale Service
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Privacy Policy
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Terms of Service
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Shipping Policy
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Warranty Registration
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Register Complaint
        </Typography>
        <Typography fontSize="18px" marginTop={2} className={styles.cursor}>
          Corporate Enquiry
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
