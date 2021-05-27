import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { FormContainer } from "../formHelper/FormContainer";

export default function Login() {
  const [state, setstate] = useState(true);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const checkMe = () => {
    if (userId == "admin123" && password == "admin123") {
      setstate(true);
    } else {
      alert("plz try again");
      setUserId("");
      setPassword("");
    }
  };
  return (
    <div className="login">
      {!state && (
        <Form>
          <Form.Field>
            <label>User ID</label>
            <input
              placeholder="User ID"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Field>
          <Button type="submit" onClick={() => checkMe()}>
            Submit
          </Button>
        </Form>
      )}
      {state && <FormContainer />}
    </div>
  );
}
