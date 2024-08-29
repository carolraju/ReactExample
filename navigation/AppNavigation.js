import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailedScreen';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser, setUserLoading } from '../redux/user';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(null));
        const unsubscribe = onAuthStateChanged(auth, newUser => {
            if (newUser) {
                const userData = {
                    uid: newUser.uid,
                    email: newUser.email,
                    displayName: newUser.displayName,
                };
                dispatch(setUser(userData));
            } else {
                dispatch(setUser(null));
            }
            dispatch(setUserLoading(false));
        });

        //Cleanup subscription
        return () => unsubscribe();
    }, [dispatch]);

    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home"
                        component={HomeScreen} />
                    <Stack.Screen name="Detail"
                        component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login"
                        options={{ headerShown: false }}
                        component={LoginScreen} />
                    <Stack.Screen name="SignUp"
                        options={{ headerShown: false }}
                        component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
