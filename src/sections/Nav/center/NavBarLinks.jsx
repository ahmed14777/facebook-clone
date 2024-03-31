import { BiSolidVideos } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { FaStoreAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaGamepad } from "react-icons/fa6";

export default function NavBarLinks() {
  return (
    <ul className="nav-bar-links ">
      <li>
        <IoIosHome size="55px" className=" nav-bar-icon " />
      </li>
      <li>
        <BiSolidVideos size="55px" className=" nav-bar-icon" />
      </li>
      <li>
        <FaStoreAlt size="55px" className=" nav-bar-icon" />
      </li>
      <li>
        <TiGroup size="55px" className=" nav-bar-icon" />
      </li>
      <li>
        <FaGamepad size="55px" className=" nav-bar-icon" />
      </li>
    </ul>
  );
}
