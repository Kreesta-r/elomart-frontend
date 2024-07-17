import { create } from 'zustand';

interface TabState {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}
const useTabStore = create<TabState>(set => ({
  currentTab: 'sign-in',
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));

export default useTabStore;
