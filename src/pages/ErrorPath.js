import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPath = () => {
  return (
    <div
      style={{
        margin: 'auto',
        backgroundColor: '#04b749',
        padding: '3em',
        maxWidth: '80%',
      }}
    >
      <h3 className="text-center">
        Page Not Found. Go To <Link to="/">Home Page</Link>{' '}
      </h3>
    </div>
  )
}

export default ErrorPath
