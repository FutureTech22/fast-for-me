import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import FastingScreen from '../screens/FastingScreen';
import KetoScreen from '../screens/KetoScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Fasting: {
      screen: FastingScreen,
    },
    Keto: {
      screen: KetoScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Fasting':
            iconName = 'clock-o';
            break;
          case 'Keto':
            iconName = 'cutlery';
            break;
        }
        return (
          <FontAwesome
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
