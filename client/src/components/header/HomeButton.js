import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class HomeButton extends Component {
  state = {
    isHovering: false
  }

  handleClick = () => {
    this.props.history.push('/') 
  }

  render() {
    let imageSrc = '/home-button'
    imageSrc += this.state.isHovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        onClick={this.handleClick} 
        onMouseEnter={() => this.setState({isHovering: true})}
        onMouseLeave={() => this.setState({isHovering: false})}
        className='align-icon' src={imageSrc} 
      />
    )
  }
}

export default withRouter(HomeButton)
