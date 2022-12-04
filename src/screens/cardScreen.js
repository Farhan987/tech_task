import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import CardItem from '../components/cardItem';
import ScreenContainer from '../components/screenContainer';
const WIDTH = Dimensions.get('window').width;

const CardScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [deckId, setDeckId] = useState('');
  const [data, setData] = useState([]);

  /* instead of using fetch axios can also be used but
  it's just a 2 page app so we don't need to install third party package to
  call 2 APIs.
*/

  /* We can also use redux to save the deck_id and card data in redux store
  and can access through useSelectors but again it's just a 2 page application so 
  we don't need to install third party packages.
*/
  useEffect(() => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    fetch(url)
      .then(response => response.json())
      .then(data => setDeckId(data.deck_id))
      .catch(error => console.warn(error));
  }, []);

  /* I gave initial count fixed but it can also be fetched by 10 each time
  through FlatList EndReached props; until remaining becomes equal to zero(0).
*/

  useEffect(() => {
    setIsLoading(true);
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=15`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data.cards);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [deckId]);

  const renderItem = ({item}) => (
    <CardItem item={item} navigation={props.navigation} />
  );

  return (
    <ScreenContainer>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <FlatList data={data} renderItem={renderItem} />
      )}
    </ScreenContainer>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  loaderContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
