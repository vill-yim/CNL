import { create } from "zustand";

export const portfolioStore = create((set) => ({
  design: false,
  videos: false,
  motion: false,
  d3: false,
  showPortfolio: (portfolio) =>
    set({
      design: portfolio === "design",
      videos: portfolio === "videos",
      motion: portfolio === "motion",
      d3: portfolio === "d3",
    }),
}));
