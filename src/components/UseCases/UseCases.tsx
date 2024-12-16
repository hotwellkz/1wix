import React from 'react';

export function UseCases() {
  const cases = [
    {
      title: "Продуктовые команды",
      description: "Дайте возможность нетехническим членам команды создавать код. Согласовывайте абстрактные идеи, создавая реальные прототипы."
    },
    {
      title: "Основатели, предприниматели и инди-разработчики",
      description: "Итерируйте и проверяйте идеи за считанные минуты. Запустите полноценный продукт менее чем за день."
    },
    {
      title: "Продуктовые дизайнеры",
      description: "Воплотите свою идею дизайна в жизнь без утомительной работы над прототипами в таких инструментах, как Figma."
    },
    {
      title: "Разработчики",
      description: "Создайте весь фронтенд одним запросом. Позвольте 1wix исправлять ошибки и редактировать UI."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 uppercase tracking-wider mb-6 text-center">ВАРИАНТЫ ИСПОЛЬЗОВАНИЯ</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          Новая эра для создателей<br />продуктов и разработчиков
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}