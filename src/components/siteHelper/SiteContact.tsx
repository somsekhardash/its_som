import * as React from "react";
import { Form } from "semantic-ui-react";

function SiteContact({ setContact }: any) {
  const [fullName, setFullName] = React.useState("");
  const [fullNameError, setFullNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState(false);

  const validate = () => {
    if (fullName.length) setFullNameError(false);
    else setFullNameError(true);
    if (email.length) setEmailError(false);
    else setEmailError(true);
    if (message.length) setMessageError(false);
    else setMessageError(true);
    return !fullNameError && !emailError && !messageError;
  };

  const seteducationCall = () => {
    validate() &&
      setContact({
        fullName: fullName,
        email: email,
        message: message,
        id: (+new Date()).toString(36),
      });
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section className="contact site-map" id="contact">
      <Form>
        <Form.Input
          error={fullNameError ? "Please enter your name" : null}
          value={fullName}
          label="Full Name"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.currentTarget.value)}
          id="form-input-full-name"
        />
        <Form.Input
          error={emailError ? "Please enter your email address" : null}
          value={email}
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email"
        />
        <Form.TextArea
          error={messageError ? "Please enter your message" : null}
          value={message}
          label="Message"
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Message"
        />
        <Form.Button onClick={() => seteducationCall()}>Submit</Form.Button>
      </Form>
    </section>
  );
}

export default SiteContact;
