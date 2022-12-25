import "../styles/global.css";
import "../styles/content.css";
import server from "../../images/ImageServerHost.png";
import icon1 from "../../images/icons/Apple.png";
function Content() {
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
          <img src={icon1}></img>
          <div className="content__section3-linia"></div>
          <img src={icon1}></img>
          <div className="content__section3-linia"></div>
          <img src={icon1}></img>
          <div className="content__section3-linia"></div>
          <img src={icon1}></img>
        </div>
      </div>
    </div>
  );
}
export default Content;
