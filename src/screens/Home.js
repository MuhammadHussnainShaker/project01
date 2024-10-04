import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
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
        <Button
          title="AxiosGet"
          onPress={() => navigation.navigate('AxiosGet')}
        />
        <Button
          title="AxiosPost"
          onPress={() => navigation.navigate('AxiosPost')}
        />
        <Button
          title="AxiosPut"
          onPress={() => navigation.navigate('AxiosPut')}
        />
        <Button
          title="AxiosPatch"
          onPress={() => navigation.navigate('AxiosPatch')}
        />
        <Button
          title="AxiosDelete"
          onPress={() => navigation.navigate('AxiosDelete')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    padding:24,
    rowGap: 24,
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
  },
});

export default Home;
