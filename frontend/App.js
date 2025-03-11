import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UsersScreen';
import PostsScreen from './screens/PostsScreen';
import RecordsScreen from './screens/RecordsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Usuarios" component={UsersScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Registros" component={RecordsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
