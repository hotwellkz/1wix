import React from 'react';
import { Modal } from '../Modal/Modal';

interface DrawUIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawUIModal({ isOpen, onClose }: DrawUIModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-xl font-semibold mb-4">Нарисовать UI</h2>
        <p className="text-gray-400 mb-6">
          Вы можете начать с простого наброска вашего интерфейса. Мы преобразуем его в рабочий код.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. Создайте ваш рисунок:</h3>
            <ul className="text-gray-400 list-disc list-inside space-y-1">
              <li>Откройте <a href="https://excalidraw.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">excalidraw.com</a> (или аналогичный)</li>
              <li>Создайте макет UI с помощью прямоугольников/текста</li>
            </ul>
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