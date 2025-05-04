
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Shield, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

interface SecurityItem {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
}

interface SecurityScoreProps {
  score: number;
  items: SecurityItem[];
  onCompleteItem?: (id: string) => void;
}

const SecurityScore: React.FC<SecurityScoreProps> = ({
  score,
  items,
  onCompleteItem
}) => {
  const { language } = useLanguage();
  const securityScoreText = getTranslation(language, 'securityScore');
  const securityChecklistText = getTranslation(language, 'securityChecklist');
  
  // Determine score color
  const getScoreColor = () => {
    if (score < 40) return 'text-red-500';
    if (score < 70) return 'text-amber-500';
    return 'text-green-500';
  };
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Shield className="mr-2 h-5 w-5 text-tf-purple" />
          {securityScoreText}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold flex items-baseline">
            <span className={getScoreColor()}>{score}</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
          <Progress value={score} className="w-2/3 h-2" />
        </div>
        
        <div className="space-y-3">
          <h4 className="text-sm font-medium">{securityChecklistText}</h4>
          <ul className="space-y-2">
            {items.map(item => (
              <li 
                key={item.id} 
                className="flex items-center justify-between text-sm py-1 px-2 rounded-md hover:bg-muted"
                onClick={() => onCompleteItem && onCompleteItem(item.id)}
              >
                <div className="flex items-center">
                  {item.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ) : item.important ? (
                    <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                  ) : (
                    <XCircle className="h-4 w-4 text-gray-400 mr-2" />
                  )}
                  <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                    {item.title}
                  </span>
                </div>
                {item.important && !item.completed && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    Important
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityScore;
