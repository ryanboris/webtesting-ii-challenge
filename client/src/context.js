import React from 'react'

const initialState = {
  strikes: 0,
  hits: 0,
  fouls: 0,
  balls: 0
}
const DisplayContext = React.createContext(initialState)

export default DisplayContext
