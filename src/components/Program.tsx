import React, { useState } from 'react';
import { ChevronRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Program: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const modules = [
    {
      number: 1,
      title: "ВВЕДЕНИЕ В СММ",
      items: [
        "Что такое СММ сегодня? (не только посты в Instagram)",
        "Роли: контентщик, таргетолог, стратег, комьюнити-менеджер и др."
      ]
    },
    {
      number: 2,
      title: "АНАЛИЗ И СТРАТЕГИЯ",
      items: [
        "Анализ ниши и ЦА (аватары, боли, желания)",
        "Анализ конкурентов: SWOT, контент, офферы",
        "Создание SMM-стратегии: цели, задачи, метрики",
        "Tone of voice, KPI и ER"
      ]
    },
    {
      number: 3,
      title: "КОНТЕНТ ПРОДАКШН",
      items: [
        "Контент-план: форматы, рубрики, структура",
        "Сторис как инструмент вовлечения и продаж + сторителлинг",
        "Reels/Shorts: алгоритмы, сценарии, съёмка и монтаж",
        "Визуал: принципы дизайна, работа с Canva/Crello/Figma",
        "Тексты: заголовки, CTA, посты правила и принципы"
      ]
    },
    {
      number: 4,
      title: "ПРОДВИЖЕНИЕ И ОХВАТЫ",
      items: [
        "Органический рост: алгоритмы, вовлечение, реферальный маркетинг",
        "Вирусные механики: челленджи, интрига, провокация",
        "Реклама, бесплатные способы продвижения",
        "Блогеры и интеграции, воронки"
      ]
    },
    {
      number: 5,
      title: "ПРОДАЖИ В СММ",
      items: [
        "Прогревы: логика и этапы (от сторис до поста)",
        "Скрипты для сторис и ЛС",
        "Виды офферов: tripwire, марафоны, вебинары",
        "Продажи через контент и личный бренд"
      ]
    },
    {
      number: 6,
      title: "АНАЛИТИКА И ОТЧЁТНОСТЬ",
      items: [
        "Как строить отчёт для заказчика",
        "Что корректировать по результатам"
      ]
    },
    {
      number: 7,
      title: "РАБОТА С КЛИЕНТАМИ",
      items: [
        "Где искать первых клиентов",
        "Портфолио и упаковка",
        "Как не выгореть: границы, договоры, оплата"
      ]
    }
  ];

  const toggleModule = (moduleNumber: number) => {
    setOpenModule(openModule === moduleNumber ? null : moduleNumber);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Программа курса
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Комплексная программа от основ до профессионального уровня
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#ccdfff', color: '#7d91b2' }}>
              <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#7d91b2' }} />
              Цель: Выпускник — специалист, способный самостоятельно вести бизнес от стратегии до продаж
            </div>
          </div>
          
          <div className="space-y-4">
            {modules.map((module) => (
              <div 
                key={module.number}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleModule(module.number)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ backgroundColor: '#7d91b2' }}>
                      {module.number}
                    </div>
                    <h3 className="text-xl font-black text-gray-900 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
                      МОДУЛЬ {module.number}. {module.title}
                    </h3>
                  </div>
                  {openModule === module.number ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: '#7d91b2' }} />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#7d91b2' }} />
                  )}
                </button>
                
                {openModule === module.number && (
                  <div className="px-6 pb-6">
                    <div className="ml-16">
                      <ul className="space-y-2">
                        {module.items.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#7d91b2' }} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="text-white rounded-2xl p-8" style={{ background: 'linear-gradient(to bottom right, #7d91b2, #6b7fa0)' }}>
              <h3 className="text-2xl font-black mb-6 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>ФИНАЛЬНЫЙ БЛОК. ПРАКТИКА</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Защита стратегии</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Ревью и обратная связь</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Питч навыков: готовимся к собеседованиям</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🧰 ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Чек-листы, шаблоны, таблицы</li>
                    <li>• База сервисов для работы</li>
                    <li>• Домашние задания с проверкой</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;