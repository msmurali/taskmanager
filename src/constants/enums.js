import {
  LearningImg,
  TravelImg,
  WorkImg,
  UrgentImg,
  ShoppingImg,
  EntertainmentImg,
  GeneralImg,
} from "asset/img/index";
import {
  GeneralIcon,
  EntertainmentIcon,
  LearningIcon,
  ShoppingIcon,
  TravelIcon,
  UrgentIcon,
  WorkIcon,
} from "components/icon.components";

export const Tag = Object.freeze({
  GENERAL: "general",
  ENTERTAINMENT: "entertainment",
  LEARNING: "learning",
  SHOPPING: "shopping",
  TRAVEL: "travel",
  URGENT: "urgent",
  WORK: "work",
});

export const TagIcon = Object.freeze({
  GENERAL: GeneralIcon,
  ENTERTAINMENT: EntertainmentIcon,
  LEARNING: LearningIcon,
  SHOPPING: ShoppingIcon,
  TRAVEL: TravelIcon,
  URGENT: UrgentIcon,
  WORK: WorkIcon,
});

export const TagColorDark = Object.freeze({
  GENERAL: "green-700",
  ENTERTAINMENT: "sky-700",
  LEARNING: "yellow-700",
  SHOPPING: "purple-700",
  TRAVEL: "pink-700",
  URGENT: "red-700",
  WORK: "blue-700",
});

export const TagColorLight = Object.freeze({
  GENERAL: "green-200",
  ENTERTAINMENT: "sky-200",
  LEARNING: "yellow-200",
  SHOPPING: "purple-200",
  TRAVEL: "pink-200",
  URGENT: "red-200",
  WORK: "blue-200",
});

export const TagImg = Object.freeze({
  GENERAL: GeneralImg,
  ENTERTAINMENT: EntertainmentImg,
  LEARNING: LearningImg,
  SHOPPING: ShoppingImg,
  TRAVEL: TravelImg,
  URGENT: UrgentImg,
  WORK: WorkImg,
});
