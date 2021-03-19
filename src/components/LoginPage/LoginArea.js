import React, {  useState } from 'react';
import { signInWithEmailAndPassword } from './fireBaseManager';
const LoginArea = ({updateLoginInfo}) => {
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [passwordNotValid, setPasswordNotValid] = useState(false);

  const handleSubmit = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    let re = /\S+@\S+\.\S+/;
    setEmailNotValid(!re.test(email));
    setPasswordNotValid(!(password.length > 6 && /\d{1}/.test(password)));
    signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        updateLoginInfo(res, true);
      })
    e.preventDefault();
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Your Email" required />
        {
          emailNotValid && <> <small style={{ color: "red" }}>Email is not valid</small></>
        }
        <br />
        <input type="password" name="password" id="" placeholder="Your password" required />
        <br />
        {
          passwordNotValid && <> <small style={{ color: "red" }}>Password length must be greater than 6 and contains digit</small><br /></>

        }
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginArea;