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
            <div className=" container mx-auto text-center login-area">
                <h2>Login</h2>
                <button className="bg-white border-2 border-red-600 p-6 m-10 font-bold" onClick={handleLogin}>Google Signin</button>
            </div>

        </div>
    );
};

export default Login;