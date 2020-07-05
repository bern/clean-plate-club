import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/home/HomeScreen';
import RecipesScreen from '../screens/recipes/RecipesScreen';
import MealPlanScreen from '../screens/meal-plan/MealPlanScreen';
import GroceriesScreen from '../screens/groceries/GroceriesScreen';
import { BottomTabParamList, HomeParamList, RecipesParamList, MealPlanParamList, GroceriesParamList } from '../types';
import RecipeDetailScreen from '../screens/recipes/components/RecipeDetailScreen';

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
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cafe" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MealPlan"
        component={MealPlanNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-alarm" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Groceries"
        component={GroceriesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-basket" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function TabBarIcon(props: { name: string; color: string }) {
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

const RecipesStack = createStackNavigator<RecipesParamList>();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{ headerTitle: 'Recipes' }}
      />
      <RecipesStack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        options={{ headerTitle: 'Recipes' }}
      />
    </RecipesStack.Navigator>
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

const GroceriesStack = createStackNavigator<GroceriesParamList>();

function GroceriesNavigator() {
  return (
    <GroceriesStack.Navigator>
      <GroceriesStack.Screen
        name="GroceriesScreen"
        component={GroceriesScreen}
        options={{ headerTitle: 'Groceries' }}
      />
    </GroceriesStack.Navigator>
  );
}
