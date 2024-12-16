import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 text-lg">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Что такое 1wix и как это работает?",
      answer: "1wix - это платформа, использующая искусственный интеллект для создания веб-сайтов и приложений. Просто опишите, что вы хотите создать, и наш ИИ преобразует ваше описание в полноценный сайт. Вы можете итеративно улучшать результат через чат-интерфейс."
    },
    {
      question: "Что включает бесплатный план?",
      answer: "Бесплатный план включает создание до 3 проектов, базовые функции ИИ, все основные шаблоны и компоненты. Вы получаете полный доступ к основному функционалу платформы для оценки возможностей 1wix."
    },
    {
      question: "Какие технологии поддерживает 1wix?",
      answer: "1wix поддерживает все современные веб-технологии, включая React, Vue, Angular, Next.js, а также популярные UI библиотеки как Tailwind CSS, Material UI и другие. Платформа также интегрируется с различными базами данных и API."
    },
    {
      question: "Кому принадлежат проекты и код?",
      answer: "Весь код и проекты, созданные на 1wix, полностью принадлежат вам. Вы можете экспортировать код, развернуть его где угодно или синхронизировать с GitHub. У вас есть полный контроль над вашей интеллектуальной собственностью."
    },
    {
      question: "Сколько стоит использование?",
      answer: "После бесплатного плана цены начинаются от 29€ в месяц за Pro план, который включает неограниченное количество проектов, приоритетную поддержку и расширенные функции ИИ. Для команд и предприятий доступны индивидуальные тарифы."
    },
    {
      question: "Где можно узнать больше?",
      answer: "Посетите нашу документацию для подробной информации, примеров использования и руководств. Также вы можете присоединиться к нашему сообществу в Discord или связаться с нашей командой поддержки."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}