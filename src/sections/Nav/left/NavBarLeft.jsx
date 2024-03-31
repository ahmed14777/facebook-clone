import Logo from "../../../component/Logo/Logo";
import Search from "../../../component/search/Search";
import LogoImg from "../../../assets/Facebook-logo.png";

export default function NavBarLeft({ searchIconShow }) {
  return (
    <div className="nav-bar-left">
      {/* ==> write the width with tailwind classes <== */}
      <Logo LogoImg={LogoImg} alt="facebook-logo" width={"w-10"} />
      <Search searchIconShow={searchIconShow} />
    </div>
  );
}
