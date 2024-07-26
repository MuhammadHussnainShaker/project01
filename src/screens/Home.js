import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button title="SIGN UP" onPress={() => navigation.navigate('Signup')} />
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
