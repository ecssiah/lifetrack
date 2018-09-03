import React from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import './styles.css'

const FocusEntry = props => {
  return (
    <Grid>
      <Row>
        <NavLink to={`/focuses/${props.focus.id}`}>
          <Col xs={6} md={6}>
            <span className='entry'>{props.focus.name}</span>
          </Col>
          <Col xs={2} md={2}>
            <span className='entry'>{`Lvl: ${props.focus.level}`}</span>
          </Col>
          <Col xs={3} md={3}> 
            <ProgressBar now={props.focus.experience} />
          </Col>
        </NavLink>
        <Col xs={1} md={1}>
          <input className='delete' type='image' src='delete-button.svg' />
        </Col>
      </Row>
    </Grid>
  )
}

export default FocusEntry
