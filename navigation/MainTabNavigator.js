import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyWebScreen from '../screens/MyWebScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ExperienceScreen from '../screens/ExperienceScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Karan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  ),
};

HomeStack.path = '';




const MyWebStack = createStackNavigator(
  {
    MyWeb: MyWebScreen,
  },
  config
);

MyWebStack.navigationOptions = {
  tabBarLabel: 'Linkedin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `logo-linkedin${focused ? '' : '-outline'}`
          : 'logo-linkedin'
      }
    />
  ),
};

MyWebStack.path = '';


const SkillsStack = createStackNavigator(
  {
    Skills: SkillsScreen,
  },
  config
);

SkillsStack.navigationOptions = {
  tabBarLabel: 'Skills',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-hammer${focused ? '' : '-outline'}`
          : 'md-hammer'
      }
    />
  ),
};

SkillsStack.path = '';





const ExperienceStack = createStackNavigator(
  {
    Experience: ExperienceScreen,
  },
  config
);

ExperienceStack.navigationOptions = {
  tabBarLabel: 'Experience',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} />
  ),
};

ExperienceStack.path = '';








const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SkillsStack,
  ExperienceStack,
  MyWebStack,

 
});

tabNavigator.path = '';

export default tabNavigator;
