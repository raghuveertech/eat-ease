import "./../scss/header.scss";
import * as logo from "./../assets/images/eat-ease-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Eat Ease" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
