import React, { useContext } from 'react'
import DisplayContext from '../context'

export default function Hit() {
  const { state } = useContext(DisplayContext)
  const { hits } = state
  return <p>Hits: {hits}</p>
}
