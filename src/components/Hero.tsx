import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-start md:items-center">
      {/* Фоновое видео на весь блок */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        {/* Темный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Контент поверх видео */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase drop-shadow-lg"
              style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}
            >
              Освой <span className="text-[#7d91b2]">СММ с нуля</span> и начни зарабатывать онлайн
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Индивидуальный курс для новичков, которые хотят освоить профессию и получить первых заказчиков — даже без опыта
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onScrollToForm}
              className="
                inline-flex items-center
                px-8 py-4
                text-white font-semibold
                rounded-full
                transition-all duration-300 transform
                shadow-lg
                hover:scale-105 hover:shadow-xl
                bg-[#7d91b2] hover:bg-[#6b7fa0]
              "
            >
              Записаться на курс
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
