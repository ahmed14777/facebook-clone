import NavBarLeft from "./left/NavBarLeft";
import NavBarLinks from "./center/NavBarLinks";
import NavBarRight from "./right/NavBarRight";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar  ">
      <NavBarLeft />
      <NavBarLinks />
      <NavBarRight />
    </div>
  );
};

export default Nav;
