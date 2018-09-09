import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Goal.css'

const Goal = props => (
  <div className='text-center'>
    <h3 className='goal-target'>Goal: {props.goal}</h3>
    <div onClick={props.handleGoalClick}>
      <ProgressBar 
        className='goal-progress' 
        now={props.periods / props.goal * 100} 
      />
    </div>
  </div>
)

export default Goal

