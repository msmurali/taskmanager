import React from "react";

const EditIcon = ({ color }) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g>
        <path
          stroke={color || "black"}
          d="M1,64a1,1,0,0,1-1-1.11L1.77,47a1,1,0,0,1,.29-.59L38.43,10l1.41,1.41L3.72,47.55,2.1,61.9l14.35-1.62L52.57,24.15,54,25.57,17.61,61.94a1,1,0,0,1-.59.29L1.08,64Z"
        />
        <path
          stroke={color || "black"}
          d="M55.76,23.79l-1.41-1.41,7.28-7.28L48.89,2.37,41.62,9.65,40.2,8.24l8-8a1,1,0,0,1,1.41,0L63.74,14.39a1,1,0,0,1,0,1.41Z"
        />
        <rect
          height="2"
          stroke={color || "black"}
          transform="translate(-16.22 30.77) rotate(-45)"
          width="48.28"
          x="4.89"
          y="33.96"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
