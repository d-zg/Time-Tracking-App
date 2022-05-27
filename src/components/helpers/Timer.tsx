import React from 'react'

export default function Timer (props : any) {
  return (
      <div className="timer">
        <span className="digits">
          {((props.time - props.time % 1) - (props.time - props.time % 1) % 60) / 60}:
        </span>
        <span className="digits mins">
          {(props.time - props.time % 1) % 60}.
        </span>
        <span className="digits mili-sec">
          {Math.floor(props.time % 1 * 60)}
        </span>
      </div>
  )
}
