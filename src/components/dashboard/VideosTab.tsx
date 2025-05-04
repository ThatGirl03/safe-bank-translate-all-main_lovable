
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShortVideoCard from '@/components/ShortVideoCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';
import { useToast } from '@/hooks/use-toast';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  popular: boolean;
}

interface VideosTabProps {
  videos: Video[];
}

const VideosTab: React.FC<VideosTabProps> = ({ videos }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const t = (key: TranslationKey) => getTranslation(language, key);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map(video => (
          <ShortVideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            duration={video.duration}
            thumbnail={video.thumbnail}
            popular={video.popular}
            onClick={() => toast({
              title: "Video Tutorial",
              description: `Playing: ${video.title}`,
            })}
          />
        ))}
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="ghost" 
          className="flex items-center text-tf-purple"
          onClick={() => navigate('/video-tutorials')}
        >
          {t('viewAll')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideosTab;
