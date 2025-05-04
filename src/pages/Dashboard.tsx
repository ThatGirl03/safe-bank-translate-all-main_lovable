
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Info, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import DashboardSidebar from '@/components/DashboardSidebar';
import SecurityScore from '@/components/SecurityScore';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import AlertsTab from '@/components/dashboard/AlertsTab';
import VideosTab from '@/components/dashboard/VideosTab';
import TipsTab from '@/components/dashboard/TipsTab';
import QuickCategories from '@/components/dashboard/QuickCategories';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showQrScanner, setShowQrScanner] = useState(false);

  const t = (key: TranslationKey) => getTranslation(language, key);

  // Sample security score items
  const securityItems = [
    { id: '1', title: 'Set up two-factor authentication', completed: true, important: true },
    { id: '2', title: 'Create a strong password', completed: true, important: true },
    { id: '3', title: 'Update contact information', completed: false, important: false },
    { id: '4', title: 'Review recent login activity', completed: false, important: true },
    { id: '5', title: 'Complete security questionnaire', completed: false, important: false },
  ];

  // Mock alerts
  const alerts = [
    {
      id: 1,
      title: "Phishing Alert",
      description: "New phishing emails targeting banking customers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "SMS Scam Warning",
      description: "Fraudsters sending fake bank SMS messages. Don't click links!",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300"
    }
  ];

  // Mock educational videos
  const videos = [
    {
      id: '1',
      title: "How to Spot Phishing",
      duration: "2:15",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300",
      popular: true
    },
    {
      id: '2',
      title: "Secure Online Banking",
      duration: "3:42",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=300",
      popular: false
    },
    {
      id: '3',
      title: "Protect Your Password",
      duration: "1:58",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300",
      popular: false
    },
    {
      id: '4',
      title: "Banking App Security",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=300",
      popular: true
    }
  ];

  // Mock banking tips
  const bankingTips = [
    {
      id: 1,
      title: "Always Verify Bank Communications",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Use Biometric Authentication",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const handleCompleteSecurityItem = (id: string) => {
    toast({
      title: "Security item completed",
      description: `You've completed a security task!`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main container with sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DashboardSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header with greeting and menu */}
          <DashboardHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          {/* Main content */}
          <main className="flex-1 p-6">
            {/* Welcome section */}
            <WelcomeSection 
              alertCount={alerts.length} 
              onShowQrScanner={setShowQrScanner} 
              showQrScanner={showQrScanner} 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {/* Featured content with tabs */}
                <section className="mb-8">
                  <Tabs defaultValue="alerts" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="alerts" className="flex items-center gap-2">
                        <Bell size={16} />
                        <span>{t('scamAlerts')}</span>
                      </TabsTrigger>
                      <TabsTrigger value="videos" className="flex items-center gap-2">
                        <Video size={16} />
                        <span>{t('tutorials')}</span>
                      </TabsTrigger>
                      <TabsTrigger value="tips" className="flex items-center gap-2">
                        <Info size={16} />
                        <span>{t('awarenessTips')}</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="alerts">
                      <AlertsTab alerts={alerts} />
                    </TabsContent>
                    
                    <TabsContent value="videos">
                      <VideosTab videos={videos} />
                    </TabsContent>
                    
                    <TabsContent value="tips">
                      <TipsTab tips={bankingTips} />
                    </TabsContent>
                  </Tabs>
                </section>
                
                {/* Quick Categories */}
                <QuickCategories />
              </div>
              
              {/* Sidebar - Security score */}
              <div className="space-y-6">
                <SecurityScore 
                  score={65} 
                  items={securityItems} 
                  onCompleteItem={handleCompleteSecurityItem}
                />
                
                {/* Recent activity */}
                <RecentActivity />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
