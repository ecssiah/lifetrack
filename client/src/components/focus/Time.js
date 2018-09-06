import React from 'react'
import './styles.css'

const Time = props => {
  const minutes = Math.floor(props.time).toFixed(0)
  const seconds = ((props.time - minutes) * 60).toFixed(0)

  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds

  const displayTime = `${displayMinutes}:${displaySeconds}` 

  const colorClass = props.active ? 'active-time' : 'break-time'

  return (
    <p className={'text-center ' + colorClass}>
      {displayTime}
    </p>
  )
}

export default Time

