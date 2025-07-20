import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "Нужен ли опыт для участия в курсе?",
      answer: "Нет, курс создан специально для новичков. Мы начинаем с самых основ и постепенно переходим к профессиональному уровню. Главное — желание учиться и развиваться."
    },
    {
      question: "Сколько времени в неделю нужно уделять обучению?",
      answer: "Достаточно 3-5 часов в неделю. Это включает просмотр уроков, выполнение домашних заданий и работу над проектами. График можно подстроить под себя."
    },
    {
      question: "Что если у меня не получится?",
      answer: "Вы получите полную поддержку на каждом этапе. Я лично проверяю все задания, отвечаю на вопросы и помогаю преодолеть трудности. Вы точно не останетесь один на один с проблемами."
    },
    {
      question: "Когда начинается обучение?",
      answer: "Старт индивидуальный, после прохождения отбора. Это позволяет уделить максимум внимания каждому ученику и подстроить программу под ваши потребности."
    },
    {
      question: "Могу ли я учиться, если работаю полный день?",
      answer: "Конечно! Все материалы доступны в записи, а индивидуальные занятия мы проводим в удобное для вас время. Многие студенты успешно совмещают курс с основной работой."
    },
    {
      question: "Гарантируете ли вы трудоустройство?",
      answer: "Я даю все инструменты для поиска клиентов и трудоустройства, помогаю с составлением портфолио и стратегией продвижения. Многие ученики находят первых заказчиков еще во время обучения."
    },
    {
      question: "Есть ли рассрочка оплаты?",
      answer: "Да, возможна рассрочка. Детали обсуждаем индивидуально при подаче заявки. Главное — ваше желание учиться, а условия оплаты всегда можно найти удобные."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Вопросы и ответы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на самые частые вопросы о курсе
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-black text-gray-900 pr-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
                    {faq.question}
                  </h3>
                  {openQuestion === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#7d91b2' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#7d91b2' }} />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;