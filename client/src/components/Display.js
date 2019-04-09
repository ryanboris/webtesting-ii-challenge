import React from 'react'
import Strike from './Strike'
import Hit from './Hit'
import Ball from './Ball'
import Foul from './Foul'

export default function Display() {
  return (
    <>
      <Hit />
      <Strike />
      <Ball />
      <Foul />
    </>
  )
}
