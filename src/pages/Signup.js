import React from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <form>
      <div className="brown_div Form_page Form_page_div">
        <h1 className="text-center p-0 m-0">Sign Up</h1>
        <fieldset className="sign_Up_line mt-1"></fieldset>
        <div className="name_inp">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <div>
              <input type="text" id="fullName" className="sign_inp" />
            </div>
          </div>

          <div>
            <label htmlFor="userName">User Name</label>
            <div>
              <input type="text" id="userName" className="sign_inp" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" id="email" className="sign_inp email" />
          </div>
        </div>
        <div className="name_inp">
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" id="password" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="comfirmPassword">Comfirm Password</label>
            <div>
              <input type="text" id="comfirmPassword" className="sign_inp" />
            </div>
          </div>
        </div>
        <button className="sign_btn">Sign Up</button>
        <p>
          Already Have an account? <Link to="/signin">Login</Link> instead
        </p>
      </div>
      <Footer />
    </form>
  )
}

export default SignUp
