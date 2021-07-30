import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>About Us Screen</Text> 
        </View>
    ) 
}

export default AboutUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})