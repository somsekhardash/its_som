import React, { useEffect, useState } from "react";
import { FormContainer } from "../formHelper/FormContainer";
import { USER_NAME, PASS_WORD } from "src/config";

export default function Login() {
  const [state, setstate] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const checkMe = () => {
    if (userId == USER_NAME && password == PASS_WORD) {
      setstate(true);
      var d = new Date();
      d.setTime(d.getTime() + 5 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = "USER" + "=" + USER_NAME + ";" + expires + ";path=/";
    } else {
      alert("Please try again");
      setUserId("");
      setPassword("");
    }
  };

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row?.startsWith("USER="))
      ?.split("=")[1];
    if (cookieValue) setstate(true);
  }, []);

  return (
    <div className="login">
      {!state && (
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      value={userId}
                      name="email"
                      placeholder="UserName"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="ui fluid large teal submit button"
                  onClick={checkMe}
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {state && <FormContainer />}
    </div>
  );
}
