import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import Routes from '../routes/index'

console.log("Routes", Routes);

const createScenes = () => {
	return Routes.childRoutes.map((route)=>{
		return <Scene
			    	key={route.path}
			    	component={route.component}
			    	title={route.title} />
	});
}

const navigationBarStyle = {
  backgroundColor: 'white'
}

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={navigationBarStyle}>
    <Scene
    	key={Routes.indexRoute.path}
    	component={Routes.indexRoute.component}
    	title={Routes.indexRoute.title} />
    {createScenes()}
  </Scene>
)

export default scenes
