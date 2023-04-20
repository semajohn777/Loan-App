import React from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
// import { Link } from 'react-router-dom'
import '../component/pagesCss/loan.css'

const BusinessLoan = () => {
  return (
    <form>
      <div className="brown_div Form_page">
        <h1 className="text-center p-0 m-0">Busines Loan</h1>
        <fieldset className="sign_Up_line mt-1"></fieldset>
        <div className="name_inp">
          <div>
            <label htmlFor="fullName">Surname</label>

            <input type="text" id="fullName" className="sign_inp" />
          </div>

          <div>
            <label htmlFor="userName">First Name</label>

            <input type="text" id="userName" className="sign_inp" />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>

            <input type="text" id="middleName" className="sign_inp" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>

            <input type="number" id="phoneNumber" className="sign_inp" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input type="email" id="email" className="sign_inp email" />
        </div>
        <div className="name_inp">
          <div>
            <label htmlFor="nin">NIN</label>
            <div>
              <input type="text" id="nin" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <div>
              <input type="text" id="nationality" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select name="Gender" id="gender" className="sign_inp">
              <option value="">Select</option>
              <option value="">Female</option>
              <option value="">Male</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">Status</label>
            <select name="Gender" id="gender" className="sign_inp">
              <option value="">Select</option>
              <option value="">Single</option>
              <option value="">Married</option>
              <option value="">Divored</option>
              <option value="">Sepearted</option>
            </select>
          </div>
          <div>
            <label htmlFor="residential">Residential Address</label>
            <div>
              <input type="text" id="residential" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="current">Current Address</label>
            <div>
              <input type="text" id="current" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="office">Office Address</label>
            <div>
              <input type="text" id="office" className="sign_inp" />
            </div>
          </div>
          <div>
            <label htmlFor="officeId">Office Identification</label>
            <div>
              <input type="text" id="officeId" className="sign_inp" />
            </div>
          </div>
        </div>{' '}
        <div>
          <label htmlFor="nin">
            What and why should we give you a loan.{' '}
            <span>Please State Clearly</span>
          </label>
          <div>
            <textarea name="" id="" className="text_area">
              one
            </textarea>
          </div>
        </div>
        <div>
          {' '}
          <button className="sign_btn">Save and Continue</button>
        </div>
      </div>
      <Footer />
    </form>
  )
}

export default BusinessLoan
