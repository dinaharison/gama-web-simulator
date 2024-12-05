import { create } from "zustand";

/**
 *  prey: number,
    predator: number,
    cycle: number,
    ratioPredator: number,
    ratioPrey: number,
 */

export const useSimulationStore = create((set) => ({
  data: [],
  setData: (newData) => {
    set((state) => ({ ...state, data: [...state.data, newData] }));
  },
}));
