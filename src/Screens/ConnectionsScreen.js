import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const ConnectionsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Connections Screen</Text>
        </View>
    ) 
}

export default ConnectionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})