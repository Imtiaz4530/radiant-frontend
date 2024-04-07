import { Box, Typography } from "@mui/material";

import styles from "@/styles/categories.module.css";
import CategoryGrid from "./CategoryGrid";

const Category = () => {
  return (
    <Box className="container_tm">
      <Box>
        <Typography variant="h4" className={styles.title}>
          Categories
        </Typography>
        <hr className={styles.br} />
      </Box>
      <CategoryGrid />
    </Box>
  );
};

export default Category;
