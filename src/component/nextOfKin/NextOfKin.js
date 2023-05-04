import React from 'react'

const NextOfKin = (props) => {
  const {
    nextSurname,
    nextFName,
    nextPhoneNo,
    nextGender,
    nextRelation,
    nextResidentialAddress,
  } = props.nextFormValue
  const {
    setNextSurname,
    setNextFName,
    setNextPhoneNo,
    setNextGender,
    setNextRelation,
    setNextResidentialAddress,
  } = props.nextFormValueFunc

  // const { setValid } = props.valid

  const nextSurnameOnChangeHandler = (e) => {
    setNextSurname(e.target.value)
  }
  const nextFNameOnChangeHandler = (e) => {
    setNextFName(e.target.value)
  }
  const nextPhoneNoOnChangeHandler = (e) => {
    setNextPhoneNo(e.target.value)
  }
  const nextGenderOnChangeHandler = (e) => {
    setNextGender(e.target.value)
  }
  const nextRelationChangeHandler = (e) => {
    setNextRelation(e.target.value)(false)
  }
  const nextResidentialAddressOnChangeHandler = (e) => {
    setNextResidentialAddress(e.target.value)
  }
  return (
    <div>
      <h1 className="text-center p-0 m-0">Next Of Kin</h1>
      <fieldset className="sign_Up_line mt-1"></fieldset>
      <div className="name_inp">
        <div>
          <label htmlFor="fullName">Surname</label>

          <input
            type="text"
            id="fullName"
            className="sign_inp"
            value={nextSurname}
            onChange={nextSurnameOnChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="userName">First Name</label>

          <input
            type="text"
            id="userName"
            className="sign_inp"
            value={nextFName}
            onChange={nextFNameOnChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>

          <input
            type="number"
            id="phoneNumber"
            className="sign_inp"
            value={nextPhoneNo}
            onChange={nextPhoneNoOnChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="Gender"
            id="gender"
            className="sign_inp"
            defaultValue=""
            value={nextGender}
            onChange={nextGenderOnChangeHandler}
          >
            <option value="" disabled>
              ---Select---
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div>
          <label htmlFor="relation">Relationship</label>
          <select
            name="Gender"
            id="relation"
            className="sign_inp"
            defaultValue=""
            value={nextRelation}
            onChange={nextRelationChangeHandler}
          >
            <option value="" disabled>
              ---Select---
            </option>
            <option value="Anty">Anty</option>
            <option value="Brother">Brother</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Sister">Sister</option>
            <option value="Uncle">Uncle</option>
          </select>
        </div>
        <div>
          <label htmlFor="residential">Address</label>
          <div>
            <input
              type="text"
              id="residential"
              className="sign_inp"
              value={nextResidentialAddress}
              onChange={nextResidentialAddressOnChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextOfKin
