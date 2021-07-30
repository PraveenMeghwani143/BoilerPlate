import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "../Navigation/TabNavigator";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Home Screen</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.styleButton}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={{ textAlign: 'center', top: 8 }}>Back to Login Page</Text>
            </TouchableOpacity>
            {/* <TabNavigation /> */}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20
    },
    styleButton: {
        width: '50%',
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#b352bf'
    }
})