import React from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import './styles.css'

const FocusEntry = props => {
  return (
    <NavLink to={`/focuses/${props.focus.id}`}>
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <span className='entry'>{props.focus.name}</span>
          </Col>
          <Col xs={2} md={2}>
            <span className='entry'>{`Lvl: ${props.focus.level}`}</span>
          </Col>
          <Col xs={4} md={4}> 
            <ProgressBar now={props.focus.experience} />
          </Col>
        </Row>
      </Grid>
    </NavLink>
  )
}

export default FocusEntry
