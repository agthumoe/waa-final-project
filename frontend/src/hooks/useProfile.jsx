import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, login } from '../api/api';
import useNotificationStore from './useNotificationStore';

function useProfile() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { notify } = useNotificationStore();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('accessToken')
  );

  const logout = async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    queryClient.invalidateQueries();
    notify('You have been logged out.', 'success');
    navigate('/');
  };

  const { data, isFetched, isError, isLoading } = useQuery({
    queryKey: ['profile', 'fetch'],
    queryFn: getProfile,
    enabled: isAuthenticated,
    initialData: null,
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      setIsAuthenticated(true);
      queryClient.invalidateQueries();
      notify('Welcome back!', 'success');
      navigate('/');
    },
  });

  return {
    data,
    isFetched,
    isError,
    isLoading,
    isAuthenticated,
    logout,
    login: mutation.mutate,
  };
}

export default useProfile;
