import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import Snackbar from 'react-native-snackbar';
import { colors, styles } from '../theme/Styles';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleSignup = async () => {
        if (email && password) {
            // Proceed to save data to FireStore
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                Snackbar.show({
                    text: 'User created successfully!',
                    backgroundColor: 'green',
                });
            } catch (e) {
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

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>
                    Sign Up
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/signup.png')}
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
                onPress={handleSignup}
                style={[styles.button, { backgroundColor: colors.button }]}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.switchScreenText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
}
