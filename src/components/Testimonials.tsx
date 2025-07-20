import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Анна Петрова",
      niche: "Фитнес-блогер",
      before: "Не понимала, как превратить подписчиков в клиентов",
      after: "Увеличила доход от онлайн-тренировок в 3 раза за 2 месяца",
      photo: "bg-blue-200",
      text: "Полина объясняет сложные вещи простым языком. Особенно помогли модули по продажам и аналитике. Теперь я точно знаю, что работает, а что нет."
    },
    {
      name: "Мария Сидорова",
      niche: "Мама в декрете",
      before: "Хотела работать из дома, но не знала с чего начать",
      after: "Нашла первых клиентов уже во время обучения, сейчас веду 3 аккаунта",
      photo: "bg-indigo-200",
      text: "Курс дал мне уверенность и структуру. Благодаря поддержке Полины я не бросила на полпути и довела до результата. Очень рекомендую!"
    },
    {
      name: "Елена Иванова",
      niche: "Салон красоты",
      before: "Вела соцсети интуитивно, результат был непредсказуемым",
      after: "Систематизировала процессы, клиентский поток стал стабильным",
      photo: "bg-slate-200",
      text: "Самое ценное — это практические инструменты. Каждый урок можно сразу применить к своему бизнесу. Вложения окупились уже в первый месяц."
    },
    {
      name: "Ольга Смирнова",
      niche: "Косметолог",
      before: "Клиенты приходили только по сарафанному радио",
      after: "Запись на месяц вперед благодаря правильному СММ",
      photo: "bg-sky-200",
      text: "Полина научила меня не просто постить красивые картинки, а создавать контент, который продает. Результат превзошел все ожидания!"
    },
    {
      name: "Татьяна Волкова",
      niche: "Психолог",
      before: "Боялась продавать свои услуги в соцсетях",
      after: "Набираю клиентов через Instagram, записи расписаны на 2 недели",
      photo: "bg-cyan-200",
      text: "Курс помог мне преодолеть страх продаж и найти свой голос в соцсетях. Теперь клиенты сами ко мне обращаются!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Получаем видимые слайды для разных размеров экрана
  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = testimonials.length;
    
    // На мобильных - 1 слайд, на планшетах - 2, на десктопе - 3
    const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % totalSlides;
      slides.push(testimonials[index]);
    }
    
    return slides;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener('resize', handleResize);
    setVisibleSlides(getVisibleSlides());
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Отзывы учеников
            </h2>
            <p className="text-xl text-gray-600">
              Реальные истории успеха наших выпускников
            </p>
          </div>
          
          {/* Карусель */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Контейнер слайдов */}
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleSlides.map((testimonial, index) => (
                  <div 
                    key={`${currentSlide}-${index}`}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${testimonial.photo} rounded-full mr-4 flex items-center justify-center`}>
                        <div className="w-12 h-12 bg-white rounded-full opacity-50"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.niche}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 mb-4" style={{ color: '#7d91b2' }} />
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
                        <span className="text-red-600 font-medium">ДО: </span>
                        <span className="text-gray-700">{testimonial.before}</span>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
                        <span className="text-green-600 font-medium">ПОСЛЕ: </span>
                        <span className="text-gray-700">{testimonial.after}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Кнопки навигации */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 transition-colors" style={{ color: '#7d91b2' }} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 transition-colors" style={{ color: '#7d91b2' }} />
            </button>
          </div>
          
          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8' 
                    : 'hover:bg-gray-400'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#7d91b2' : '#d1d5db'
                }}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Счетчик */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} из {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;