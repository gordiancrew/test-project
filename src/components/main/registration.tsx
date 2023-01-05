import { ChangeEvent, useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/registration.css";

function Registration() {
  const [isLoginValid, setLoginValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isAgree, setAgree] = useState(false);
  const [userName, setUserName] = useState('?');
  useEffect(() => checkBtn(), [isAgree, isLoginValid, isPasswordValid])


  function checkBtn() {
    let btn = document.querySelector(".btn") as HTMLElement;

    if (isLoginValid && isPasswordValid && isAgree) {
      btn.classList.add("registration__let-reg-activ");
      btn.onclick = function () {
        let registration = document.querySelector(".registration");
        let pop = document.createElement("div");
        pop.classList.add("pop");
        pop.innerText = "Hello " + userName;
        registration?.appendChild(pop);

        setTimeout(() => (window.location.href = "/"), 3000);
      };
    } else {
      btn.classList.remove("registration__let-reg-activ");
      btn.onclick = function () {
        const message: string =
          (!isLoginValid ? "Некорректный email адресс  \n" : "") +
          (!isPasswordValid
            ? "Пароль должен состоять минимум из 8 символов и не больше 20\n"
            : "") +
          (!isAgree ? "Нужно принять условия!\n" : "");
        alert(message);
      };
    }
  }

  function validateEmail(email: string) {
    let validEmail =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (validEmail.test(email) == false) {
      return false;
    } else {
      return true;
    }
  }

  function nameChange(e: ChangeEvent<HTMLInputElement>) {
    if (validateEmail(e.target.value)) {
      e.target.classList.add("border-green");
      e.target.classList.remove("border-red");
      setLoginValid(true);
      setUserName(e.target.value);
    } else {
      e.target.classList.remove("border-green");
      e.target.classList.add("border-red");
      setLoginValid(false);
    }
  }

  function passwordChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 8 && e.target.value.length < 20) {
      e.target.classList.add("border-green");
      e.target.classList.remove("border-red");
      setPasswordValid(true);
    } else {
      e.target.classList.remove("border-green");
      e.target.classList.add("border-red");
      setPasswordValid(false);
    }
  }

  return (
    <div className="registration">
      <div className="registration__box">
        <div className="registration__reg-enter">
          <div className="registration__reg-text">Регестрация</div>
          <div className="registration__enter-text">Вход</div>
        </div>
        <form className="registration__form">
          <input
            className="registration__form-input login"
            placeholder="Почта/Телефон"
            onChange={(e) => nameChange(e)}
          />
          <input
            className="registration__form-input password"
            placeholder="Пароль"
            type="password"
            onChange={(e) => passwordChange(e)}
          ></input>
        </form>
        <div className="registration__let-reg btn">Зарегестрироваться</div>
        <div className="registration__agree-box">
          <form>
            <input
              type="checkbox"
              className="registration__checkbox"
              onClick={() => setAgree(!isAgree)}
            ></input>
          </form>
          <div className="registration__text-agree">
            Я соглашаюсь со следующими установленными правилами: Политика
            использования файлов cookie WARPLAY.CLOUD, Пользовательское
            соглашение WARPLAY.CLOUD, Лицензионное соглашение MY.GAMES с
            конечным пользователем в отношении Игр, Лицензионное соглашение с
            конечным Пользователем для WARPLAY.CLOUD Игрового центра, Политика
            конфиденциальности портала WARPLAY.CLOUD, Политика
            конфиденциальности WARPLAY.CLOUD для детей
          </div>
        </div>
        <div className="registration__alter-enter ">
          <div className="registration__linia"></div>
          <div className="registration__alter-enter-text">Войти через</div>

          <div className="registration__linia"></div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
