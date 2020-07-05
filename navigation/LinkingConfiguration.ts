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
          Recipes: {
            screens: {
              RecipesScreen: 'recipes',
            },
          },
          MealPlan: {
            screens: {
              MealPlanScreen: 'meal-plan',
            },
          },
          Groceries: {
            screens: {
              GroceriesScreen: 'groceries',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
