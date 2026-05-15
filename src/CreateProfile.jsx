import "./CreateProfile.css";
import { NavLink, useNavigate } from "react-router";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function CreateProfile() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      setErrorMsg("Accept terms to become a member");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        savedVideos: [],
      });

      console.log("Account Created!");
      navigate("/");
    } catch (error) {
      // This will print the exact reason your try block is aborting!
      console.error("THE SILENT KILLER IS: ", error.code, error.message);

      setErrorMsg(error.message);
    }
  };

  return (
    <section>
      <div className="OuterConCreateProfile">
        <div className="containerWide">
          <section className="CreateProfileWrapper">
            <div className="RightSideImage">
              <img src="./Images/HalfThumb.jpg" alt="" className="ClausImage" />
            </div>

            <div className="MemberSignup">
              <h1>Become a Member</h1>
              <img
                src="./Images/WiFiNOWRed.svg"
                alt=""
                className="WiFiNOWRed"
              />
              <form className="CreateForm" onSubmit={handleSignup}>
                <div className="TopForm">
                  <div>
                    <label htmlFor="name">Name*</label> <br></br>
                    <input type="text" id="name" name="name"></input>
                  </div>
                  <div>
                    <label htmlFor="lastname">Last name*</label> <br></br>
                    <input type="text" id="lastname" name="lastname"></input>
                  </div>
                  <div>
                    <label htmlFor="DisplayName">Display name</label> <br></br>
                    <input
                      type="text"
                      id="DisplayName"
                      name="DisplayName"
                    ></input>
                  </div>
                </div>
                <div className="MidForm">
                  <div className="MidFormMargin">
                    <label htmlFor="Email">Email*</label> <br></br>
                    <input
                      type="text"
                      id="Email"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>

                  <div className="MidFormMargin">
                    <label htmlFor="Phone">Phone Number*</label> <br></br>
                    <input type="text" id="Phone" name="Phone"></input>
                  </div>

                  <div className="MidFormMargin">
                    <label htmlFor="Password">Password*</label> <br></br>
                    <input
                      type="text"
                      id="Password"
                      name="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>

                  <div className="MidFormMargin">
                    <label htmlFor="ConfirmPassword">Confirm Password*</label>
                    <br></br>
                    <input
                      type="text"
                      id="ConfirmPassword"
                      name="ConfirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="LowerForm1">
                  <div className="PositionCon">
                    <label htmlFor="Position">Position*</label> <br></br>
                    <input
                      type="text"
                      className="Position"
                      name="Position"
                    ></input>
                  </div>
                  <div className="Selector1">
                    <label htmlFor="Name" className="LabelMargin">
                      Organization type*
                    </label>
                    <br></br>
                    <select name="Organization" className="Organization">
                      <option value="Vendor">Vendor</option>
                      <option value="Telecom">Telecom</option>
                      <option value="Student">Student</option>
                      <option value="Business">Business</option>
                      <option value="Sales">Sales</option>
                    </select>
                  </div>
                </div>
                <div className="LowerForm1">
                  <div className="PositionCon">
                    <label htmlFor="company">Company*</label> <br></br>
                    <input
                      type="text"
                      className="Position"
                      name="Company"
                    ></input>
                  </div>
                  <div className="Selector1">
                    <label htmlFor="Name" className="LabelMargin">
                      region*
                    </label>
                    <br></br>
                    <select name="Region" className="Organization">
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="Asia">Asia</option>
                      <option value="South America">South America</option>
                      <option value="Oceania">Oceania</option>
                      <option value="Africa">Africa</option>
                    </select>
                  </div>
                </div>

                <div className="InterestAreas">
                  <label className="LabelMargin">Interest areas*</label>

                  <div className="CheckmarkGrid">
                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="matterIOT"
                        name="matterIOT"
                      ></input>
                      <label htmlFor="MatterIOT" className="LabelCheck">
                        Matter / IoT
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Industrial applications"
                      ></input>
                      <label
                        htmlFor="Industrial applications"
                        className="LabelCheck"
                      >
                        Industrial applications
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="PublicVenues"
                      ></input>
                      <label htmlFor="PublicVenues" className="LabelCheck">
                        Large public venues
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Offload"
                      ></input>
                      <label htmlFor="Offload" className="LabelCheck">
                        Wi-fi Offload / convergence
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Residential"
                      ></input>
                      <label htmlFor="Residential" className="LabelCheck">
                        Residential Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Regulation"
                      ></input>
                      <label htmlFor="Regulation" className="LabelCheck">
                        Regulation / policy
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="enterprise"
                      ></input>
                      <label htmlFor="enterprise" className="LabelCheck">
                        Enterprise Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Evolution"
                      ></input>
                      <label htmlFor="Evolution" className="LabelCheck">
                        Wi-Fi evolution & standards
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Location"
                      ></input>
                      <label htmlFor="Location" className="LabelCheck">
                        Location based services
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="EndUser"
                      ></input>
                      <label htmlFor="EndUser" className="LabelCheck">
                        End user devices
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Consumer"
                      ></input>
                      <label htmlFor="Consumer" className="LabelCheck">
                        Consumer grade Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Analysis"
                      ></input>
                      <label htmlFor="Analysis" className="LabelCheck">
                        Analysis & forecasts
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input type="checkbox" id="Checkbox" name="60GHZ"></input>
                      <label htmlFor="60GHZ" className="LabelCheck">
                        60 GHz tech & use cases
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="SmartCities"
                      ></input>
                      <label htmlFor="SmartCities" className="LabelCheck">
                        Smart cities & public Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Testing"
                      ></input>
                      <label htmlFor="testing" className="LabelCheck">
                        Wi-Fi testing & planning
                      </label>
                    </div>
                  </div>
                </div>

                <div className="AcceptCon">
                  <div className="CheckboxContainer">
                    <input
                      type="checkbox"
                      id="Checkbox"
                      name="Checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    ></input>
                    <label htmlFor="Checkbox" className="LabelCheck">
                      I acknowledge that the information I provide on this form
                      may be shared with the sponsors or publishers of this
                      content and they may contact me*
                    </label>
                  </div>
                </div>

                {errorMsg && (
                  <p style={{ color: "red", fontWeight: "bold" }}>{errorMsg}</p>
                )}

                <div className="Finishsegment">
                  <input
                    type="submit"
                    value="Create account"
                    className="CreateAccount"
                  ></input>
                  <NavLink to="/LogIn">
                    <div className="LogInNav">
                      <h2>Log in</h2>
                    </div>
                  </NavLink>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="ProfileBottom"></div>
    </section>
  );
}
