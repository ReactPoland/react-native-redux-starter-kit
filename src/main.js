import React, { Component } from 'react'
// import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import Router from './scenes/router'

class App extends Component {

	// componentWillMount() {
	// 	StatusBar.setHidden(false);
	// }

	render() {
	    return (
	      <Provider store={createStore()}>
	        <Router />
	      </Provider>
	    );
  	}
}

export default App;
