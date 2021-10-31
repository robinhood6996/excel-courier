import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from '../Firebase/FirebaseInit';

initializeFirebase();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    //Handle Google Signin
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }


    //Locate the user
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unSubscribed;
    }, [])


    //Logout Handler
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                alert('Sucessfully Signout');
                setUser({});
            })
            .finally(setIsLoading(false));
    }

    return { handleGoogleSignIn, user, handleLogout, isLoading, setIsLoading };
};

export default useFirebase;