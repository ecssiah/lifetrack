import React from 'react'
import './Time.css'

const Time = props => {
  const minutes = Math.floor(props.time).toFixed(0)
  const seconds = ((props.time - minutes) * 60).toFixed(0)

  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds
  const displayTime = `${displayMinutes}:${displaySeconds}` 

  const colorClass = props.active ? 'active' : 'break'

  return (
    <p className={'text-center time-' + colorClass}>
      {displayTime}
    </p>
  )
}

export default Time

