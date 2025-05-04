
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { 
  Home, Bell, Book, HelpCircle, MessageSquare, 
  Settings, User, Shield, LogOut, Menu, X
} from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { logout } = useAuth();
  
  const t = (key: any) => getTranslation(language, key);
  
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Bell, label: t('scamAlerts'), href: '/scam-alerts' },
    { icon: Shield, label: t('awarenessTips'), href: '/awareness-tips' },
    { icon: Book, label: t('bankingGuides'), href: '/banking-guides' },
    { icon: HelpCircle, label: t('faqs'), href: '/faqs' },
    { icon: MessageSquare, label: t('helpdesk'), href: '/helpdesk' },
    { icon: User, label: t('profile'), href: '/profile' },
    { icon: Settings, label: t('settings'), href: '/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Mobile close button */}
      <div className="md:hidden absolute right-2 top-2">
        <Button variant="ghost" size="sm" onClick={onToggle}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Sidebar header */}
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-tf-purple" />
          <span className="font-bold text-lg">Translate For All</span>
        </div>
      </div>
      
      {/* Sidebar content */}
      <div className="py-4 px-2">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start py-2 px-3 text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => navigate(item.href)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          ))}
          
          <div className="pt-4 mt-4 border-t border-sidebar-border">
            <Button
              variant="ghost"
              className="w-full justify-start py-2 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-red-500"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              {t('logout')}
            </Button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
