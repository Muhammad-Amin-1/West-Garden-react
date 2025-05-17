import "./Lobbi.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import Lobbi1 from "@/assets/images/lobbi-img-1.jpg";
import Lobbi2 from "@/assets/images/lobbi-img-2.jpg";
import Lobbi3 from "@/assets/images/lobbi-img-3.jpg";
import Lobbi4 from "@/assets/images/lobbi-img-4.jpg";

export default function Lobbi() {
  return (
    <Section>
      <Title weight="bold" size="xl" className="lobbi__title">
        Современная эстетика лобби
      </Title>
      
      <div className="lobbi lobbi-mb">
        <div className="lobbi__card">
          <div className="lobbi__card-header">
            <Title tag="h3" size="l" align="left">
              Центральные входные группы
            </Title>
            <ul className="lobbi__card-list">
              <li className="lobbi__card-list-item">Зоны ожидания и встреч</li>
              <li className="lobbi__card-list-item">Пост охраны</li>
              <li className="lobbi__card-list-item">Переговорная комната</li>
              <li className="lobbi__card-list-item">Колясочная</li>
            </ul>
          </div>
          <div className="lobbi__card-img">
            <div className="">
              <img src={Lobbi1} alt="" />
            </div>
            <div className="">
              <img src={Lobbi2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lobbi">
        <div className="lobbi__card">
          <div className="lobbi__card-header">
            <Title tag="h3" size="l" align="left">
              Центральные входные группы
            </Title>
            <ul className="lobbi__card-list">
              <li className="lobbi__card-list-item">Зоны ожидания и встреч</li>
              <li className="lobbi__card-list-item">Пост охраны</li>
              <li className="lobbi__card-list-item">Переговорная комната</li>
              <li className="lobbi__card-list-item">Колясочная</li>
            </ul>
          </div>
          <div className="lobbi__card-img">
            <div className="">
              <img src={Lobbi3} alt="" />
            </div>
            <div className="">
              <img src={Lobbi4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
