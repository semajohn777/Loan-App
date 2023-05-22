import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { UserCreatedContext } from '../context/Context'

const UseBusiness = () => {
  const [errorState, setErrorState] = useState({
    error: null,
    loading: false,
    data: [],
    dataSuccessfull: false,
  })

  const { dispatch } = useContext(UserCreatedContext)

  const Business = async (
    NIN,
    currAddress,
    email,
    explanation,
    gender,
    nationality,
    office,
    status,
    userFName,
    userMName,
    userPhoneNo,
    userSurname,
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorPositonHeld,
    guarantorRelation,
    guarantorResidentialAddress,
    guarantorOficeAddress,
    guarantorBName,
    nextSurname,
    nextFName,
    nextPhoneNo,
    nextGender,
    nextRelation,
    nextResidentialAddress,
  ) => {
    const response = await fetch('http://localhost:5000/users/business', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        NIN,
        currAddress,
        email,
        explanation,
        gender,
        nationality,
        office,
        status,
        userFName,
        userMName,
        userPhoneNo,
        userSurname,
        guarantorSurname,
        guarantorFName,
        guarantorPhoneNo,
        guarantorPositonHeld,
        guarantorRelation,
        guarantorResidentialAddress,
        guarantorOficeAddress,
        guarantorBName,
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
    }
  }
  return { Business, errorState }
}

export default UseBusiness
