import HeroIcon from "@/assets/svg/logo-2.svg";
import decor1 from "@/assets/svg/decor1.svg";
import HeroIconDop from "@/assets/svg/hero-svg-dop.svg";
import Title from "@/components/ui/Title/Title";
import "./Hero.scss";
import HeroImg from "@/assets/images/Hero-img-desktop.jpg";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="Hero__head">
        <img src={HeroIcon} alt="" width="214" height="40" />
        <div className="Hero__title">
          <Title tag="h1" size="xxl" weight="bold">
            Жизнь в зеленом оазисе <br /> в статусном районе Москвы
          </Title>
        </div>
        <div className="Hero__head-text">
          <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
          <img src={decor1} alt="" />
        </div>
      </div>
      <div
        className="Hero__body"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="Hero__dop-img">
          <img src={HeroIconDop} alt="" />
          <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <div className="Hero__inner">
          <p className="Hero__inner-text">
            <span>1 очередь</span>
            <span>2022</span>
          </p>
          <p className="Hero__inner-text">
            <span>2 очередь</span>
            <span>2023</span>
          </p>
        </div>
      </div>
    </section>
  );
}
