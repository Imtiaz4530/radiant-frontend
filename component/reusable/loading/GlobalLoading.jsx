import React from "react";
import { FallingLines } from "react-loader-spinner";

const GlobalLoading = ({ isLoading }) => {
  return (
    <FallingLines
      color="#4fa94d"
      width="200"
      visible={isLoading}
      ariaLabel="falling-circles-loading"
    />
  );
};

export default GlobalLoading;
