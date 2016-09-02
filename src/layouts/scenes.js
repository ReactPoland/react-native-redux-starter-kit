import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import HomeContainer from '../containers/homeContainer'
import CounterContainer from '../containers/counterContainer'

const scenes = Actions.create(
  <Scene key="app" >
    <Scene key="home" component={HomeContainer} title="Home" />
    <Scene key="counter" component={CounterContainer} title="Counter" />
  </Scene>
)

export default scenes
