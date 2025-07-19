import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      setToken: (token) => {
        set({ token });
        if (token) {
          localStorage.setItem('authToken', token);
        } else {
          localStorage.removeItem('authToken');
        }
      },

      setLoading: (isLoading) => set({ isLoading }),
      
      setError: (error) => set({ error }),

      login: (userData, token) => {
        set({
          user: userData,
          token,
          isAuthenticated: true,
          error: null,
        });
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
      },

      updateUser: (userData) => {
        set({ user: userData });
        localStorage.setItem('user', JSON.stringify(userData));
      },

      // Initialize auth state from localStorage
      initializeAuth: () => {
        const token = localStorage.getItem('authToken');
        const userStr = localStorage.getItem('user');
        
        if (token && userStr) {
          try {
            const user = JSON.parse(userStr);
            set({
              user,
              token,
              isAuthenticated: true,
            });
          } catch (error) {
            console.error('Error parsing user data from localStorage:', error);
            get().logout();
          }
        }
      },

      // Check if user is admin
      isAdmin: () => {
        const { user } = get();
        return user?.role === 'ADMINISTRATOR';
      },

      // Check if user is active
      isActive: () => {
        const { user } = get();
        return user?.status === 'ACTIVE';
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;

