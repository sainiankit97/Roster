import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Screens/Home";
import { Provider } from 'react-redux';
import configstore from "./Store"
import DutiesList from './Screens/Duties';
import DutyDetails from './Screens/DutyDetails';
import FlightDetails from './Screens/FlightDetails';
const store = configstore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DutiesList" component={DutiesList} />
            <Stack.Screen name="DutyDetails" component={DutyDetails} />
            <Stack.Screen name="FlightDetails" component={FlightDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}