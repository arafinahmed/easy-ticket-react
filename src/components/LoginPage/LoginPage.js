import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ContextApi } from '../../App';
import { fireBaseLoginWithGoogle } from './fireBaseManager';
import LoginArea from './LoginArea';
import SignUpArea from './SignUpArea';


const LoginPage = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const setLoggedInUser = useContext(ContextApi)[3];
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    

    const loginWithGoogle = () => {
        fireBaseLoginWithGoogle()
            .then(res => {
                console.log(res);
                updateLoginInfo(res, true);
            })
    }
    const updateLoginInfo = (res, redirect) => {
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
        else{
            history.replace("/");
        }
    }
    return (
        <div>
            {
                isNewUser ? <SignUpArea updateLoginInfo={updateLoginInfo} key="SignUpArea"></SignUpArea> : <LoginArea updateLoginInfo={updateLoginInfo} key="LoginArea"></LoginArea>
            }
            <p onClick={() => setIsNewUser(!isNewUser)}>SignUp</p>
            <button onClick={loginWithGoogle}>Login with google</button>
        </div>
    );
};

export default LoginPage;