import { create } from "zustand";

export const useStoreCalendly = create((set) => ({
    calendly: false,
    setCalendly: (state) => set(() => ({ calendly: state })),
  }));