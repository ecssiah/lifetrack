import React from 'react'
import './styles.css'

const Time = props => {
  const minutes = (~~props.time).toFixed(0)
  const seconds = ((props.time - minutes) * 60).toFixed(0)

  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds

  const displayTime = `${displayMinutes}:${displaySeconds}` 

  return (
    <p className='time text-center'>
      {displayTime}
    </p>
  )
}

export default Time

