"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  imageSrc: string;
  name: string;
  role: string;
  description: string[];
}

interface StaggeredCardCarouselProps {
  cards: Card[];
}

const StaggeredCardCarousel: React.FC<StaggeredCardCarouselProps> = ({cards}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const rotateLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-14 h-auto flex items-center justify-center">
      <div className={`absolute left-1/2 mb-[515px] -translate-x-1/2 z-30 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
        <div className="bg-white rounded chat-bubble-dollar px-6 py-2 shadow-lg flex items-center space-x-4">
          <span className="text-emerald-500 text-xl">$</span>
          <span className="text-emerald-500 text-xl">월100만원</span>
        </div>
      </div>

      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {cards.map((card, index) => {
          let position = (index - activeIndex + cards.length) % cards.length;
          let style = {};
          let containerClass = "absolute transition-all duration-500 ease-in-out";

          if (isMobile) {
            if (position === 0) {
              style = {
                transform: 'translateX(-100%) scale(0.92)',
                zIndex: 1,
                opacity: 1,
                width: '180px',
                left: '60%',
                height: 'auto',
              };
            } else if (position === 1) {
              style = {
                transform: 'translateX(-50%) scale(1)',
                left: '50%',
                zIndex: 2,
                opacity: 1,
                width: '220px',
                height: '350px',
              };
            } else {
              style = {
                transform: 'translateX(0%) scale(0.92)',
                zIndex: 1,
                opacity: 1,
                width: '180px',
                left: '40%',
                height: 'auto',
              };
            }
          } else {
            if (position === 0) {
              style = {
                transform: 'translateX(-100%) scale(0.92)',
                zIndex: 1,
                opacity: 1,
                width: '360px',
                left: '60%',
                height: 'auto'
              };
            } else if (position === 1) {
              style = {
                transform: 'translateX(-50%) scale(1)',
                left: '50%',
                zIndex: 2,
                opacity: 1,
                width: '320px',
                height: '419px'
              };
            } else {
              style = {
                transform: 'translateX(0%) scale(0.92)',
                zIndex: 1,
                opacity: 1,
                width: '360px',
                left: '40%',
                height: 'auto'
              };
            }
          }

          // Add navigation buttons within the card containers for left and right cards
          const isLeftCard = position === 0;
          const isRightCard = position === 2;

          return (
            <div key={index} className={containerClass} style={style}>
              {isLeftCard && (
                <button
                  onClick={rotateLeft}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 p-3 transition-all"
                  style={{ left: '-20%' }}
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )}
              
              <div className="bg-white rounded-3xl shadow-xl p-4 md:p-9 h-full transition-all duration-500">
                <div className="text-center">
                  <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                    <img
                      src={card.imageSrc}
                      alt={card.name}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto relative z-10"
                    />
                  </div>
                  <h2 className="font-poppins text-[18px] md:text-[24px] leading-[27px] md:leading-[36px] text-center font-[900] text-black">
                    {card.name}
                  </h2>
                  <p className="font-poppins text-[14px] md:text-[16px] font-black leading-[21px] md:leading-[24px] text-center text-blue-500">
                    {card.role}
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-2">
                  {card.description.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg border border-gray-300 ${
                        idx < 2 ? 'col-span-2' : 'col-span-1'
                      }`}
                    >
                      <p className="text-center text-gray-700 text-[12px] md:text-[14px] font-black">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {isRightCard && (
                <button
                  onClick={rotateRight}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 z-30 p-3 transition-all"
                  style={{ right: '-20%' }}
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaggeredCardCarousel;