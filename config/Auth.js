import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser, setUserLoading } from '../redux/user';

const AuthStateListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, newUser => {
            if (newUser) {
                const userData = {
                    uid: newUser.uid,
                    email: newUser.email,
                };
                dispatch(setUser(userData));
            } else {
                dispatch(setUser(null));
            }
            dispatch(setUserLoading(false));
        });

        dispatch(setUserLoading(true));

        return () => unsubscribe();
    }, [dispatch]);

    return null;
};

export default AuthStateListener;
