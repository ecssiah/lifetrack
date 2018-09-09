import React, { Component} from 'react'
import { connect } from 'react-redux'
import { addFocus } from '../../actions/selection-actions'
import HeaderContent from '../../components/header/HeaderContent'
import AddFocusDialog from '../../components/header/AddFocusDialog'

class HeaderContainer extends Component {

  state = {
    focusName: '',
    showAddDialog: false,
  }

  handleAddClick = () => {
    this.setState({
      ...this.state,
      showAddDialog: true
    }) 
  }

  handleAddConfirm = () => {
    this.props.addFocus(this.state.focusName, this.props.workPeriod.value)

    this.setState({
      focusName: '',
      showAddDialog: false
    })
  }

  handleAddCancel = () => {
    this.setState({
      ...this.state,
      showAddDialog: false
    })
  }

  handleNameChange = e => {
    this.setState({
      ...this.state,
      focusName: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <HeaderContent
          route={this.props.route}
          focus={this.props.focus}
          handleAddClick={this.handleAddClick}
        />
        <AddFocusDialog 
          name={this.state.focusName}
          showDialog={this.state.showAddDialog} 
          handleNameChange={this.handleNameChange}
          handleAddConfirm={this.handleAddConfirm}
          handleAddCancel={this.handleAddCancel}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  route: state.header.route,
  workPeriod: state.settings.find(setting => setting.name === "Work Period"), 
})

const mapDispatchToProps = dispatch => ({
  addFocus: (focusName, time) => dispatch(addFocus(focusName, time))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

