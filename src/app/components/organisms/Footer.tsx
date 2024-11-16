import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FBFBFB] flex justify-start items-center p-4 md:p-8 text-center h-auto md:h-[450px]">
      <div className="flex flex-col items-center lg:ml-7 md:items-start justify-center gap-8 md:gap-16">
        {/* Section 1 */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-28">
          {/* Logo and Contact */}
          <div className="flex flex-col space-y-5 md:space-y-8 md:w-1/3">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/footer-logo.png" // Replace with your logo path
                alt="Logo"
                className="w-[187px] h-[34px]" // Apply the specified styles
              />
              <p className="text-[#343741] w-[247px] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-center md:text-left">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <span className="text-[#5E626F] text-[13px] font-poppins font-[900]">
                010-0000-0000
              </span>
              <span className="text-[#5E626F] text-[13px] font-poppins font-[900]">
                aaaaa@naver.com
              </span>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:w-2/3">
            {[
              {
                src: "/code.png",
                title: "해외 개발자 원격 채용",
              },
              {
                src: "/contact.png",
                title: "외국인 원격 채용 (비개발)",
              },
              {
                src: "/KOR.png",
                title: "한국어 가능 외국인 채용",
              },
              {
                src: "/setting.png",
                title: "해외 개발자 활용 서비스",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex flex-col p-5"
              >
                <img src={item.src} alt="Logo" className="w-[40px] h-[40px]" />
                <p className="text-[#343741] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left">
                  {item.title}
                </p>
                <p className="text-[#5E626F] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left flex items-center gap-x-4">
                  바로가기
                  <button className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md transition-colors duration-200">
                    <img
                      src="/arrow-button.png"
                      alt="Arrow Right"
                      className="w-6 h-6"
                    />
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
          {[
            {
              label: "상호명",
              value1: "하이퍼하이어",
              value2: "Hyperhire India Private Limited",
            },
            {
              label: "대표 CEO",
              value1: "김주현",
              value2: "Juhyun Kim",
            },
            {
              label: "사업자등록번호 CIN",
              value1: "427-86-01187",
              value2: "U74110DL2016PTC290812",
            },
            {
              label: "주소 ADDRESS",
              value1: "서울특별시 강남대로 479, 지하 1층 238호",
              value2: "D-138, Street number 11, Jagjeet Nagar, New Delhi, 110053 India",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center md:items-start"
            >
              <p className="text-[#343741] font-poppins text-[12px] font-[900] leading-[18px] text-left">
                {item.label}
              </p>
              <p className="text-[#5E626F] font-poppins text-[13px] font-[900] leading-[18px] text-left">
                {item.value1}
              </p>
              <p className="text-[#343741] font-poppins text-[13px] font-[900] leading-[19.5px] text-left">
                {item.value2}
              </p>
            </div>
          ))}
        </div>
        {/* Copyright Section */}
        <div className=" flex justify-center md:justify-start">
          <p className="text-gray-600 font-extrabold font-poppins text-center md:text-left">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
