import { create } from 'zustand';

const useNotificationStore = create((set) => ({
  notifications: [],
  notify: (message, type = 'info', timeout = 3000) => {
    const id = Date.now();
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((noti) => noti.id !== id),
      }));
    }, timeout);
  },
  remove: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((noti) => noti.id !== id),
    }));
  },
}));

export default useNotificationStore;
