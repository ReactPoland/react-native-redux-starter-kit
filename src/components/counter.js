import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Counter = (props) => {
  const { value, decrement, increment } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => decrement()} style={styles.button}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => increment()} style={styles.button}>
        <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
    </View>
  )
}

Counter.defaultProps = {
  value: 0,
}

export default Counter

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  value: {
    width: 40,
    textAlign: 'center',
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
})

