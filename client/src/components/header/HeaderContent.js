import React from 'react'
import HeaderTitle from '../../components/header/HeaderTitle'
import AddButton from '../../components/header/AddButton'
import HomeButton from '../../components/header/HomeButton'
import SettingsButton from '../../components/header/SettingsButton'
import { Grid, Row, Col } from 'react-bootstrap'
import './HeaderContent.css'

const HeaderContent = props => {
  let left, center, right

  if (props.route === '/' ) {
    center = 'Focuses'
    left = <AddButton handleAddClick={props.handleAddClick} />
    right = <SettingsButton handleSettingsClick={props.handleSettingsClick} />
  } else if (props.route.includes('focuses')) {
    center = props.focus.name
    left = <HomeButton handleHomeClick={props.handleHomeClick} />
    right = <SettingsButton handleSettingsClick={props.handleSettingsClick} />
  } else if (props.route === '/settings') {
    center = 'Settings'
    left = <HomeButton handleHomeClick={props.handleHomeClick} />
    right = <React.Fragment />
  }

  return (
    <div className='header-container'>
      <Grid>
        <Row>
          <Col xs={1} md={1}>
            <div className='header-button-container'>{left}</div>
          </Col>
          <Col xs={10} md={10}><HeaderTitle name={center} /></Col>
          <Col xs={1} md={1}>
            <div className='header-button-container'>{right}</div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default HeaderContent

