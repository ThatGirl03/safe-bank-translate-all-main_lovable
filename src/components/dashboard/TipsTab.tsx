
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';

interface Tip {
  id: number;
  title: string;
  image: string;
}

interface TipsTabProps {
  tips: Tip[];
}

const TipsTab: React.FC<TipsTabProps> = ({ tips }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const t = (key: TranslationKey) => getTranslation(language, key);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map(tip => (
          <Card key={tip.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{tip.title}</h3>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="ghost" 
          className="flex items-center text-tf-purple"
          onClick={() => navigate('/awareness-tips')}
        >
          {t('viewAll')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TipsTab;
