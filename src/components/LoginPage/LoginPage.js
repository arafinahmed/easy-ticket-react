import React, { useState } from 'react';
import { fireBaseLoginWithGoogle } from './fireBaseManager';
import LoginArea from './LoginArea';
import SignUpArea from './SignUpArea';


const LoginPage = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const loginWithGoogle = () => {
        fireBaseLoginWithGoogle()
        .then(res => console.log(res))
    }
    return (
        <div>
            {
                isNewUser ? <SignUpArea></SignUpArea> : <LoginArea></LoginArea>
            }
            <p onClick={() => setIsNewUser(!isNewUser)}>SignUp</p>
            <button onClick={loginWithGoogle}>Login with google</button>
        </div>
    );
};

export default LoginPage;