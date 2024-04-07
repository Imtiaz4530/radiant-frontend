import { imageLoader } from "@/utils/imageLoader";
import { Box } from "@mui/material";
import Image from "next/image";

const DescriptionImaga = ({ descriptionImages }) => {
  return (
    <Box>
      {descriptionImages?.map((item) => (
        <Image
          key={item?.descriptionImageID}
          src={item?.descriptionImageURL}
          alt="Description Image"
          loader={imageLoader}
          width={400}
          height={150}
          layout="responsive"
        />
      ))}
    </Box>
  );
};

export default DescriptionImaga;
