
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <>
            <Header></Header>
            <div className="login-form">

                <h3 className="my-5">Please Login with Google</h3>
                <button onClick={handleGoogleLogin} className="btn btn-success btn-outer-primary"><img src="https://img.icons8.com/color/96/000000/google-logo.png" alt="" /></button>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
