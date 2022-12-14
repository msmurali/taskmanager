import React from "react";
import {
  EntertainmentIcon,
  GeneralIcon,
  LearningIcon,
  ShoppingIcon,
  TravelIcon,
  UrgentIcon,
  WorkIcon,
} from "components/icon.components/index";
import { Tag as tags } from "constants/enums";
import { useTheme, ThemeMode } from "contexts/theme-context";

const Badge = ({ tag }) => {
  const { theme } = useTheme();

  const getIcon = () => {
    if (tag === tags.GENERAL) {
      return <GeneralIcon color="rgb(21, 128, 61)" />;
    } else if (tag === tags.ENTERTAINMENT) {
      return <EntertainmentIcon color="rgb(3, 105, 161)" />;
    } else if (tag === tags.LEARNING) {
      return <LearningIcon color="rgb(161, 98, 7)" />;
    } else if (tag === tags.SHOPPING) {
      return <ShoppingIcon color="rgb(126, 34, 206)" />;
    } else if (tag === tags.URGENT) {
      return <UrgentIcon color="rgb(185, 28, 28)" />;
    } else if (tag === tags.TRAVEL) {
      return <TravelIcon color="rgb(190, 24, 93)" />;
    } else if (tag === tags.WORK) {
      return <WorkIcon color="rgb(29, 78, 216)" />;
    } else {
      return <GeneralIcon color="rgb(21, 128, 61)" />;
    }
  };

  const getBgColor = () => {
    if (tag === tags.GENERAL) {
      return `bg-green-200`;
    } else if (tag === tags.ENTERTAINMENT) {
      return `bg-sky-200`;
    } else if (tag === tags.LEARNING) {
      return `bg-yellow-200`;
    } else if (tag === tags.SHOPPING) {
      return `bg-purple-200`;
    } else if (tag === tags.TRAVEL) {
      return `bg-pink-200`;
    } else if (tag === tags.URGENT) {
      return `bg-red-200`;
    } else if (tag === tags.WORK) {
      return `bg-blue-200`;
    } else {
      return `bg-green-200`;
    }
  };

  return (
    <div
      className={`badge absolute -top-4 left-4 w-10 h-10 rounded-full border-2 ${
        theme === ThemeMode.LIGHT ? "border-white" : "border-gray-700"
      } ${getBgColor()} flex justify-center items-center`}
    >
      {getIcon()}
    </div>
  );
};

export default Badge;
