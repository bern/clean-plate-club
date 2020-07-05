import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import RecipesListItem from './components/RecipesListItem';

const recipes = [
  {id: 0, name: 'Oyakodon'},
  {id: 1, name: 'Garlic Green Beans'},
  {id: 2, name: 'Chicken Salad'},
  {id: 3, name: 'Massaman Curry'},
  {id: 4, name: 'Taco Dip'},
  {id: 5, name: 'Olive-oil Baked Chicken'},
  {id: 6, name: 'Buttermilk Pancakes'},
  {id: 7, name: 'Vegetarian Chili'},
  {id: 8, name: 'Japanese Curry Rice'},
  {id: 9, name: 'Garlic Parmesan Chicken'},
  {id: 10, name: 'Matzah Ball Soup'},
  {id: 11, name: 'BAWF Salad'},
]

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{
          width: 375,
          marginTop: 10
        }}
        data={recipes}
        renderItem={
          (item) => <RecipesListItem name={item.item.name}/>
        }
        keyExtractor={(item) => `item-${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
