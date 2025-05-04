
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Simple translation based on language
  const getTranslatedText = () => {
    switch (language) {
      case 'zu':
        return {
          title: "404",
          message: "Iyatholakala! Ikhasi alitholakali",
          returnHome: "Buyela Ekhaya"
        };
      case 'st':
        return {
          title: "404",
          message: "Oops! Leqephe ha le fumaneha",
          returnHome: "Khutlela Lehae"
        };
      default:
        return {
          title: "404",
          message: "Oops! Page not found",
          returnHome: "Return to Home"
        };
    }
  };

  const text = getTranslatedText();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-tf-purple">{text.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{text.message}</p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-tf-purple hover:bg-tf-purple-dark"
        >
          {text.returnHome}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
