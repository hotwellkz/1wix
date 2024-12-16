import React from 'react';

export function Steps() {
  const steps = [
    {
      number: "1",
      title: "Опишите что вы",
      subtitle: "хотите создать."
    },
    {
      number: "2",
      title: "Получите первую версию",
      subtitle: "за секунды."
    },
    {
      number: "3",
      title: "Улучшайте и итерируйте",
      subtitle: "через чат."
    },
    {
      number: "4",
      title: "Один клик для деплоя",
      subtitle: "и публикации."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
            {step.number}
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-400">{step.subtitle}</p>
        </div>
      ))}
    </div>
  );
}