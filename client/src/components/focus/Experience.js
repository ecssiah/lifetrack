import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './styles.css'

const Experience = props => (
  <ProgressBar 
    className='experience-progress' 
    now={props.experience} 
  />
)

export default Experience

