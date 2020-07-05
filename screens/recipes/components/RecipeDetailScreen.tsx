import * as React from 'react';

import { Text, StyleSheet } from 'react-native';
import { Card, Divider, Paragraph, Title } from 'react-native-paper';
import { View } from '../../../components/Themed';

export default function RecipeDetailScreen({ route }: { route: { params: any }}) {
  return (
    <View style={styles.container}>
      <Card
        accessibilityStates={[]}
        elevation={5}
        style={{ marginBottom: 20, width: 340 }}
      >
        <Card.Title
          title={route.params.name}
          accessibilityStates={[]}
        />
        <Divider accessibilityStates={[]}/>
        <Card.Content>
          <Title>
            Ingredients
          </Title>
          <Paragraph>
            <Text>1 Egg</Text>
          </Paragraph>
          <Divider accessibilityStates={[]}/>
          <Title>
            Instructions
          </Title>
          <Paragraph>
            <Text>Preheat oven to 400 degrees F</Text>
          </Paragraph>
          <Divider accessibilityStates={[]}/>
          <Title>
            Notes
          </Title>
          <Paragraph>
            <Text>Specific notes here...</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
