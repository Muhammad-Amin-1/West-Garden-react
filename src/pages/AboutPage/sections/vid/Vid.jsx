import "./Vid.scss";
import Title from "@/components/ui/Title/Title";
import HeroSlider from "@/components/slider/slider";
import Container from "@/components/layout/Container/Container";
import { slidVid  } from "@/data/slidesData/slidesData.js";


export default function Vid() {
  return (
    <div className="section-vid">
      <Container>
        <Title weight="bold" size="xl" className="vid__title">
          Наслаждайтесь видами
          <br /> из окон своей квартиры
        </Title>
      </Container>
      <div className="vid">
        <HeroSlider slides={slidVid} sideCrop={0.07}/>
      </div>
    </div>
  );
}
