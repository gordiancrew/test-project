import "../styles/global.css";
import "../styles/header.css";
import Her from "../../images/image_2022_12_24T22_33_54_463Z.png";

function Header() {
  return (
    <div className="header">
      <img
         src={Her}
        
        alt="logo"
        className="header__img"
      ></img>

      <div className="header__menu">
        <div className="header__item"> Главная </div>
        <div className="header__item"> Сервера </div>
        <div className="header__item">Открыть в браузере </div>
        <div className="header__item"> Скачать </div>
        <div className="header__item"> Открыть в браузере </div>
        <div className="header__item"> Цены </div>
        <div className="header__item"> Тех поддержка </div>
        <div className="header__item">Контакты </div>
      </div>
    </div>
  );
}
export default Header;
