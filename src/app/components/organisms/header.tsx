"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Dropdown = dynamic(() => import('../atoms/Dropdown'), { ssr: false });

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);



  const dropdownOptions = [
    { value: 'option1', label: '채용' },
    { value: 'option2', label: '해외 개발자 원격 채용' },
    { value: 'option3', label: '외국인 원격 채용 (비개발 직군)' },
    { value: 'option4', label: '한국어 가능 외국인 채용' },
  ];

  const defaultOption = dropdownOptions[0];

  return (
    <nav className="flex justify-around items-center p-4 text-white relative">
      {/* Logo Container */}
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-[114px] h-[21px]"
        />
      </div>

      {/* Dropdown and Text - Hidden on Mobile */}
      <div className="hidden md:flex items-center space-x-8">
        <Dropdown options={dropdownOptions} defaultValue={defaultOption} />
        <span
          className="font-poppins text-[16px] font-[900] leading-[24px] text-center"
        >
          해외 개발자 활용 서비스
        </span>
      </div>

      {/* Button - Hidden on Mobile */}
      <div className="hidden md:flex">
        <button className="w-[104px] h-[36px] bg-white text-gray-800 rounded-md flex items-center justify-center text-[#4A77FF] font-extrabold">
          문의하기
        </button>
      </div>

      {/* Menu Button - Visible on Mobile */}
      <div className="flex md:hidden">
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center space-y-4 p-4 md:hidden shadow-lg">
          <Dropdown options={dropdownOptions} defaultValue={defaultOption} />
          <span className="font-poppins text-[16px] font-[900] leading-[24px] text-center">
            해외 개발자 활용 서비스
          </span>
          <button className="w-[104px] h-[36px] bg-white text-gray-800 rounded-md flex items-center justify-center text-[#4A77FF] font-extrabold">
            문의하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;