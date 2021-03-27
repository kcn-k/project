import React from "react";

const Login = (props) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    //password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    usernameErr,
    emailErr,
    passwordErr,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        {!hasAccount && (
          <>
            <label>Username</label>
            <input
              type="text"
              autoFocus
              required
              //value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p classname="errMessage">{usernameErr}</p>
          </>
        )}
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          //value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errMessage">{emailErr}</p>
        <label>Password</label>
        <input
          type="password"
          required
          //value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errMessage">{passwordErr}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Already have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Login;
