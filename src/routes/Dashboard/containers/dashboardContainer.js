import React, { Component } from 'react'
import { connect } from 'react-redux'
import { visitsIncrement } from '../modules/dashboardReducer'
import Dashboard from '../../../components/Dashboard/dashboard'

class DashboardContainer extends Component {
  componentDidMount(){
  	this.props.visitsIncrement();
  }

  render() {
    return (
      <Dashboard {...this.props}/>
    )
  }
}

const mapActionCreators = {
  visitsIncrement
}

const mapStateToProps = (state) => ({
  value: state.dashboard.visitsCount,
  list: state.dashboard.list
})

export default connect(mapStateToProps, mapActionCreators)(DashboardContainer)
