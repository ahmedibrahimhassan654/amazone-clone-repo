import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firbase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // do signe in by firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      //it means succefully vreated anew user with email
      //and password
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    // do registeration by firebase
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEhUSEBISExISEBsYFxgVEhUWFxcXFxgbGBUWGBcYHSggGBslGxYYITEhJSkrLy4uFyAzODMsNygvLi0BCgoKDg0OGxAPGzMlHR83LzUzMjc3MzcsNy4uLTcvLS8tNzU1NzctMi83MSw3NSstMjUtNS03LS0tLi01LSs1K//AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgIDBAH/xABHEAABAwICBAoFCQcCBwAAAAABAAIDBBEFEgYHITETIjVBUWFxdIGxCDKRsrMUFSNCUnJzodEkNFSCk8HCJfAzQ1NjZJLS/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAKREBAAIBAgMHBQEAAAAAAAAAAAEDAgQRBSExEhQyQVGRoRMiQmHRM//aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERY3GcfpKJuaqnihB3Z3AE9g3lBkkWq0usbCJXBjK6HMd1y5o9rgAtojeHAFpBBFwQbgjpBQckXVU1DIml8jmsaN7nEADxK6KXFIJjlimikda9mSNcbdNgUHsRYXEtLKClfwc9VBG/7Lni47RzLK01SyVofG5r2OFw5pBBHSCEHaiw+KaUUNI7JUVUMT/sueAfEcyyNFWRzsEkL2SMO5zHBwPiEHeiLw4tjFPRtz1M0cLel7gL9g5/BB7kWpw6ycIe4NFdDcmwvmA9pFltEE7ZGhzHNc1wuHNIII6QRvQdiLhNK1gLnENaBckmwA6STuXg+f6P8Aiqf+sz9UGSRY35/o/wCKp/6zP1XfSYnBMcsU0UhAuQyRriB02BQetEWGxPSugpXZJ6qCN/2XSC47RzIMyi8eG4pBVNz08screljg63bbcvYgIvDPjNNG4tfUQtc3eHSsBHaCdi7KrEYYY+FkkYyK187nANsd23cg9SLEYVpRQ1bslPUwyvH1WvBd7N5WXQEREBERAREQEREB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"
          alt="amazone logo"
        />
      </Link>
      <div className="loginContainer">
        <h1>Sign-in</h1>
        <hr></hr>
        <form>
          <h5>user Name</h5>
          <input
            type="text"
            placeholder="user Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>password</h5>
          <input
            type="password"
            placeholder="Passw0rd"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={signIn} className="loginSignIn">
            {" "}
            Sign In
          </button>
        </form>
        <p dir="rtl">
          تتاساههسنكتتنكستتينكتسىيكخاوةءنتت
          نتينينتبكنيستسنتينتبيهعبنتلانستبنتسلالاتيبنتيىن تبسنتتبيتنا
          لاتنيلابنتيلاب نتينتيب نتيبني بنتيابعهاثكخشايش ختىت
        </p>
        <button onClick={register} className="loginRegisterButton ">
          Create Amazone account
        </button>
      </div>
    </div>
  );
}

export default Login;
