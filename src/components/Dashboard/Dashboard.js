import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export const Dashboard = (props) => {

  const listJSX = props.dashboard.dashboardItems.map((item, i) => {
    let itemJSX;
    if(props.editedItemIndex === i) {
      itemJSX = <p><b><u>{item.label}</u></b></p>
    } else {
      itemJSX = <p>{item.label}</p>
    }
    return <h4 
            key={i} 
            onClick={props.itemOnEdit.bind(undefined,i)}
            style={{cursor: 'pointer'}}>
              {itemJSX}
          </h4>
  })

  return (
    <View>
      <Text>
        Dashbord placeholder
      </Text>
    </View>
)}

Dashboard.propTypes = {
  dashboard: React.PropTypes.object.isRequired
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
