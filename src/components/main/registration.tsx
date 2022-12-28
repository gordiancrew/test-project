import { ChangeEvent } from "react";
import "../styles/global.css";
import "../styles/registration.css";

function Registration() {
  let isLoginValid = false;
  let isPasswordValid = false;
  let isCheckbox = false;
  function checkBoxChange() {
    
    let checkBox = document.querySelector('.registration__checkbox') as HTMLInputElement;
    if (checkBox.checked) {
      isCheckbox = true;
      checkBtn();
    } else {
      isCheckbox = false;
      checkBtn();
    }


  }

  function checkBtn() {
    let btn = document.querySelector('.btn') as HTMLElement;

    if (isLoginValid && isPasswordValid&&isCheckbox) {
      btn.classList.add('registration__let-reg-activ');
      btn.onclick = function () {
        window.location.href = '/';
      }
    } else {

      btn.classList.remove('registration__let-reg-activ');
      btn.onclick=function(){
        alert('Некоректные данные');
      }
    }
  }

  function validateEmail(email:string) {
    let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   
    if(validEmail.test(email) == false) {
       return false;
    }else{return true}
 }

  function nameChange(e: ChangeEvent) {
    let login = document.querySelector('.login') as HTMLInputElement;


    if (validateEmail(login.value)) {
      // inp.style.borderColor='green';
      login.classList.add('border-green');
      login.classList.remove('border-red');
      isLoginValid = true;
      checkBtn();
    } else {
      login.classList.remove('border-green');
      login.classList.add('border-red');
      isLoginValid = false;
      checkBtn();
    }

  }

  function passwordChange(e: ChangeEvent) {
    let password = document.querySelector('.password') as HTMLInputElement;
    if (password.value.length>=8&&password.value.length<20) {
      password.classList.add('border-green');
      password.classList.remove('border-red');
      isPasswordValid = true;
      checkBtn();
    } else {
      password.classList.remove('border-green');
      password.classList.add('border-red');
      isPasswordValid = false;
      checkBtn();
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

            onChange={e => nameChange(e)}
          />
          <input
            className="registration__form-input password"
            placeholder="Пароль"
            type='password'
            onChange={e => passwordChange(e)}
          ></input>
        </form>
        <div className="registration__let-reg btn">Зарегестрироваться</div>
        <div className="registration__agree-box">
          <form>
            <input type="checkbox" className="registration__checkbox"
              onClick={checkBoxChange}></input>
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
