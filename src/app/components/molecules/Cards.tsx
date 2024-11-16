import React from 'react';

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string[];
}

const Cards: React.FC<CardProps> = ({ imageSrc, name, role, description }) => {
  return (
    <div className="card bg-white p-4 md:p-9 rounded-lg shadow-card flex flex-col">
      {/* Div 1: Image, Name, Role */}
      <div className="text-center">
        <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4">
          <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
          <img src={imageSrc} alt={name} className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto relative z-10" />
        </div>
        <h2 className="name-gradient font-poppins text-[18px] md:text-[24px] font-[900] leading-[27px] md:leading-[36px] text-center underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
          {name}
        </h2>
        <p className="font-poppins text-[14px] md:text-[16px] font-[900] leading-[21px] md:leading-[24px] text-center text-[#4A77FF] underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
          {role}
        </p>
      </div>
      {/* Div 2: Description */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {description.map((item, index) => (
          <div key={index} className={`p-2 rounded-lg border border-gray-300 ${index < 2 ? 'col-span-2' : 'col-span-1'}`}>
            <p className="text-center text-gray-700 text-[12px] md:text-[14px] font-[900]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;