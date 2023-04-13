import { create } from "zustand";

//*TODO: spread actions and state types or interface

export interface UIStoreState {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
}

export interface UIStoreActions {
  updateIntro: (value: boolean) => void;
}

export const initialState: UIStoreState = {
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
};

export const useUIStore = create<UIStoreState & UIStoreActions>((set) => ({
  ...initialState,
  updateIntro: (value: boolean) => set({ intro: value }),
}));
