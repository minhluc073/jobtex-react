import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function SignUp() {
  useEffect(() => {
    Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(
      function (e) {
        Array.from(e.querySelectorAll(".password-addon")).forEach(function (r) {
          r.addEventListener("click", function (r) {
            var o = e.querySelector(".password-input");
            "password" === o.type ? (o.type = "text") : (o.type = "password");
          });
        });
      }
    );
  });

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
                        type="password"
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link className="icon-eye-off password-addon" />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type="password"
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link className="icon-eye-off password-addon" />
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
                    <Link to="/login">Login Here</Link>
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
                        type="password"
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link className="icon-eye-off password-addon" />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type="password"
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link className="icon-eye-off password-addon" />
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
                    Already have an account?<Link to="/login">Login Here</Link>
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
