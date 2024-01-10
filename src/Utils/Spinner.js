import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-8 h-8 text-blue-600 animate-spin">Loading .......</div>
    </div>
  );
};

export default Spinner;
