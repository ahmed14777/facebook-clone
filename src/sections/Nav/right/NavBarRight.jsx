import { CgMenuGridO } from "react-icons/cg";
import { SiMessenger } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import profileImg from "../../../assets/profile.jpeg";
import NavBarRightLink from "./NavBarRightLink";
import ProfileIcon from "./ProfileIcon";

const NavBarRight = () => {
  return (
    <ul className="nav-bar-right justify-end">
      <NavBarRightLink
        x={[20, -10, 30, -40, 0]}
        rotate={[30, -180, 300, 20, -190, 0]}
        duration={3}
        delay={1}
      >
        <CgMenuGridO className="nav-bar-dash" size="40px" />
      </NavBarRightLink>
      <NavBarRightLink
        x={[20, -40, 30, -20, 0]}
        rotate={[30, -180, 300, 20, -190, 0]}
        duration={4}
        delay={1}
      >
        <SiMessenger className="nav-bar-dash" size="40px" />
      </NavBarRightLink>
      <NavBarRightLink
        x={[20, -40, 30, -20, 0]}
        rotate={[-30, 90, -300, 20, -190, 0]}
        duration={3.2}
        delay={0.8}
      >
        <IoMdNotifications className="nav-bar-dash " size="40px" />
      </NavBarRightLink>
      <ProfileIcon img={profileImg} />
    </ul>
  );
};
export default NavBarRight;
