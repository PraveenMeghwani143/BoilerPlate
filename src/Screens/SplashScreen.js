import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import { images } from "../../src/Utils/Images";

export const SplashScreen = ({navigation}) => {

        setTimeout(() => {
            navigation.navigate('LoginScreen')
        },2000)
    

    return (
            <View style={styles.container}>  
                <Image
                    source={images.logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                 <Text style={styles.textHello}>Hello Redux</Text>
            </View>
    )
  }

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    textHello: {
        fontSize: 20
    }
})