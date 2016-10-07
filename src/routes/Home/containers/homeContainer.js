import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {

  onPress(){
    Actions.counter();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> React-Native Redux Starter Kit </Text>
        <TouchableOpacity onPress={() => this.onPress('counter')}>
          <Text style={styles.buttonText}> COUNTER </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPress('dashboard')}>
          <Text style={styles.buttonText}> DASHBOARD </Text>
        </TouchableOpacity>
        <Text style={styles.text}> Welcome! </Text>
        <Image style={styles.image} source={require('../assets/Duck.jpg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'deepskyblue',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'deepskyblue',
  },
  image: {
    width: 100,
    height: 100
  }
})

export default Home
