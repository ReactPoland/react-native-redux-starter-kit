import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class HomeContainer extends Component {

  onPress(){
    Actions.counter();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> React-Native redux starter </Text>
        <TouchableOpacity onPress={() => this.onPress()}>
          <Text style={styles.buttonText}> COUNTER </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(0, 0, 0)',
  },
})
