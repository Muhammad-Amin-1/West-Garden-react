import "./Variant.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import { useModal } from "@/hooks/useModal";
import popapTop from "@/assets/images/popap-top-img-1.png"
import popapBottom from "@/assets/images/popap-bottom-img-2.png"


import Variant1 from "@/assets/images/Variant-img-1.jpg";
import Variant2 from "@/assets/images/Variant-img-2.jpg";
import Variant3 from "@/assets/images/Variant-img-3.jpg";
import Variant4 from "@/assets/images/Variant-img-4.jpg";
import Variant5 from "@/assets/images/Variant-img-5.jpg";
import Variant6 from "@/assets/images/Variant-img-6.jpg";
import Variant7 from "@/assets/images/Variant-img-7.jpg";
import Variant8 from "@/assets/images/Variant-img-8.jpg";

export default function Lobbi() {
  const { openModal } = useModal();
  return (
    <Section>
      <Title weight="bold" size="xl" className="variant__title">
        2 варианта отделки
      </Title>
      <div className="variant">
        <div className="variant__card">
          <div className="variant__card-header">
            <Title tag="h3" size="l" align="left">
              Светлая отделка
            </Title>
            <Button
              onClick={() =>
                openModal({
                  title: "Получите дизайн-буклет с подробным описанием отделки тёмного интерьера!",
                  image: popapBottom,
                  color: 'white'
                })
              }
            >
              Скачать дизайн-буклет
            </Button>
          </div>
          <div className="variant__card-img">
            <div className="">
              <img src={Variant1} alt="" />
            </div>
            <div className="">
              <img src={Variant2} alt="" />
            </div>
          </div>
          <div className="variant__card-img">
            <div className="">
              <img src={Variant3} alt="" />
            </div>
            <div className="">
              <img src={Variant4} alt="" />
            </div>
          </div>
        </div>
        <div className="variant__card">
          <div className="variant__card-header">
            <Title tag="h3" size="l" align="left">
              Светлая отделка
            </Title>
            <Button
            onClick={() =>
              openModal({
                title: "Получите дизайн-буклет с подробным описанием отделки тёмного интерьера!",
                image: popapTop,
                color: 'black'
              })
            }
            >Скачать дизайн-буклет</Button>
          </div>
          <div className="variant__card-img">
            <div className="">
              <img src={Variant5} alt="" />
            </div>
            <div className="">
              <img src={Variant6} alt="" />
            </div>
          </div>
          <div className="variant__card-img">
            <div className="">
              <img src={Variant7} alt="" />
            </div>
            <div className="">
              <img src={Variant8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
