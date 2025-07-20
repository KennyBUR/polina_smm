import React from 'react';
import { Monitor, Clock, Video, MessageCircle, CheckSquare, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Онлайн-формат",
      description: "Доступ из любого устройства, учитесь где удобно"
    },
    {
      icon: <Clock className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "6 недель обучения",
      description: "Интенсивная программа с практическими результатами"
    },
    {
      icon: <Video className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Индивидуальные уроки + записи",
      description: "Персональные занятия в ZOOM плюс материалы в записи"
    },
    {
      icon: <MessageCircle className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Обратная связь",
      description: "Постоянная поддержка и ответы на все вопросы"
    },
    {
      icon: <CheckSquare className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Задания с проверкой",
      description: "Практические работы с детальным разбором"
    },
    {
      icon: <TrendingUp className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "План выхода на заказчиков",
      description: "Конкретная стратегия поиска первых клиентов"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundColor: '#A6BDD7',
        backgroundImage: 'url(/src/assets/noise.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Как проходит обучение
            </h2>
            <p className="text-xl text-white opacity-90">
              Удобный формат обучения с максимальной поддержкой
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="text-center flex flex-col h-full">
                  <div className="card-icon">{feature.icon}</div>
                  <h3
                    className="text-xs md:text-sm font-bold text-gray-900 mb-2 leading-tight"
                    style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: 'white' }}>
            <h3 className="text-2xl font-black text-gray-700 mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Результат обучения
            </h3>
           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Через 6 недель вы будете готовы к работе СММ-специалистом: 
              с портфолио, знаниями и пониманием, как найти первых заказчиков
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;