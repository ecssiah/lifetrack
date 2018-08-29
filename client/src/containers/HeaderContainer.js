import React, { Component} from 'react'
import { connect } from 'react-redux'
import HeaderTitle from '../components/header/HeaderTitle'
import AddButton from '../components/header/AddButton'
import BackButton from '../components/header/BackButton'
import SettingsButton from '../components/header/SettingsButton'
import { Grid, Row, Col } from 'react-bootstrap'
import { PAGES } from '../index'

class HeaderContainer extends React.Component {
  render() {
    let leftButton, rightButton, title

    if (this.props.current_page === PAGES.SELECTION) {
      title = 'Focuses'
      leftButton = <AddButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === PAGES.FOCUS) {
      leftButton = <BackButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === PAGES.SETTINGS) {
      title = 'Settings'
      leftButton = <BackButton />
      rightButton = <React.Fragment />
    }

    return (
      <Grid>
        <Row>
          <Col xs={1} md={1}>{leftButton}</Col>
          <Col xs={10} md={10}><HeaderTitle name={title} /></Col>
          <Col xs={1} md={1}>{rightButton}</Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  current_page: state.header.current_page,
  previous_page: state.header.previous_page,
})

export default connect(mapStateToProps)(HeaderContainer)

