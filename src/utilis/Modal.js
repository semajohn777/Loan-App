import React, { useContext } from 'react'
import '../component/pagesCss/modal.css'
// import ReactToPrint, { useReactToPrint } from 'react-to-print'
import { BiWindowClose } from 'react-icons/bi'
import { UserCreatedContext } from '../component/context/Context'
import { Link } from 'react-router-dom'

const Modal = (props) => {
  const { state: ctxState } = useContext(UserCreatedContext)
  const { userInfo } = ctxState
  return (
    <div className="backdrop" onClick={props.show}>
      <div className="odal">
        <div>
          <BiWindowClose size={35} onClick={props.show} />
          <fieldset className="sign_Up_line mt-1"></fieldset>
        </div>

        <h1>
          Hi {userInfo.userName} thanks for successfully aquiring a loan for
          more information call and chat us. <Link to={'/'}>Back to Home</Link>
        </h1>
        <div className="btn_flex">
          <button type="button" className="sign_btn" onClick={props.show}>
            Close
          </button>

          <button type="button" className="sign_btn">
            Print
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
