import { create } from "zustand";
import { defaultParameters } from "../data/defaultParameters";

export const useParameterStore = create((set) => ({
  parameters: JSON.parse(JSON.stringify(defaultParameters)),

  /**
   *
   * @param {number} index number indicating which parameter to change {0-6} :
   * - 0 : Prey birth rate
   * - 1 : Predation rate
   * - 2 : Predator death rate
   * - 3 : Predation efficiency
   * - 4 : Initial number of prey
   * - 5 : Initial number of predator
   * - 6 : Integration time step
   * @param {number} value float value of the parameter
   */
  updateParameter: (index, value) => {
    set((state) => {
      const updatedParameters = [...state.parameters];
      updatedParameters[index].value = value;
      return { ...state, parameters: [...updatedParameters] };
    });
  },

  resetParameters: () => {
    set((state) => ({
      ...state,
      parameters: JSON.parse(JSON.stringify(defaultParameters)),
    }));
  },
}));
