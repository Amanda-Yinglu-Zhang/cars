import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';

import aboutScreen from './about';
import contactScreen from './contact';
import homeScreen from './home';

const tabNavigator = createBottomTabNavigator({
  Home: homeScreen,
  About: aboutScreen,
  Contact: contactScreen
  
})
export  default createAppContainer(tabNavigator)
