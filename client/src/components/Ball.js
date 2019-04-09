import React, { useContext } from 'react'
import DisplayContext from '../context'

export default function Ball() {
  const { state } = useContext(DisplayContext)
  const { balls } = state
  return <p>Balls: {balls}</p>
}
