import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BackHandler, Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { auth } from '../config/firebase';
import { styles } from '../theme/Styles';
import data from '../assets/mock/data';

const HomeScreen = ({navigation}) => {
    const { user } = useSelector(state => state.user);
    const [dataSource, setDataSource] = useState([]);

    const splitName = user.email.split('@')[0];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            BackHandler.exitApp();
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setDataSource(data);
    }, []);

    useEffect(() => {
        const displayName = splitName;
        navigation.setOptions(
            {
                title: `Welcome ${displayName}`,
                headerRight: () => (
                    <Button
                        title="Logout"
                        onPress={handleLogout}
                    />
                ),
            });
    }, [navigation, splitName]);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Detail', { item })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/home.png')}
                    style={styles.image}
                />
            </View>

            <FlatList data={dataSource} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

export default HomeScreen;
