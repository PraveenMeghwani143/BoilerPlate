import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import cfgStore, { persistor } from "./store/ConfigureStore";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from "./src/Screens/SplashScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import ConnectionsScreen from "./src/Screens/ConnectionsScreen";
import MessagesScreen from "./src/Screens/MessagesScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import AboutUsScreen from './src/Screens/AboutUsScreen';

import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AboutUsStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav =() => {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNav} />
        <Drawer.Screen name="AboutUs" component={AboutUsStackNav} />
        <Drawer.Screen name="StackNav" component={StackNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Connections" component={ConnectionsScreen}
        options={{
          tabBarLabel: 'Connections',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="account-group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Messages" component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="message-reply-text" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStackNav =() => {
  return (
    <NavigationContainer independent={true} >
      <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const AboutUsStackNav = () => {
  return (
    <NavigationContainer independent={true} >
      <AboutUsStack.Navigator headerMode='none'>
        <AboutUsStack.Screen name="HomeScreen" component={AboutUsScreen} />
      </AboutUsStack.Navigator>
    </NavigationContainer>
  );
}

const StackNav =() => {
  return (
    <NavigationContainer independent={true} >
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="TabNav" component={TabNav} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="ConnectionsScreen" component={ConnectionsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  const store = cfgStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerNav />
      </PersistGate>
    </Provider>
  )
}

export default App;
