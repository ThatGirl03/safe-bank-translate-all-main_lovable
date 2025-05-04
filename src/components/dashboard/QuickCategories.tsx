
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Book, HelpCircle, Info, MessageSquare, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';

const QuickCategories: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const t = (key: TranslationKey) => getTranslation(language, key);

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">{t('quickCategories')}</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="menu-card" onClick={() => navigate('/awareness-tips')}>
          <Info className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('awarenessTips')}</span>
        </div>
        
        <div className="menu-card" onClick={() => navigate('/scam-alerts')}>
          <Bell className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('scamAlerts')}</span>
        </div>
        
        <div className="menu-card" onClick={() => navigate('/banking-guides')}>
          <Book className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('bankingGuides')}</span>
        </div>
        
        <div className="menu-card" onClick={() => navigate('/faqs')}>
          <HelpCircle className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('faqs')}</span>
        </div>
        
        <div className="menu-card" onClick={() => navigate('/helpdesk')}>
          <MessageSquare className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('helpdesk')}</span>
        </div>
        
        <div className="menu-card" onClick={() => navigate('/settings')}>
          <Settings className="h-8 w-8 mb-2 text-tf-purple" />
          <span>{t('settings')}</span>
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
