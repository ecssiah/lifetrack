import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import './SelectionEntry.css'

class SelectionEntry extends Component { 
  state = {
    isHovering: false
  }

  render() {
    return (
      <Grid>
        <Row 
          onMouseEnter={() => this.setState({isHovering: true})}
          onMouseLeave={() => this.setState({isHovering: false})}
        > 
          <NavLink to={`/focuses/${this.props.focus.id}`}>
            <Col xs={6} md={6}>
              <span className='selection-entry'>{this.props.focus.name}</span>
            </Col>
            <Col xs={2} md={2}>
              <span className='selection-entry'>
                {`Lvl: ${this.props.focus.level}`}
              </span>
            </Col>
            <Col xs={3} md={3}> 
              <ProgressBar now={this.props.focus.experience} />
            </Col>
          </NavLink>
          <Col xs={1} md={1}>
            <div className='selection-delete-container'>
              {
                this.state.isHovering &&
                <input 
                  type='image' src='delete-button.svg' alt='delete-button' 
                  onClick={
                    () => this.props.handleDeleteClick(this.props.focus.id)
                  }
                />
              }
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SelectionEntry
