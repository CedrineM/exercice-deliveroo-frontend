import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Deliveroo" />
      </div>
    </header>
  );
};
export default Header;
