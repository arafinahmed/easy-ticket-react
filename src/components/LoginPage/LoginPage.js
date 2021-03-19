import React from 'react';
import { fireBaseLoginWithGoogle } from './fireBaseManager';
import LoginArea from './LoginArea';


const LoginPage = () => {

    const loginWithGoogle = () => {
        fireBaseLoginWithGoogle()
        .then(res => console.log(res))
    }
    return (
        <div>
            <LoginArea></LoginArea>
            <button onClick={loginWithGoogle}>Login with google</button>
        </div>
    );
};

export default LoginPage;