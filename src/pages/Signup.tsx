
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, languageNames, LanguageCode } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { signup } = useAuth();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<LanguageCode>(language);
  const [isLoading, setIsLoading] = useState(false);

  const t = (key: TranslationKey) => getTranslation(language, key);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      await signup(name, email, password, mobile, preferredLanguage);
      setLanguage(preferredLanguage);
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      navigate('/setup');
    } catch (error) {
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-tf-purple py-4 px-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="text-white hover:bg-tf-purple-dark"
        >
          <ArrowLeft className="mr-2" size={18} />
          {t('welcome')}
        </Button>
      </header>
      
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg animate-scale-in">
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold text-tf-dark">{t('signUp')}</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('name')}</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1">{t('mobile')}</label>
                <Input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="071 234 5678"
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('email')}</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="language" className="block text-sm font-medium mb-1">{t('language')}</label>
                <Select 
                  value={preferredLanguage} 
                  onValueChange={(value) => setPreferredLanguage(value as LanguageCode)}
                >
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languageNames).map(([code, name]) => (
                      <SelectItem key={code} value={code}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">{t('password')}</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="form-input"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                    Loading...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <UserPlus className="mr-2" size={18} />
                    {t('signUp')}
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <Button 
              variant="link"
              onClick={() => navigate('/login')}
              className="text-tf-purple hover:text-tf-purple-dark"
            >
              {t('logIn')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
