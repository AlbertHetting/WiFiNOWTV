import { NavLink } from "react-router";
import "./Nav.css";
import logo from "/public/WiFiNOWTV.svg";
import history from "/public/navicons/history.svg"; //Import af billeder så de ikke forsvinder med relative file paths når der dykkes ned i siden
import saved from "/public/navicons/saved.svg";
import profile from "/public/navicons/profile.svg";

// const NAV = [{ label: "Home", to: "/" }];

export default function NavBar() {
  return (
    <section className="Navsticky">
      <section className="navbarflex">
        <div className="navigationbar">
          <div className="innerelements">
            <div className="LogoBox">
              <NavLink to="/">
                <img src={logo} alt="" className="Logo" />
                <div className="ActivelineLogo"></div>
              </NavLink>
            </div>

            <nav className="NavigationText">
              <NavLink
                to="/Latest"
                className="hover-underline-animation center"
              >
                Latest Videos
              </NavLink>
              <NavLink
                to="/Weekly"
                className="hover-underline-animation center"
              >
                Weekly News
              </NavLink>
              <NavLink
                to="/Telecom"
                className="hover-underline-animation center"
              >
                Telecom
              </NavLink>
              <NavLink
                to="/Vendor"
                className="hover-underline-animation center"
              >
                Vendor
              </NavLink>
              <NavLink
                to="/Masterclass"
                className="hover-underline-animation center"
              >
                Masterclass
              </NavLink>
            </nav>

            <div className="iconavigation">
              <NavLink
                to="/History"
                className="hover-underline-animation center"
              >
                <img src={history} alt="" className="IconNav" />
              </NavLink>
              <NavLink to="/Saved" className="hover-underline-animation center">
                <img src={saved} alt="" className="IconNav2" />
              </NavLink>
              <NavLink
                to="/Profile"
                className="hover-underline-animation center"
              >
                <img src={profile} alt="" className="IconNav" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
