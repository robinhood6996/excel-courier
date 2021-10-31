import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {

        // return <div class="container mx-auto my-10 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        return <div className="my-10">
            <div class="relative">
                <div class="w-20 h-20 border-purple-200 border-2 rounded-full container mx-auto"></div>

            </div>

            <div class="relative">
                <div class="w-10 h-10 border-purple-200 border-2 rounded-full container mx-auto"></div>

            </div>

            <div class="relative">
                <div class="w-5 h-5 border-purple-200 border-2 rounded-full container mx-auto"></div>

            </div></div>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;