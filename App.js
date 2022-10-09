import React from 'react'
import LoginPage from './screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignInPage from './screens/SignInPage';
import AddCarPage from './screens/AddCarPage';
import Cars from './screens/Cars';
import ManageCarPage from './screens/ManageCarPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="AddCarPage" component={AddCarPage} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="ManageCarPage" component={ManageCarPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}