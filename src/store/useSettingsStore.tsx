import { create } from 'zustand';

interface SettingsState {
  is2FAEnabled: boolean;
  setIs2FAEnabled: (enabled: boolean) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  is2FAEnabled: false,
  setIs2FAEnabled: (enabled: boolean) => set({ is2FAEnabled: enabled }),
}));

export default useSettingsStore;
