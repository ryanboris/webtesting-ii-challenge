import React, { useContext } from 'react'
import DisplayContext from '../context'

export default function Strike() {
  const { state } = useContext(DisplayContext)
  const { strikes } = state
  return <p>Strikes: {strikes}</p>
}
