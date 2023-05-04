import React, { useState } from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
import { Link } from 'react-router-dom'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'

import { ToastContainer, toast } from 'react-toastify'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [CPassword, setCPassword] = useState('')
  const [showPwd, setshowPwd] = useState({ inputErr: false, show: 'password' })

  const firstNameOCH = (e) => {
    setFirstName(e.target.value)
  }
  const userNameOCH = (e) => {
    setUserName(e.target.value)
  }
  const emailOCH = (e) => {
    setEmail(e.target.value)
  }
  const pwdOCH = (e) => {
    setPassword(e.target.value)
  }
  const CPwdOCH = (e) => {
    setCPassword(e.target.value)
  }
  const ShowPwd = () => {
    if (showPwd.show === 'password') {
      setshowPwd({ show: 'text' })
    } else {
      setshowPwd({ show: 'password' })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      userName.trim().length === 0 ||
      firstName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      // setshowPwd({ inputErr: true })
      setshowPwd({ inputErr: toast.error('Pls fill all field !') })

      return
    }
    if (password !== CPassword) {
      setshowPwd({ inputErr: toast.warning('Password do not match !') })
    } else {
      console.log({ firstName, userName, email, password, CPassword })
      setCPassword('')
      setEmail('')
      setFirstName('')
      setUserName('')
      setPassword('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="brown_div Form_page Form_page_div">
        <h1 className="text-center p-0 m-0">Sign Up</h1>
        <fieldset className="sign_Up_line mt-1"></fieldset>
        <div className="name_inp">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <div>
              <input
                type="text"
                id="fullName"
                className="sign_inp"
                value={firstName}
                onChange={firstNameOCH}
              />
            </div>
          </div>

          <div>
            <label htmlFor="userName">User Name</label>
            <div>
              <input
                type="text"
                id="userName"
                className="sign_inp"
                value={userName}
                onChange={userNameOCH}
              />
            </div>
          </div>
        </div>
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
        <div className="name_inp">
          <div>
            <label htmlFor="password">Password</label>
            <div className="icons_ctrl">
              <input
                type={showPwd.show}
                id="password"
                className="sign_inp"
                value={password}
                onChange={pwdOCH}
              />
              <span>
                {showPwd.show === 'password' ? (
                  <BiShow onClick={ShowPwd} style={{ color: 'red' }} />
                ) : (
                  <BiHide onClick={ShowPwd} style={{ color: 'red' }} />
                )}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="comfirmPassword">Comfirm Password</label>
            <div className="icons_ctrl">
              <input
                type={showPwd.show}
                id="comfirmPassword"
                className="sign_inp"
                value={CPassword}
                onChange={CPwdOCH}
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

        <button className="sign_btn">Sign Up</button>
        {showPwd.inputErr && <ToastContainer />}
        <p>
          Already Have an account? <Link to="/signin">Login</Link> instead
        </p>
      </div>
      <Footer />
    </form>
  )
}

export default SignUp
