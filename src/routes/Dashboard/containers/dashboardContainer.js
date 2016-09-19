import React, { Component } from 'react'
import { connect } from 'react-redux'
import { visitsIncrement, dashboardAddItem, dashboardEditItem, dashboardChangeItemsOrder } from '../modules/dashboardReducer'
import { loginAsync  } from '../../../modules/session'
import Dashboard from '../../../components/Dashboard/dashboard'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)

    this.onChangeText = this.onChangeText.bind(this)
    this.submitAction = this.submitAction.bind(this)
    this.itemOnEdit = this.itemOnEdit.bind(this)


    this.state = {
      inputValue: '',
      editedItemKey: null
    }
  }

  componentDidMount(){
  	const { visitsIncrement } = this.props;
  	visitsIncrement();
  }

  onChangeText(newText) {
  	this.setState({ inputValue: newText })
  }

  submitAction() {
  	const { dashboardAddItem, dashboardEditItem } = this.props;
  	const { inputValue, editedItemKey } = this.state;

    if(editedItemKey === null){
      dashboardAddItem(inputValue);
    } else {
      dashboardEditItem(inputValue, editedItemKey);
    }


  	this.setState({
      inputValue: '',
      editedItemKey: null
    })
  }

  itemOnEdit(key) {
    const { list } = this.props;
    let item;
    for(let i=0; i<list.length; i++){
      if(list[i].key == key){
        item = list[i];
        break;
      }
    }
    this.setState({
      inputValue: item.label,
      editedItemKey: key
    });
  }

  render() {
  	const { inputValue, editedItemKey } = this.state;
    const buttonText = (editedItemKey === null) ? 'Add item' : 'Edit item';

    return (
      <Dashboard
      	{...this.props}
      	onChangeText={this.onChangeText}
      	submitAction={this.submitAction}
        itemOnEdit={this.itemOnEdit}
      	textInput={inputValue}
      	buttonText={buttonText}/>
    )
  }
}

const mapActionCreators = {
  visitsIncrement,
  dashboardAddItem,
  dashboardEditItem,
  loginAsync,
  dashboardChangeItemsOrder
}

const mapStateToProps = (state) => ({
  value: state.dashboard.visitsCount,
  list: state.dashboard.list,
  isNotLoggedIn: state.session.isNotLoggedIn,
  loginToken: state.session.loginToken
})

export default connect(mapStateToProps, mapActionCreators)(DashboardContainer)
