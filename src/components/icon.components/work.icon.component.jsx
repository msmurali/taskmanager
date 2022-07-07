import React from "react";

const WorkIcon = ({ color }) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 16.463V13.5741"
      stroke={color || "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9057 10.9235L21.8726 10.9466C19.1117 12.5867 15.4661 13.5771 11.4946 13.5771C7.52303 13.5771 3.88775 12.5867 1.12795 10.9466L1.09375 10.9235"
      stroke={color || "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12.9826C1 6.21992 3.62529 3.9653 11.5 3.9653C19.3759 3.9653 22 6.21992 22 12.9826C22 19.7454 19.3759 22 11.5 22C3.62529 22 1 19.7454 1 12.9826Z"
      stroke={color || "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.2193 4.20878V3.51624C15.2193 2.12676 14.1672 1 12.871 1H10.1295C8.8333 1 7.78113 2.12676 7.78113 3.51624V4.20878"
      stroke={color || "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WorkIcon;
