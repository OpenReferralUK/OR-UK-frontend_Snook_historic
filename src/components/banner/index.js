import logo from "../../assets/oruk_logo_white.svg"
import { Link } from "react-router-dom";
import LinkExternal from "../footer/LinkExternal";


const Banner = () => {

    const link = {
        url:"https://developers.openreferraluk.org",
        textToDisplay: "For developers",
        labelText: "For developers",
        external: true
      }

return (
<div className="banner">
    <Link to="/" className="footer__logo"><img src={logo} alt="Open Referral UK" /></Link>
    {/**extract to small component for header and footer */}
    <LinkExternal link={link} styleName="button button-primary button-small button-light" />
</div>
    )
}
export default Banner;
