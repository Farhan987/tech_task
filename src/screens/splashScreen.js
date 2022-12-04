import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../components/screenContainer';
const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('CardScreen'), 3000);
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Deck of Cards</Text>
        <Text style={styles.subTitle}>An API</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default SplashScreen;
