import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class AddButton extends Component {
  state = {
    isHovering: false
  }

  render() {
    let imageSrc = '/add-button'
    imageSrc += this.state.isHovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        onClick={this.props.handleAddClick} 
        onMouseEnter={() => this.setState({isHovering: true})}
        onMouseLeave={() => this.setState({isHovering: false})}
        className='align-icon' src={imageSrc} 
      />
    )
  }
}

export default AddButton
