import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { decrement, increment } from '../store/counterReducer'
import Counter from '../components/counter'

class CounterContainer extends Component {
  render() {
    const { counter, dispatch } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Counter </Text>
        <Counter
          value={counter}
          decrement={() => dispatch(decrement())}
          increment={() => dispatch(increment())}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps)(CounterContainer)

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
})
