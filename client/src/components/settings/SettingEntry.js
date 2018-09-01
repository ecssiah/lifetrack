import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import './styles.css'

const SettingEntry = props => {
  return (
    <Grid>
      <Row>
        <Col xs={8} md={8}>
          <span className='entry'>{props.setting.name}</span>
        </Col>
        <Col xs={4} md={4}>
          <span className='entry'>{props.setting.value}</span>
        </Col>
      </Row>
    </Grid>
  )
}

export default SettingEntry
