import "../styles/global.css";
import "../styles/footer.css";
import logWhite from "../../images/log_white.png";


function Footer() {
	return (
		<div className="footer">
			<img src={logWhite} alt="logo" className="footer__img"></img>
			<div className="footer__text">2022. ALL RIGHTS RESERVED  </div>
		</div>
	);
}
export default Footer;
