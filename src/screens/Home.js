import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button title="Go To Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;
