import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Screen3 from './screens/Screen3';
import StatesDemo from './screens/StatesDemo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="StatesDemo" component={StatesDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
