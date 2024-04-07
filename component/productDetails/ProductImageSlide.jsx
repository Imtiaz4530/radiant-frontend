"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Card } from "@mui/material";

import styles from "@/styles/productDetails.module.css";
import { imageLoader } from "@/utils/imageLoader";

const ProductImageSlider = ({ images }) => {
  images.sort((a, b) => {
    return parseInt(a.productImageID) - parseInt(b.productImageID);
  });

  return (
    <Card className={styles.imageCard}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((item) => (
          <SwiperSlide key={item.productImageID} className={styles.imageHolder}>
            <Image
              src={item.productImageURL}
              alt={"SLIDE IMAGE"}
              width={150}
              height={50}
              loader={imageLoader}
              layout="responsive"
              className={styles.slidingImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default ProductImageSlider;
