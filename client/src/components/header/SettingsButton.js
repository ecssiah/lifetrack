import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class SettingsButton extends Component {
  state = {
    isHovering: false
  }

  handleOnClick = () => {
    this.props.history.push('/settings')
  }

  render() {
    let imageSrc = '/settings-button'
    imageSrc += this.state.isHovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        onClick={this.handleOnClick} 
        onMouseEnter={() => this.setState({isHovering: true})}
        onMouseLeave={() => this.setState({isHovering: false})}
        className='align-icon' src={imageSrc} 
      />
    )
  }
}

export default withRouter(SettingsButton)
