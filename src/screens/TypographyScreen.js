import React from 'react';
import {View} from 'react-native';
import {Text} from '@rneui/base';

export default TypographyScreen = () => {
  return (
    <View>
      <Text
        h1={true}
        h1Style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        This is h1 Text example.
      </Text>
      <Text
        h2={true}
        h2Style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        This is h2 Text example.
      </Text>
      <Text
        h3={true}
        h3Style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        This is h3 Text example.
      </Text>
      <Text
        h4={true}
        h4Style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        This is h4 Text example.
      </Text>
    </View>
  );
};
