import {View, Text, Button} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is Screen3</Text>
      <Button
        title="Go back to Screen1"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Screen3;
