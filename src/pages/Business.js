import React, { useReducer, useState } from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
// import { Link } from 'react-router-dom'
import '../component/pagesCss/loan.css'
import BusinessForm from '../component/Form/BusinessForm'
import NextOfKin from '../component/nextOfKin/NextOfKin'
import Grantor from '../component/nextOfKin/Grantor'
import { ToastContainer, toast } from 'react-toastify'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 }
    case 'Decrement':
      return { count: state.count - 1 }
    case 'ErrroMsg':
      return { erorr: true }
    default: {
      return state
    }
  }
}
const BusinessLoan = () => {
  const [error, setError] = useState({
    vaild: false,
    submitValid: false,
    emailValidation: null,
  })
  const { vaild, submitValid, emailValidation } = error
  // const [valid, setValid] = useState(false)
  // const [submitValid, setSubmitValid] = useState(false)
  // const [emailValidation, setEmailValidation] = useState('')
  // business input
  const [userSurname, setUserSurname] = useState('')
  const [userFName, setUserFName] = useState('')
  const [userMName, setUserMName] = useState('')
  const [userPhoneNo, setUserPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [NIN, setNIN] = useState('')
  const [nationality, setNationality] = useState('')
  const [gender, setGender] = useState()
  const [status, setStatus] = useState()
  const [residentialAddress, setResidentialAddress] = useState('')
  const [currAddress, setCurrAddress] = useState('')
  const [office, setOffice] = useState('')
  const [officeId, setOfficeId] = useState('')
  const [explanation, setExplanation] = useState('')
  const [passport, setPassport] = useState()

  // nextOfKin
  const [nextSurname, setNextSurname] = useState('')
  const [nextFName, setNextFName] = useState('')
  const [nextPhoneNo, setNextPhoneNo] = useState('')
  const [nextGender, setNextGender] = useState()
  const [nextRelation, setNextRelation] = useState()
  const [nextResidentialAddress, setNextResidentialAddress] = useState('')

  // GUARANTOR
  const [guarantorSurname, setGuarantorSurname] = useState('')
  const [guarantorFName, setGuarantorFName] = useState('')
  const [guarantorPhoneNo, setGuarantorPhoneNo] = useState('')
  const [guarantorPositonHeld, setGuarantorPositonHeld] = useState('')
  const [guarantorGender, setGuarantorGender] = useState()
  const [guarantorRelation, setGuarantorRelation] = useState('')
  const [guarantorBName, setGuarantorBName] = useState('')
  const [
    guarantorResidentialAddress,
    setGuarantorResidentialAddress,
  ] = useState('')
  const [guarantorOficeAddress, setGuarantorOficeAddress] = useState('')
  const [guarantorPassport, setGuarantorPassport] = useState()

  const businessFormValue = {
    userSurname,
    userFName,
    userMName,
    userPhoneNo,
    email,
    NIN,
    nationality,
    gender,
    status,
    residentialAddress,
    currAddress,
    office,
    officeId,
    explanation,
    passport,
  }

  const businessFormValueFunc = {
    setUserSurname,
    setUserFName,
    setUserMName,
    setUserPhoneNo,
    setEmail,
    setNIN,
    setNationality,
    setGender,
    setStatus,
    setResidentialAddress,
    setCurrAddress,
    setOffice,
    setOfficeId,
    setExplanation,
    // setError,
    // setValid,
    // setEmailValidation,
    setPassport,
  }

  // ?GENDER PROPS
  const nextFormValue = {
    nextSurname,
    nextFName,
    nextPhoneNo,
    nextGender,
    nextRelation,
    nextResidentialAddress,
  }
  const nextFormValueFunc = {
    setNextSurname,
    setNextFName,
    setNextPhoneNo,
    setNextGender,
    setNextRelation,
    setNextResidentialAddress,
    // setSubmitValid,
  }
  // GUARANTOR FORM
  const guarantorFormValue = {
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorPositonHeld,
    guarantorGender,
    guarantorRelation,
    guarantorResidentialAddress,
    guarantorPassport,
    guarantorOficeAddress,
    guarantorBName,
  }

  const guarantorFormValueFunc = {
    setGuarantorSurname,
    setGuarantorFName,
    setGuarantorPhoneNo,
    setGuarantorPositonHeld,
    setGuarantorGender,
    setGuarantorRelation,
    setGuarantorResidentialAddress,
    // setSubmitValid,
    setGuarantorOficeAddress,
    setGuarantorBName,
    setGuarantorPassport,
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 1,
    erorr: false,
  })

  const handleIncrement = () => {
    if (
      userSurname.trim().length === 0 ||
      userFName.trim().length === 0 ||
      userMName.trim().length === 0 ||
      userPhoneNo.trim().length === 0 ||
      email.trim().length === 0 ||
      NIN.trim().length === 0 ||
      nationality.trim().length === 0 ||
      gender.trim().length === 0 ||
      status.trim().length === 0 ||
      residentialAddress.trim().length === 0 ||
      currAddress.trim().length === 0 ||
      office.trim().length === 0 ||
      officeId.trim().length === 0 ||
      explanation.trim().length === 0
    ) {
      // setValid(true)
      setError({ vaild: toast.error('Pls fill all input !') })
      // dispatch({ type: 'ErrorMsg' })
      return
    }
    if (!email.includes(`@`) || !email.includes('.')) {
      // setEmailValidation(true)
      setError({
        emailValidation: toast.warning('Pls fill a proper Email Details !'),
      })
    } else {
      dispatch({ type: 'Increment' })
    }
  }
  const handleDecrement = () => {
    dispatch({ type: 'Decrement' })
  }
  const handleSubmit = () => {
    if (
      nextSurname.trim().length === 0 ||
      nextFName.trim().length === 0 ||
      nextPhoneNo.trim().length === 0 ||
      nextGender.trim().length === 0 ||
      nextRelation.trim().length === 0 ||
      nextResidentialAddress.trim().length === 0 ||
      guarantorSurname.trim().length === 0 ||
      guarantorFName.trim().length === 0 ||
      guarantorPhoneNo.trim().length === 0 ||
      guarantorPositonHeld.trim().length === 0 ||
      guarantorGender.trim().length === 0 ||
      guarantorRelation.trim().length === 0 ||
      guarantorResidentialAddress.trim().length === 0 ||
      guarantorOficeAddress.trim().length === 0 ||
      guarantorBName.trim().length === 0
    ) {
      // setSubmitValid(true)
      setError({
        submitValid: toast.warning(
          'Pls Ensure to fill all input in the of next of Kin and the Guarantor Form !',
        ),
      })
    } else {
      alert('you have successfully Aquire a loan')
    }
    console.log(businessFormValue, nextFormValue, guarantorFormValue)
  }

  return (
    <div>
      <div className="brown_div Form_page">
        {state.count === 1 ? (
          <BusinessForm
            businessFormValue={businessFormValue}
            businessFormValueFunc={businessFormValueFunc}
          />
        ) : state.count === 2 ? (
          <NextOfKin
            nextFormValue={nextFormValue}
            nextFormValueFunc={nextFormValueFunc}
          />
        ) : (
          <Grantor
            guarantorFormValue={guarantorFormValue}
            guarantorFormValueFunc={guarantorFormValueFunc}
          />
        )}
        <div className="Increase_btn">
          {state.count > 1 && (
            <button className="sign_btn" onClick={handleDecrement}>
              Back
            </button>
          )}

          {state.count < 3 ? (
            <button className="sign_btn " onClick={handleIncrement}>
              Next
            </button>
          ) : (
            <button className="sign_btn hihh" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>{' '}
        {vaild && (
          // <p className="error">Pls fill all input</p>
          <ToastContainer />
        )}
        {submitValid && (
          // <p className="error">
          //   Pls Ensure to fill all input in the of next of Kin and the Guarantor
          //   Form
          // </p>
          <ToastContainer />
        )}
        {/* {state.error === false && <p className="error">plse erorrr</p>} */}
        {emailValidation && (
          // <p className="error">Pls fill a proper Email Details</p>
          <ToastContainer />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default BusinessLoan
