import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = WIDTH - 20;
const CardItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() =>
        navigation.navigate('CardDetailScreen', {
          item,
        })
      }
    >
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.imageContainer}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.suit}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 12,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: CARD_WIDTH,
    backgroundColor: '#e6e6e6',
    height: CARD_WIDTH / 2,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
