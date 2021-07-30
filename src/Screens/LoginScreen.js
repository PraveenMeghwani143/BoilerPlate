import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { LoginApi } from "../components/actions/LoginAction";
import { images } from "../../src/Utils/Images";

export const LoginScreen = ({ navigation }) => {
    dispatch = useDispatch();

    const loginRedux = useSelector(state => state.LOGIN);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (loginRedux != undefined && loginRedux.status && loginRedux.status === 1) {
            navigation.navigate('TabNav')
            dispatch({ type: 'Login', payload: '' });
        }
    }, [loginRedux]);


    const Validation = () => {
        var text = email;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var text = password;
        let regPassword = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email == '' || email == null) {
            setEmailErrors('Please enter Email');
        }
        else if (password == '' || password == null) {
            setPasswordErrors('Please enter Password');
        }
        else {
            dispatch(LoginApi(email, password));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Login Screen</Text>

            <View style={styles.inputView}>
                <TextInput
                    keyboardType="email-address"
                    style={styles.textInput}
                    placeholder="Enter your Email Address"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.inputView}
                    placeholder="Enter your Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: 20, top: 22 }}>
                    {!showPassword ?
                        <Image
                            style={styles.styleImage}
                            source= {images.visibility}
                        /> :
                        <Image
                            style={styles.styleImage}
                            source={images.eye_open}
                        />}
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.styleButton}
                onPress={() =>  navigation.navigate('TabNav')}
            >
                <Text style={{ textAlign: 'center', top: 8}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderColor: "#9a9a9a",
        borderRadius: 10,
        margin: 10
    },
    styleButton: {
        width: '50%',
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#b352bf'
    },
    styleImage: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    textStyle: {
        fontSize: 20
    }
})