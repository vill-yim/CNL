import { create } from "zustand";

export const useStoreView = create((set) => ({
  view: false,
  setView: (value) => {
    console.log("Estableciendo view a:", value);
    set(() => ({ view: value }));
  },
}));