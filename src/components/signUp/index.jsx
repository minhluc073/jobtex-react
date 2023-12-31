import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [showPass4, setShowPass4] = useState(false);
  return (
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
          <Tabs className="wd-form-login tf-tab">
            <h4>Create Link free account</h4>
            <TabList className="menu-tab">
              <Tab className="ct-tab">Candidate</Tab>
              <Tab className="ct-tab">Employer</Tab>
            </TabList>
            <div className="content-tab">
              <TabPanel className="inner animation-tab">
                <form action="/">
                  <div className="ip">
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Tony Nguyen"
                      placeholder="Name"
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass(!showPass)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass2 ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass2 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass2(!showPass2)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>
                  <button type="submit">Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
              <TabPanel className="inner animation-tab">
                <form action="/">
                  <div className="ip">
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Tony Nguyen"
                      placeholder="Name"
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass3 ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass3 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass3(!showPass3)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass4 ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass4 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass4(!showPass4)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>
                  <button>Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
