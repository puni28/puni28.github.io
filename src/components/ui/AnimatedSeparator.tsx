
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSeparatorProps {
  className?: string;
}

const AnimatedSeparator = ({ className }: AnimatedSeparatorProps) => {
  return (
    <div className={cn("flex items-center py-6", className)}>
      <div className="h-0.5 w-12 bg-primary rounded-full"></div>
      <div className="h-0.5 w-2 bg-primary/60 mx-1 rounded-full"></div>
      <div className="h-0.5 w-1 bg-primary/40 rounded-full"></div>
    </div>
  );
};

export default AnimatedSeparator;
