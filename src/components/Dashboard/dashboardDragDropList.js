import React, { Component }from 'react'
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions, TouchableOpacity } from 'react-native'

class DashboardDragDropList extends Component {

  constructor(props){
      super(props);

      this.state = {
          pan     : new Animated.ValueXY()   //Step 1
      };

      this.panResponder = PanResponder.create({    //Step 2
          onStartShouldSetPanResponder : () => true,
          onPanResponderMove           : Animated.event([null,{ //Step 3
              dx : this.state.pan.x,
              dy : this.state.pan.y
          }]),
          onPanResponderRelease           : (e, gesture) => {
              Animated.spring(            //Step 1
                  this.state.pan,         //Step 2
                  {toValue:{x:0,y:0}}     //Step 3
              ).start();
          }
      });

      this.renderDragDropListElements = this.renderDragDropListElements.bind(this);
  }

  renderDragDropListElements() {
    const { list } = this.props;

    return list.map((item, i) => {
        return <Animated.View
              key={i}
              {...this.panResponder.panHandlers}
              style={[this.state.pan.getLayout(), styles.circle]}>
              {item}
          </Animated.View>
    })
  }

  render() {
    const { list } = this.props;

    console.log("list", list)

    return (
      <View style={styles.container}>
        {this.renderDragDropListElements()}
      </View>
    )
  }
}

const CIRCLE_RADIUS = 36;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
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
  },
  circle: {
    backgroundColor     : '#1abc9c',
  }
})

export default DashboardDragDropList
