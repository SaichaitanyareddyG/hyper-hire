"use client";

import { useEffect, useState } from 'react';
import Layout from './components/layout';
import LeftSide from './components/organisms/LeftSide';
import MovingArray from './components/molecules/MovingArray';
import RightSide from './components/organisms/RightSide';

interface Card {
  imageSrc: string;
  name: string;
  role: string;
  description: string[];
}

const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/sampleData'); // Adjust as needed
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Card[] = await res.json();
        setCardData(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const movingArray = [
    { img: '/market.png', description: '해외 마케팅' },
    { img: '/image.png', description: '퍼블리셔' },
    { img: '/rhombus.png', description: '캐드원(제도사)' },
    { img: 'target.png', description: '해외 세일즈' },
    { img: 'call.png', description: '영업팀에 문의' },
  ];

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <section className="mx-auto p-4">
        <div className="flex flex-col md:flex-row lg:ml-16 items-center space-x-0 md:space-x-4 gap-4 mt-4">
          <LeftSide />
          <RightSide cardData={cardData} />
        </div>

        <div className="flex justify-start ml-16 mt-4">
          <MovingArray items={movingArray} />
        </div>

        <div className={`p-4 rounded-lg flex-1 md:hidden`}>
        <a 
  href="https://your-link.com" 
  className="font-poppins text-[18px] text-[#FBFF23] lg:text-[#FFFFFF] font-[900] leading-[27px] text-left underline decoration-solid" 
  style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}
>
  개발자가 필요하신가요?
</a>
        </div>
        <div className={`p-4 rounded-lg flex-1 md:hidden`}>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2 flex items-center">
              <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
              <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                한국어 능력
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
              <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
              <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                업무 수행 능력
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
              <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
              <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                겸업 여부
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
              <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
              <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                평판 조회
              </p>
            </div>
          </div>
          </div>
      </section>
    </Layout>
  );
};

export default Home;
