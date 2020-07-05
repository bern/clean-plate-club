import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RecipesListItem({name}: {name: string}) {
  const navigation = useNavigation();

  return (
    <Card
      accessibilityStates={[]}
      elevation={5}
      style={{ marginBottom: 10, width: 340 }}
      onPress={() => {
        navigation.navigate('RecipeDetailScreen', { name });
      }}
    >
      <Card.Title
        title={name}
        right={(props) => <Avatar.Icon {...props} size={40} style={{ marginRight: 20 }} color={'white'} icon="food"/>}
        accessibilityStates={[]}
      />
    </Card>
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
