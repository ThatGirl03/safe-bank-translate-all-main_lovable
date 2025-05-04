
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { language } = useLanguage();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect to the dashboard
        navigate('/dashboard');
      } else {
        // Redirect to welcome page
        navigate('/');
      }
    }
  }, [user, isLoading, navigate, language]);

  return <LoadingScreen />;
};

export default Index;
