import "./Footer.scss";
import arrowIcon from "@/assets/svg/logo.svg";
import westGardenIcon from "@/assets/svg/logo-2.svg";
import footerImg from "@/assets/images/footer-photo.png";
import Container from "@/components/layout/Container/Container";
import Title from "@/components/ui/Title/Title";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__header">
            <div className="footer__title">
              <Title size="m">
                Жилой комплекс «West Garden» — <br />все преимущества жизни на природе
              </Title>
            </div>
            <img src={westGardenIcon} alt="westGardenIcon" />
          </div>
          <div className="footer__body">
            <div className="footer__body-info">
              <div className="footer__body-logo">
                <img src={arrowIcon} alt="" width="196" height="40" />
                <div className="footer__body-logo-text">
                  <p>Эксперты недвижимости</p>
                </div>
              </div>
              <div className="footer__body-and">
                <div className="footer__body-text">
                  <p>Офис продаж</p>
                  <p>Москва, Локал наб. 2/4, строение 17, офис 308</p>
                </div>
                <div className="footer__body-text">
                  <p>Телефон</p>
                  <p>+7 495 805 19 34</p>
                </div>
              </div>
            </div>
            <div className="footer__img">
              <img src={footerImg} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
