import React from "react";

const CheckIcon = ({ color }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8926 6L7.97652 14.916L3.69135 10.6308L3 11.3222L7.97652 16.2987L17.5839 6.69135L16.8926 6Z"
        fill={color || "black"}
      />
      <path
        d="M10.5 0C4.71023 0 0 4.71023 0 10.5C0 16.2898 4.71023 21 10.5 21C16.2898 21 21 16.2898 21 10.5C21 4.71023 16.2898 0 10.5 0ZM10.5 20.16C5.1733 20.16 0.839986 15.8267 0.839986 10.5C0.839986 5.17326 5.1733 0.839986 10.5 0.839986C15.8267 0.839986 20.16 5.1733 20.16 10.5C20.16 15.8267 15.8267 20.16 10.5 20.16Z"
        fill={color || "black"}
      />
    </svg>
  );
};

export default CheckIcon;
