import "./Compleks.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import HeroSlider from "@/components/slider/slider";
import Container from "@/components/layout/Container/Container";
import popapTop from "@/assets/images/popap-top-img-1.png"
import popapBottom from "@/assets/images/popap-bottom-img-2.png"
import complekssvg1 from "@/assets/svg/complekssvg1.svg";
import complekssvg2 from "@/assets/svg/complekssvg2.svg";

import { slideTop } from "@/data/slidesData/slidesData.js";
import { slideAnd } from "@/data/slidesData/slidesData.js";
import { useModal } from "@/hooks/useModal";


export default function Compleks() {
  const { openModal } = useModal();

  return (
    <div className="section-compleks">
      <Container>
        <Title weight="bold" size="xl" className="compleks__title">
          Жилой комплекс состоит из двух кластеров
        </Title>
      </Container>
      <div className="compleks">
        <div className="compleks__top">
          <Container>
            <div className="compleks__header">
              <div className="compleks__header-title">
                <Title weight="bold" size="xl" className="">
                  River Line
                </Title>
                <img src={complekssvg1} alt="" />
              </div>
              <div className="compleks__header-body">
                <div className="compleks__header-text">
                  <p>
                    Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки
                    Раменки
                  </p>
                </div>
                <Button
                  color="white"
                  onClick={() =>
                    openModal({
                      title: "Получите подробное описание и цены на свободные планировки в кластере River Line!",
                      image: popapTop,
                      color: 'blue'
                    })
                  }
                >
                  Посмотреть планировки
                </Button>
              </div>
            </div>
          </Container>
          <HeroSlider slides={slideTop} sideCrop={0.5} />
        </div>

        <div className="compleks__end">
          <Container>
            <div className="compleks__header">
              <div className="compleks__header-title">
                <Title weight="bold" size="xl" className="">
                Park Line
                </Title>
                <img src={complekssvg2} alt="" />
              </div>
              <div className="compleks__header-body">
                <div className="compleks__header-text">
                  <p>
                  Семь 14-этажных жилых корпусов,  расположенных вдоль Матвеевского леса
                  </p>
                </div>
                <Button color="white" onClick={() =>
                    openModal({
                      title: "Получите подробное описание и цены на свободные планировки в кластере River Line!",
                      image: popapBottom,
                    })
                  }>Посмотреть планировки</Button>
              </div>
            </div>
          </Container>
          <HeroSlider slides={slideAnd} sideCrop={0.5} />
        </div>
      </div>
    </div>
  );
}
