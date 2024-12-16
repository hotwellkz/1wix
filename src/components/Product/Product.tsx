import React from 'react';

export function Product() {
  const features = [
    {
      title: "В 20 раз быстрее программирования",
      description: "Используйте свой родной язык для описания идеи, а 1wix сделает всё остальное. Создание веб-проектов стало быстрее и проще, чем когда-либо."
    },
    {
      title: "Редактирование через промпты",
      description: "Забудьте о сложностях с фронтенд-разработчиками или фрилансерами для поддержки вашего сайта. Просто напишите текстом, что нужно изменить."
    },
    {
      title: "Код принадлежит вам",
      description: "Всё, что создает 1wix - ваше. Синхронизируйте код с GitHub и редактируйте в любом редакторе кода, экспортируйте или публикуйте ваше приложение в один клик."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 uppercase tracking-wider mb-6 text-center">ПРОДУКТ</p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Создавайте качественное ПО<br />
          без написания кода
        </h2>

        <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-24">
          Создание программного обеспечения никогда не было таким доступным. С 1wix просто опишите вашу идею своими словами и наблюдайте, как она превращается в полнофункциональное приложение с красивым дизайном.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="max-w-lg">
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=2000&q=80" 
                alt="Интерфейс 1wix" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}