import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is Home Screen</Text>
      <Button title="SIGN UP" onPress={() => navigation.navigate('Signup')} />
      <Button
        title="StatesDemo"
        onPress={() => navigation.navigate('StatesDemo')}
      />
      <Button
        title="SetTimeout"
        onPress={() => navigation.navigate('SetTimeout')}
      />
      <Button
        title="SetInterval"
        onPress={() => navigation.navigate('SetInterval')}
      />
      <Button title="Fetch1" onPress={() => navigation.navigate('Fetch1')} />
      <Button title="Fetch2" onPress={() => navigation.navigate('Fetch2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    rowGap: 24,
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
  },
});

export default Home;
