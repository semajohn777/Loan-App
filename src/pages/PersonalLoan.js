import React, { useContext, useEffect, useReducer, useState } from 'react'
import Footer from '../component/footer/Footer'
import '../component/pagesCss/form.css'
// import { Link } from 'react-router-dom'
import '../component/pagesCss/loan.css'
import NextOfKin from '../component/nextOfKin/NextOfKin'
import PersonalLoanForm from '../component/Form/PersonalLoanForm'
import { ToastContainer, toast } from 'react-toastify'
import PersonalGrantor from '../component/nextOfKin/PersonalGrantor'

import Modal from '../utilis/Modal'
import { useNavigate } from 'react-router-dom'
import { UserCreatedContext } from '../component/context/Context'

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
const PersonalLoan = () => {
  const [valid, setValid] = useState(false)
  const [submitValid, setSubmitValid] = useState(false)
  const [emailValidation, setEmailValidation] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [errorState, setErrorState] = useState({
    error: null,
    emailCompare: null,
    data: [],
    dataSuccessfull: false,
  })

  const { state: ctxState } = useContext(UserCreatedContext)
  const { userInfo } = ctxState

  const navigate = useNavigate()

  // const [dataSuccessfull, setDataSuccessfull] = useState('')
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
  const [guarantorRelation, setGuarantorRelation] = useState('')
  const [occupation, setOccupation] = useState('')
  const [
    guarantorResidentialAddress,
    setGuarantorResidentialAddress,
  ] = useState('')
  const { error, dataSuccessfull, emailCompare } = errorState
  const setShowModalHandler = () => {
    setShowModal(false)
    navigate('/')
  }

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

    setExplanation,
    setValid,
    setEmailValidation,
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
    setSubmitValid,
  }
  // GUARANTOR FORM
  const guarantorFormValue = {
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorRelation,
    guarantorResidentialAddress,
    occupation,
  }

  const guarantorFormValueFunc = {
    setGuarantorSurname,
    setGuarantorFName,
    setGuarantorPhoneNo,
    setGuarantorRelation,
    setGuarantorResidentialAddress,
    setOccupation,
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 1,
    erorr: false,
  })

  const handleIncrement = () => {
    if (!email.includes(`@`) || !email.includes('.')) {
      setEmailValidation(toast.warning('Pls fill a proper email details'))
      return
    }
    if (userInfo.email !== email) {
      setErrorState({
        emailCompare: toast.warning(
          'Signup Email do not match with the filled Email',
        ),
      })
      return
    }
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
      explanation.trim().length === 0
    ) {
      setValid(toast.error('Please fill all input'))
      // dispatch({ type: 'ErrorMsg' })
    } else {
      dispatch({ type: 'Increment' })
    }
  }
  const handleDecrement = () => {
    dispatch({ type: 'Decrement' })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

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
      guarantorRelation.trim().length === 0 ||
      guarantorResidentialAddress.trim().length === 0 ||
      occupation.trim().length === 0
    ) {
      setSubmitValid(
        toast.warning(
          'Pls Ensure to fill all input in the of next of Kin and the Guarantor Form',
        ),
      )
      return
    }
    const response = await fetch('http://localhost:5000/users/personal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        NIN,
        currAddress,
        email,
        explanation,
        gender,
        nationality,
        residentialAddress,
        status,
        userFName,
        userMName,
        userPhoneNo,
        userSurname,
        guarantorSurname,
        guarantorFName,
        guarantorPhoneNo,
        guarantorRelation,
        guarantorResidentialAddress,
        occupation,
        nextSurname,
        nextFName,
        nextPhoneNo,
        nextGender,
        nextRelation,
        nextResidentialAddress,
      }),
    })
    const json = await response.json()
    if (!response.ok) {
      setErrorState({ error: toast.warning(json.error) })
    } else {
      dispatch({ type: 'PERSONAL_INFO', payload: json })
      setErrorState({ dataSuccessfull: toast.success(json.message) })
      setShowModal(true)
    }
    setUserSurname('')
    setUserFName('')
    setUserMName('')
    setUserPhoneNo('')
    setEmail('')
    setNIN('')
    setNationality('')
    setGender('')
    setStatus('')
    setCurrAddress('')
    setExplanation('')
    setNextSurname('')
    setNextFName('')
    setNextPhoneNo('')
    setNextGender('')
    setNextRelation('')
    setNextResidentialAddress('')
    setGuarantorSurname('')
    setGuarantorFName('')
    setGuarantorPhoneNo('')
    setGuarantorRelation('')
    setGuarantorResidentialAddress('')
    setOccupation('')
  }
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    }
  }, [userInfo, navigate])
  return (
    <div>
      <form onSubmit={handleSubmit} className="brown_div Form_page">
        {state.count === 1 ? (
          <PersonalLoanForm
            businessFormValue={businessFormValue}
            businessFormValueFunc={businessFormValueFunc}
          />
        ) : state.count === 2 ? (
          <NextOfKin
            nextFormValue={nextFormValue}
            nextFormValueFunc={nextFormValueFunc}
          />
        ) : (
          <PersonalGrantor
            guarantorFormValue={guarantorFormValue}
            guarantorFormValueFunc={guarantorFormValueFunc}
          />
        )}
        <div className="Increase_btn">
          {state.count > 1 && (
            <button
              type="button"
              className="sign_btn"
              onClick={handleDecrement}
            >
              Back
            </button>
          )}

          {state.count < 3 ? (
            <button
              type="button"
              className="sign_btn "
              onClick={handleIncrement}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="sign_btn">
              Submit
            </button>
          )}
        </div>{' '}
        {valid && <ToastContainer />}
        {submitValid && <ToastContainer />}
        {emailCompare && <ToastContainer />}
        {/* {state.error === false && <p className="error">plse erorrr</p>} */}
        {emailValidation && <ToastContainer />}
        {error && <ToastContainer />}
        {dataSuccessfull && <ToastContainer />}
        {showModal && <Modal show={setShowModalHandler} />}
      </form>
      <Footer />
    </div>
  )
}

export default PersonalLoan
