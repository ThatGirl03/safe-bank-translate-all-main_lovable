
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage, languageNames, LanguageCode } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { Globe, LogIn, UserPlus } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: TranslationKey) => getTranslation(language, key);

  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Language selector in header */}
      <header className="w-full bg-tf-purple py-4 px-6 flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">Translate For All</h2>
        <div className="relative">
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-tf-purple-dark"
          >
            <Globe className="mr-2" size={18} />
            {languageNames[language]}
          </Button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 animate-fade-in">
              <div className="py-1 max-h-60 overflow-y-auto">
                {Object.entries(languageNames).map(([code, name]) => (
                  <button
                    key={code}
                    className="w-full text-left px-4 py-2 hover:bg-muted"
                    onClick={() => handleLanguageChange(code as LanguageCode)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-tf-purple rounded-full flex items-center justify-center">
              <Globe size={48} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-tf-dark">{t('welcome')}</h1>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full py-6 text-lg flex items-center justify-center"
              onClick={() => navigate('/signup')}
            >
              <UserPlus className="mr-2" size={20} />
              {t('signUp')}
            </Button>
            
            <Button 
              className="w-full py-6 text-lg flex items-center justify-center" 
              variant="outline"
              onClick={() => navigate('/login')}
            >
              <LogIn className="mr-2" size={20} />
              {t('logIn')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
