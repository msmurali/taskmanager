import React from "react";

const AddIcon = ({ color }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.5" cy="10.5" r="10" stroke={color || "black"} />
      <line
        x1="10.5"
        y1="5.5"
        x2="10.5"
        y2="15.5"
        stroke={color || "black"}
        strokeLinecap="round"
      />
      <line
        x1="5.5"
        y1="10.5"
        x2="15.5"
        y2="10.5"
        stroke={color || "black"}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddIcon;
