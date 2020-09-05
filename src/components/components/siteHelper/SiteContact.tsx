import * as React from 'react';
import { Form } from 'semantic-ui-react';
import Firebase from './../auth/firebase';

const SiteContact: React.FC<any> = ({ data }) => {
    const [fullName, setFullName] = React.useState("");
    const [fullNameError, setFullNameError] = React.useState(false);

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);

    const [message, setMessage] = React.useState("");
    const [messageError, setMessageError] = React.useState(false);

    const validate = () => {
        if (fullName.length) setFullNameError(false); else setFullNameError(true);
        if (email.length) setEmailError(false); else setEmailError(true);
        if (message.length) setMessageError(false); else setMessageError(true);
        return !fullNameError && !emailError && !messageError;
    }

    const seteducationCall = () => {
        validate() && Firebase.db.ref(`contact`).push({ fullName, email, message }) && alert('data saved');
    }

    return (
        <section className="contact" id="contact">
            <Form>
                <Form.Input
                    error={fullNameError ? 'Please enter your name' : ''}
                    value={fullName}
                    label='Full Name'
                    placeholder='Full Name'
                    onChange={(e) => setFullName(e.currentTarget.value)}
                    id='form-input-full-name'
                />
                <Form.Input
                    error={emailError ? 'Please enter your email address' : ''}
                    value={email}
                    type="email"
                    label='Email'
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder='Email'
                />
                <Form.TextArea
                    error={messageError ? 'Please enter your message' : ''}
                    value={message}
                    label='Message'
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    placeholder='Message'
                />
                <Form.Button onClick={seteducationCall}>Submit</Form.Button>
            </Form>
        </section>
    );
};

export default SiteContact;





