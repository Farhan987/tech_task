import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenContainer = props => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>
    </>
  );
};

export default ScreenContainer;
