import React, { Element } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './scenes'

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.7,
  shadowRadius: 5,
})

export default (): Element => (
  <Router
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
)
