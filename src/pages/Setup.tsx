
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, ArrowRight, Bell, Check, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Banking topics available for selection
const BANKING_TOPICS = [
  'Safe Banking Tips',
  'How to detect scams',
  'Profile number detection',
  'Banking app safety'
];

const Setup = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { completeSetup } = useAuth();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [allowNotifications, setAllowNotifications] = useState(false);

  const t = (key: TranslationKey) => getTranslation(language, key);

  const handleTopicToggle = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (selectedTopics.length === 0) {
        toast({
          title: "Warning",
          description: "Please select at least one topic",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      completeSetup(selectedTopics, allowNotifications);
      setCurrentStep(3);
    } else {
      navigate('/dashboard');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-tf-purple py-4 px-6 text-white">
        <h1 className="text-xl font-bold">{t('setupWizard')}</h1>
      </header>
      
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-full flex justify-between mb-6">
              <div className={`w-1/3 h-1 rounded-full ${currentStep >= 1 ? 'bg-tf-purple' : 'bg-gray-200'}`}></div>
              <div className={`w-1/3 h-1 rounded-full ${currentStep >= 2 ? 'bg-tf-purple' : 'bg-gray-200'}`}></div>
              <div className={`w-1/3 h-1 rounded-full ${currentStep >= 3 ? 'bg-tf-purple' : 'bg-gray-200'}`}></div>
            </div>
            
            {currentStep === 1 && (
              <div className="flex flex-col items-center">
                <Shield size={40} className="text-tf-purple mb-4" />
                <h2 className="text-xl font-bold">{t('chooseBankingTopics')}</h2>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="flex flex-col items-center">
                <Bell size={40} className="text-tf-purple mb-4" />
                <h2 className="text-xl font-bold">{t('allowNotifications')}</h2>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="flex flex-col items-center">
                <Check size={40} className="text-tf-purple mb-4" />
                <h2 className="text-xl font-bold">{t('setupComplete')}</h2>
              </div>
            )}
          </CardHeader>
          
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-4">
                <p className="text-muted-foreground text-center mb-4">
                  Select the banking topics you want to learn more about.
                </p>
                
                {BANKING_TOPICS.map((topic) => (
                  <div key={topic} className="flex items-center space-x-3">
                    <Checkbox 
                      id={`topic-${topic}`}
                      checked={selectedTopics.includes(topic)}
                      onCheckedChange={() => handleTopicToggle(topic)}
                    />
                    <label htmlFor={`topic-${topic}`} className="text-sm font-medium">
                      {topic}
                    </label>
                  </div>
                ))}
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4">
                <p className="text-muted-foreground text-center mb-4">
                  Would you like to receive notifications about new security threats?
                </p>
                
                <div className="flex items-center justify-center space-x-3">
                  <Checkbox 
                    id="notifications"
                    checked={allowNotifications}
                    onCheckedChange={(checked) => setAllowNotifications(checked === true)}
                  />
                  <label htmlFor="notifications" className="text-sm font-medium">
                    Yes, I want to receive notifications
                  </label>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  {t('setupComplete')}
                </p>
                
                <Shield size={64} className="mx-auto text-tf-purple opacity-50 my-4" />
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {currentStep > 1 && currentStep < 3 ? (
              <Button 
                variant="outline"
                onClick={handlePrevStep}
                className="flex items-center space-x-2"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </Button>
            ) : (
              <div></div> 
            )}
            
            <Button 
              onClick={handleNextStep}
              className="flex items-center space-x-2"
            >
              <span>{currentStep === 3 ? 'Go to Dashboard' : 'Continue'}</span>
              {currentStep < 3 && <ArrowRight size={16} />}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Setup;
