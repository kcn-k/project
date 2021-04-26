import React, { useState, useEffect } from "react";
import db from "./firebase/fire";
import fire from "firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import "./App.css";
import Navbar from "./components/UI/Navbar";

function App() {
  const [user, setUser] = useState("");
  //const [authentication, setAuthentication] = useState("")
  const [usernameErr, setUsernameErr] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailErr("");
    setPasswordErr("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    db.collection("users")
      .where("username", "==", username)
      .get()
      .then((result) => {
        console.log(result);
        if (result.docs.length > 0) {
          setUsernameErr(`Username ${username} already exists`);
        } else {
          clearErrors();
          fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (data) {
              console.log("userId:", data.user.uid);
              console.log("username", username);
              let ref = db.collection("users").doc(data.user.uid);
              ref.set({
                username: username,
              });
            })
            .catch((err) => {
              switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailErr(err.message);
                  break;
                case "auth/weak-password":
                  setPasswordErr(err.message);
                  break;
              }
            });
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // const navSlide = () => {
  //   const burger = document.querySelector(".burgerMenu");
  //   const nav = document.querySelector(".nav");

  //   if (burger) {
  //     burger.addEventListener("click", () => {
  //       nav.classList.toggle("nav-active");
  //     });
  //   }
  // };
  // navSlide();

  return user ? (
    <>
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        {/* <Home /> */}
        <Switch>
          <Route path="/contact-us" component={ContactUs} exact />
        </Switch>
      </Router>
    </>
  ) : (
    <>
      <Login
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        usernameErr={usernameErr}
        emailErr={emailErr}
        passwordErr={passwordErr}
      />
    </>
  );
}

export default App;
