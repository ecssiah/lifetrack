import React, { Component} from 'react'
import { connect } from 'react-redux'
import HeaderTitle from '../components/header/HeaderTitle'
import AddButton from '../components/header/AddButton'
import BackButton from '../components/header/BackButton'
import SettingsButton from '../components/header/SettingsButton'

class HeaderContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTitle />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  current_page: state.header.current_page,
  previous_page: state.header.previous_page,
})


export default connect(mapStateToProps)(HeaderContainer)

