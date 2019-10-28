import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

import CategoriesScreen from '../screens/exercises/index/CategoriesScreen'
import CategoryDetailScreen from '../screens/exercises/exercise/CategoryDetailScreen'
import ExerciseScreen from '../screens/exercises/exercise/ExerciseScreen'

const config = Platform.select({
  web: { headerMode: 'float' },
  default: { headerMode: 'none' },
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
}

HomeStack.path = ''

const ExercisesStack = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryDetail: { screen: CategoryDetailScreen },
    ExerciseScreen: { screen: ExerciseScreen },
  },
  config
)

ExercisesStack.navigationOptions = {
  tabBarLabel: 'Exercises',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-shuffle' : 'md-shuffle'}
    />
  ),
}

ExercisesStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  ExercisesStack,
  HomeStack,
  SettingsStack,
})

tabNavigator.path = ''

export default tabNavigator
