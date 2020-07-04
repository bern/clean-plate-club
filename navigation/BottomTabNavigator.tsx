import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/home/HomeScreen';
import RecipeScreen from '../screens/recipe/RecipeScreen';
import MealPlanScreen from '../screens/meal-plan/MealPlanScreen';
import GroceryScreen from '../screens/grocery/GroceryScreen';
import { BottomTabParamList, HomeParamList, RecipeParamList, MealPlanParamList, GroceryParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipe"
        component={RecipeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MealPlan"
        component={MealPlanNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Grocery"
        component={GroceryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const RecipeStack = createStackNavigator<RecipeParamList>();

function RecipeNavigator() {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{ headerTitle: 'Recipe' }}
      />
    </RecipeStack.Navigator>
  );
}

const MealPlanStack = createStackNavigator<MealPlanParamList>();

function MealPlanNavigator() {
  return (
    <MealPlanStack.Navigator>
      <MealPlanStack.Screen
        name="MealPlanScreen"
        component={MealPlanScreen}
        options={{ headerTitle: 'Meal Plan' }}
      />
    </MealPlanStack.Navigator>
  );
}

const GroceryStack = createStackNavigator<GroceryParamList>();

function GroceryNavigator() {
  return (
    <GroceryStack.Navigator>
      <GroceryStack.Screen
        name="GroceryScreen"
        component={GroceryScreen}
        options={{ headerTitle: 'Grocery' }}
      />
    </GroceryStack.Navigator>
  );
}
