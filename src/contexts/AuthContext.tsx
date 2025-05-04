
import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock user data (in a real app, this would connect to a backend)
interface User {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  preferredLanguage: string;
  isFirstLogin: boolean;
  selectedTopics?: string[];
  allowNotifications?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, mobile?: string, language?: string) => Promise<void>;
  logout: () => void;
  completeSetup: (topics: string[], notifications: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock users database
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    mobile: '0712345678',
    preferredLanguage: 'en',
    isFirstLogin: false,
    selectedTopics: ['Safe Banking Tips', 'How to detect scams'],
    allowNotifications: true
  }
];

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email);
    
    if (foundUser) {
      // In a real app, you would validate the password here
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  // Mock signup function
  const signup = async (
    name: string, 
    email: string, 
    password: string, 
    mobile?: string, 
    language?: string
  ): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    if (MOCK_USERS.some(u => u.email === email)) {
      setIsLoading(false);
      throw new Error('User already exists');
    }

    // Create new user
    const newUser: User = {
      id: `${MOCK_USERS.length + 1}`,
      name,
      email,
      mobile,
      preferredLanguage: language || 'en',
      isFirstLogin: true,
    };
    
    // Add to mock database (in real app, this would be a backend call)
    MOCK_USERS.push(newUser);
    
    // Set as current user
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    setIsLoading(false);
  };

  // Logout function
  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Complete setup function (for first time login)
  const completeSetup = (topics: string[], notifications: boolean): void => {
    if (user) {
      const updatedUser = {
        ...user,
        isFirstLogin: false,
        selectedTopics: topics,
        allowNotifications: notifications
      };
      
      // Update in mock DB (in real app, this would be a backend call)
      const index = MOCK_USERS.findIndex(u => u.id === user.id);
      if (index !== -1) {
        MOCK_USERS[index] = updatedUser;
      }
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    completeSetup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
