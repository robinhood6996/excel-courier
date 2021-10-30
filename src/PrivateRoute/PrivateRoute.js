import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        // return <button type="button" class="bg-rose-600 ..." disabled>
        //     <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        //     </svg>
        //     Processing
        // </button>
        return <div class="container mx-auto my-10 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
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