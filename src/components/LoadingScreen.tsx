
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message }) => {
  const { language } = useLanguage();
  const defaultMessage = getTranslation(language, 'loading');
  const displayMessage = message || defaultMessage;
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-tf-purple rounded-full mb-4"></div>
        <p className="text-muted-foreground">{displayMessage}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
