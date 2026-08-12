import React from "react";
const loading = "/loading.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img className="w-150 flex" src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
