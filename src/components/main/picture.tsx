import "../styles/global.css";
import "../styles/picture.css";
import pic1 from "../../images/Rectangle1.png";
import pic2 from "../../images/Rectangle2.png";
import pic3 from "../../images/Rectangle3.png";
import pic4 from "../../images/Rectangle4.png";
let count = 1;

const arraySliders = [pic1, pic2, pic3, pic4];
function Picture() {
  let newInt = setInterval(function () {
    clearInterval(newInt);
  }, 10);

  setInterval(() => {
    count++;
    let imga = document.querySelector(".picture__img") as HTMLImageElement;
    imga.src = arraySliders[count < 4 ? count : count % 4];
    console.log(count);
  }, 3000);

  return (
    <div className="picture">
      <div className="picture__frame">
        <img src={pic2} className="picture__img"></img>
        <div className="picture__text-little">Сервис облачного гейминга</div>
        <div className="picture__text">Преврати свое устройство в игровое</div>
      </div>
    </div>
  );
}
export default Picture;
