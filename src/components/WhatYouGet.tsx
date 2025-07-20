import React from 'react';
import { BookOpen, Briefcase, Users, Award } from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Освоите основы СММ и маркетинга простым языком",
      description: "Получите фундаментальные знания без сложных терминов"
    },
    {
      icon: <Briefcase className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Создадите своё портфолио и начнёте зарабатывать",
      description: "Практические задания помогут собрать кейсы для работы"
    },
    {
      icon: <Users className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Поймёте, как искать заказчиков и продавать свои услуги",
      description: "Изучите эффективные методы поиска клиентов"
    },
    {
      icon: <Award className="w-6 h-6" style={{ color: '#7d91b2' }} />,
      title: "Получите поддержку ментора и уверенность в себе",
      description: "Индивидуальное сопровождение на каждом этапе"
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
              Что вы получите на курсе
            </h2>
            <p className="text-xl text-white opacity-90">
              Комплексная программа для успешного старта в СММ
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 leading-tight" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;