import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const animationDuration = 1000;

const Task = (props) => {
  const translateAnim = useRef(new Animated.Value(0)).current

  const onCompleteHandler = () => {
    Animated.timing(
      translateAnim,
      {
        // Просто большое значение, чтобы таска уехала за экран
        toValue: 500,
        duration: animationDuration,
        useNativeDriver: false,
      }
    ).start();
    setTimeout(() => props.onComplete(props.task.id), animationDuration);
  }

  return (
    <TouchableOpacity key={props.task.id} onPress={onCompleteHandler}>
      <Animated.View style={{
        ...styles.item,
          transform: [{ translateX: translateAnim }],
      }}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.task.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;