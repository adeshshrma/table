import { createContext, useEffect, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
  model: {
    addModel: false,
    deleteModel: false,
    updateModel: false,
  },
}

const Context = createContext(initialState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider
      value={{
        model: state.model,

        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
