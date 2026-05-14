import "./Profile.css";

export default function profile() {
  return (
    <section className="ProfileBG">
      <div className="container">
        <div className="ProfileFlexbox">
          <div className="ProfileSection">
            <div className="ProfileNavigation">
              <h1>My account</h1>

              <div className="LinksProfie">
                <p className="ActiveLinkPorfile">Overview</p>
                <p className="LinkProfile">Subscriptions</p>
                <p className="LinkProfile">Webinars</p>
                <p className="LinkProfile">Presentations</p>
                <p className="LinkProfile">Manage Syndicated</p>
                <p className="LinkProfile">Manage Jobs</p>
                <p className="LinkProfile">Downloads</p>
                <p className="LinkProfile">Addresses</p>
                <p className="LinkProfile">Payment methods</p>
                <p className="LinkProfile">Orders</p>
                <p className="LinkProfile">Log out</p>
                <p className="LinkProfile">Terms & conditions</p>
              </div>

              <div className="WiFINOWREDProfile">
                <img
                  src="./Images/WiFiNOWRed.svg"
                  alt=""
                  className="WiFiNOWRedProfileImage"
                />
              </div>
            </div>

            <div className="ProfileDetails">
              <div className="TopImage">
                <div className="ProfileImage">
                  <img
                    src="./ProfileImages/Profile4.jpg"
                    alt=""
                    className="ProfilePicture2"
                  />
                </div>

                <div className="ProfilePictureText">
                  <p className="AvatarName">Avatar</p>
                  <h4 className="UploadImage">Upload Image</h4>
                  <p className="AvatarVisible">
                    Your avatar is visible to others
                  </p>
                </div>
              </div>

              <div className="ProfileTop">
                <form action="" className="ProfileTop">
                  <div>
                    <label for="name">Name</label> <br></br>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Albert"
                    ></input>
                  </div>
                  <div>
                    <label for="lastname">Last name</label> <br></br>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Hetting"
                    ></input>
                  </div>
                  <div>
                    <label for="DisplayName">Display name</label> <br></br>
                    <input
                      type="text"
                      id="DisplayName"
                      name="DisplayName"
                      placeholder="AppiXx"
                    ></input>
                  </div>
                </form>
              </div>

              <div className="LongInput">
                <form action="">
                  <div className="MidFormMargin">
                    <label for="Email">Email Address</label> <br></br>
                    <input
                      type="text"
                      id="Email"
                      name="Email"
                      placeholder="Albert@hetting.dk"
                    ></input>
                  </div>

                  <div className="PasswordChange">
                    <div className="MidFormMarginProfile">
                      <h3>Password change</h3>
                      <label for="Email">Current password</label> <br></br>
                      <input type="text" id="Email" name="Email"></input>
                    </div>

                    <div className="MidFormMarginProfile">
                      <label for="Email">New password</label> <br></br>
                      <input type="text" id="Email" name="Email"></input>
                    </div>
                    <div className="MidFormMarginProfile">
                      <label for="Email">Confirm new password</label> <br></br>
                      <input type="text" id="Email" name="Email"></input>
                    </div>
                  </div>

                  <div className="SavechangesCon">
                    <input
                      type="submit"
                      value="Save Changes"
                      className="SaveChanges"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="BottomSpacingProfile"></div>


    </section>
  );
}
