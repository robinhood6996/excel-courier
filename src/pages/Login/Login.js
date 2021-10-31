import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const handleLogin = () => {
        handleGoogleSignIn()
            .then(res => {
                history.push(redirectUri);
            })
            .finally(setIsLoading(false))
    }

    return (
        <div>
            <div className=" container mx-auto text-center login-area my-10">
                <h2 className="text-3xl font-bold">Login</h2>
                <button className=" p-6 m-10 font-bold bg-red-800 text-white" onClick={handleLogin}><FontAwesomeIcon icon={faSignInAlt} /> Google Signin</button>
            </div>

        </div>
    );
};

export default Login;