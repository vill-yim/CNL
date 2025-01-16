import { create } from "zustand";

export const useStoreView = create((set) => ({
  view: false,
  setView: () => set((state) => ({ view: !state.view })),
}))