import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Recipe: {
            screens: {
              RecipeScreen: 'recipe',
            },
          },
          MealPlan: {
            screens: {
              MealPlanScreen: 'meal-plan',
            },
          },
          Grocery: {
            screens: {
              GroceryScreen: 'grocery',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
