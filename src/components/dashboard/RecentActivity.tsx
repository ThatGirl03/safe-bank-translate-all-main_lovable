
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from 'lucide-react';

const RecentActivity: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h4 className="font-medium mb-4 flex items-center">
          <Clock className="mr-2 h-4 w-4 text-tf-purple" />
          Recent Activity
        </h4>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between">
            <span>Password changed</span>
            <span className="text-muted-foreground">2 days ago</span>
          </li>
          <li className="flex justify-between">
            <span>New device login</span>
            <span className="text-muted-foreground">5 days ago</span>
          </li>
          <li className="flex justify-between">
            <span>Security alert viewed</span>
            <span className="text-muted-foreground">1 week ago</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
