import { Box } from "@mui/material";
import Image from "next/image";

import Slider from "@/component/Slider";
import discountImage from "../public/discountDashboardBanner.png";
import styles from "./page.module.css";
import CardContainer from "@/component/reusable/CardContainer";
import Category from "@/component/categories/Category";
import SimpleButton from "@/component/reusable/Button";
import Link from "next/link";

const App = () => {
  return (
    <>
      <Slider />

      <Category />

      <Box className="container_tm bm discountContainer">
        <Image alt="banner" src={discountImage} className={styles.img} />

        <CardContainer dc={true} />

        <Link href={"/discount"} className="link">
          <SimpleButton
            sx={{
              width: { xl: "800px", lg: "600px", md: "400px", xs: "90%" },
              marginTop: "30px",
              color: "black",
            }}
            value={"Show More"}
            variant={"outlined"}
          />
        </Link>
      </Box>
    </>
  );
};

export default App;
