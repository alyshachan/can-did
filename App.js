import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './src/screens/todo';
import WelcomePage from './src/screens/welcome';
import NewTaskScreen from './src/screens/newtasks';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
        <Stack.Screen name="NewTaskScreen" component={NewTaskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
