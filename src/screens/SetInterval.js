import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const SetInterval = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevValue => prevValue + 1);
    }, 1000);
    return () => {
        clearInterval(intervalId);
        console.log('Interval closed');
        
    }
  }, []);

  return (
    <View>
      <Text style={styles.heading}>SetInterval</Text>
      <Text style={styles.heading}>
        You have passed {seconds} on this screen.
      </Text>
    </View>
  );
};

export default SetInterval;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
