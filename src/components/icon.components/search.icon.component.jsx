import React from "react";

const SearchIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.63391" cy="9.63391" r="8.63391" stroke={color || "black"} />
      <path
        d="M15.6256 6.85407C14.9851 5.40885 13.8506 4.23913 12.4257 3.55476C11.0007 2.8704 9.37855 2.71618 7.85017 3.11977"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="22.6808"
        y1="22.0065"
        x2="16.3683"
        y2="15.694"
        stroke={color || "black"}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
