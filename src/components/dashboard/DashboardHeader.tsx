
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage, languageNames } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, Menu, Settings, User } from 'lucide-react';

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full bg-tf-purple py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-white mr-2" 
            onClick={onToggleSidebar}
          >
            <Menu />
          </Button>
          <div className="text-white mr-2" />
          <h1 className="text-xl font-bold text-white">
            Translate For All
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-white text-sm">
            {languageNames[language]}
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-tf-purple-dark"
            onClick={() => navigate('/profile')}
          >
            <User size={18} />
          </Button>

          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-tf-purple-dark"
            onClick={() => navigate('/settings')}
          >
            <Settings size={18} />
          </Button>

          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-tf-purple-dark"
            onClick={handleLogout}
          >
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
