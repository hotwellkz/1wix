import React from 'react';
import { Heart } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Heart className="w-6 h-6 text-gradient-to-r from-orange-400 to-rose-400" />
      <span className="text-xl font-bold">1wix</span>
    </div>
  );
}