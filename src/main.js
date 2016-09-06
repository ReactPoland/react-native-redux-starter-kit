import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import Router from './scenes/router'

class App extends Component {
	render() {
	    return (
	      <Provider store={createStore()}>
	        <Router />
	      </Provider>
	    );
  	}
}

export default App;
