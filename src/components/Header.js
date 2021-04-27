import Logo from "../images/netflix-logo.jpg";

const Header = (props) => {
  return (
    <div className={props.headerStyle}>
      <img className="logo" src={Logo} alt="Netflix logo" />
    </div>
  );
};

export default Header;
