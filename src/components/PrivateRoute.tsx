
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LoadingScreen from './LoadingScreen';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { language } = useLanguage();
  
  // Show loading state while auth is being checked
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  // Render children if authenticated
  return <>{children}</>;
};

export default PrivateRoute;
