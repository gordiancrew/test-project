import "../styles/global.css";
import "../styles/picture.css";
import "../styles/header.css";
import pic1 from "../../images/Rectangle1.png";
import pic2 from "../../images/Rectangle2.png";
import pic3 from "../../images/Rectangle3.png";
import pic4 from "../../images/Rectangle4.png";
import logWhite from "../../images/log_white.png";
import { useEffect, useState } from "react";
let count = 0;

const arraySliders = [pic1, pic2, pic3, pic4];
const arrMenuElements = [
	"Главная",
	"Сервера",
	"Открыть в браузере",
	"Скачать",
	"Цены",
	"Тех поддержка",
	"Контакты",
];
function Picture() {
	const [burgerActive, setBurgerActive] = useState(false);
	const classBurgerMenu = burgerActive ? "burger-menu active" : "burger-menu";
	const [sliderImage, setSliderImage] = useState(pic1);

	useEffect(() => {
		setTimeout(() => {
			count++;
			setSliderImage(arraySliders[count % 4]);
			console.log(count);
		}, 3000);
	}, [sliderImage]);

	return (
		<div className="picture">
			<img src={logWhite} className="picture__log-white"></img>
			<div className="picture__block-upgrate">UPGRADE</div>

			<div className="picture__frame">
				<div
					className="picture__burger"
					onClick={() => setBurgerActive(!burgerActive)}>
					||
				</div>
				<ul className={classBurgerMenu}>
					{/* <div className="burger__item"> Главная </div>
					<div className="burger__item"> Сервера </div>
					<div className="burger__item">Открыть в браузере </div>
					<div className="burger__item"> Скачать </div>
					<div className="burger__item"> Открыть в браузере </div>
					<div className="burger__item"> Цены </div>
					<div className="burger__item"> Тех поддержка </div>
					<div className="burger__item">Контакты </div> */}


          {arrMenuElements.map((item)=><li className="burger__item">{item}</li>)}
				</ul>
				<img src={sliderImage} className="picture__img"></img>
				<div className="picture__text-little">Сервис облачного гейминга</div>
				<div className="picture__text">Преврати свое устройство в игровое</div>
			</div>
		</div>
	);
}
export default Picture;
