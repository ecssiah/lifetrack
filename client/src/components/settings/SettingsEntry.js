import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'
import './SettingsEntry.css'

class SettingsEntry extends Component {
  state = {
    value: this.props.setting.value
  }

  handleSelect = selectedValue => {
    this.setState({ value: selectedValue })
    this.props.updateSetting(this.props.setting, selectedValue)
  }

  render() {
    const options = [] 

    for (let i = 1; i <= 20; ++i)
      options.push(
        <MenuItem key={i} eventKey={i} onSelect={this.handleSelect} >
          {i}
        </MenuItem>
      )

    return (
      <Grid>
        <Row>
          <Col xs={8} md={8}>
            <span className='settings-entry'>{this.props.setting.name}</span>
          </Col>
          <Col xs={4} md={4}>
            <DropdownButton 
              title={this.state.value} 
              id={this.state.value} 
            >
              { options }
            </DropdownButton>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SettingsEntry
