import { create } from "zustand";

// Step 1: Define config type
export interface NavbarConfig {
  showProfile?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  showBrand?: boolean;
  showMenu?: boolean;
  showUserInfo?: boolean;
  // add more as needed
}

const defaultConfig: NavbarConfig = {
  showProfile: true,
  showSearch: true,
  showNotifications: true,
  showBrand: true,
  showMenu: true,
  showUserInfo: true,
};

// Step 2: Create Zustand store
interface NavbarConfigState {
  config: NavbarConfig;
  setConfig: (config: Partial<NavbarConfig>) => void;
  resetConfig: () => void;
  mergeWithDefault: (partial: Partial<NavbarConfig>) => NavbarConfig;
}

export const useNavbarConfigStore = create<NavbarConfigState>((set) => ({
  config: defaultConfig,

  setConfig: (newConfig) => {
    set((state) => ({
      config: { ...state.config, ...newConfig },
    }));
  },

  resetConfig: () => {
    set({ config: defaultConfig });
  },

  mergeWithDefault: (partial) => {
    return { ...defaultConfig, ...partial };
  },
}));

// Helper hooks for easier usage
export const useNavbarConfig = () => {
  const config = useNavbarConfigStore((state) => state.config);
  const setConfig = useNavbarConfigStore((state) => state.setConfig);
  const resetConfig = useNavbarConfigStore((state) => state.resetConfig);

  return { config, setConfig, resetConfig };
};
