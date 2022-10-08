import React from 'react'
import LoginPage from './screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}