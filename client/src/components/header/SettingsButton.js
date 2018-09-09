import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import './SettingsButton.css'

class SettingsButton extends Component {

  state = {
    hovering: false
  }

  render() {
    let imageSrc = '/settings-button'
    imageSrc += this.state.hovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        onClick={this.props.handleSettingsClick} 
        onMouseEnter={() => this.setState({hovering: true})}
        onMouseLeave={() => this.setState({hovering: false})}
        className='settings-button' src={imageSrc} 
      />
    )
  }
}

export default withRouter(SettingsButton)
