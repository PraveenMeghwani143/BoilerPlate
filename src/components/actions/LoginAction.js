import React from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {Alert, AsyncStorage} from 'react-native';
// import notateeApi from '../../api/notatee';
//  import types from '../types'
export function LoginRes(data) {
  // return {
  //   type: types.DELETE,
  //   data,
}

export const LoginApi = (email, password) => {
    console.log('email', email)
    console.log('password', password)
 const data= {
      email: email,
      password: password,
  }
  console.log('data', data)
  return async (dispatch) => {
    fetch(`http://3.140.234.233/pitch/apiV1/login_new_user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'version' : '1'
      },
     body: JSON.stringify(data), 
    })
    
      .then((res) => res.json())
      .then((res) => {
        console.log('Login', res);
        dispatch({type: 'Login', payload: res});
        // if (res.status != 0) {
        //     Alert.alert('Login Successful');
        //   dispatch({type: 'Login', payload: res});
        // } else {
        //   Alert.alert('Something went wrong');
        // }
      })
      .catch((e) => {
        console.log('kjfgdghdf', e);
      });
  };
};