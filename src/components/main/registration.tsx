import "../styles/global.css";
import "../styles/registration.css";

function Registration() {
  return (
    <div className="registration">
      <div className="registration__box">
        <div className="registration__reg-enter">
          <div className="registration__reg-text">Регестрация</div>
          <div className="registration__enter-text">Вход</div>
        </div>
        <form className="registration__form">
          <input
            className="registration__form-input"
            placeholder="Почта/Телефон"
          />
          <input
            className="registration__form-input"
            placeholder="Пароль"
          ></input>
        </form>
        <div className="registration__let-reg">Зарегестрироваться</div>
        <div className="registration__agree-box">
          <form>
            <input type="checkbox" className="registration__checkbox"></input>
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
