import { create } from 'zustand';

export const usePostsStore = create((set) => ({
  shouldRefetchPosts: false,
  triggerRefetch: () => set((state) => ({ shouldRefetchPosts: !state.shouldRefetchPosts })),
}));