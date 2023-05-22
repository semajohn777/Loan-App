import React from 'react'

const BusinessForm = (props) => {
  const {
    userSurname,
    userFName,
    userMName,
    userPhoneNo,
    email,
    NIN,
    nationality,
    gender,
    status,
    currAddress,
    office,
    explanation,
  } = props.businessFormValue
  const {
    setUserSurname,
    setUserFName,
    setUserMName,
    setUserPhoneNo,
    setEmail,
    setNIN,
    setNationality,
    setGender,
    setStatus,

    setCurrAddress,
    setOffice,

    setExplanation,
    // setPassport,
    // setValid,
    // setEmailValidation,
  } = props.businessFormValueFunc

  const userSurnameOCH = (e) => {
    setUserSurname(e.target.value)
    // setValid(false)
  }
  const userFNameOCH = (e) => {
    setUserFName(e.target.value)
    // setValid(false)
  }
  const userMNameOCH = (e) => {
    setUserMName(e.target.value)
    // setValid(false)
  }
  const userPhoneNoOCH = (e) => {
    setUserPhoneNo(e.target.value)
    // setValid(false)
  }
  const emailOCH = (e) => {
    setEmail(e.target.value)
    // setEmailValidation(false)
    // setValid(false)
  }
  const NINOCH = (e) => {
    setNIN(e.target.value)
    // setValid(false)
  }
  const nationalityOCH = (e) => {
    setNationality(e.target.value)
    // setValid(false)
  }
  const genderOCH = (e) => {
    setGender(e.target.value)
    // setValid(false)
  }
  const statusOCH = (e) => {
    setStatus(e.target.value)
    // setValid(false)
  }

  const currAddressOCH = (e) => {
    setCurrAddress(e.target.value)
    // setValid(false)
  }
  const officeOCH = (e) => {
    setOffice(e.target.value)
    // setValid(false)
  }

  const explanationOCH = (e) => {
    setExplanation(e.target.value)
    // setValid(false)
  }
  // const passportOCH = (e) => {
  //   setPassport({ passport, file: e.target.files[0] })
  // }
  // const handleSubmit = () => {
  //   const formdata = new FormData()
  //   formdata.append('avatar', passport.file)
  //   console.log(passport.file)
  //   props.handleSubmit(formdata)
  // }

  return (
    <div>
      <h1 className="text-center p-0 m-0">Business Loan</h1>
      <h4 className="text-center p-0 m-0">Business Details</h4>
      <fieldset className="sign_Up_line mt-1"></fieldset>
      <div className="name_inp">
        <div>
          <label htmlFor="fullName" required>
            Surname
          </label>

          <input
            type="text"
            id="fullName"
            className="sign_inp"
            value={userSurname}
            onChange={userSurnameOCH}
            required
          />
        </div>

        <div>
          <label htmlFor="userName">First Name</label>

          <input
            type="text"
            id="userName"
            className="sign_inp"
            value={userFName}
            onChange={userFNameOCH}
            required
          />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name</label>

          <input
            type="text"
            id="middleName"
            className="sign_inp"
            value={userMName}
            onChange={userMNameOCH}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>

          <input
            type="number"
            id="phoneNumber"
            className="sign_inp"
            value={userPhoneNo}
            onChange={userPhoneNoOCH}
            required
          />
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
            required
          />
        </div>
      </div>
      <div className="name_inp">
        {' '}
        <div>
          <label htmlFor="nin">NIN</label>
          <div>
            <input
              type="text"
              id="nin"
              className="sign_inp"
              value={NIN}
              onChange={NINOCH}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <div>
            <input
              type="text"
              id="nationality"
              className="sign_inp"
              value={nationality}
              onChange={nationalityOCH}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="Gender"
            id="gender"
            className="sign_inp"
            defaultValue="select"
            value={gender}
            onChange={genderOCH}
            required
          >
            <option value="select" disabled>
              ---Select---
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="Status"
            id="status"
            defaultValue=""
            className="sign_inp"
            value={status}
            onChange={statusOCH}
          >
            <option value="" disabled>
              ---Select---
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divored">Divored</option>
            <option value="Seperated">Sepearted</option>
          </select>
        </div>
        <div>
          <label htmlFor="current">Home Address</label>
          <div>
            <input
              type="text"
              id="current"
              className="sign_inp"
              value={currAddress}
              onChange={currAddressOCH}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="office">Office Address</label>
          <div>
            <input
              type="text"
              id="office"
              className="sign_inp"
              value={office}
              onChange={officeOCH}
              required
            />
          </div>
        </div>
        {/* <div>
          <label htmlFor="officeId">Passport</label>
          <div>
            <input
              type="file"
              id="officeId"
              className="sign_inp"
              required
              name="image"
              onChange={passportOCH}
            />
            <img src={passport} alt="" />
            <button onClick={handleSubmit}>append</button>
          </div>
        </div> */}
      </div>{' '}
      <div>
        <label htmlFor="nin">
          What and why should we give you a loan.{' '}
          <span>Please State Clearly</span>
        </label>
        <div>
          <textarea
            name=""
            id=""
            className="text_area"
            value={explanation}
            onChange={explanationOCH}
            required
          ></textarea>
        </div>
      </div>
      {/* <div>
        {' '}
        <button className="sign_btn">Save and Continue</button>
      </div> */}
    </div>
  )
}

export default BusinessForm
