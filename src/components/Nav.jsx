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
              <img src="./WiFiNOWTV.svg" alt="HomeButton" className="Logo" />
              <div className="ActivelineLogo"></div>
            </div>

            <nav className="NavigationText">
              <NavLink>
                {" "}
                <ul>Latest Videos</ul>{" "}
              </NavLink>
              <ul>Weekly News</ul>
              <ul>Telecom</ul>
              <ul>Vendor</ul>
              <ul>Masterclass</ul>
            </nav>

            <div className="iconavigation">
              <img src="./navicons/history.svg" alt="" className="IconNav" />
              <img src="./navicons/saved.svg" alt="" className="IconNav2" />
              <img src="./navicons/profile.svg" alt="" className="IconNav" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
