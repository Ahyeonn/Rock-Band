import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import BandsScreen from './BandsScreen';
import StatsScreen from './StatsScreen';
import StylesScreen from './StylesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarStyle: {
      height: 80,
      backgroundColor: '#000'
    },
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Bands') {
        iconName = focused
          ? 'ios-information-circle' 
          : 'ios-information-circle-outline';
      } else if (route.name === 'Stats') {
        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
      }
      else if (route.name === 'Styles') {
        iconName = focused ? 'ios-star' : 'ios-star-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#f00',
            tabBarInactiveTintColor: '#600',
            tabBarInactiveBackgroundColor: '#000',
            tabBarActiveBackgroundColor: '#111'
          })}
        
        >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Styles" component={StylesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}