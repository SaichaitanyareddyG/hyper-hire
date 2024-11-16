"use client"
import React, { useEffect, useState } from 'react';

type MovingArrayProps = {
  items: { img: string; description: string }[];
};

const MovingArray: React.FC<MovingArrayProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 300ms delay

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={` ${isVisible ? 'fade-in-delay' : 'opacity-0'}moving-container mt-16  max-w-full overflow-hidden hidden md:block`}>
      <div
        className="moving-divs"
        style={{
          transform: `translateX(-${currentIndex * 332}px)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="moving-div bg-[#FFFFFF33] w-[400px] h-[66px] p-4 rounded-tl-lg flex items-center gap-6 mx-4"
          >
            <img src={item.img} alt={`Image ${index + 1}`} className="w-12 h-12 rounded-full" />
            <p className="font-poppins text-[16px] font-[900] leading-[24px] text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingArray;