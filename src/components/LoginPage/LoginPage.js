import React from 'react';
import { fireBaseLoginWithGoogle } from './fireBaseManager';


const LoginPage = () => {

    const loginWithGoogle = () => {
        fireBaseLoginWithGoogle()
        .then(res => console.log(res))
    }
    return (
        <div>
            <button onClick={loginWithGoogle}>Login with google</button>
        </div>
    );
};

export default LoginPage;