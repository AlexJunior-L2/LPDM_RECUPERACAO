import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; // Importa a tela de login que você criou
import HomeScreen from './HomeScreen'; // Importe a tela principal (que será a tela após o login)

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Principal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
