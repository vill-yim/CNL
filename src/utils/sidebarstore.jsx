import { create } from "zustand";

export const sidebarStore = create((set) => ({
  sideBar: false,
  setSideBar: () =>
    set((state) => ({
      sideBar: !state.sideBar,
    })),
}));
