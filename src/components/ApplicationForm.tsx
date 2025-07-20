import React, { forwardRef } from 'react';
import { Send, Clock, User, MessageSquare, BookOpen, Target } from 'lucide-react';

const ApplicationForm = forwardRef<HTMLElement>((props, ref) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет интеграция с Google Forms
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section ref={ref} className="py-20" style={{ background: 'linear-gradient(to bottom right, #7d91b2, #6b7fa0)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Оставить заявку на обучение
            </h2>
            <p className="text-xl opacity-90">
              Заполните анкету, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" style={{ color: '#7d91b2' }} />
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all"
                    style={{
                      ':focus': {
                        borderColor: '#7d91b2',
                        boxShadow: `0 0 0 2px rgba(125, 145, 178, 0.2)`
                      }
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#7d91b2';
                      e.target.style.boxShadow = '0 0 0 2px rgba(125, 145, 178, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" style={{ color: '#7d91b2' }} />
                    Телеграм или WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#7d91b2';
                      e.target.style.boxShadow = '0 0 0 2px rgba(125, 145, 178, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="@username или +7xxxxxxxxxx"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Target className="w-4 h-4 inline mr-2" style={{ color: '#7d91b2' }} />
                  Почему вы хотите освоить СММ? *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all resize-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7d91b2';
                    e.target.style.boxShadow = '0 0 0 2px rgba(125, 145, 178, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Расскажите о ваших целях и мотивации..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" style={{ color: '#7d91b2' }} />
                  Сколько времени в неделю готовы уделять обучению? *
                </label>
                <select 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7d91b2';
                    e.target.style.boxShadow = '0 0 0 2px rgba(125, 145, 178, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Выберите вариант</option>
                  <option value="1-2">1-2 часа в неделю</option>
                  <option value="3-5">3-5 часов в неделю</option>
                  <option value="6-10">6-10 часов в неделю</option>
                  <option value="10+">Более 10 часов в неделю</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <BookOpen className="w-4 h-4 inline mr-2" style={{ color: '#7d91b2' }} />
                  Есть ли опыт работы в сфере СММ?
                </label>
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7d91b2';
                    e.target.style.boxShadow = '0 0 0 2px rgba(125, 145, 178, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Выберите вариант</option>
                  <option value="no">Нет опыта</option>
                  <option value="hobby">Вёл свои соцсети</option>
                  <option value="some">Небольшой опыт</option>
                  <option value="yes">Есть опыт работы</option>
                </select>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Что дальше?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✅ Мы рассмотрим вашу заявку в течение 24 часов</p>
                  <p>✅ Свяжемся с вами для короткого собеседования</p>
                  <p>✅ Обсудим детали программы и ответим на вопросы</p>
                  <p>✅ При взаимном желании определим дату старта</p>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(to right, #7d91b2, #6b7fa0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #6b7fa0, #5a6d8a)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #7d91b2, #6b7fa0)';
                }}
              >
                <Send className="mr-2 w-5 h-5" />
                Отправить анкету
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

ApplicationForm.displayName = 'ApplicationForm';

export default ApplicationForm;