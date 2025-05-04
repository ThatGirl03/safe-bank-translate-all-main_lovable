
import React from 'react';
import { Card } from "@/components/ui/card";
import { Play, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { cn } from '@/lib/utils';

interface ShortVideoCardProps {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  popular?: boolean;
  onClick?: () => void;
}

const ShortVideoCard: React.FC<ShortVideoCardProps> = ({
  id,
  title,
  duration,
  thumbnail,
  popular = false,
  onClick
}) => {
  const { language } = useLanguage();
  const watchText = getTranslation(language, 'watchVideo');

  return (
    <Card 
      className={cn(
        "group overflow-hidden rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer",
        popular ? "ring-2 ring-tf-purple" : ""
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] w-full">
        {/* Thumbnail */}
        <img 
          src={thumbnail} 
          alt={title} 
          className="h-full w-full object-cover"
        />
        
        {/* Duration badge */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{duration}</span>
        </div>
        
        {/* Popular badge (conditionally rendered) */}
        {popular && (
          <div className="absolute top-2 left-2 bg-tf-purple text-white text-xs px-2 py-1 rounded-full">
            Popular
          </div>
        )}
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
          <div className="bg-white bg-opacity-90 rounded-full p-3 mb-4">
            <Play className="h-8 w-8 text-tf-purple" />
          </div>
          <span className="text-white font-medium">{watchText}</span>
        </div>
      </div>
      
      {/* Info section */}
      <div className="p-3">
        <h3 className="font-medium line-clamp-2 mb-2">{title}</h3>
        <div className="flex justify-between">
          <button className="text-xs text-muted-foreground flex items-center">
            <Share2 className="h-3 w-3 mr-1" /> Share
          </button>
          <button className="text-xs text-muted-foreground flex items-center">
            <BookmarkPlus className="h-3 w-3 mr-1" /> Save
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ShortVideoCard;
