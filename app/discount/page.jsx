import CardContainer from "@/component/reusable/CardContainer";
import { Box, Typography } from "@mui/material";

import discountImage from "../../public/discountBanner.png";
import Image from "next/image";
import styles from "../../styles/discountCard.module.css";

const Discount = () => {
  return (
    <Box className="container_tm">
      <Image alt="banner" src={discountImage} className={styles.img} />
      <CardContainer dc={true} />
    </Box>
  );
};

export default Discount;
