import CardContainer from "@/component/reusable/CardContainer";
import { Box } from "@mui/material";

import discountImage from "../../public/discountBanner.png";
import Image from "next/image";
import styles from "../../styles/discountCard.module.css";
import { Suspense } from "react";

const Discount = () => {
  return (
    <Box className="container_tm">
      <Image alt="banner" src={discountImage} className={styles.img} />
      <Suspense>
        <CardContainer dc={true} />
      </Suspense>
    </Box>
  );
};

export default Discount;
