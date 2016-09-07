import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Counter = (props) => {
  const { value, increment, doubleAsync } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Counter: <Text style={styles.value}>{value}</Text>
      </Text>
      <View style={styles.containerCounter}>
        <TouchableOpacity onPress={() => increment(1)} style={styles.button}>
          <Text style={styles.buttonText}> Increment </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doubleAsync()} style={styles.button}>
          <Text style={styles.buttonText}> Double (Async) </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  containerCounter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  value: {
    width: 40,
    fontWeight: 'bold',
    color: 'limegreen',
    textAlign: 'center',
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
})

export default Counter
