import React from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <form>
      <div className="brown_div Form_page Form_page_div">
        <h1 className="text-center p-0 m-0">Sign In</h1>
        <fieldset className="sign_Up_line mt-1"></fieldset>

        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" id="email" className="sign_inp email" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" id="password" className="sign_inp email" />
            </div>
          </div>
        </div>
        <button className="sign_btn">Sign In</button>
        <p>
          New User? <Link to="/signup">Sign Up</Link> instead
        </p>
      </div>
      <Footer />
    </form>
  )
}

export default SignIn
