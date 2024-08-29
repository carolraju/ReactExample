import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserLoading } from '../redux/user';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Snackbar from 'react-native-snackbar';
import { auth } from '../config/firebase';
import { colors, styles } from '../theme/Styles';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (email && password) {
            try {
                dispatch(setUserLoading(true));
                await signInWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false));
                navigation.navigate('Home');
            } catch (e) {
                dispatch(setUserLoading(false));
                Snackbar.show({
                    text: e.message,
                    backgroundColor: 'red',
                });
            }
        } else {
            Snackbar.show({
                text: 'Email and Password are required!',
                backgroundColor: 'red',
            });
        }
    };

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>
                    Login
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/login.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={value => setEmail(value)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        value={password}
                        secureTextEntry
                        onChangeText={value => setPassword(value)}
                        style={styles.input}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={handleLogin}
                style={[styles.button, { backgroundColor: colors.button }]}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity onPress={navigateToSignUp}>
                <Text style={styles.switchScreenText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
