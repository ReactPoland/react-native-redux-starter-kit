import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'

export const Dashboard = (props) => {
  const listJSX = props.dashboard.dashboardItems.map((item, i) => {
    return (
      <TouchableOpacity key={i} onPress={() => props.itemOnEdit(i)}>
        <Text style={styles.buttonText}> {item.label} </Text>
      </TouchableOpacity>
      )
  })

  const onChangePolifil = (text) => {
    // we use this function because our
    // DashboardContainer uses the DOM's
    // event for reading the value as:
    // { inputValue: e.target.value }
    const eventPolifil = {
      target: {
        value: text
      }
    }
    props.inputOnChange(eventPolifil)
  }

  const onSubmitPolifil = () => {
    // the same as in the onChange
    // we need to polifil the web 
    // browser DOM on the 
    // React Native / iOS platform
    const eventPolifil = {
      preventDefault: () => {}
    }
    props.onSubmit(eventPolifil)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Dashboard visits: 
        <Text style={styles.value}>{props.dashboard.visitsCount}</Text>
      </Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => onChangePolifil(text)}
        value={props.inputValue}
        placeholder='Type here new label' />
      <TouchableOpacity onPress={onSubmitPolifil} style={styles.button}>
        <Text style={styles.buttonText}> 
        {
          props.editedItemIndex === null 
          ? 
          'Add New Item To The List'
          :
          'Edit Item'
        }
        </Text>
      </TouchableOpacity> 
      {listJSX}
    </View>
)}

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
  inputText: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
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
  item: {
    fontSize: 20,
    textAlign: 'center',
  }
})

export default Dashboard
