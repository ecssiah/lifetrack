import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import './HomeButton.css'

class HomeButton extends Component {
  state = {
    hovering: false
  }

  render() {
    let imageSrc = '/home-button'
    imageSrc += this.state.hovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        src={imageSrc} 
        className='home-button' 
        onClick={this.props.handleHomeClick} 
        onMouseEnter={() => this.setState({hovering: true})}
        onMouseLeave={() => this.setState({hovering: false})}
      />
    )
  }
}

export default HomeButton
