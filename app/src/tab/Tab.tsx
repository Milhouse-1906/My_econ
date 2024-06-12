import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Limite from '../limite/Limite';
import Perfil from '../perfil/Perfil';
import Home from '../home/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Limite') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons nome={iconName} size={size} color={color} />;
        },
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Limite" component={Limite} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
