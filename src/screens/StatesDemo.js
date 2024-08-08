import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function StatesDemo() {
  // useState
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(1);

  // Effect to log when the count changes
  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
    return () => {
      console.log('Count effect cleanup');
    };
  }, [count]); // Runs every time `count` changes

  // useRef
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // useMemo
  // without useMemo, add todo will also take time
  // const expensiveComputation = () => {
  //   for (let i = 0; i < 3000000; i++) {
  //     // do nothing
  //   }
  //   return count * 2;
  // };
  // const computedValue = expensiveComputation();

  // with useMemo, add todo will not also take time
  const computedValue = useMemo(() => {
    console.log('Doing Expensive Computation');

    for (let i = 0; i < 3000000; i++) {
      // do nothing
    }
    return count * 2;
  }, [count]);

  // useCallback
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const addTodo = () => {
    setTodos(prevTodos => prevTodos + 1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Focus me on mount"
      />
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Text style={styles.text}>
        Double of Count calculated after expensive Computation: {computedValue}
      </Text>
      <Button title="Add Todo" onPress={addTodo} />
      <Text style={styles.text}>Number of Todos: {todos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default StatesDemo;
