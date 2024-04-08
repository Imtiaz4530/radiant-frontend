"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import styles from "@/styles/discountCard.module.css";
import earbud from "@/public/catagory/c1.webp";
import brush from "@/public/catagory/c2.webp";
import headphone from "@/public/catagory/c3.webp";
import smartwatch from "@/public/catagory/c4.webp";

const ProductBanner = () => {
  const query = useSearchParams();
  const cat = query.get("category");
  return (
    <>
      <Image
        alt="banner"
        src={
          cat === "EAR BUDS"
            ? earbud
            : cat === "ELECTRIC TOOTHBRUSH"
            ? brush
            : cat === "HEADPHONES"
            ? headphone
            : smartwatch
        }
        className={styles.img}
      />
    </>
  );
};

export default ProductBanner;
