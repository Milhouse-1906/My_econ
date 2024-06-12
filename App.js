import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './app/src/registro/Registro';
import Login from './app/src/login/Login';
import TabNavigation from './app/src/tab/Tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ titulo: 'Login' }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ titulo: 'Register' }}
        /> 
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}