import "./LogIn.css";
import { NavLink, useNavigate } from "react-router";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handelogin = async (e) => {
    //Async så browseren ikke går i stå mens scriptet kører
    e.preventDefault(); // Stop refresh, kan ødelægge sciptet mid run
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password); //firebase API login

      console.log("Logged in!");
      navigate("/");
    } catch (error) {
      console.log("login failed", error.code, error.message); // For debugging

      setErrorMsg("Invalid password or email"); // til brugeren så de ved at deres credentials er forkerte
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

            <div className="Login">
              <h1>Welcome back!</h1>
              <img
                src="./Images/WiFiNOWRed.svg"
                alt=""
                className="WiFiNOWRed"
              />

              <form className="LoginFormCon" onSubmit={handelogin}>
                <div className="LoginForm">
                  <label htmlFor="Email">Email address</label> <br></br>
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="LoginForm">
                  <label htmlFor="Phone">Password</label> <br></br>
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="Remembertext">
                  <h4>The browser will automatically remember you</h4>
                </div>

                <div className="LogInOrSignUp">
                  <input className="Redbutton" type="submit">
                    <p className="ButtonText">Log in</p>
                  </input>
                  <div className="Redbutton">
                    <p>Forgot pasword?</p>
                  </div>
                </div>
              </form>

              <div className="BecomeAMember">
                <p>
                  Are you not a member yet? Becoming a member is completely
                  free!
                </p>
                <NavLink to={"/Create"}>
                  <div className="RedbuttonBecome">
                    <p>Sign up!</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="ProfileBottom"></div>
    </section>
  );
}
