import "../styles/global.css";
import "../styles/header.css";
import Hert from "../../images/image_2022_12_24T22_33_54_463Z.png";
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
			<img src={Hert} alt="logo" className="header__img"></img>
			<ul className="header__menu">
				{arrMenuElements.map((item) => (
					<li key={item.toString()} className="header__item">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Header;
