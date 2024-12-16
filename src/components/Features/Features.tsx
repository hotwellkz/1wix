import React from 'react';
import { Search, Eye, Globe, Sparkles, Github } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Мгновенно и интуитивно",
      description: "Живой рендеринг, обработка изображений, мгновенная отмена действий и совместная работа с ветвлением. ИИ исправляет ваши ошибки. Публикация в один клик."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Красивый дизайн",
      description: "Мы верим, что ваш продукт должен выглядеть отлично. 1wix следует лучшим практикам UI и UX, чтобы каждая ваша идея воплощалась в красивый дизайн."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Поддержка любого бэкенда",
      description: "1wix поддерживает базы данных, API-интеграции и back-end функциональность. Подключите свой сервер или используйте наш коннектор Supabase."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Выделение и редактирование",
      description: "Точность, необходимая для тонких изменений. С функцией выделения и редактирования просто кликните на элемент и опишите желаемые изменения."
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Интеграция с GitHub",
      description: "Подключите 1wix к вашему GitHub аккаунту для автоматической синхронизации кода с репозиторием. Идеально для передачи проекта и продвинутых рабочих процессов."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 uppercase tracking-wider mb-6 text-center">ВОЗМОЖНОСТИ</p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-24">
          Суперсовременный full stack<br />
          продуктовый инженер
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}