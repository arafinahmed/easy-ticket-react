import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from './fireBaseManager';
import Button from 'react-bootstrap/Button';
const SignUpArea = ({ updateLoginInfo }) => {
    const [emailNotValid, setEmailNotValid] = useState(false);
    const [passwordNotValid, setPasswordNotValid] = useState(false);
    const [passwordNotMatch, setPasswordNotMatch] = useState(false);



    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;
        let re = /\S+@\S+\.\S+/;
        setEmailNotValid(!re.test(email));
        setPasswordNotValid(!(password.length > 6 && /\d{1}/.test(password)));
        if (password !== password2) {
            setPasswordNotMatch(true);
        }
        else {
            setPasswordNotMatch(false);
        }
        console.log(name, email, password, password2);
        createUserWithEmailAndPassword(name, email, password)
            .then(res => {
                console.log(res);
                updateLoginInfo(res, true);
            })

        e.preventDefault();

    }
    return (
        <div className="d-flex justify-content-center">
            <div className="login-area">
                <form onSubmit={handleSubmit}>
                    <br/>

                    <input className="form-control" type="text" name="name" placeholder="Name" required />
                    <br />
                    <input className="form-control" type="text" name="email" placeholder="Email" required />
                    {
                        emailNotValid && <> <small style={{ color: "red" }}>Email is not valid</small></>
                    }
                    <br />

                    <input className="form-control" type="password" name="password" id="" placeholder="password" required />
                    <br />
                    <input className="form-control" type="password" name="password2" id="" placeholder="Confirm password" required />
                    <br />
                    {
                        passwordNotValid && <> <small style={{ color: "red" }}>Password length must be greater than 6 and contains digit</small><br /></>

                    }
                    {
                        !passwordNotValid && passwordNotMatch && <> <small style={{ color: "red" }}>Password not match</small> <br /></>
                    }
                    <Button className="form-control" type="submit">Signup</Button>

                </form>
            </div>

        </div>
    );
};

export default SignUpArea;