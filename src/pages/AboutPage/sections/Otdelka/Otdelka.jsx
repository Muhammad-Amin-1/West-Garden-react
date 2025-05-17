import "./Otdelka.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import { otdelkaData } from "@/data/about/sectionOtdelkaData.js";

export default function Lobbi() {
  return (
    <Section className="section-otdelka">
      <Title weight="bold" size="xl" className="otdelka__title">
      Отделка от застройщика 
      </Title>
      <div className="otdelka__text">
        <p>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
      </div>
      <div className="otdelka">
        {otdelkaData.map((card) => (
          <div className="otdelka__card" key={card.id}>
            <div className="otdelka__card-content">
              <Title tag="h3" size="m" align="left" size="s">
                {card.title}
              </Title>
              <div className="otdelka__card-text">
              {card.text}
              </div>
            </div>
            <div className="otdelka__card-img">
              <img src={card.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
