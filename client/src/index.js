import React, { useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import DisplayContext from './context'
import reducer from './reducer'

const App = () => {
  const initialState = useContext(DisplayContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DisplayContext.Provider value={{ state, dispatch }}>
      <Dashboard />
      <Display />
    </DisplayContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
