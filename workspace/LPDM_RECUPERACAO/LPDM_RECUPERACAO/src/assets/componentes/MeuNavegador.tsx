import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeladeLogin from '../telas/login/LoginScreen';


const Stack = createStackNavigator();

const MeuNavegador: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={TeladeLogin} />
    </Stack.Navigator>
  );
};

export default MeuNavegador;