import "../styles/global.css";
import "../styles/content.css";
import server from "../../images/ImageServerHost.png";
import iconApple from "../../images/icons/Apple.png";
import iconDownload from "../../images/icons/Download.png";
import iconLibrary from "../../images/icons/Library.png";
import iconMail from "../../images/icons/Mail.png";
import { Link } from "react-router-dom";

function Content() {
  //   let button2=document.querySelector('.button2') as HTMLButtonElement;
  //   button2.onclick=function(){
  // alert('hello');
  //   }

  function test() {
    window.location.href = "registration";
  }

  return (
    <div className="content">
      <div className="content__section1">
        <div className="content__section1-left">
          <img src={server} className="content__section-left-img"></img>
        </div>
        <div className="content__section1-right">
          <div className="content__text-step1">
            <div className="content__step1-linia linia"></div>
            <div className="content__text1">Облачный гейминг</div>
          </div>
          <div className="content__text2">Как это работает?</div>
          <div className="content__text3">
            Наши сервера запускают игру, и передают вам картинку, которой вы
            можете управлять в реальном времени!
          </div>
          <div className="content__linia2"></div>
          <div className="content__text3">
            Приложение запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и
            доступом в интернет от 15 мбит/с на всех операционых системах
            Windows 7, 8, 10 MacOS и Linux .
          </div>

          <div className="content__text4">Загрузить</div>
          <div className="content__linia3"></div>
        </div>
      </div>
      <div className="content__section2">
        <div className="content__text-step1">
          <div className="content__step1-linia linia"></div>
          <div className="content__text1">Быстрый старт</div>
        </div>
        <div className="content__text2">Начни играть</div>
      </div>
      <div className="content__section3">
        <div className="content__section3-step1">
          <div className="content__section3-step1-part">
            <div className="content__section3-box">
              <img src={iconMail} className="content__section3-icon"></img>
              <div className="content__text5">Создайте аккаунт</div>
            </div>

            <div className="content__section3-linia"></div>

            <div className="content__section3-box">
              <img src={iconDownload} className="content__section3-icon"></img>
              <div className="content__text5">Скачайте модуль</div>
            </div>
          </div>
          <div className="content__section3-linia linia-middle"></div>
          <div className="content__section3-step1-part">
            <div className="content__section3-box">
              <img src={iconLibrary} className="content__section3-icon"></img>
              <div className="content__text5">Выберите тариф</div>
            </div>

            <div className="content__section3-linia"></div>
            <div className="content__section3-box">
              <img src={iconApple} className="content__section3-icon"></img>
              <div className="content__text5">Начните играть</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content__text4">Начать</div>
      <div className="content__linia3 "></div>
      <div className="content__text-step1 content__section4">
        <div className="content__step1-linia linia"></div>
        <div className="content__text1 ">Гибкие тарифы</div>
      </div>
      <div className="content__text2">Доступные подписки</div>
      <div className="content__card-wrapper">
        <div className="content__card-black">
          <div className="content__card-black-text1">Почасовая оплата</div>
          <div className="content__card-black-text2">45 р. - час</div>
          <div className="content__card-black-text3">
            Доступно: Каталог игр Виртуальный ПК Безлимитная игровая сессия
          </div>
          <div className="content__card-black-button-wrapper">
            <Link to="registration">
              <div className="content__card-black-button">www</div>
            </Link>
          </div>
        </div>

        <div className="content__card-black">
          <div className="content__card-black-text1">Почасовая оплата</div>
          <div className="content__card-black-text2">45 р. - час</div>
          <div className="content__card-black-text3">
            Доступно: Каталог игр Виртуальный ПК Безлимитная игровая сессия
          </div>
          <div className="content__card-black-button-wrapper">
            <div className="content__card-black-button button2" onClick={test}>
              sss
            </div>
          </div>
        </div>

        <div className="content__card-black">
          <div className="content__card-black-text1">Почасовая оплата</div>
          <div className="content__card-black-text2">45 р. - час</div>
          <div className="content__card-black-text3">
            Доступно: Каталог игр Виртуальный ПК Безлимитная игровая сессия
          </div>
          <div className="content__card-black-button-wrapper">
            <a href="registration">
              <div className="content__card-black-button">Выбрать</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
