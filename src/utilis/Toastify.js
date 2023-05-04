import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../component/pagesCss/home.css'

const Toastify = () => {
  const [to, SetTo] = useState(null)
  const showToastMessage = () => {
    SetTo(
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT,
      }),
    )
  }
  return (
    <div style={{ color: 'blue' }}>
      <button onClick={showToastMessage}>Notify</button>
      {!to && <ToastContainer />}{' '}
    </div>
  )
}

export default Toastify
