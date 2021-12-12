import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader type="Rings" color="#D3D3D3" height={400} />
    </div>
  );
};
