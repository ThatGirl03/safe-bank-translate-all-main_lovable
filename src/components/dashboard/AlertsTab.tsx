
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Shield, Info, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { useToast } from '@/hooks/use-toast';

interface Alert {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface AlertsTabProps {
  alerts: Alert[];
}

const AlertsTab: React.FC<AlertsTabProps> = ({ alerts }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const t = (key: TranslationKey) => getTranslation(language, key);

  const showAlert = (message: string) => {
    toast({
      title: t('scamAlerts'),
      description: message,
    });
  };

  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <Card key={alert.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 h-40 md:h-auto overflow-hidden">
              <img 
                src={alert.image} 
                alt={alert.title} 
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 md:w-3/4" onClick={() => showAlert(alert.description)}>
              <div className="flex items-start">
                <Shield className="mr-3 text-tf-purple flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="font-medium mb-2">{alert.title}</CardTitle>
                  <p className="text-muted-foreground">{alert.description}</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
      
      <div className="bg-muted p-4 rounded-lg flex items-start">
        <Info className="mr-3 text-tf-purple flex-shrink-0 mt-1" />
        <p>{t('tipOfDay')}</p>
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="ghost" 
          className="flex items-center text-tf-purple"
          onClick={() => navigate('/scam-alerts')}
        >
          {t('viewAll')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AlertsTab;
