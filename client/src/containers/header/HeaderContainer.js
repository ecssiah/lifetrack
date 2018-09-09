import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addFocus } from '../../actions/selection-actions'
import HeaderContent from '../../components/header/HeaderContent'
import NewFocusDialog from '../../components/header/NewFocusDialog'

class HeaderContainer extends Component {

  state = {
    focusName: '',
    showNewFocusDialog: false,
  }

  handleAddClick = () => {
    this.setState({
      ...this.state,
      showNewFocusDialog: true
    }) 
  }

  handleHomeClick = () => {
    this.props.history.push('/') 
  }

  handleSettingsClick = () => {
    this.props.history.push('/settings')
  }

  handleAddConfirm = () => {
    this.props.addFocus(this.state.focusName, this.props.workPeriod.value)

    this.setState({
      focusName: '',
      showNewFocusDialog: false
    })
  }

  handleAddCancel = () => {
    this.setState({
      ...this.state,
      showNewFocusDialog: false
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
          handleHomeClick={this.handleHomeClick}
          handleSettingsClick={this.handleSettingsClick}
        />
        <NewFocusDialog 
          name={this.state.focusName}
          showDialog={this.state.showNewFocusDialog} 
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
)

