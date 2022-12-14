import React from "react";

const UrgentIcon = ({ color }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0856 1.17162C11.3144 0.942793 11.6855 0.942793 11.9144 1.17162L21.8283 11.0856C22.0572 11.3144 22.0573 11.6855 21.8283 11.9144L11.9144 21.8283C11.6856 22.0572 11.3145 22.0573 11.0856 21.8283L1.17162 11.9144C0.942793 11.6856 0.942793 11.3145 1.17162 11.0856L11.0856 1.17162Z"
        stroke={color || "black"}
        strokeWidth="0.833333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7.59356V11.5"
        stroke={color || "black"}
        strokeWidth="0.833333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 15.4162L11.5098 15.4054"
        stroke={color || "black"}
        strokeWidth="0.833333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UrgentIcon;
