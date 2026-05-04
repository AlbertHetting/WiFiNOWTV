import { NavLink } from "react-router";
import "./Nav.css";

// const NAV = [{ label: "Home", to: "/" }];

export default function NavBar() {
  return (
    <section className="Navsticky">
      <section className="navbarflex">
        <div className="navigationbar">
          <div className="innerelements">
            <div className="LogoBox">
              <NavLink to="/">
                <img src="./WiFiNOWTV.svg" alt="HomeButton" className="Logo" />
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
                <img src="./navicons/history.svg" alt="" className="IconNav" />
              </NavLink>
              <NavLink to="/Saved" className="hover-underline-animation center">
                <img src="./navicons/saved.svg" alt="" className="IconNav2" />
              </NavLink>
              <NavLink
                to="/Profile"
                className="hover-underline-animation center"
              >
                <img src="./navicons/profile.svg" alt="" className="IconNav" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
