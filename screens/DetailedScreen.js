import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/Styles';

const DetailScreen = ({ route }) => {
    const {item} = route.params;

    return (
        <ImageBackground
            source={require('../assets/nature.jpg')}
            style={styles.detailContainer}>
            <View style={styles.detailItem}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default DetailScreen;
