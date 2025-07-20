import React from 'react';
import { Heart, Coffee, Lightbulb, Target } from 'lucide-react';

const ForWho: React.FC = () => {
  const audiences = [
    {
      icon: <Heart className="w-8 h-8" style={{ color: '#7d91b2' }} />,
      title: "Вы в декрете и хотите начать зарабатывать из дома",
      description: "Идеальная возможность начать карьеру, не выходя из дома"
    },
    {
      icon: <Coffee className="w-8 h-8" style={{ color: '#7d91b2' }} />,
      title: "Хотите сменить нелюбимую работу на творческую и свободную профессию",
      description: "Переходите в сферу, где можно проявить креативность"
    },
    {
      icon: <Lightbulb className="w-8 h-8" style={{ color: '#7d91b2' }} />,
      title: "Никогда не работали в СММ, но чувствуете интерес и желание расти",
      description: "Начните с нуля и станьте профессионалом"
    },
    {
      icon: <Target className="w-8 h-8" style={{ color: '#7d91b2' }} />,
      title: "Боишься, что не получится — а на самом деле ты просто не пробовала системно",
      description: "Получите систему и поддержку для достижения цели"
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase" style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}>
              Для кого это обучение?
            </h2>
            <p className="text-xl text-white opacity-90">
              Курс создан специально для тех, кто хочет начать карьеру в СММ
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {audiences.map((item, index) => (
              <div key={index} className="card">
                <div className="text-center flex flex-col h-full">
                  <div className="card-icon">
                    {React.cloneElement(item.icon, { className: 'w-6 h-6', style: { color: '#7d91b2' } })}
                  </div>
                  <h3
                    className="text-xs md:text-sm font-bold text-gray-900 mb-2 leading-tight"
                    style={{ fontFamily: 'Good Times Grotesk, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                    {item.description}
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

export default ForWho;