import { create } from "zustand";

export const serviceStore = create((set) => ({
  services: false,
  setServices: () => 
    set((state) => ({ services: !state.services })),
}));


export const allServiceStore = create((set) => ({
  youtube: false,
  studio: false,
  uxui: false,
  organic: false,
  web: false,
  allServices: (service) =>
    set({
      youtube: service === "youtube",
      studio: service === "studio",
      uxui: service === "uxui",
      organic: service === "organic",
      web: service === "web",
    }),
}));