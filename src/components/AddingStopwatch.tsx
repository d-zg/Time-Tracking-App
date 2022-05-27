import React, { useState } from 'react'
import Timer from './helpers/Timer'
import ControlButtons from './helpers/ControlButtons'

function StopWatch (props : any) {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  React.useEffect(() => {
    let interval : any = null

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        props.setTimeInput((time : any) => time + 0.01 / 60)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    props.setTimeInput(0)
  }

  return (
      <div className="stop-watch">
        <Timer time={props.timeInput} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
  )
}

export default StopWatch
