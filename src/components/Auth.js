import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

function Auth() {
  const logo =
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=100&q=80";

  const [tab, setTab] = useState(0); // 0 = sign in; 1 = register
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = input;
    //0 is sign in 1 is sign up//
    if (tab === 0) {
      //login post
    } else {
      //register post
    }
  };

  return (
    <div className="auth-mod">
      <div className="">
        {/* -------------------------------------------------------------------------- */
        /*                                MODAL HEADER                                */
        /* -------------------------------------------------------------------------- */}
        <div className="profile-pic">
          <img className="" src={logo} alt="" />
          <h2 className="">Sign {tab === 0 ? "in" : "up"}</h2>
        </div>
        <form className="" method="POST" onSubmit={handleSubmit}>
          {/* -------------------------------------------------------------------------- */
          /*                           LOGIN/REGISTRATION FORM                          */
          /* -------------------------------------------------------------------------- */}
          <div className="">
            {tab === 1 && (
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=""
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                onChange={handleChange}
              />
              {tab === 1 && (
                <>
                  <label htmlFor="passwordConfirm" className="">
                    Password
                  </label>
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    required
                    className=""
                    placeholder="Password Confirmation"
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          </div>

          {/* -------------------------------------------------------------------------- */
          /*                               FORGOT PASSWORD                              */
          /* -------------------------------------------------------------------------- */}
          <div className="">
            {tab === 0 && (
              <div className="">
                <button type="button" className="">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>

          {/* -------------------------------------------------------------------------- */
          /*                               SIGN IN/SIGN UP                              */
          /* -------------------------------------------------------------------------- */}
          <div>
            <button type="submit" className="lockiconbutton">
              <span className="">
                <LockClosedIcon className="closedlockicon" aria-hidden="true" />
              </span>
              {tab === 0 ? "Sign in" : "Sign up"}
            </button>
          </div>
          {/* -------------------------------------------------------------------------- */
          /*                              NEED AN ACCOUNT?                              */
          /* -------------------------------------------------------------------------- */}
          <div className="text-sm">
            {tab === 0 ? "Need an account? " : "Have an account? "}
            <button
              type="button"
              onClick={() => {
                return tab === 0 ? setTab(1) : setTab(0);
              }}
              className=""
            >
              {tab === 0 ? "Sign up" : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
