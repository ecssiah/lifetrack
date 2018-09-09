import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import './AddButton.css'

class AddButton extends Component {
  state = {
    hovering: false
  }

  render() {
    let imageSrc = '/add-button'
    imageSrc += this.state.hovering ? '-highlight.svg' : '.svg'

    return (
      <Image 
        onClick={this.props.handleAddClick} 
        onMouseEnter={() => this.setState({hovering: true})}
        onMouseLeave={() => this.setState({hovering: false})}
        className='add-button' src={imageSrc} 
      />
    )
  }
}

export default AddButton
