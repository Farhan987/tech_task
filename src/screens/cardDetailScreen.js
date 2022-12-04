import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import ScreenContainer from '../components/screenContainer';
const WIDTH = Dimensions.get('window').width;
const CardDetailScreen = props => {
  let {item} = props.route.params;

  /* Design can be better than this but I have no enough data to show as a detail page,
just like in templates but I tried to make it like "Secret Santa Mobile App" but again
I didn't have enough data icons, themes etc.
*/

  return (
    <ScreenContainer style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.imageStyle}
        />

        <View style={{flex: 1}}>
          <View style={styles.blockContainer}>
            <View style={styles.block}>
              <Text style={styles.title}>Code</Text>
              <Text style={styles.subTitle}>{item.code}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>Value</Text>
              <Text style={styles.subTitle}>{item.value}</Text>
            </View>
          </View>

          <View
            style={[
              styles.blockContainer,
              {marginTop: 0, justifyContent: 'center'},
            ]}
          >
            <View style={styles.block}>
              <Text style={styles.title}>Suit</Text>
              <Text style={styles.subTitle}>{item.suit}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  imageStyle: {height: 300, width: WIDTH, marginTop: 20},
  blockContainer: {
    height: 150,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  block: {
    height: '100%',
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
  },
});
