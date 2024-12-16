import React from 'react';

export function Stats() {
  return (
    <div className="text-center mb-20">
      <p className="text-xl text-gray-400 mb-8">
        "Быстрее чем что-либо, что я видел раньше"
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="flex items-center space-x-2">
          <span className="text-lg">Более 40,000+ разработчиков используют 1wix</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Лучший стартап 2024</span>
        </div>
      </div>
    </div>
  );
}