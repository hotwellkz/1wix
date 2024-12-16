import React from 'react';
import { Modal } from '../Modal/Modal';

interface GitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GitHubModal({ isOpen, onClose }: GitHubModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-xl font-semibold mb-4">Импорт из GitHub</h2>
        <p className="text-gray-400">
          Двусторонняя синхронизация с репозиториями GitHub в настоящее время находится на ранней стадии доступа.
        </p>
        <p className="text-gray-400 mt-4">
          Список ожидания доступен{' '}
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 underline"
          >
            здесь
          </a>
          , мы отдаем приоритет тем, у кого есть реальный сценарий использования.
        </p>
      </div>
    </Modal>
  );
}