import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Dashboard = (props) => {
  const { value } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Dashboard visits: <Text style={styles.value}>{value}</Text>
      </Text>
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
  value: {
    width: 40,
    fontWeight: 'bold',
    color: 'limegreen',
    textAlign: 'center',
  },
})

export default Dashboard
