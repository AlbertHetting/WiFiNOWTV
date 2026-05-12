import "./Footer.css";
import { NavLink } from "react-router";
import FooterImage from "/public/Images/WiFiNOWWhite.svg";

export default function Footer() {
  return (
    <section className="FooterMain">
      <div className="container">
        <div className="FooterCon">
          <div className="RightFooter">
            <h2 className="Contact">Contact Information</h2>
            <div className="Information">
              <p>Chief Administrator</p>
              <a href="" className="Emails">
                veronika@wifinowevents.com
              </a>
            </div>
            <div className="Information">
              <p>CEO</p>
              <a href="" className="Emails">
                claus@wifinowevents.com
              </a>
            </div>

            <div className="Information">
              <p>Event Manager</p>
              <a href="" className="Emails">
                inger@wifinowevents.com
              </a>
            </div>
          </div>

          <div className="LeftFooter">
            <div className="RightLeftFooter">
              <h2>WiFi NOW TV</h2>
              <div className="TVNavigation">
                <NavLink to="/Latest" className="TVNavLink">
                  Latest Videos
                </NavLink>
                <NavLink to="/Latest" className="TVNavLink">
                  Weekly News
                </NavLink>
                <NavLink to="/Latest" className="TVNavLink">
                  Telecom
                </NavLink>
                <NavLink to="/Latest" className="TVNavLink">
                  Vendor
                </NavLink>
                <NavLink to="/Latest" className="TVNavLink">
                  Masterclass
                </NavLink>
              </div>
            </div>
            <div className="LeftLeftFooter">
              <h2>Navigation</h2>
              <div className="HomeNavigation">
                <a href="" className="TVNavLink">
                  WiFi NOW Home
                </a>
                <a href="" className="TVNavLink">
                  WiFi NOW Jobs
                </a>
                <a href="" className="TVNavLink">
                  WiFi NOW Syndicated
                </a>
                <a href="" className="TVNavLink">
                  WiFi NOW TV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="FooterLogo">
          <img src={FooterImage} alt="" />
        </div>

        <div className="UnderTextFooter">
          <p>
            Wi-Fi NOW (Hetting global ApS), Denmark company registry no.
            40955437
          </p>
          <p>Hedeskovvej 9, DK-8520 Lystrup, Denmark</p>
        </div>
      </div>
    </section>
  );
}
