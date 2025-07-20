import React from 'react';
import { Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70" style={{ backgroundColor: '#ccdfff' }}></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70" style={{ backgroundColor: '#7d91b2' }}></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="w-64 h-64 mx-auto rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #ccdfff, #7d91b2)' }}>
                    <div className="w-48 h-48 bg-gray-200 rounded-xl"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">Полина Жиганина</h3>
                    <p className="text-gray-600">Ментор курса • Практикующий СММ-специалист</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
                  Об авторе
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Меня зовут Полина, я практикующий СММ-специалист.
                    В СММ я пришла по любви — и осталась.
                  </p>
                  <p>
                    Работаю с клиентами на долгосрочной основе, и некоторые идут со мной с самого начала. 
                    Я прошла путь через пробы, ошибки, выгорание и перезапуски — и именно на этом опыте 
                    построила свой подход.
                  </p>
                  <p>
                    Знаю, как сложно сделать первый шаг, особенно без поддержки. Поэтому создала 
                    понятный, практический курс с личным сопровождением.
                  </p>
                </div>
              </div>
              
              <div className="text-white p-6 rounded-2xl" style={{ background: 'linear-gradient(to right, #7d91b2, #6b7fa0)' }}>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="font-semibold mb-2">Моё главное правило</h3>
                    <p style={{ color: '#ccdfff' }}>
                      Никакой воды, только то, что работает и даёт результат. 
                      Всё, чему учу — помогает моим заказчикам расти и зарабатывать.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Хочу, чтобы получилось и у тебя! 💪
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;