import { ChangeEvent, useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/registration.css";

function Registration():JSX.Element  {
	const [isLoginValid, setLoginValid] = useState(false);
	const [isPasswordValid, setPasswordValid] = useState(false);
	const [isAgree, setAgree] = useState(false);
	const [userName, setUserName] = useState("?");

	const styleInputLogin = {
		outline: isLoginValid ? "3px solid green" : "3px solid red",
	};

	const styleInputPassword = {
		outline: isPasswordValid ? "3px solid green" : "3px solid red",
	};

	const classesButtonSubmit =
		isLoginValid && isLoginValid && isAgree
			? "registration__let-reg btn registration__let-reg-activ"
			: "registration__let-reg btn";

	const [stylePop, setStylePop] = useState({ display: "none" });

	const btnPress = () => {
		if (isLoginValid && isPasswordValid && isAgree) {
			setStylePop({ display: "flex" });
			setTimeout(() => (window.location.href = "/"), 3000);
		} else {
			const message: string =
				(!isLoginValid ? "Некорректный email адресс  \n" : "") +
				(!isPasswordValid
					? "Пароль должен состоять минимум из 8 символов и не больше 20\n"
					: "") +
				(!isAgree ? "Нужно принять условия!\n" : "");
			alert(message);
		}
	};

	const validateEmail = (email: string) => {
		let validEmail =
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		return validEmail.test(email);
	};

	const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (validateEmail(e.target.value)) {
			setLoginValid(true);
			setUserName(e.target.value);
		} else {
			setLoginValid(false);
		}
	};

	const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.value.length >= 8 && e.target.value.length < 20
			? setPasswordValid(true)
			: setPasswordValid(false);
	};

	return (
		<div className="registration">
			<div style={stylePop} className="pop">
				Hello-{userName}
			</div>
			<div className="registration__box">
				<div className="registration__reg-enter">
					<div className="registration__reg-text">Регестрация</div>
					<div className="registration__enter-text">Вход</div>
				</div>
				<form className="registration__form">
					<input
						style={styleInputLogin}
						className="registration__form-input login"
						placeholder="Почта/Телефон"
						onChange={(e) => nameChange(e)}
					/>
					<input
						style={styleInputPassword}
						className="registration__form-input password"
						placeholder="Пароль"
						type="password"
						onChange={(e) => passwordChange(e)}></input>
				</form>
				<div className={classesButtonSubmit} onClick={btnPress}>
					Зарегестрироваться
				</div>
				<div className="registration__agree-box">
					<form>
						<input
							type="checkbox"
							className="registration__checkbox"
							onClick={() => setAgree(!isAgree)}></input>
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
				<div className="registration__alter-enter">
					<div className="registration__linia"></div>
					<div className="registration__alter-enter-text">Войти через</div>

					<div className="registration__linia"></div>
				</div>
			</div>
		</div>
	);
}
export default Registration;
