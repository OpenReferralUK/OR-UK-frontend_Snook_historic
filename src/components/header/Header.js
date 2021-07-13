import logo from "../../assets/oruk_logo_green.svg";
import { useState } from 'react';
import Navigator from '../navigator/Navigator';
import { Link } from "react-router-dom";
import LinkExternal from '../footer/LinkExternal';

const Header = ({ mainMenu, topMenuId }) => {
  const link = {
    url:"https://developers.openreferraluk.org",
    TextToDisplay: "For developers",
    labelText: "For developers",
    external: true
  }

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className="global-header" role="banner">
      <div className="global-header__top-container page-container">
        <Link to="/" className="global-header__logo link-with-image"><img src={logo} alt="Open Referral UK"/></Link>
        <button onClick={toggleClass} 
                className={isActive ? 'button button-secondary button-header hide-md active': "button button-secondary button-header hide-md"}
                aria-label={isActive ? 'menu open' : 'menu closed'}
        >
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V3H20V0Z" fill="#135E75" />
            <path d="M20 6H0V9H20V6Z" fill="#135E75" />
            <path d="M20 12H0V15H20V12Z" fill="#135E75" />
          </svg>
          {isActive ? 'Close': "Menu"}
        </button>
        <LinkExternal link={link} rel="noreferrer" styleName="button button-secondary button-header show-md" />
      </div>
      <Navigator onClick={toggleClass} mainMenu={mainMenu} topMenuId={topMenuId.toString()} menuButton={isActive} developersLink={link}/>
    </header>
  );
}

export default Header;