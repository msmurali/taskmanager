import React from "react";

const TasksIcon = ({ color }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.48125 1.75C7.48125 2.07217 7.20213 2.33333 6.85781 2.33333C6.5135 2.33333 6.23438 2.07217 6.23438 1.75C6.23438 0.783502 7.07174 0 8.10469 0H9.975H11.8453C12.8783 0 13.7156 0.783502 13.7156 1.75C13.7156 2.07217 13.4365 2.33333 13.0922 2.33333C12.7479 2.33333 12.4688 2.07217 12.4688 1.75C12.4688 1.42783 12.1896 1.16667 11.8453 1.16667H8.10469C7.76037 1.16667 7.48125 1.42783 7.48125 1.75ZM3.11719 1.16667C3.4615 1.16667 3.74063 1.42783 3.74063 1.75C3.74063 2.07217 3.4615 2.33333 3.11719 2.33333C2.08424 2.33333 1.24688 3.11683 1.24688 4.08333V18.0833C1.24688 19.0498 2.08424 19.8333 3.11719 19.8333H16.8328C17.8658 19.8333 18.7031 19.0498 18.7031 18.0833V4.08333C18.7031 3.11683 17.8658 2.33333 16.8328 2.33333C16.4885 2.33333 16.2094 2.07217 16.2094 1.75C16.2094 1.42783 16.4885 1.16667 16.8328 1.16667C18.5544 1.16667 19.95 2.4725 19.95 4.08333V18.0833C19.95 19.6942 18.5544 21 16.8328 21H3.11719C1.39561 21 0 19.6942 0 18.0833V4.08333C0 2.4725 1.39561 1.16667 3.11719 1.16667Z"
        fill={color || "black"}
      />
      <path
        d="M13.4391 7.14645C13.6246 6.95118 13.9254 6.95118 14.1109 7.14645C14.2964 7.34171 14.2964 7.65829 14.1109 7.85355L9.36087 12.8536C9.17537 13.0488 8.87462 13.0488 8.68912 12.8536L6.78912 10.8536C6.60362 10.6583 6.60362 10.3417 6.78912 10.1464C6.97462 9.95118 7.27537 9.95118 7.46087 10.1464L9.02499 11.7929L13.4391 7.14645Z"
        fill={color || "black"}
      />
      <path
        d="M13.4391 7.14645C13.6246 6.95118 13.9254 6.95118 14.1109 7.14645C14.2964 7.34171 14.2964 7.65829 14.1109 7.85355L9.36087 12.8536C9.17537 13.0488 8.87462 13.0488 8.68912 12.8536L6.78912 10.8536C6.60362 10.6583 6.60362 10.3417 6.78912 10.1464C6.97462 9.95118 7.27537 9.95118 7.46087 10.1464L9.02499 11.7929L13.4391 7.14645Z"
        stroke={color || "black"}
      />
    </svg>
  );
};

export default TasksIcon;
