import React from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'

const FocusEntry = props => {
  return (
    <Grid>
      <Row>
        <Col xs={6} md={6}>{props.focus.name}</Col>
        <Col xs={2} md={2}>{`Lvl: ${props.focus.level}`}</Col>
        <Col xs={4} md={4}> 
          <ProgressBar now={props.focus.experience} bsClass='progress-bar' />
        </Col>
      </Row>
    </Grid>
  )
}

export default FocusEntry
