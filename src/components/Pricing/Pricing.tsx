import React from 'react';
import { Wrench, Rocket, Zap, Building2 } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      icon: <Wrench className="w-6 h-6" />,
      name: "СТАРТ",
      price: "1500₽",
      period: "/ месяц",
      description: "Идеально для хобби и небольших проектов:",
      features: [
        "Всё из бесплатного плана, плюс:",
        "Выход за рамки дневных лимитов с месячным лимитом",
        "Неограниченные приватные проекты",
        "Удаление отметки «Сделано с помощью 1wix»"
      ]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      name: "ЗАПУСК",
      price: "3900₽",
      period: "/ месяц",
      description: "Для индивидуальных разработчиков и небольших проектов:",
      features: [
        "Всё из тарифа СТАРТ, плюс:",
        "В 2.5 раза больше месячных лимитов",
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "МАСШТАБ",
      price: "7900₽",
      period: "/ месяц",
      description: "Для индивидуальных разработчиков над крупными проектами:",
      features: [
        "Всё из тарифа ЗАПУСК, плюс:",
        "Увеличенные лимиты сообщений",
        "Ранний доступ к новым функциям",
        "VIP-мероприятия"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "БИЗНЕС",
      price: "",
      period: "",
      description: "Свяжитесь с нами для:",
      features: [
        "Пользовательские лимиты сообщений",
        "Выделенный продуктовый специалист",
        "Индивидуальные интеграции",
        "Выделенная поддержка и управление аккаунтом",
        "Экспертная архитектурная поддержка"
      ]
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Тарифы
        </h2>
        
        <p className="text-xl text-center text-gray-400 mb-16">
          Начните бесплатно.{' '}
          <a href="#" className="underline hover:text-white">
            Свяжитесь с нами
          </a>
          {' '}для получения индивидуального предложения для вашей команды.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full mt-8 bg-white text-black hover:bg-gray-200 transition-colors py-3 rounded-lg font-semibold"
              >
                {plan.name === "БИЗНЕС" ? "Связаться с нами" : "Попробовать"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}