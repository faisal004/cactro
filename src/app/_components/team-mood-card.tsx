import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getMoodEmoji } from '@/utils/moods-emoji';
import { teamMood } from '@/config/appData';



const CustomSlider = ({ value }:{value:number}) => {
  const percentage = value;
  
  return (
    <div className="relative w-full h-8">
      <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-gray-200 rounded-full" />
      
      <div 
        className="absolute top-1/2 left-0 h-2 -translate-y-1/2 bg-gray-200 rounded-full" 
        style={{ width: `${percentage}%` }}
      />
      
      <div 
        className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-not-allowed"
        style={{ left: `calc(${percentage}% - 16px)` }}
      >
        <span className="text-lg">{getMoodEmoji(value)}</span>
      </div>
    </div>
  );
};

const TeamMood = () => {
  return (
    <Card className="w-full max-w-xl h-full">
      <CardHeader>
        <CardTitle>Team Mood</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {teamMood.map((member) => (
          <div key={member.name} className="space-y-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{member.name}</div>
                <div className="text-sm text-gray-500 truncate">{member.role}</div>
              </div>
            </div>
            <div className="px-2">
              <CustomSlider value={member.mood} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamMood;