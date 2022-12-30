import "../styles/global.css";
import "../styles/picture.css";
import "../styles/header.css";
import pic1 from "../../images/Rectangle1.png";
import pic2 from "../../images/Rectangle2.png";
import pic3 from "../../images/Rectangle3.png";
import pic4 from "../../images/Rectangle4.png";
import logWhite from "../../images/log_white.png";
let count = 1;

const arraySliders = [pic1, pic2, pic3, pic4];
function Picture() {
  // let newInt = setInterval(function () {
  //   clearInterval(newInt);
  // }, 10);
  function burgerGo() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu?.classList.toggle('active');
  }

  setInterval(() => {
    count++;
    let imga = document.querySelector(".picture__img") as HTMLImageElement;
    imga.src = arraySliders[count < 4 ? count : count % 4];
    console.log(count);
  }, 3000);

  return (
    <div className="picture">
      <img src={logWhite} className="picture__log-white"></img>
      <div className="picture__block-upgrate">UPGRADE</div>
      <div className="picture__burger" onClick={burgerGo}><div className="picture__burger-up">|</div>
        <div className="picture__burger-down">|</div>
      </div>
      <div className="picture__frame">
        <div className='burger-menu'>
          <div className="burger__item"> Главная </div>
          <div className="burger__item"> Сервера </div>
          <div className="burger__item">Открыть в браузере </div>
          <div className="burger__item"> Скачать </div>
          <div className="burger__item"> Открыть в браузере </div>
          <div className="burger__item"> Цены </div>
          <div className="burger__item"> Тех поддержка </div>
          <div className="burger__item">Контакты </div>


        </div>
        <img src={pic2} className="picture__img"></img>
        <div className="picture__text-little">Сервис облачного гейминга</div>
        <div className="picture__text">Преврати свое устройство в игровое</div>
      </div>
    </div>
  );
}
export default Picture;
