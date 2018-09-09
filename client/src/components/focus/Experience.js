import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Experience.css'

const Experience = props => 
  <ProgressBar 
    className='experience-progress' 
    now={props.experience} 
  />

export default Experience

