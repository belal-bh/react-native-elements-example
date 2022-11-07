import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Button, Text, ListItem} from '@rneui/base';

const screens_data = [
  {
    name: 'Typography',
    description: 'Example of Text, View etc.',
  },
];

export default HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
          <ListItem.Title style={{color: '#00a0db', fontWeight: 'bold'}}>
            {item.name}
          </ListItem.Title>
        </TouchableOpacity>
        {item?.description && (
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        )}
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View>
      <Text
        h4={true}
        h4Style={{
          paddingVertical: 10,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        React Native Elements Example
      </Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={screens_data}
        renderItem={renderItem}
      />
    </View>
  );
};
