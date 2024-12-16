import React, { useState } from 'react';
import { Monitor, PenTool, Github } from 'lucide-react';
import { FigmaModal } from '../FigmaModal/FigmaModal';
import { DrawUIModal } from '../DrawUIModal/DrawUIModal';
import { GitHubModal } from '../GitHubModal/GitHubModal';

export function ActionButtons() {
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const [isDrawUIModalOpen, setIsDrawUIModalOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-20">
      <button 
        onClick={() => setIsFigmaModalOpen(true)}
        className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2"
      >
        <Monitor className="w-5 h-5" />
        <span>Начать с Figma</span>
      </button>
      <button 
        onClick={() => setIsDrawUIModalOpen(true)}
        className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2"
      >
        <PenTool className="w-5 h-5" />
        <span>Нарисовать UI</span>
      </button>
      <button 
        onClick={() => setIsGitHubModalOpen(true)}
        className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2"
      >
        <Github className="w-5 h-5" />
        <span>Импорт из GitHub</span>
      </button>
      <FigmaModal 
        isOpen={isFigmaModalOpen}
        onClose={() => setIsFigmaModalOpen(false)}
      />
      <DrawUIModal
        isOpen={isDrawUIModalOpen}
        onClose={() => setIsDrawUIModalOpen(false)}
      />
      <GitHubModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}