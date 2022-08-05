import {
  LearningImg,
  TravelImg,
  WorkImg,
  UrgentImg,
  ShoppingImg,
  EntertainmentImg,
  GeneralImg,
} from "asset/img/index";

export const Tag = Object.freeze({
  GENERAL: "general",
  ENTERTAINMENT: "entertainment",
  LEARNING: "learning",
  SHOPPING: "shopping",
  TRAVEL: "travel",
  URGENT: "urgent",
  WORK: "work",
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
