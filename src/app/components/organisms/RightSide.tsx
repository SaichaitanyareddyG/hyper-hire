import StaggeredCardCarousel from './Slide'
interface Card {
    imageSrc: string;
    name: string;
    role: string;
    description: string[];
  }
  interface RightSideProps {
    cardData: Card[];
  }
const RightSide: React.FC<RightSideProps> = ({ cardData }) => {

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden">
       <StaggeredCardCarousel cards={cardData} />
    </div>
  );
};

export default RightSide;