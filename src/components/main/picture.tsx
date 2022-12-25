import "../styles/global.css";
import "../styles/picture.css";
import pic1 from "../../images/Rectangle71.png";

function Picture() {
  return (
    <div className="picture">
      <div className="picture__frame">
        <img className="picture__img" src={pic1}></img>
        <div className="picture__text-little">Сервис облачного гейминга</div>
        <div className="picture__text">Преврати свое устройство в игровое</div>
      </div>
    </div>
  );
}
export default Picture;
