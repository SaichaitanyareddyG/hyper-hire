"use client"
import React, { useEffect, useState } from 'react';

const LeftSide: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, []);

  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible1(true);
    }, 100); // Delays the fade-in start by 100ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col space-y-4 w-full md:w-1/2">
      {/* Step 1 */}
      <div
          className={`relative lg:bg-[#E9F7EF] max-w-48  lg:text-[#40E2E8] text-[#40E2E8] bg-[#8BC4FF] rounded-lg p-4 shadow-md chat-bubble inline-block`}
        >
          풀타임, 파트타임
        </div>
      <div className={`p-4 rounded-lg ${isVisible ? 'fade-in-delay' : 'opacity-0'} w-full md:w-[721px]`}>
        <p className="font-poppins lg:text-[48px] text-[white] text-[36px] font-[900] lg:leading-[62.8px] leading-[62.8px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
          최고의 실력을 가진<br />
          외국인 인재를 찾고 계신가요?
        </p>
      </div>
      
      {/* Step 2 */}
      <div className="flex flex-col space-y-4">
        <div className={`relative p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
      
          <p className="font-poppins text-[white] text-[18px] md:text-[24px] font-[900] leading-[27px] md:leading-[34px] text-left underline decoration-transparent mt-4" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
            법률 및 인사관리 부담없이<br />
            1주일 이내에 원격으로 채용해보세요.
          </p>
        </div>
        <div className={`p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'} hidden md:block`}>
        <a 
  href="https://your-link.com" 
  className="font-poppins text-[18px] text-[#FBFF23] lg:text-[#FFFFFF] font-[900] leading-[27px] text-left underline decoration-solid" 
  style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
>
  개발자가 필요하신가요?
</a>
        </div>
      </div>
    
      {/* Step 3 - Hidden on Mobile */}
      <div
      className={`p-4 rounded-lg ${isVisible ? 'fade-in' : 'opacity-0'} hidden md:block`}
      style={{ width: '100%', maxWidth: '579px', height: '115px', gap: '48px' }}
    >
      <div className="flex flex-col md:flex-row text-[white] space-x-0 md:space-x-4 pt-4">
        <div className="flex-1">
          <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
            <div
              className={`font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent ${isVisible ? 'animate-fadeIn delay-0' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              평균 월 120만원
            </div>
            <div
              className={`font-poppins text-[16px] font-[900] leading-[24px] text-opacity-80 text-left underline decoration-transparent ${isVisible1 ? 'animate-fadeIn delay-100' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              임금을 해당 국가를 기준으로 계산합니다.
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
            <div
              className={`font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent ${isVisible1 ? 'animate-fadeIn delay-200' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              최대 3회 인력교체
            </div>
            <div
              className={`font-poppins text-[16px] font-[900] text-opacity-80 leading-[24px] text-left underline decoration-transparent ${isVisible1 ? 'animate-fadeIn delay-200' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              막상 채용해보니 맞지 않아도 걱정하지 마세요.
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
            <div
              className={`font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              평균 3일, 최대 10일
            </div>
            <div
              className={`font-poppins text-[16px] font-[900] text-opacity-80 leading-[24px] text-left underline decoration-transparent ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}
              style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
            >
              급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeftSide;