import React, { useContext } from 'react'
import DisplayContext from '../context'

export default function Foul() {
  const { state } = useContext(DisplayContext)
  const { fouls } = state
  return <p>Fouls: {fouls}</p>
}
