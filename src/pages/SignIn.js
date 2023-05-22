import React, { useState } from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
import { Link } from 'react-router-dom'
import { BiHide, BiShow } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'
import UseSignIn from '../component/hooks/UseSignIn'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setshowPwd] = useState({ inputErr: false, show: 'password' })
  const { SignIn, errorState } = UseSignIn()
  const { error, loading, dataSuccessfull } = errorState

  const emailOCH = (e) => {
    setEmail(e.target.value)
  }
  const pwdOCH = (e) => {
    setPassword(e.target.value)
  }

  const ShowPwd = () => {
    if (showPwd.show === 'password') {
      setshowPwd({ show: 'text' })
    } else {
      setshowPwd({ show: 'password' })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email.trim().length === 0 || password.trim().length === 0) {
      // setshowPwd({ inputErr: true })
      setshowPwd({
        inputErr: toast.error('Please fill all input !', {
          // position: toast.POSITION.TOP_RIGHT,
          // position: toast.POSITION.TOP_CENTER,
        }),
      })
      return
    }
    if (!email.includes('@' || !email.includes('.'))) {
      setshowPwd({
        inputErr: toast.warning('Please fill with the right Email format !', {
          // position: toast.POSITION.TOP_RIGHT,
        }),
      })
      return
    }
    console.log({ email, password })
    await SignIn(email, password)

    setEmail('')

    setPassword('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="brown_div Form_page Form_page_div">
        <h1 className="text-center p-0 m-0">Sign In</h1>
        <fieldset className="sign_Up_line mt-1"></fieldset>

        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              id="email"
              className="sign_inp email"
              value={email}
              onChange={emailOCH}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
            <div className="icons_ctrl">
              <input
                type={showPwd.show}
                id="password"
                className="sign_inp email"
                value={password}
                onChange={pwdOCH}
              />
              <span>
                {showPwd.show === 'password' ? (
                  <BiShow onClick={ShowPwd} />
                ) : (
                  <BiHide onClick={ShowPwd} />
                )}
              </span>
            </div>
          </div>
        </div>
        <button className="sign_btn">Sign In</button>
        {showPwd.inputErr && <ToastContainer />}
        {error && (
          <p>
            <ToastContainer />
          </p>
        )}
        {dataSuccessfull && (
          <p>
            <ToastContainer />
          </p>
        )}
        <p>
          New User? <Link to="/signup">Sign Up</Link> instead
        </p>
      </div>
      <Footer />
    </form>
  )
}

export default SignIn
