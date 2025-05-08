import "./header.scss";
import arrowIcon from "@/assets/svg/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <a href="">
          <img src={arrowIcon} alt="logo" />
        </a>
        <div className="header__text">
          <p>
            Официальный партнер<br></br> АО «КККК»
          </p>
        </div>
      </div>
      <div className="header__right">
        <button className="header__btn">
          <a href="">Выбрать квартиру</a>
        </button>
        <div className="header__contact">
          <p>+7495 845 1934</p>
        </div>
      </div>
    </div>
  );
}
