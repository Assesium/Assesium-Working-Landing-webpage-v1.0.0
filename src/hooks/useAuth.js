import { useMutation, useQuery } from '@tanstack/react-query';
import { authAPI } from '../lib/api';
import useAuthStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const { 
    user, 
    token, 
    isAuthenticated, 
    isLoading, 
    error, 
    login, 
    logout, 
    setLoading, 
    setError,
    updateUser,
    isAdmin,
    isActive
  } = useAuthStore();

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authAPI.login,
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      const { user, token } = data.data;
      login(user, token);
      setLoading(false);
      
      // Redirect to the specified URL after successful login
      window.location.href = 'https://assesium.vercel.app/';
    },
    onError: (error) => {
      setLoading(false);
      const errorMessage = error.response?.data?.message || 'Login failed';
      setError(errorMessage);
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: authAPI.register,
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      const { user, token } = data.data;
      login(user, token);
      setLoading(false);
      
      // Redirect to the specified URL after successful registration
      window.location.href = 'https://assesium.vercel.app/';
    },
    onError: (error) => {
      setLoading(false);
      const errorMessage = error.response?.data?.message || 'Registration failed';
      setError(errorMessage);
    },
  });

  // Profile query
  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: authAPI.getProfile,
    enabled: !!token && isAuthenticated,
    onSuccess: (data) => {
      updateUser(data.data.user);
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        logout();
        navigate('/login');
      }
    },
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: authAPI.updateProfile,
    onSuccess: (data) => {
      updateUser(data.data.user);
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || 'Profile update failed';
      setError(errorMessage);
    },
  });

  // Change password mutation
  const changePasswordMutation = useMutation({
    mutationFn: authAPI.changePassword,
    onError: (error) => {
      const errorMessage = error.response?.data?.message || 'Password change failed';
      setError(errorMessage);
    },
  });

  // Logout function
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading: isLoading || loginMutation.isPending || registerMutation.isPending,
    error,
    isAdmin: isAdmin(),
    isActive: isActive(),

    // Mutations
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: handleLogout,
    updateProfile: updateProfileMutation.mutate,
    changePassword: changePasswordMutation.mutate,

    // Mutation states
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    isLoginPending: loginMutation.isPending,
    isRegisterPending: registerMutation.isPending,
    isUpdateProfilePending: updateProfileMutation.isPending,
    isChangePasswordPending: changePasswordMutation.isPending,

    // Profile data
    profileData: profileQuery.data,
    isProfileLoading: profileQuery.isLoading,
    profileError: profileQuery.error,

    // Clear error
    clearError: () => setError(null),
  };
};

