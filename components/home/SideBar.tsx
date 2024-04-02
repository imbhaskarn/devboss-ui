import React from "react";

const SideBar = () => {
    const data = {
        categories: ['Food', 'Travel', 'Lifestyle', 'Tech'],
    }
  return (
    <div className="rounded-lg border border-indigo-200 w-full h-full">
      <div className="flex border"></div>
      <div className="flex border"></div>
    </div>
  );
};

export default SideBar;
