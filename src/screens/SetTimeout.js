import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const SetTimeout = () => {
  function showAlert() {
    setTimeout(() => {
      Alert.alert('This is an alert');
    }, 2000);
  }

  return (
    <View>
      <Text style={styles.heading}>SetTimeout</Text>
      <Button onPress={showAlert}
      mode='contained'
      >
        Click me to see the alert after 2 seconds.
      </Button>
    </View>
  );
};

export default SetTimeout;

const styles = StyleSheet.create({
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
});
