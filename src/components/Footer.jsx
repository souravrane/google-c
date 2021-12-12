import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>@{year} Google Clone, Inc.</h1>
    </div>
  );
};
