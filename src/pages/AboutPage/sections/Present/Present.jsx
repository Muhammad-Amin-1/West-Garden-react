import "./Present.scss";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import lecha from "@/assets/images/present-lecha.png";

export default function Present() {

  return (
    <Section className="section-present">
      <div className="present">
        <div className="present__main">
          <div className="present__header">
            <div className="present__header-text">
              <p>СПЕЦИАЛЬНО ДЛЯ ВАС</p>
            </div>
            <Title align="left" weight="bold" className="present__header-title">
              Персональная экскурсия по локации
            </Title>
          </div>
          <div className="present__body">
            <ul className="present__list">
              <li className="present__list-item">
                Прогуляетесь по благоустроенной набережной
              </li>
              <li className="present__list-item">
                Ознакомитесь со всеми планировками и ценами
              </li>
              <li className="present__list-item">
                Узнаете актуальную информацию о ходе строительства
              </li>
            </ul>
            <div className="present__form">
              <div className="present__form-title">
                <p>Закрепить за номером</p>
              </div>
              <div className="present__form-data">
                <input
                  placeholder="+7 (___) ___-__-__"
                  type="text"
                  className="present__form-input"
                />
                <Button>Записаться на экскурсию</Button>
              </div>
              <div className="present__form-text">
                <p>
                  Нажимая на кнопку, вы даёте согласие на обработку персональных
                  данных и соглашаетесь c политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="present__img">
          <img className="present__img-image" src={lecha} alt="" />
          <div className="present__img-text">
            <h3>Дмитрий Небросов</h3>
            <p>ведущий эксперт по недвижимости в ESTES</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
