import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onScrollToForm: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onScrollToForm }) => {
  const included = [
    "Полная программа курса (7 модулей + финальный блок)",
    "Индивидуальные занятия в ZOOM",
    "Материалы в записи для повторного изучения",
    "Индивидуальная обратная связь по всем заданиям",
    "Проверка домашних заданий с детальным разбором",
    "Помощь в создании портфолио",
    "Стратегия поиска первого заказчика",
    "Вечный доступ к материалам курса",
    "Чек-листы, шаблоны и базы для работы",
    "Поддержка в чате на протяжении всего обучения"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Условия участия и стоимость
            </h2>
            <p className="text-xl text-gray-300">
              Инвестиция в вашу новую профессию
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl transform rotate-1" style={{ background: 'linear-gradient(to right, #7d91b2, #6b7fa0)' }}></div>
            <div className="relative bg-white text-gray-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ccdfff', color: '#7d91b2' }}>
                  🔥 Ограниченное количество мест
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  34 900 ₽
                </div>
                <p className="text-gray-600">
                  Полная стоимость обучения
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-black mb-6 text-center uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
                  Что входит в стоимость:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={onScrollToForm}
                  className="inline-flex items-center px-8 py-4 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(to right, #7d91b2, #6b7fa0)'
                  }}
                >
                  Оставить заявку на обучение
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Старт индивидуально после отбора на обучение
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 inline-block">
              <p className="text-gray-700 mb-2">
                💡 <strong className="text-gray-900">Окупаемость:</strong> 
              </p>
              <p className="text-gray-600">
                Средняя стоимость ведения одного аккаунта — 15-25 тыс. руб/месяц
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;