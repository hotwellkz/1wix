import React from 'react';
import { Modal } from '../Modal/Modal';

interface FigmaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FigmaModal({ isOpen, onClose }: FigmaModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-xl font-semibold mb-4">Начать с Figma</h2>
        <p className="text-gray-400 mb-6">
          Вы можете сделать скриншот любой части вашего дизайна и вставить его здесь.
          Мы преобразуем его в рабочий код.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. Откройте дизайн в Figma</h3>
          </div>

          <div>
            <h3 className="font-medium mb-2">2. Сделайте скриншот:</h3>
            <p className="text-gray-400">
              Используя сочетание клавиш: <code className="bg-gray-800 px-2 py-1 rounded">Win + Shift + S</code> для Windows
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">3. Вставьте изображение:</h3>
            <ul className="text-gray-400 list-disc list-inside space-y-1">
              <li>Вставьте используя <code className="bg-gray-800 px-2 py-1 rounded">Ctrl+V</code></li>
              <li>Или перетащите файл изображения</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">4. Нажмите Enter</h3>
          </div>
        </div>
      </div>
    </Modal>
  );
}