import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './styles.css'

const Goal = props => (
  <div className='text-center'>
    <h3 className='goal'>Goal: {props.goal}</h3>
    <ProgressBar 
      className='goal-progress' 
      now={props.iterations / props.goal * 100} 
    />
  </div>
)

export default Goal

