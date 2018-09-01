import React, { Component} from 'react'
import { connect } from 'react-redux'
import HeaderTitle from '../../components/header/HeaderTitle'
import AddButton from '../../components/header/AddButton'
import BackButton from '../../components/header/BackButton'
import SettingsButton from '../../components/header/SettingsButton'
import { Grid, Row, Col } from 'react-bootstrap'
import './styles.css'

class HeaderContainer extends Component {
  render() {
    let leftButton, rightButton, title

    if (this.props.current_page === '/' ) {
      title = 'Focuses'
      leftButton = <AddButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page.includes('focuses')) {
      title = this.props.focus.name
      leftButton = <BackButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === '/settings') {
      title = 'Settings'
      leftButton = <BackButton />
      rightButton = <React.Fragment />
    }

    return (
      <div className="header">
        <Grid>
          <Row>
            <Col xs={1} md={1}>
              <div className='button-container'>{leftButton}</div>
            </Col>
            <Col xs={10} md={10}><HeaderTitle name={title} /></Col>
            <Col xs={1} md={1}>
              <div className='button-container'>{rightButton}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  current_page: state.header.current_page,
  previous_page: state.header.previous_page,
})

export default connect(mapStateToProps)(HeaderContainer)

