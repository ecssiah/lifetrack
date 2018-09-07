import React from 'react'
import HeaderTitle from '../../components/header/HeaderTitle'
import AddButton from '../../components/header/AddButton'
import HomeButton from '../../components/header/HomeButton'
import SettingsButton from '../../components/header/SettingsButton'
import { Grid, Row, Col } from 'react-bootstrap'
import './HeaderContent.css'

const HeaderContent = props => {
  let leftButton, rightButton, title

  if (props.route === '/' ) {
    title = 'Focuses'
    leftButton = <AddButton handleAddClick={props.handleAddClick} />
    rightButton = <SettingsButton />
  } else if (props.route.includes('focuses')) {
    title = props.focus.name
    leftButton = <HomeButton />
    rightButton = <SettingsButton />
  } else if (props.route === '/settings') {
    title = 'Settings'
    leftButton = <HomeButton />
    rightButton = <React.Fragment />
  }

  return (
    <div className='header-container'>
      <Grid>
        <Row>
          <Col xs={1} md={1}>
            <div className='header-button-container'>{leftButton}</div>
          </Col>
          <Col xs={10} md={10}><HeaderTitle name={title} /></Col>
          <Col xs={1} md={1}>
            <div className='header-button-container'>{rightButton}</div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default HeaderContent

