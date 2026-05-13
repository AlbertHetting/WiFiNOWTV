import "./CreateProfile.css";
import { NavLink } from "react-router";

export default function CreateProfile() {
  return (
    <section>
      <div className="OuterConCreateProfile">
        <div className="containerWide">
          <section className="CreateProfileWrapper">
            <div className="RightSideImage">
              <img src="./Images/HalfThumb.jpg" alt="" />
            </div>

            <div className="MemberSignup">
              <h1>Become a Member</h1>
              <img
                src="./Images/WiFiNOWRed.svg"
                alt=""
                className="WiFiNOWRed"
              />
              <form action="" className="CreateForm">
                <div className="TopForm">
                  <div>
                    <label for="name">Name*</label> <br></br>
                    <input type="text" id="name" name="name"></input>
                  </div>
                  <div>
                    <label for="lastname">Last name*</label> <br></br>
                    <input type="text" id="lastname" name="lastname"></input>
                  </div>
                  <div>
                    <label for="DisplayName">Display name</label> <br></br>
                    <input
                      type="text"
                      id="DisplayName"
                      name="DisplayName"
                    ></input>
                  </div>
                </div>
                <div className="MidForm">
                  <div className="MidFormMargin">
                    <label for="Email">Email*</label> <br></br>
                    <input type="text" id="Email" name="Email"></input>
                  </div>

                  <div className="MidFormMargin">
                    <label for="Phone">Phone Number*</label> <br></br>
                    <input type="text" id="Phone" name="Phone"></input>
                  </div>

                  <div className="MidFormMargin">
                    <label for="Password">Password*</label> <br></br>
                    <input type="text" id="Password" name="Password"></input>
                  </div>

                  <div className="MidFormMargin">
                    <label for="ConfirmPassword">Confirm Password*</label>
                    <br></br>
                    <input
                      type="text"
                      id="ConfirmPassword"
                      name="ConfirmPassword"
                    ></input>
                  </div>
                </div>
                <div className="LowerForm1">
                  <div className="PositionCon">
                    <label for="Position">Position*</label> <br></br>
                    <input
                      type="text"
                      className="Position"
                      name="Position"
                    ></input>
                  </div>
                  <div className="Selector1">
                    <label for="Name" className="LabelMargin">
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
                    <label for="company">Company*</label> <br></br>
                    <input
                      type="text"
                      className="Position"
                      name="Company"
                    ></input>
                  </div>
                  <div className="Selector1">
                    <label for="Name" className="LabelMargin">
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
                      <label for="MatterIOT" className="LabelCheck">
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
                        for="Industrial applications"
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
                      <label for="PublicVenues" className="LabelCheck">
                        Large public venues
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Offload"
                      ></input>
                      <label for="Offload" className="LabelCheck">
                        Wi-fi Offload / convergence
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Residential"
                      ></input>
                      <label for="Residential" className="LabelCheck">
                        Residential Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Regulation"
                      ></input>
                      <label for="Regulation" className="LabelCheck">
                        Regulation / policy
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="enterprise"
                      ></input>
                      <label for="enterprise" className="LabelCheck">
                        Enterprise Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Evolution"
                      ></input>
                      <label for="Evolution" className="LabelCheck">
                        Wi-Fi evolution & standards
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Location"
                      ></input>
                      <label for="Location" className="LabelCheck">
                        Location based services
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="EndUser"
                      ></input>
                      <label for="EndUser" className="LabelCheck">
                        End user devices
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Consumer"
                      ></input>
                      <label for="Consumer" className="LabelCheck">
                        Consumer grade Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Analysis"
                      ></input>
                      <label for="Analysis" className="LabelCheck">
                        Analysis & forecasts
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input type="checkbox" id="Checkbox" name="60GHZ"></input>
                      <label for="60GHZ" className="LabelCheck">
                        60 GHz tech & use cases
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="SmartCities"
                      ></input>
                      <label for="SmartCities" className="LabelCheck">
                        Smart cities & public Wi-Fi
                      </label>
                    </div>

                    <div className="CheckboxContainer">
                      <input
                        type="checkbox"
                        id="Checkbox"
                        name="Testing"
                      ></input>
                      <label for="testing" className="LabelCheck">
                        Wi-Fi testing & planning
                      </label>
                    </div>
                  </div>
                </div>

                <div className="AcceptCon">
                  <div className="CheckboxContainer">
                    <input type="checkbox" id="Checkbox" name="Testing"></input>
                    <label for="testing" className="LabelCheck">
                      I acknowledge that the information I provide on this form
                      may be shared with the sponsors or publishers of this
                      content and they may contact me*
                    </label>
                  </div>
                </div>

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
