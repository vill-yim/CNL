import { create } from "zustand";

export const portfolioStore = create((set) => ({
  design: false,
  social: false,
  motion: false,
  d3: false,
  showPortfolio: (portfolio) =>
    set({
      design: portfolio === "design",
      social: portfolio === "social",
      motion: portfolio === "motion",
      d3: portfolio === "d3",
    }),
}));
