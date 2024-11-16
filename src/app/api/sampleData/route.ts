import { NextResponse } from 'next/server';
 interface Card {
    imageSrc: string;
    name: string;
    role: string;
    description: string[];
  }
  
  export async function GET() {
    const sampleData: Card[] = [
      {
        imageSrc: 'bg-img.png',
        name: 'Abhishek Gupta',
        role: '마케팅 - 2y+',
        description: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        imageSrc: 'bg-img.png',
        name: 'Jane Doe',
        role: '개발자 - 3y+',
        description: ['프론트엔드 개발', '백엔드 개발', '데이터베이스 관리', 'API 통합'],
      },
      {
        imageSrc: 'bg-img.png',
        name: 'John Smith',
        role: '디자이너 - 4y+',
        description: ['UI/UX 디자인', '그래픽 디자인', '프로토타이핑', '사용자 테스트'],
      },
      {
        imageSrc: 'bg-img.png',
        name: 'Emily Johnson',
        role: '프로젝트 매니저 - 5y+',
        description: ['프로젝트 계획', '팀 관리', '리소스 할당', '위험 관리'],
      },
    ];
  
    return NextResponse.json(sampleData);
  }