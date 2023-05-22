import React from 'react'

const PersonalGrantor = (props) => {
  const {
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorRelation,
    guarantorResidentialAddress,
    occupation,
  } = props.guarantorFormValue
  const {
    setGuarantorSurname,
    setGuarantorFName,
    setGuarantorPhoneNo,
    setGuarantorRelation,
    setGuarantorResidentialAddress,
    setOccupation,
    // setGuarantorPassport,
  } = props.guarantorFormValueFunc

  const guarantorSurnameOCH = (e) => {
    setGuarantorSurname(e.target.value)
  }

  const guarantorFNameOCH = (e) => {
    setGuarantorFName(e.target.value)
  }

  const guarantorPhoneNoOCH = (e) => {
    setGuarantorPhoneNo(e.target.value)
  }

  const guarantorRelationOCH = (e) => {
    setGuarantorRelation(e.target.value)
  }

  const guarantorResidentialAddressOCH = (e) => {
    setGuarantorResidentialAddress(e.target.value)
  }
  const occupationOCH = (e) => {
    setOccupation(e.target.value)
  }

  // const guarantorPassportOCH = (e) => {
  //   console.log(e.target.files[0])
  //   setGuarantorPassport(e.target.value)
  //   (false)
  // }

  return (
    <div>
      <h1 className="text-center p-0 m-0">Guarantor Details</h1>
      <fieldset className="sign_Up_line mt-1"></fieldset>
      <div className="name_inp">
        <div>
          <label htmlFor="fullName">Surname</label>

          <input
            type="text"
            id="fullName"
            className="sign_inp"
            value={guarantorSurname}
            onChange={guarantorSurnameOCH}
          />
        </div>

        <div>
          <label htmlFor="userName">First Name</label>

          <input
            type="text"
            id="userName"
            className="sign_inp"
            value={guarantorFName}
            onChange={guarantorFNameOCH}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>

          <input
            type="number"
            id="phoneNumber"
            className="sign_inp"
            value={guarantorPhoneNo}
            onChange={guarantorPhoneNoOCH}
          />
        </div>

        <div>
          <label htmlFor="relation">Relationship</label>
          <select
            name="Gender"
            id="relation"
            className="sign_inp"
            defaultValue=""
            value={guarantorRelation}
            onChange={guarantorRelationOCH}
          >
            <option value="" disabled s>
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
          <label htmlFor="residential">Residential Address</label>
          <div>
            <input
              type="text"
              id="residential"
              className="sign_inp"
              value={guarantorResidentialAddress}
              onChange={guarantorResidentialAddressOCH}
            />
          </div>
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <div>
            <input
              type="text"
              id="occupation"
              className="sign_inp"
              value={occupation}
              onChange={occupationOCH}
            />
          </div>
        </div>
      </div>{' '}
    </div>
  )
}

export default PersonalGrantor
