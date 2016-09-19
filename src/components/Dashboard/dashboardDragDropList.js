import React, { Component }from 'react'
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions, TouchableOpacity } from 'react-native'


class DashboardDragDropElement extends Component {
  constructor(props){
      super(props);

      this.state = {
          pan: new Animated.ValueXY(),
          posY: 0
      };

      this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,

          onPanResponderMove: Animated.event([null,{
              dx: this.state.pan.x,
              dy: this.state.pan.y
          }]),

          onPanResponderRelease: (e, gesture) => {

            this.props.submitNewPositions();
            this.props.editLabelAction(this.props.item.key)

              Animated.spring(
                  this.state.pan,
                  {toValue:{x:0,y:0}}
              ).start();
          }
      });

      this.measureMyComponent = this.measureMyComponent.bind(this);
  }

  measureMyComponent(event) {
    const { setElementPosition } = this.props;

    let posY = event.nativeEvent.layout.y;

    setElementPosition(posY);

    this.setState({
      posY: posY
    })
  }

  render() {
    const { item } = this.props;

    return (
      <Animated.View
        ref={'element'}
        onLayout={this.measureMyComponent}
        {...this.panResponder.panHandlers}
        style={this.state.pan.getLayout()}>
          <Text style={styles.buttonText}> {item.label} </Text>
      </Animated.View>
    )
  }

}

class DashboardDragDropList extends Component {

  constructor(props){
      super(props);

      this.state = {
        elementsPosition: {}
      }

      this.renderDragDropListElements = this.renderDragDropListElements.bind(this);
      this.setElementPosition = this.setElementPosition.bind(this);
      this.getElementsPositions = this.getElementsPositions.bind(this);
      this.submitNewPositions = this.submitNewPositions.bind(this);
  }

  setElementPosition(key, posY) {
    let currentElements = Object.assign({}, this.state.elementsPosition);
    currentElements[key] = posY;
    this.setState({
      elementsPosition: currentElements
    });
  }

  submitNewPositions() {
    let currentElements = Object.assign({}, this.state.elementsPosition);

    let positionsArray = [];
    for(let key in currentElements){
      positionsArray.push(currentElements[key]);
    }
    positionsArray.sort(function(a, b) {
        return a - b
    });

    newOrder = [];
    positionsArray.map((currentPos)=>{
      for(let key in currentElements){
        if(currentPos === currentElements[key]){
          newOrder.push(key);
        }
      }
    })

    this.props.changeItemsOrder(newOrder);
  }

  getElementsPositions(){
    return this.state.elementsPosition;
  }

  renderDragDropListElements() {
    const { list, editLabelAction } = this.props;

    return list.map((item, i) => {
      return <DashboardDragDropElement
              key={item.key}
              index={i}
              item={item}
              editLabelAction={editLabelAction}
              submitNewPositions={this.submitNewPositions}
              getElementsPositions={this.getElementsPositions}
              setElementPosition={(posY)=>this.setElementPosition(item.key, posY)}/>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderDragDropListElements()}
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
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  }
})

export default DashboardDragDropList
