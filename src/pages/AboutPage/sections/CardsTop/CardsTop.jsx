import "./CardsTop.scss";
import Section from "@/components/layout/Section/Section";
import { cardsTop } from "@/data/about/cardsTopData.js";

export default function CardsTop() {
  return (
    <Section className="section-cardTop">
      <div className="cardTop">
        {cardsTop.map((card) => (
          <div className="cardTop__сard" key={card.id}>
            <img src={card.image} alt={card.title} />
            <div className="cardTop__content">
              <h3 className="cardTop__title">{card.title}</h3>
              <p className="cardTop__text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// <div className="" style={{backgroundImage: `url(${cardTop})`,}}>
//         <p>sadfl;kj</p>
//         <p>sadfl;kj</p>
//         <p>sadfl;kj</p>
//         <p>sadfl;kj</p>
//         <p>sadfl;kj</p>
//       </div>
