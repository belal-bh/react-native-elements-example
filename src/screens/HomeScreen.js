import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Typography')}>
        Typography
      </Button>
    </View>
  );
};
