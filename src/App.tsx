
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected routes */}
              <Route 
                path="/setup" 
                element={
                  <PrivateRoute>
                    <Setup />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              
              {/* Placeholder routes for future implementation */}
              <Route path="/profile" element={<Navigate to="/dashboard" />} />
              <Route path="/settings" element={<Navigate to="/dashboard" />} />
              <Route path="/awareness-tips" element={<Navigate to="/dashboard" />} />
              <Route path="/scam-alerts" element={<Navigate to="/dashboard" />} />
              <Route path="/banking-guides" element={<Navigate to="/dashboard" />} />
              <Route path="/faqs" element={<Navigate to="/dashboard" />} />
              <Route path="/helpdesk" element={<Navigate to="/dashboard" />} />
              <Route path="/forgot-password" element={<Navigate to="/login" />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
