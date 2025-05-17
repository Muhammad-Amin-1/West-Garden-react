import "./Developer.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import developer1 from "@/assets/images/developer-img.jpg";
import developer2 from "@/assets/images/developer-img-2.png";

export default function Developer() {
  return (
    <Section className="section-developer">
      <div className="developer-img">
        <img src={developer1} alt="" />
        <div className="developer">
          <div className="developer__left">
            <div className="developer__left-header">
              <Title size="l" weight="bold" align="left">
                Девелопер
                <br /> ИНТЕКО
              </Title>
              <p>
                Реализует лучшие проекты в сфере недвижимости на основе анализа
                и прогноза предпочтений человека
              </p>
            </div>
            <ul className="developer__left-list">
              <li className="developer__left-list-item">
                <Title align="left" tag="h3" size="s">
                  20 лет
                </Title>
                <p>на рынке недвижимости Москвы и регионов</p>
              </li>
              <li className="developer__left-list-item">
                <Title align="left" tag="h3" size="s">
                  80+ проектов
                </Title>
                <p>жилых домов сдано в Москве</p>
              </li>
              <li className="developer__left-list-item">
                <Title align="left" tag="h3" size="s">
                  5 000 000 м²
                </Title>
                <p>общая площадь готовых объектов</p>
              </li>
              <li className="developer__left-list-item">
                <Title align="left" tag="h3" size="s">
                  500 сотрудников
                </Title>
                <p>в штате компании</p>
              </li>
            </ul>
          </div>
          <div className="developer__right">
            <Title align="left" tag="h3" size="s">
            Документы West Garden
            </Title>
            <p>Проектная документация</p>
            <p>Разрешение на строительство</p>
            <p>Проектная декларация (1 очередь)</p>
            <p>Проектная декларация (2 очередь)</p>
          </div>
        </div>
      </div>
      <div className="developer__big-img">
        <Title size="xl" weight="bold">Самые выгодные условия <br /> Исламской расрочки от 20 банков</Title>
        <img src={developer2} alt="" />
      </div>
    </Section>
  );
}
