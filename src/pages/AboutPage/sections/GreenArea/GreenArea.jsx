import "./GreenArea.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import greenImage from "@/assets/images/greenCard.png";
import greenIcon from "@/assets/svg/greenIcon.svg";

export default function GreenArea() {
  return (
    <Section className="section-greenArea">
      <div className="greenArea">
        <div className="greenArea__header">
          <div className="greenArea__header-text">Престижное расположение</div>
          <Title size="xl" weight="bold">
            Один из самых зелёных <br /> районов столицы — Раменки
          </Title>
        </div>
        <div className="greenArea__body">
          <img src={greenImage} alt="" />
          <div className="greenArea__body-text">
            <p>
              ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки
              и природным заказником «Долина реки Сетунь»
            </p>
          </div>
          <div className="greenArea__body-icon">
            <img src={greenIcon} alt="" />
            <p>Панорама района 360˚</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
