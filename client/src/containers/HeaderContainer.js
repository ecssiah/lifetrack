import React, { Component} from 'react'
import { connect } from 'react-redux'
import HeaderTitle from '../components/header/HeaderTitle'
import AddButton from '../components/header/AddButton'
import BackButton from '../components/header/BackButton'
import SettingsButton from '../components/header/SettingsButton'
import { PAGES } from '../index'

class HeaderContainer extends React.Component {
  render() {
    let leftButton, rightButton

    if (this.props.current_page === PAGES.SELECTION) {
      leftButton = <AddButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === PAGES.FOCUS) {
      leftButton = <BackButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === PAGES.SETTINGS) {
      leftButton = <BackButton />
      rightButton = <React.Fragment />
    }

    return (
      <React.Fragment>
        {leftButton}
        <HeaderTitle name={"Focuses"} />
        {rightButton}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  current_page: state.header.current_page,
  previous_page: state.header.previous_page,
})

export default connect(mapStateToProps)(HeaderContainer)

