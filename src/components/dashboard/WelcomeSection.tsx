
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { Shield, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Scan } from 'lucide-react';
import QRScanner from '@/components/QRScanner';
import { useToast } from '@/hooks/use-toast';

interface WelcomeSectionProps {
  alertCount: number;
  onShowQrScanner: (show: boolean) => void;
  showQrScanner: boolean;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ 
  alertCount, 
  onShowQrScanner, 
  showQrScanner 
}) => {
  const { user } = useAuth();
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const t = (key: TranslationKey) => getTranslation(language, key);

  // Handle QR code scan completion
  const handleScanComplete = (data: string) => {
    toast({
      title: "QR Code Scanned",
      description: `Verified safe link: ${data.substring(0, 30)}...`,
    });
    onShowQrScanner(false);
  };

  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold">
            {t('welcomeUser')}, {user?.name}!
          </h2>
          <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
            <Shield className="h-4 w-4 mr-1 text-tf-purple" />
            <span>{t('securityAlerts')}: {alertCount} {t('new')}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Dialog open={showQrScanner} onOpenChange={onShowQrScanner}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Scan className="h-4 w-4" />
                {t('scanQRCode')}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <QRScanner 
                onClose={() => onShowQrScanner(false)} 
                onScanComplete={handleScanComplete} 
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="relative">
        <Input
          className="w-full py-6 pl-10 pr-4 text-lg rounded-lg shadow-sm"
          placeholder={t('search')}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      </div>
    </section>
  );
};

export default WelcomeSection;
