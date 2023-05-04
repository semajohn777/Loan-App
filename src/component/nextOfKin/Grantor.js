import React from 'react'

const Grantor = (props) => {
  const {
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorPositonHeld,
    guarantorGender,
    guarantorRelation,
    guarantorResidentialAddress,
    guarantorOficeAddress,
    guarantorBName,
  } = props.guarantorFormValue
  const {
    setGuarantorSurname,
    setGuarantorFName,
    setGuarantorPhoneNo,
    setGuarantorPositonHeld,
    setGuarantorGender,
    setGuarantorRelation,
    setGuarantorResidentialAddress,
    setGuarantorOficeAddress,
    setGuarantorBName,

    // setGuarantorPassport,
  } = props.guarantorFormValueFunc

  const guarantorSurnameOCH = (e) => {
    setGuarantorSurname(e.target.value)
  }

  const guarantorFNameOCH = (e) => {
    setGuarantorFName(e.target.value)
  }

  const guarantorBNameOCH = (e) => {
    setGuarantorBName(e.target.value)
  }

  const guarantorPhoneNoOCH = (e) => {
    setGuarantorPhoneNo(e.target.value)
  }

  const guarantorPositonHeldOCH = (e) => {
    setGuarantorPositonHeld(e.target.value)
  }

  const guarantorRelationOCH = (e) => {
    setGuarantorRelation(e.target.value)
  }

  const guarantorResidentialAddressOCH = (e) => {
    setGuarantorResidentialAddress(e.target.value)
  }

  const guarantorOficeAddressOCH = (e) => {
    setGuarantorOficeAddress(e.target.value)
  }
  const guarantorGenderOCH = (e) => {
    setGuarantorGender(e.target.value)
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
          <label htmlFor="officeId">Business Name</label>
          <div>
            <input
              type="text"
              id="officeId"
              className="sign_inp"
              value={guarantorBName}
              onChange={guarantorBNameOCH}
            />
          </div>
        </div>
        <div>
          <label htmlFor="position">Position Held</label>
          <div>
            <input
              type="text"
              id="position"
              className="sign_inp"
              value={guarantorPositonHeld}
              onChange={guarantorPositonHeldOCH}
            />
          </div>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="Gender"
            id="gender"
            className="sign_inp"
            defaultValue=""
            value={guarantorGender}
            onChange={guarantorGenderOCH}
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
          <label htmlFor="residential">Address</label>
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
      </div>
      <div className="name_inp">
        <div>
          <label htmlFor="office">Office Address</label>
          <div>
            <input
              type="text"
              id="office"
              className="sign_inp"
              value={guarantorOficeAddress}
              onChange={guarantorOficeAddressOCH}
            />
          </div>
        </div>
        {/* 
        <div>
          <label htmlFor="officeId">Guarantor Passport</label>
          <div>
            <input
              type="file"
              id="officeId"
              className="sign_inp"
              required
              onChange={guarantorPassportOCH}
            />
          </div>
        </div> */}
      </div>{' '}
    </div>
  )
}

export default Grantor
