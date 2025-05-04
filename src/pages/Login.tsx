
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { login } = useAuth();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = (key: TranslationKey) => getTranslation(language, key);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      toast({
        title: "Success",
        description: "Login successful",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password",
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
            <h1 className="text-2xl font-bold text-tf-dark">{t('logIn')}</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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
                    <LogIn className="mr-2" size={18} />
                    {t('logIn')}
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="link" 
              onClick={() => navigate('/forgot-password')}
              className="text-tf-purple hover:text-tf-purple-dark"
            >
              {t('forgotPassword')}
            </Button>
            <Button 
              variant="link"
              onClick={() => navigate('/signup')}
              className="text-tf-purple hover:text-tf-purple-dark"
            >
              {t('signUp')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
