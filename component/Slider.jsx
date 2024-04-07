"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Box } from "@mui/material";

import img1 from "../public/arctic.webp";
import img2 from "../public/beatbox1.jpg";
import img3 from "../public/tussle.webp";
import styles from "../styles/slider.module.css";

const slideImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

const Slider = () => {
  return (
    <Box className="container_tm">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slideImg.map((item) => (
          <Box key={item.id} className={styles.imageContainer}>
            <SwiperSlide key={item.id}>
              <Image
                src={item.img}
                alt={"SLIDE IMAGE"}
                className={styles.img}
                placeholder="blur"
              />
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
