import "../styles/global.css";
import "../styles/header.css";
import Her from "../../images/image_2022_12_24T22_33_54_463Z.png";
const arrMenuElements = [
	"Главная",
	"Сервера",
	"Открыть в браузере",
	"Скачать",
	"Цены",
	"Тех поддержка",
	"Контакты",
];

function Header() {
  return (
    <div className="header">
      <img
         src={Her}
        
        alt="logo"
        className="header__img"
      ></img>

      <div className="header__menu">
      {arrMenuElements.map((item) => (
						<div key={item.toString()} className="header__item">
							{item}
						</div>
					))}
      </div>
    </div>
  );
}
export default Header;
