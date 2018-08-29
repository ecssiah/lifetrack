import React from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'

const FocusEntry = props => {
  return (
    <Grid>
      <Row>
        <Col md={3}> {props.focus.name}</Col>
        <Col md={3}>{` Lvl: ${props.focus.level}`}</Col>
        <Col md={3}> 
          <ProgressBar now={props.focus.experience} bsClass='progress-bar' />
        </Col>
      </Row>
    </Grid>
  )
}

export default FocusEntry
