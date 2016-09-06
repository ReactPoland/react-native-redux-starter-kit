import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counterReducer'
import Counter from '../../../components/counter'

const mapActionCreators = {
  increment,
  doubleAsync
}

const mapStateToProps = (state) => ({
  value: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Counter)
