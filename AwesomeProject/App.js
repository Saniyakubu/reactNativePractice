import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Weather from './src/weather/Currentweather';
import { styles3 } from './styles/style';
import Page2Nav from './src/weather/Page2';
import Page3Nav from './src/weather/Page3';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer style={styles3.wrapper}>
      <Tab.Navigator>
        <Tab.Screen
          name="Current"
          component={Weather}
          options={{
            tabBarActiveTintColor: 'tomato',
          }}
        />
        <Tab.Screen
          name="Page2"
          component={Page2Nav}
          options={{
            tabBarActiveTintColor: 'tomato',
          }}
        />
        <Tab.Screen
          name="page3"
          component={Page3Nav}
          options={{
            tabBarActiveTintColor: 'tomato',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
