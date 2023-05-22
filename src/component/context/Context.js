import React, { createContext, useReducer } from 'react'

export const UserCreatedContext = createContext()

const initialState = {
  userInfo: localStorage.getItem('Users')
    ? JSON.parse(localStorage.getItem('Users'))
    : null,
  // userInfo: null,
  personalInfo: null,
}

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        userInfo: action.payload,
      }
    case 'SIGN_OUT':
      return {
        userInfo: null,
      }
    case 'PERSONAL_INFO':
      return {
        personalInfo: action.payload,
      }

    default:
      return state
  }
}

export const UserContext = (props) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const value = { state, dispatch }

  return (
    <UserCreatedContext.Provider value={value}>
      {props.children}
    </UserCreatedContext.Provider>
  )
}
