import React from 'react'
import './Level.css'

const Level = props => 
  <div className='text-center'>
    <h3 className='level-current'>Level: {props.level}</h3>
  </div>

export default Level

