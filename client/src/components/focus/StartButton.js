import React from 'react'
import { Button } from 'react-bootstrap'

const StartButton = props => (
  <div className='text-center'>
    <Button onClick={props.handleStartClick} className='btn-lg'>
      {props.text}
    </Button>
  </div>
)

export default StartButton

