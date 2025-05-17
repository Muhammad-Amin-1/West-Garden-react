import "./Format.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import { formatData } from "@/data/about/sectionFormatData.js";

export default function Lobbi() {
  return (
    <Section className="section-format">
      <Title weight="bold" size="xl" className="format__title">
        Более 100 свободных квартир <br /> редких форматов
      </Title>
      <div className="format">
        {formatData.map((card) => (
          <div className="format__card" key={card.id}>
            <div className="format__card-content">
              <Title tag="h3" size="m" align="left">
                {card.title}
              </Title>
              <div className="format__card-text">
              {card.text}
              </div>
              <a href="" className="format__card-link">
                Узнать стоимость
              </a>
            </div>
            <div className="format__card-img">
              <img src={card.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
