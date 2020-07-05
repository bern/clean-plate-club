import * as React from 'react';
import { Image, Linking, StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 150 }} source={require(`../../assets/images/clean-plate-club.png`)}/>
      <Text style={styles.title}>Clean Plate Club</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Card
          onPress={() => {
            goToExternalLink('https://www.seasonalfoodguide.org/');
          }}
          elevation={5}
          style={{ width: 375 }}
          accessibilityStates={[]}
        >
          <Card.Cover
            style={{
              height: 100,
              width: 375
            }}
            accessibilityStates={[]}
            source={require('../../assets/images/seasonal-food.jpg')}
          />
          <Card.Title
            accessibilityStates={[]}
            title="Seasonal Food Guide"
            subtitle="https://www.seasonalfoodguide.org/"
          />
        </Card>
      </View>
    </View>
  );
}

function goToExternalLink(url: string) {
  Linking.openURL(url);
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
